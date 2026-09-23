import { createClient } from '@supabase/supabase-js';
import { PRODUCT_CATEGORIES, PRODUCTS_DATABASE } from '../lib/data/products';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrate() {
  console.log("Starting migration...");

  // 1. Migrate Categories
  console.log(`Migrating ${PRODUCT_CATEGORIES.length} categories...`);
  for (const cat of PRODUCT_CATEGORIES) {
    const { error } = await supabase
      .from('categories')
      .upsert({ name: cat.name, slug: cat.slug }, { onConflict: 'slug' });
    
    if (error) {
      console.error(`Error inserting category ${cat.name}:`, error.message);
    }
  }
  console.log("Categories migrated successfully.");

  // Fetch created categories to map IDs
  const { data: dbCategories, error: fetchCatError } = await supabase.from('categories').select('*');
  if (fetchCatError || !dbCategories) {
    console.error("Failed to fetch categories mapping:", fetchCatError?.message);
    process.exit(1);
  }

  const categoryMap = new Map(dbCategories.map(c => [c.slug, c.id]));

  // 2. Migrate Products
  console.log(`Migrating ${PRODUCTS_DATABASE.length} products...`);
  
  // To avoid hammering the DB, we can do batches or just serial inserts since it's a small script
  const batchSize = 50;
  for (let i = 0; i < PRODUCTS_DATABASE.length; i += batchSize) {
    const batch = PRODUCTS_DATABASE.slice(i, i + batchSize);
    const formattedProducts = batch.map(prod => ({
      name: prod.title,
      slug: prod.slug,
      category_id: categoryMap.get(prod.categorySlug),
      description: `Marca: ${prod.brand}`,
      image_url: prod.imageUrl,
      is_active: true
    }));

    const { error } = await supabase
      .from('products')
      .upsert(formattedProducts, { onConflict: 'slug' });

    if (error) {
      console.error(`Error inserting batch ${i}:`, error.message);
    } else {
      console.log(`Successfully migrated products ${i + 1} to ${i + batch.length}`);
    }
  }

  console.log("Migration completed.");
}

migrate().catch(console.error);
