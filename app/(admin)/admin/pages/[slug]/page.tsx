import React from "react";
import { createClient } from "@/lib/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageEditor } from "./PageEditor";

export default async function PageEditView({ params }: { params: { slug: string } }) {
  const pageId = params.slug;
  const supabase = createClient();

  const { data: sections } = await supabase
    .from('page_sections')
    .select('*')
    .eq('page_id', pageId)
    .order('section_key', { ascending: true });

  const { data: items } = await supabase
    .from('section_items')
    .select('*')
    .like('section_key', `${pageId}_%`)
    .order('sort_order', { ascending: true });

  if (!sections) {
    return notFound();
  }

  return (
    <div className="p-8 space-y-6">
      <PageEditor pageId={pageId} initialSections={sections} initialItems={items || []} />
    </div>
  );
}
