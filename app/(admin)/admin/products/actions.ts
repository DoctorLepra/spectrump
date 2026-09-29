"use server";

import { revalidatePath } from "next/cache";

export async function revalidateProducts() {
  revalidatePath('/productos');
  revalidatePath('/admin/products');
}
