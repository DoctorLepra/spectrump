import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SERVICES_DATA = [
  {
    slug: "licitaciones-internet",
    badge_text: "LICITACIONES & GOBIERNO",
    title: "Venta de Internet por Licitación Pública y Empresarial",
    description: "Conectividad dedicada de alta disponibilidad para entidades estatales y corporativas.",
    icon: "Wifi",
    sort_order: 1
  },
  {
    slug: "energia-solar",
    badge_text: "ENERGÍA RENOVABLE",
    title: "Sistemas de Energía Solar Fotovoltaica",
    description: "Autogeneración solar limpia, sistemas aislados y microrredes para comunidades e industrias.",
    icon: "Sun",
    sort_order: 2
  },
  {
    slug: "fibra-optica",
    badge_text: "INFRAESTRUCTURA DE RED",
    title: "Redes de Fibra Óptica & Planta Externa",
    description: "Diseño, tendido y fusión de redes de alta capacidad FTTH, GPON y backbones urbanos/rurales.",
    icon: "Network",
    sort_order: 3
  },
  {
    slug: "ingenieria-econecta",
    badge_text: "SOLUCIONES INTEGRALES",
    title: "Estaciones Integradas ECONECTA & Soluciones Especiales",
    description: "Infraestructura autónoma que combina generación solar con nodos de internet comunitario.",
    icon: "Zap",
    sort_order: 4
  }
];

async function migrate() {
  const { error } = await supabase.from('services').upsert(SERVICES_DATA, { onConflict: 'slug' });
  if (error) console.error(error);
  else console.log("Services migrated!");
}

migrate();
