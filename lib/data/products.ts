// Schema and Data Store designed for easy migration to Headless CMS / Backend Database
export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  brand: string;
  category: string;
  categorySlug: string;
  imageUrl: string;
  whatsappMsg: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    "id": "cat-1",
    "name": "Paneles Solares",
    "slug": "paneles-solares",
    "count": 16
  },
  {
    "id": "cat-2",
    "name": "Inversores",
    "slug": "inversores",
    "count": 109
  },
  {
    "id": "cat-3",
    "name": "Controladores",
    "slug": "controladores",
    "count": 28
  },
  {
    "id": "cat-4",
    "name": "Baterías",
    "slug": "baterias",
    "count": 21
  },
  {
    "id": "cat-5",
    "name": "Estructuras",
    "slug": "estructuras",
    "count": 22
  },
  {
    "id": "cat-6",
    "name": "Protección y Accesorios",
    "slug": "proteccion-y-accesorios",
    "count": 36
  },
  {
    "id": "cat-7",
    "name": "Equipos Portátiles",
    "slug": "equipos-portatiles",
    "count": 3
  }
];

export const PRODUCTS_DATABASE: Product[] = [
  {
    "id": "prod-4622",
    "title": "SUNGROW SG333HX-12MPPT",
    "slug": "sungrow-sg333hx-12mppt-4622",
    "brand": "Sungrow",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2026/07/A.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SUNGROW SG333HX-12MPPT"
  },
  {
    "id": "prod-4616",
    "title": "SUNGROW SG250HX-20",
    "slug": "sungrow-sg250hx-20-4616",
    "brand": "Sungrow",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2026/07/Gemini_Generated_Image_xb8efexb8efexb8e-removebg-preview.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SUNGROW SG250HX-20"
  },
  {
    "id": "prod-4557",
    "title": "Prueba",
    "slug": "prueba-4557",
    "brand": "SPECTRUMP Solar",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Prueba"
  },
  {
    "id": "prod-3141",
    "title": "INVERSOR- MAX 60KTL3-XL2",
    "slug": "inversor-max-60ktl3-xl2-3141",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_f9751c4385fb465bb7a2ea0773f09df2mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR- MAX 60KTL3-XL2"
  },
  {
    "id": "prod-3137",
    "title": "Sensor Remoto de Temperatura Para Controlador, EPEVER",
    "slug": "sensor-remoto-de-temperatura-para-controlador-epever-3137",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_d46b63699320449c88b34ce7b04ce206mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Sensor Remoto de Temperatura Para Controlador, EPEVER"
  },
  {
    "id": "prod-3136",
    "title": "Controlador de Carga PWM 50A, PROCET SCIENTIFIC",
    "slug": "controlador-de-carga-pwm-50a-procet-scientific-3136",
    "brand": "Procet Scientific",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_68a8ee9dfa4c492783a54abe66b6403emv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador de Carga PWM 50A, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-3134",
    "title": "Controlador de Carga PWM 60A, PROCET SCIENTIFIC",
    "slug": "controlador-de-carga-pwm-60a-procet-scientific-3134",
    "brand": "Procet Scientific",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_68a8ee9dfa4c492783a54abe66b6403emv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador de Carga PWM 60A, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-3132",
    "title": "Estación Portátil de Energía Amber Rock",
    "slug": "estacion-portatil-de-energia-amber-rock-3132",
    "brand": "Amber Rock",
    "category": "Equipos Portátiles",
    "categorySlug": "equipos-portatiles",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_0b144df3a4b84250bbd09138ca456373mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Estación Portátil de Energía Amber Rock"
  },
  {
    "id": "prod-3131",
    "title": "Controlador De Carga 30A MPPT XTRA, 3210N-XDS2 EPEVER",
    "slug": "controlador-de-carga-30a-mppt-xtra-3210n-xds2-epever-3131",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_3089993b7a41430aa89adb99db2c3321mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador De Carga 30A MPPT XTRA, 3210N-XDS2 EPEVER"
  },
  {
    "id": "prod-3129",
    "title": "Controlador de Carga 40A MPPT, XTRA 4415N-XDS2, EPEVER",
    "slug": "controlador-de-carga-40a-mppt-xtra-4415n-xds2-epever-3129",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_3089993b7a41430aa89adb99db2c3321mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador de Carga 40A MPPT, XTRA 4415N-XDS2, EPEVER"
  },
  {
    "id": "prod-3127",
    "title": "Controlador SmartSolar MPPT 150/35. Marca Victron",
    "slug": "controlador-smartsolar-mppt-150-35-marca-victron-3127",
    "brand": "Victron Energy",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_091918b11620466eafa34dbed1716235mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador SmartSolar MPPT 150/35. Marca Victron"
  },
  {
    "id": "prod-3125",
    "title": "Controlador SmartSolar MPPT 100/50. Marca Victron",
    "slug": "controlador-smartsolar-mppt-100-50-marca-victron-3125",
    "brand": "Victron Energy",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_13a20eb00e6f46b488c5a031cde0c4bemv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador SmartSolar MPPT 100/50. Marca Victron"
  },
  {
    "id": "prod-3124",
    "title": "Controlador De Carga 50A MPPT TRACER, EPEVER",
    "slug": "controlador-de-carga-50a-mppt-tracer-epever-3124",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_aa785f5ca3ad430498373de621e58f81mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador De Carga 50A MPPT TRACER, EPEVER"
  },
  {
    "id": "prod-3122",
    "title": "Controlador SmartSolar MPPT 150/45. Marca Victron",
    "slug": "controlador-smartsolar-mppt-150-45-marca-victron-3122",
    "brand": "Victron Energy",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_699b78b4969c4d8ea8dc483e27dba699mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador SmartSolar MPPT 150/45. Marca Victron"
  },
  {
    "id": "prod-3120",
    "title": "Cerbo GX",
    "slug": "cerbo-gx-3120",
    "brand": "Victron Energy",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_7c61b9c417c04b2da56935998ad1034dmv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cerbo GX"
  },
  {
    "id": "prod-3118",
    "title": "Controlador SmartSolar MPPT 150/60-Tr. Marca Victron",
    "slug": "controlador-smartsolar-mppt-150-60-tr-marca-victron-3118",
    "brand": "Victron Energy",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_fbe31f25d97f4ec682091d0ca5c1cda9mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador SmartSolar MPPT 150/60-Tr. Marca Victron"
  },
  {
    "id": "prod-3117",
    "title": "Controlador de Carga 85A, MPPT, Serie Smart, PROCET SCIENTIFIC",
    "slug": "controlador-de-carga-85a-mppt-serie-smart-procet-scientific-3117",
    "brand": "Procet Scientific",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_fe481156ce6846d5b911245063b07793mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador de Carga 85A, MPPT, Serie Smart, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-3116",
    "title": "Controlador De Carga 100A MPPT TRACER, EPEVER",
    "slug": "controlador-de-carga-100a-mppt-tracer-epever-3116",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_aa785f5ca3ad430498373de621e58f81mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador De Carga 100A MPPT TRACER, EPEVER"
  },
  {
    "id": "prod-3115",
    "title": "Controlador SmartSolar MPPT 250/85-Tr VE.Can. Marca Victron",
    "slug": "controlador-smartsolar-mppt-250-85-tr-ve-can-marca-victron-3115",
    "brand": "Victron Energy",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_c56b57389e364bdc9e4c845b74119c85mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador SmartSolar MPPT 250/85-Tr VE.Can. Marca Victron"
  },
  {
    "id": "prod-3113",
    "title": "Controlador SmartSolar MPPT 250/100-Tr VE.Can. Marca Victron",
    "slug": "controlador-smartsolar-mppt-250-100-tr-ve-can-marca-victron-3113",
    "brand": "Victron Energy",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_c56b57389e364bdc9e4c845b74119c85mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador SmartSolar MPPT 250/100-Tr VE.Can. Marca Victron"
  },
  {
    "id": "prod-3111",
    "title": "Controlador de Carga 120A, 48V, VarioString VS-120 MPPT, Studer",
    "slug": "controlador-de-carga-120a-48v-variostring-vs-120-mppt-studer-3111",
    "brand": "Studer Innotec",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_0565adeb44ad4900aabefb7a94781167mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador de Carga 120A, 48V, VarioString VS-120 MPPT, Studer"
  },
  {
    "id": "prod-3105",
    "title": "Panel Solar Plegable 40 Watts, 4 Pliegues, PROCET SCIENTIFIC",
    "slug": "panel-solar-plegable-40-watts-4-pliegues-procet-scientific-3105",
    "brand": "Procet Scientific",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_7d4987e86ca6485b9b0c7e2410794a34mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Plegable 40 Watts, 4 Pliegues, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-3103",
    "title": "12.8V 100AH LITHIUM BATTERY",
    "slug": "12-8v-100ah-lithium-battery-3103",
    "brand": "SPECTRUMP Solar",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_9c08c8b07b24498a969c0f4b982e3fcdmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: 12.8V 100AH LITHIUM BATTERY"
  },
  {
    "id": "prod-3101",
    "title": "Gancho para Techo de Teja Para Montaje de Paneles Solares paquete x 6 unds",
    "slug": "gancho-para-techo-de-teja-para-montaje-de-paneles-solares-paquete-x-6-unds-3101",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_b95aa7f97632422da86c6b64036f51femv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Gancho para Techo de Teja Para Montaje de Paneles Solares paquete x 6 unds"
  },
  {
    "id": "prod-3100",
    "title": "Inter Clamp 35mm Paquete x 20 unds, Para Montaje de Paneles Solares",
    "slug": "inter-clamp-35mm-paquete-x-20-unds-para-montaje-de-paneles-solares-3100",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_106f2027161a440f9c547c5357048aa0mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inter Clamp 35mm Paquete x 20 unds, Para Montaje de Paneles Solares"
  },
  {
    "id": "prod-3098",
    "title": "Inter Clamp 40mm Paquete x 20 unds, para Montaje de Paneles Solares",
    "slug": "inter-clamp-40mm-paquete-x-20-unds-para-montaje-de-paneles-solares-3098",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_106f2027161a440f9c547c5357048aa0mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inter Clamp 40mm Paquete x 20 unds, para Montaje de Paneles Solares"
  },
  {
    "id": "prod-3097",
    "title": "End Clamp 40mm paquete x 20 unds, para Montaje de Paneles Solares",
    "slug": "end-clamp-40mm-paquete-x-20-unds-para-montaje-de-paneles-solares-3097",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_e7217f91ce324f07b34378ce0177b20bmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: End Clamp 40mm paquete x 20 unds, para Montaje de Paneles Solares"
  },
  {
    "id": "prod-3095",
    "title": "Abrazadera de Techo Trapezoidal Para Montaje de Paneles Solares paquete x 6 unds",
    "slug": "abrazadera-de-techo-trapezoidal-para-montaje-de-paneles-solares-paquete-x-6-unds-3095",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_d1a99626c01f4f3ea01dda5b83755f46mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Abrazadera de Techo Trapezoidal Para Montaje de Paneles Solares paquete x 6 unds"
  },
  {
    "id": "prod-3093",
    "title": "Gancho de Suspensión Corto Para Montaje de Paneles Solares Paquete x 12 unds",
    "slug": "gancho-de-suspension-corto-para-montaje-de-paneles-solares-paquete-x-12-unds-3093",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_ec4f4d8020404fc8b94bed35ef98815dmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Gancho de Suspensión Corto Para Montaje de Paneles Solares Paquete x 12 unds"
  },
  {
    "id": "prod-3091",
    "title": "Acople de Riel Paquete x 6 unds , Para Montaje de Paneles Solares",
    "slug": "acople-de-riel-paquete-x-6-unds-para-montaje-de-paneles-solares-3091",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_7393eeb3757d4a8e98d931fd30cce1c4mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Acople de Riel Paquete x 6 unds , Para Montaje de Paneles Solares"
  },
  {
    "id": "prod-3089",
    "title": "Gancho de Suspensión Largo Para Montaje de Paneles Solares Paquete x 6 unds",
    "slug": "gancho-de-suspension-largo-para-montaje-de-paneles-solares-paquete-x-6-unds-3089",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_1622eb2163944825816bd964d1102ff7mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Gancho de Suspensión Largo Para Montaje de Paneles Solares Paquete x 6 unds"
  },
  {
    "id": "prod-3084",
    "title": "End Clamp 35mm Paquete x 20 unds, Para Montaje de Paneles Solares",
    "slug": "end-clamp-35mm-paquete-x-20-unds-para-montaje-de-paneles-solares-3084",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_e7217f91ce324f07b34378ce0177b20bmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: End Clamp 35mm Paquete x 20 unds, Para Montaje de Paneles Solares"
  },
  {
    "id": "prod-2969",
    "title": "Riel Para Montaje de Paneles Solares",
    "slug": "riel-para-montaje-de-paneles-solares-2969",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_31d6a896413644eeb5226d904c047ef0mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Riel Para Montaje de Paneles Solares"
  },
  {
    "id": "prod-2959",
    "title": "Controlador de Carga 100A MPPT Serie Smart, PROCET SCIENTIFIC",
    "slug": "controlador-de-carga-100a-mppt-serie-smart-procet-scientific-2959",
    "brand": "Procet Scientific",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_fe481156ce6846d5b911245063b07793mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador de Carga 100A MPPT Serie Smart, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2955",
    "title": "Controlador De Carga 80A MPPT TRACER, EPEVER",
    "slug": "controlador-de-carga-80a-mppt-tracer-epever-2955",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_aa785f5ca3ad430498373de621e58f81mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador De Carga 80A MPPT TRACER, EPEVER"
  },
  {
    "id": "prod-2952",
    "title": "Controlador De Carga 60A MPPT TRACER, EPEVER",
    "slug": "controlador-de-carga-60a-mppt-tracer-epever-2952",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_aa785f5ca3ad430498373de621e58f81mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador De Carga 60A MPPT TRACER, EPEVER"
  },
  {
    "id": "prod-2950",
    "title": "Adaptador PT 50AN Para Controlador, EPEVER",
    "slug": "adaptador-pt-50an-para-controlador-epever-2950",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_931654f0f39547ffbe3697400d4e4bcbmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Adaptador PT 50AN Para Controlador, EPEVER"
  },
  {
    "id": "prod-2948",
    "title": "Controlador de Carga 40A MPPT Serie Smart, PROCET SCIENTIFIC",
    "slug": "controlador-de-carga-40a-mppt-serie-smart-procet-scientific-2948",
    "brand": "Procet Scientific",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_07609f6b4b044085b3530d9490ed0633mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador de Carga 40A MPPT Serie Smart, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2946",
    "title": "Controlador de Carga 80A, VT-80 VarioTrack MPPT, STUDER",
    "slug": "controlador-de-carga-80a-vt-80-variotrack-mppt-studer-2946",
    "brand": "Studer Innotec",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_0005436fbb7f4b3f8846e2b34252ba85mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Controlador de Carga 80A, VT-80 VarioTrack MPPT, STUDER"
  },
  {
    "id": "prod-2944",
    "title": "Monitoreo Display Remoto MT50 Para Controlador, EPEVER",
    "slug": "monitoreo-display-remoto-mt50-para-controlador-epever-2944",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_9f802045631344a6acf9d7bbbb78c6dcmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo Display Remoto MT50 Para Controlador, EPEVER"
  },
  {
    "id": "prod-2941",
    "title": "Monitoreo Display Remoto MT75 Para Controlador, EPEVER",
    "slug": "monitoreo-display-remoto-mt75-para-controlador-epever-2941",
    "brand": "Epever",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_5c8e6c45a11c4494bc9e7761ef0ab621mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo Display Remoto MT75 Para Controlador, EPEVER"
  },
  {
    "id": "prod-2849",
    "title": "Protector de Sobretensiones, DPS FRONT, 275V 20kA, CLAMPER",
    "slug": "protector-de-sobretensiones-dps-front-275v-20ka-clamper-2849",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_5fad3b7b82c24b4f976075c6dd4c1390mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Protector de Sobretensiones, DPS FRONT, 275V 20kA, CLAMPER"
  },
  {
    "id": "prod-2827",
    "title": "DPS Clamper Solar, 150V, 40kA",
    "slug": "dps-clamper-solar-150v-40ka-2827",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_8936203e743f494596acdaeaf52a6e25mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: DPS Clamper Solar, 150V, 40kA"
  },
  {
    "id": "prod-2825",
    "title": "DPS Clamper Solar, 1040V 40kA",
    "slug": "dps-clamper-solar-1040v-40ka-2825",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_8936203e743f494596acdaeaf52a6e25mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: DPS Clamper Solar, 1040V 40kA"
  },
  {
    "id": "prod-2821",
    "title": "DPS Clamper Solar, 600V 40kA",
    "slug": "dps-clamper-solar-600v-40ka-2821",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_8936203e743f494596acdaeaf52a6e25mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: DPS Clamper Solar, 600V 40kA"
  },
  {
    "id": "prod-2813",
    "title": "DPS Clamper Solar, 300V, 40kA",
    "slug": "dps-clamper-solar-300v-40ka-2813",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_8936203e743f494596acdaeaf52a6e25mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: DPS Clamper Solar, 300V, 40kA"
  },
  {
    "id": "prod-2812",
    "title": "Cable Solar FV 6mm Negro x 100 mts.",
    "slug": "cable-solar-fv-6mm-negro-x-100-mts-2812",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 6mm Negro x 100 mts."
  },
  {
    "id": "prod-2794",
    "title": "Tablero de Protección, DPS CLAMPER Solar String Box 4E/2S",
    "slug": "tablero-de-proteccion-dps-clamper-solar-string-box-4e-2s-2794",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_c96dcb214461443eb641d15ce55d9112mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Tablero de Protección, DPS CLAMPER Solar String Box 4E/2S"
  },
  {
    "id": "prod-2784",
    "title": "Bracket-UP5, Soporte para Baterías, Pylontech",
    "slug": "bracket-up5-soporte-para-baterias-pylontech-2784",
    "brand": "Pylontech",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_9d3215df9900408da70a9200ac3fc236mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Bracket-UP5, Soporte para Baterías, Pylontech"
  },
  {
    "id": "prod-2781",
    "title": "Batería de GEL 12V, 100Ah, Ciclo Profundo, NewMax",
    "slug": "bateria-de-gel-12v-100ah-ciclo-profundo-newmax-2781",
    "brand": "Newmax",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_4d262958a75f4a89bca1f76ed7a64795mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería de GEL 12V, 100Ah, Ciclo Profundo, NewMax"
  },
  {
    "id": "prod-2778",
    "title": "Batería de GEL 12V, 150Ah, Ciclo Profundo, NewMax",
    "slug": "bateria-de-gel-12v-150ah-ciclo-profundo-newmax-2778",
    "brand": "Newmax",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_0a9ccf0e6cee46c7a214af1c2c6f641cmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería de GEL 12V, 150Ah, Ciclo Profundo, NewMax"
  },
  {
    "id": "prod-2768",
    "title": "Batería de GEL 12V, 200Ah, Ciclo Profundo, NewMax",
    "slug": "bateria-de-gel-12v-200ah-ciclo-profundo-newmax-2768",
    "brand": "Newmax",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_841e6f9251fe4ef5a059aa54c0289043mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería de GEL 12V, 200Ah, Ciclo Profundo, NewMax"
  },
  {
    "id": "prod-2759",
    "title": "Batería de GEL 12V, 250Ah, Ciclo Profundo, NewMax",
    "slug": "bateria-de-gel-12v-250ah-ciclo-profundo-newmax-2759",
    "brand": "Newmax",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_a854f10743374dad85f6ab143b37f375mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería de GEL 12V, 250Ah, Ciclo Profundo, NewMax"
  },
  {
    "id": "prod-2757",
    "title": "Batería Litio 120AH 25.6V Epever",
    "slug": "bateria-litio-120ah-25-6v-epever-2757",
    "brand": "Epever",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_767b804eb19e4d41ad3d81371f0a2942mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería Litio 120AH 25.6V Epever"
  },
  {
    "id": "prod-2751",
    "title": "BMS Force L1, Pylontech",
    "slug": "bms-force-l1-pylontech-2751",
    "brand": "Pylontech",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_58f7145e5fb24198bc26311e32cc3140mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: BMS Force L1, Pylontech"
  },
  {
    "id": "prod-2749",
    "title": "Batería Litio 150AH 25.6V Epever",
    "slug": "bateria-litio-150ah-25-6v-epever-2749",
    "brand": "Epever",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_719d9f7a70b6424e8520ffc97f178219mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería Litio 150AH 25.6V Epever"
  },
  {
    "id": "prod-2740",
    "title": "Batería Litio 100AH 48V Epever",
    "slug": "bateria-litio-100ah-48v-epever-2740",
    "brand": "Epever",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_e306350eb36240d39fa3ac19ed51510bmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería Litio 100AH 48V Epever"
  },
  {
    "id": "prod-2731",
    "title": "Batería de Litio 24V, 111Ah, UP2500, Pylontech",
    "slug": "bateria-de-litio-24v-111ah-up2500-pylontech-2731",
    "brand": "Pylontech",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_ee685cf915d4445aa074adaae0a0d6femv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería de Litio 24V, 111Ah, UP2500, Pylontech"
  },
  {
    "id": "prod-2727",
    "title": "Batería Litio Apilable 48V, 74Ah, FORCE L1, Pylontech",
    "slug": "bateria-litio-apilable-48v-74ah-force-l1-pylontech-2727",
    "brand": "Pylontech",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_11230d6b035b4fea978bc5a56e3c14afmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería Litio Apilable 48V, 74Ah, FORCE L1, Pylontech"
  },
  {
    "id": "prod-2721",
    "title": "Panel Solar Policristalino 290W, 24V, Retie, RESTAR",
    "slug": "panel-solar-policristalino-290w-24v-retie-restar-2721",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_78b058ea62af4440a381a6e6d6e38a54mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Policristalino 290W, 24V, Retie, RESTAR"
  },
  {
    "id": "prod-2719",
    "title": "Kit Conexión Paralelo InfiniSolar, PROCET SCIENTIFIC",
    "slug": "kit-conexion-paralelo-infinisolar-procet-scientific-2719",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_e64016eb58084394b859e9e876018510mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Kit Conexión Paralelo InfiniSolar, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2715",
    "title": "Sistema de Protocolo BMS, EPEVER",
    "slug": "sistema-de-protocolo-bms-epever-2715",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_87c5625463ba4abaae904c6bda6274bdmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Sistema de Protocolo BMS, EPEVER"
  },
  {
    "id": "prod-2713",
    "title": "RCC-03 Control Remoto frontal, STUDER",
    "slug": "rcc-03-control-remoto-frontal-studer-2713",
    "brand": "Studer Innotec",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_85092b9610b3427791190b42479be9a0mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: RCC-03 Control Remoto frontal, STUDER"
  },
  {
    "id": "prod-2711",
    "title": "Inversor Hibrido 1000W/24V LVHM 120V",
    "slug": "inversor-hibrido-1000w-24v-lvhm-120v-2711",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_fb187259ffbe4c6a841fc5bf7d2cbccamv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido 1000W/24V LVHM 120V"
  },
  {
    "id": "prod-2709",
    "title": "RCC-02 Control Remoto, STUDER",
    "slug": "rcc-02-control-remoto-studer-2709",
    "brand": "Studer Innotec",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_5ad827875c3e408f870b80ef9ef09d3bmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: RCC-02 Control Remoto, STUDER"
  },
  {
    "id": "prod-2707",
    "title": "Inversor Solar Híbrido 2000W, 24V, Axpert Zero LV, PROCET SCIENTIFIC",
    "slug": "inversor-solar-hibrido-2000w-24v-axpert-zero-lv-procet-scientific-2707",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_b9ed1300a8224390bcb181d2ff734b41mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Híbrido 2000W, 24V, Axpert Zero LV, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2705",
    "title": "Inversor Hibrido PV18-3524PRO 220V MUST",
    "slug": "inversor-hibrido-pv18-3524pro-220v-must-2705",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_6b1d8ea0aef44abeb06c02a5d699c3f6mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido PV18-3524PRO 220V MUST"
  },
  {
    "id": "prod-2703",
    "title": "Inversor Hibrido 3000W/24V LVHM 120V",
    "slug": "inversor-hibrido-3000w-24v-lvhm-120v-2703",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_e0c829298e9b461cb61163037417b5f7mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido 3000W/24V LVHM 120V"
  },
  {
    "id": "prod-2702",
    "title": "Inversor Hibrido 3000W, 24V Pv3300 Fase Dividida TLV, Must",
    "slug": "inversor-hibrido-3000w-24v-pv3300-fase-dividida-tlv-must-2702",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_fb39e6d6e8164530a53bc7321f627457mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido 3000W, 24V Pv3300 Fase Dividida TLV, Must"
  },
  {
    "id": "prod-2699",
    "title": "MultiPlus-II 48/3000/35-50 120V",
    "slug": "multiplus-ii-48-3000-35-50-120v-2699",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_34b1f8e481574367a15a6756de929c78mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: MultiPlus-II 48/3000/35-50 120V"
  },
  {
    "id": "prod-2698",
    "title": "Inversor Hibrido 4000W, 48V, PV3300 Fase Dividida TLV, Must",
    "slug": "inversor-hibrido-4000w-48v-pv3300-fase-dividida-tlv-must-2698",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_fb39e6d6e8164530a53bc7321f627457mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido 4000W, 48V, PV3300 Fase Dividida TLV, Must"
  },
  {
    "id": "prod-2696",
    "title": "Autotransformador ATR-6KSOLIS",
    "slug": "autotransformador-atr-6ksolis-2696",
    "brand": "Solis",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_dc241bc3bf9341bb85a6bc2d89861db4mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Autotransformador ATR-6KSOLIS"
  },
  {
    "id": "prod-2695",
    "title": "Inversor Hibrido 6000W, 48V, PV3300 Fase Dividida TLV, Must",
    "slug": "inversor-hibrido-6000w-48v-pv3300-fase-dividida-tlv-must-2695",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_fb39e6d6e8164530a53bc7321f627457mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido 6000W, 48V, PV3300 Fase Dividida TLV, Must"
  },
  {
    "id": "prod-2693",
    "title": "Inversor Hibrido MP5043 1020P65",
    "slug": "inversor-hibrido-mp5043-1020p65-2693",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_dc22bd460d0946f08919a0c4fbb47fefmv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido MP5043 1020P65"
  },
  {
    "id": "prod-2691",
    "title": "MultiPlus-II 24/3000/70-50 2x120V",
    "slug": "multiplus-ii-24-3000-70-50-2x120v-2691",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_6b07235f768d444db5c84ddcff2a8de6mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: MultiPlus-II 24/3000/70-50 2x120V"
  },
  {
    "id": "prod-2689",
    "title": "Inversor Híbrido 6000W, 48V, Axpert MLV-6KW-48V, PROCET SCIENTIFIC",
    "slug": "inversor-hibrido-6000w-48v-axpert-mlv-6kw-48v-procet-scientific-2689",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_9525d6659fe6424197d3ee33613a4a9amv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Híbrido 6000W, 48V, Axpert MLV-6KW-48V, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2688",
    "title": "Inversor Hibrido 8000W, 48V, PV35 Fase Dividida TLV, Must",
    "slug": "inversor-hibrido-8000w-48v-pv35-fase-dividida-tlv-must-2688",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_ca80713c35124ed4b5f68cc33107b7c7mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido 8000W, 48V, PV35 Fase Dividida TLV, Must"
  },
  {
    "id": "prod-2687",
    "title": "Inversor Híbrido 6500W, 48V, Axpert MAX , PROCET SCIENTIFIC",
    "slug": "inversor-hibrido-6500w-48v-axpert-max-procet-scientific-2687",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_edff9bc3bf56480aa6d309f8a6bad725mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Híbrido 6500W, 48V, Axpert MAX , PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2686",
    "title": "Inversor Hibrido 10000W, 48V, PV35 Fase Dividida TLV, Must",
    "slug": "inversor-hibrido-10000w-48v-pv35-fase-dividida-tlv-must-2686",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_ca80713c35124ed4b5f68cc33107b7c7mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido 10000W, 48V, PV35 Fase Dividida TLV, Must"
  },
  {
    "id": "prod-2681",
    "title": "Inversor Solar Hibrido 6,5 KW, 48V, Onda Pura, Axpert MAX II, PROCET SCIENTIFIC",
    "slug": "inversor-solar-hibrido-6-5-kw-48v-onda-pura-axpert-max-ii-procet-scientific-2681",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_edff9bc3bf56480aa6d309f8a6bad725mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Hibrido 6,5 KW, 48V, Onda Pura, Axpert MAX II, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2671",
    "title": "Inversor Hibrido 12000W, 48V, PV35 Fase Dividida TLV, Must",
    "slug": "inversor-hibrido-12000w-48v-pv35-fase-dividida-tlv-must-2671",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_ca80713c35124ed4b5f68cc33107b7c7mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido 12000W, 48V, PV35 Fase Dividida TLV, Must"
  },
  {
    "id": "prod-2662",
    "title": "Quattro 48/10000/140-100/100 120V VE.Bus",
    "slug": "quattro-48-10000-140-100-100-120v-ve-bus-2662",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/016806_f42f3bc1cdc3481999bc2710d68deaa0mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Quattro 48/10000/140-100/100 120V VE.Bus"
  },
  {
    "id": "prod-2660",
    "title": "Inversor Solar Híbrido 10KW, 48V, Trifásico, Infini Solar, PROCET SCIENTIFIC",
    "slug": "inversor-solar-hibrido-10kw-48v-trifasico-infini-solar-procet-scientific-2660",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_d3ed5bb25c804c0da7fd650c9b37fcfemv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Híbrido 10KW, 48V, Trifásico, Infini Solar, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2658",
    "title": "AC End Cap Trunk, Hoymiles",
    "slug": "ac-end-cap-trunk-hoymiles-2658",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_f634df37dd3348e0bd0f5f86dabc1b5emv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: AC End Cap Trunk, Hoymiles"
  },
  {
    "id": "prod-2656",
    "title": "AC Trunk Port Cap, Hoymiles",
    "slug": "ac-trunk-port-cap-hoymiles-2656",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_f4a8e83bfc454d4fb2475852f3dac905mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: AC Trunk Port Cap, Hoymiles"
  },
  {
    "id": "prod-2654",
    "title": "Unlok Tool Connector, Hoymiles",
    "slug": "unlok-tool-connector-hoymiles-2654",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_2434513e0c814b21a772b10084bb6256mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Unlok Tool Connector, Hoymiles"
  },
  {
    "id": "prod-2652",
    "title": "Unlok Tool Disconnection, Hoymiles",
    "slug": "unlok-tool-disconnection-hoymiles-2652",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_98ecae4008f0453f9066aeead02223c3mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Unlok Tool Disconnection, Hoymiles"
  },
  {
    "id": "prod-2650",
    "title": "AC Connector, Hoymiles",
    "slug": "ac-connector-hoymiles-2650",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_ba857a710686455090f53d6c81a8719bmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: AC Connector, Hoymiles"
  },
  {
    "id": "prod-2648",
    "title": "AC Trunk Cable, Hoymiles",
    "slug": "ac-trunk-cable-hoymiles-2648",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_c6577287224a4306862db7933aef0220mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: AC Trunk Cable, Hoymiles"
  },
  {
    "id": "prod-2643",
    "title": "Monitoreo DTU LITE S HOYMILES",
    "slug": "monitoreo-dtu-lite-s-hoymiles-2643",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_6a68f690d94347a388c433e2e1d91765mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo DTU LITE S HOYMILES"
  },
  {
    "id": "prod-2642",
    "title": "Microinversor OnGrid MI 700 Watts, Monofásico a 110V, Hoymiles",
    "slug": "microinversor-ongrid-mi-700-watts-monofasico-a-110v-hoymiles-2642",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_0cbcd1bda3474b33a2658e137fad80camv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Microinversor OnGrid MI 700 Watts, Monofásico a 110V, Hoymiles"
  },
  {
    "id": "prod-2640",
    "title": "Microinversor Ongrid 800 Watts, Monofásico a 120V, HMS-800-LV, Hoymiles",
    "slug": "microinversor-ongrid-800-watts-monofasico-a-120v-hms-800-lv-hoymiles-2640",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_0cbcd1bda3474b33a2658e137fad80camv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Microinversor Ongrid 800 Watts, Monofásico a 120V, HMS-800-LV, Hoymiles"
  },
  {
    "id": "prod-2638",
    "title": "Monitoreo DTU PRO S HOYMILES",
    "slug": "monitoreo-dtu-pro-s-hoymiles-2638",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_d962549afe884ade97a9faf9af56d7dcmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo DTU PRO S HOYMILES"
  },
  {
    "id": "prod-2635",
    "title": "MIN 6000TL-X2",
    "slug": "min-6000tl-x2-2635",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_68a25595779b49b68442c3a6fadc58c0mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: MIN 6000TL-X2"
  },
  {
    "id": "prod-2625",
    "title": "INVERSOR ONGRID SOFAR 40KTLX-G4-LV 150",
    "slug": "inversor-ongrid-sofar-40ktlx-g4-lv-150-2625",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_7a115f62c1794fab8803f45b8f32fd34mv2-4.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR ONGRID SOFAR 40KTLX-G4-LV 150"
  },
  {
    "id": "prod-2624",
    "title": "SOFAR 50KTLX-G4-LV 150",
    "slug": "sofar-50ktlx-g4-lv-150-2624",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_7a115f62c1794fab8803f45b8f32fd34mv2-4.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 50KTLX-G4-LV 150"
  },
  {
    "id": "prod-2623",
    "title": "INVERSOR ONGRID SOFAR 60KTLX-G4-LV",
    "slug": "inversor-ongrid-sofar-60ktlx-g4-lv-2623",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_7a115f62c1794fab8803f45b8f32fd34mv2-4.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR ONGRID SOFAR 60KTLX-G4-LV"
  },
  {
    "id": "prod-2621",
    "title": "INVERSOR ONGRID SOFAR 75KTLX-G4-LV",
    "slug": "inversor-ongrid-sofar-75ktlx-g4-lv-2621",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_7a115f62c1794fab8803f45b8f32fd34mv2-4.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR ONGRID SOFAR 75KTLX-G4-LV"
  },
  {
    "id": "prod-2619",
    "title": "Inversor Solar 350VA, 24V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-350va-24v-a-110v-onda-pura-epever-2619",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_a5bbc94bfa7c413ea5a836e9df053f74mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 350VA, 24V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2618",
    "title": "Inversor Solar 350VA, 12V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-350va-12v-a-110v-onda-pura-epever-2618",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_a5bbc94bfa7c413ea5a836e9df053f74mv2-1.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 350VA, 12V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2615",
    "title": "Inversor Solar 500VA, 12V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-500va-12v-a-110v-onda-pura-epever-2615",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_bd75abaeabf741f9b43e766cbaef09bbmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 500VA, 12V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2613",
    "title": "Inversor Solar 500VA, 24V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-500va-24v-a-110v-onda-pura-epever-2613",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_bd75abaeabf741f9b43e766cbaef09bbmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 500VA, 24V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2602",
    "title": "Inversor Solar 1000VA, 24V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-1000va-24v-a-110v-onda-pura-epever-2602",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_d71d058372e840868721675290d35b7cmv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 1000VA, 24V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2599",
    "title": "Inversor Solar 1500VA, 12V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-1500va-12v-a-110v-onda-pura-epever-2599",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_cb0a661431624d668f8104c1dfb198d3mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 1500VA, 12V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2597",
    "title": "Inversor Solar 1000VA, 12V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-1000va-12v-a-110v-onda-pura-epever-2597",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_a5bbc94bfa7c413ea5a836e9df053f74mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 1000VA, 12V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2593",
    "title": "Inversor Solar 1500VA, 24V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-1500va-24v-a-110v-onda-pura-epever-2593",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_cb0a661431624d668f8104c1dfb198d3mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 1500VA, 24V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2587",
    "title": "Inversor Solar 2000VA, 24V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-2000va-24v-a-110v-onda-pura-epever-2587",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_c918153e41454b9fab90424486bbee51mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 2000VA, 24V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2583",
    "title": "Inversor Solar 2000VA, 48V a 110V, Onda Pura, EPEVER",
    "slug": "inversor-solar-2000va-48v-a-110v-onda-pura-epever-2583",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_4dd2241da10a4a029f6a5afcece2cbdemv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 2000VA, 48V a 110V, Onda Pura, EPEVER"
  },
  {
    "id": "prod-2582",
    "title": "Inversor Solar 2000 Watts, 24V a 110V, Onda Pura, PROCET SCIENTIFIC",
    "slug": "inversor-solar-2000-watts-24v-a-110v-onda-pura-procet-scientific-2582",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_54b1628cabdd429f93ee657560482db2mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 2000 Watts, 24V a 110V, Onda Pura, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2581",
    "title": "Inversor Solar 1000VA, 12V a 110V, Onda Pura, IP1000 plus EPEVER",
    "slug": "inversor-solar-1000va-12v-a-110v-onda-pura-ip1000-plus-epever-2581",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_f58422186cef45d887433717e34a45a6mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 1000VA, 12V a 110V, Onda Pura, IP1000 plus EPEVER"
  },
  {
    "id": "prod-2575",
    "title": "Inversor Solar 2000 Watts, 12V a 110V, Onda Pura, PROCET SCIENTIFIC",
    "slug": "inversor-solar-2000-watts-12v-a-110v-onda-pura-procet-scientific-2575",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_54b1628cabdd429f93ee657560482db2mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 2000 Watts, 12V a 110V, Onda Pura, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2573",
    "title": "Inversor Solar 1000VA, 24V a 110V, Onda Pura, IP1000 Plus, EPEVER",
    "slug": "inversor-solar-1000va-24v-a-110v-onda-pura-ip1000-plus-epever-2573",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_f58422186cef45d887433717e34a45a6mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 1000VA, 24V a 110V, Onda Pura, IP1000 Plus, EPEVER"
  },
  {
    "id": "prod-2562",
    "title": "Estación Portátil de Energía Wolk 300W",
    "slug": "estacion-portatil-de-energia-wolk-300w-2562",
    "brand": "SPECTRUMP Solar",
    "category": "Equipos Portátiles",
    "categorySlug": "equipos-portatiles",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_636da27921db48f4a2e68a557cd25866mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Estación Portátil de Energía Wolk 300W"
  },
  {
    "id": "prod-2561",
    "title": "Inversor Solar 3000 Watts, 12V a 110V, Onda Pura, PROCET SCIENTIFIC",
    "slug": "inversor-solar-3000-watts-12v-a-110v-onda-pura-procet-scientific-2561",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_ecd5253b1ab341eb94a500b573596e73mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 3000 Watts, 12V a 110V, Onda Pura, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2560",
    "title": "Inversor Solar 2000VA, 24V a 110V, Onda Pura, IP2000 Plus, EPEVER",
    "slug": "inversor-solar-2000va-24v-a-110v-onda-pura-ip2000-plus-epever-2560",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_f58422186cef45d887433717e34a45a6mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 2000VA, 24V a 110V, Onda Pura, IP2000 Plus, EPEVER"
  },
  {
    "id": "prod-2550",
    "title": "Inversor Solar 3000VA, 48V a 110V, Onda Pura, IP3000 Plus, EPEVER",
    "slug": "inversor-solar-3000va-48v-a-110v-onda-pura-ip3000-plus-epever-2550",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_f58422186cef45d887433717e34a45a6mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 3000VA, 48V a 110V, Onda Pura, IP3000 Plus, EPEVER"
  },
  {
    "id": "prod-2548",
    "title": "Inversor Solar 3000 Watts, 24V a 110V, Onda Pura, PROCET SCIENTIFIC",
    "slug": "inversor-solar-3000-watts-24v-a-110v-onda-pura-procet-scientific-2548",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_ecd5253b1ab341eb94a500b573596e73mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 3000 Watts, 24V a 110V, Onda Pura, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-2538",
    "title": "Inversor Solar 3000VA, 48V a 110V, Onda Pura, IP 3000 plus EPEVER",
    "slug": "inversor-solar-3000va-48v-a-110v-onda-pura-ip-3000-plus-epever-2538",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_4b338316921c45f099506e85c70f6d94mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 3000VA, 48V a 110V, Onda Pura, IP 3000 plus EPEVER"
  },
  {
    "id": "prod-2536",
    "title": "Inversor Solar 3000VA, 12V a 110V, Onda Pura, IP3000 Plus, EPEVER",
    "slug": "inversor-solar-3000va-12v-a-110v-onda-pura-ip3000-plus-epever-2536",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_f58422186cef45d887433717e34a45a6mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 3000VA, 12V a 110V, Onda Pura, IP3000 Plus, EPEVER"
  },
  {
    "id": "prod-2523",
    "title": "Estación Portátil de Energía Regen 700W, ZON",
    "slug": "estacion-portatil-de-energia-regen-700w-zon-2523",
    "brand": "SPECTRUMP Solar",
    "category": "Equipos Portátiles",
    "categorySlug": "equipos-portatiles",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_55c047f0eb8541a2af649c6753732396mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Estación Portátil de Energía Regen 700W, ZON"
  },
  {
    "id": "prod-2489",
    "title": "Panel Solar Policristalino 50 Watts, 12V, RESTAR",
    "slug": "panel-solar-policristalino-50-watts-12v-restar-2489",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_4fae15200fb349b697072726dd8456damv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Policristalino 50 Watts, 12V, RESTAR"
  },
  {
    "id": "prod-2486",
    "title": "Panel Solar Monocristalino 480 Watts, 24V, 9 BusBar, ZNSHINE",
    "slug": "panel-solar-monocristalino-480-watts-24v-9-busbar-znshine-2486",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_20de8daa790b4e528003c52f7b8a0d72mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Monocristalino 480 Watts, 24V, 9 BusBar, ZNSHINE"
  },
  {
    "id": "prod-2482",
    "title": "Panel Solar Monocristalino 380W, 24V, RESTAR",
    "slug": "panel-solar-monocristalino-380w-24v-restar-2482",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_94b54e46bb704a63bf6acfd0ca2b1368mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Monocristalino 380W, 24V, RESTAR"
  },
  {
    "id": "prod-2475",
    "title": "Panel solar Monocristalino 550W, 24V, Media Celda, Bifacial, Grafeno ZNSHINE",
    "slug": "panel-solar-monocristalino-550w-24v-media-celda-bifacial-grafeno-znshine-2475",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_37d6930c30d540b2a4067b1e6eeae6d0mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel solar Monocristalino 550W, 24V, Media Celda, Bifacial, Grafeno ZNSHINE"
  },
  {
    "id": "prod-2173",
    "title": "Producto",
    "slug": "producto-2173",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Producto"
  },
  {
    "id": "prod-2172",
    "title": "Panel Solar Monocristalino 585W HC 16BB N DV Tipo N TOPCon",
    "slug": "panel-solar-monocristalino-585w-hc-16bb-n-dv-tipo-n-topcon-2172",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_a9172fa6afe6491ca3c530927366ca68mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Monocristalino 585W HC 16BB N DV Tipo N TOPCon"
  },
  {
    "id": "prod-799",
    "title": "Panel Solar Monocristalino 210 Watts, 12V, Retie, RESTAR",
    "slug": "panel-solar-monocristalino-210-watts-12v-retie-restar-799",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_5e9708204fce4816a3c918bd91d6f5f4mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Monocristalino 210 Watts, 12V, Retie, RESTAR"
  },
  {
    "id": "prod-791",
    "title": "Panel Solar Policristalino 280 Watts, 24V, RESTAR",
    "slug": "panel-solar-policristalino-280-watts-24v-restar-791",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_4880d72b798f4e70a9c3a3dd4755e620mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Policristalino 280 Watts, 24V, RESTAR"
  },
  {
    "id": "prod-789",
    "title": "Monitoreo Bluetooth BT-1 Serie Smart, PROCET SCIENTIFIC",
    "slug": "monitoreo-bluetooth-bt-1-serie-smart-procet-scientific-789",
    "brand": "Procet Scientific",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_64224c8bdc574b299185b72fa6ca3da3mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo Bluetooth BT-1 Serie Smart, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-787",
    "title": "Monitoreo Wifi Cloud Box Serie Connect",
    "slug": "monitoreo-wifi-cloud-box-serie-connect-787",
    "brand": "SPECTRUMP Solar",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_c88b086daf0d4768952b4c4b6e805655mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo Wifi Cloud Box Serie Connect"
  },
  {
    "id": "prod-785",
    "title": "Sistema Conectividad RS485 Serie Connect, PROCET SCIENTIFIC",
    "slug": "sistema-conectividad-rs485-serie-connect-procet-scientific-785",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_fe7eab73e3054ba089429def9a15fee8mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Sistema Conectividad RS485 Serie Connect, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-783",
    "title": "Microinversor Ongrid 1600 Watts Hoymiles",
    "slug": "microinversor-ongrid-1600-watts-hoymiles-783",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_0ae6ed5945244f4080d19d1eeb6389bamv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Microinversor Ongrid 1600 Watts Hoymiles"
  },
  {
    "id": "prod-781",
    "title": "Inversor Hibrido PV18-3024PRO 220V",
    "slug": "inversor-hibrido-pv18-3024pro-220v-781",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_c872c77e315f40f8b96e721863eaa7d6mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido PV18-3024PRO 220V"
  },
  {
    "id": "prod-780",
    "title": "Inversor Hibrido PV18-5248PRO 220V",
    "slug": "inversor-hibrido-pv18-5248pro-220v-780",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_c872c77e315f40f8b96e721863eaa7d6mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido PV18-5248PRO 220V"
  },
  {
    "id": "prod-776",
    "title": "Paquete  x 12 unds de Conectores MC4 Hembra y Macho, 1000V, YRO",
    "slug": "paquete-x-12-unds-de-conectores-mc4-hembra-y-macho-1000v-yro-776",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_94f3bcf7b9d646d0896131e9f5cc83fbmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Paquete  x 12 unds de Conectores MC4 Hembra y Macho, 1000V, YRO"
  },
  {
    "id": "prod-774",
    "title": "Paquete x 6 Unds de Conectores MC4, Hembra y Macho en T",
    "slug": "paquete-x-6-unds-de-conectores-mc4-hembra-y-macho-en-t-774",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_bfa6d6c5f90047d5a9203f25a1aa871amv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Paquete x 6 Unds de Conectores MC4, Hembra y Macho en T"
  },
  {
    "id": "prod-772",
    "title": "Cable Solar FV 4mm Negro x 250 mts.",
    "slug": "cable-solar-fv-4mm-negro-x-250-mts-772",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 4mm Negro x 250 mts."
  },
  {
    "id": "prod-771",
    "title": "Cable Solar FV 4mm Rojo x 250 mts.",
    "slug": "cable-solar-fv-4mm-rojo-x-250-mts-771",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 4mm Rojo x 250 mts."
  },
  {
    "id": "prod-770",
    "title": "Inversor Solar Cargador 2000 Watts, 12V, Xtender XTM 2000-12, STUDER",
    "slug": "inversor-solar-cargador-2000-watts-12v-xtender-xtm-2000-12-studer-770",
    "brand": "Studer Innotec",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_fa2e4bfd9a004bfab380fb0189ce15b3mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Cargador 2000 Watts, 12V, Xtender XTM 2000-12, STUDER"
  },
  {
    "id": "prod-768",
    "title": "Monitoreo Online Xcom-LAN, STUDER",
    "slug": "monitoreo-online-xcom-lan-studer-768",
    "brand": "Studer Innotec",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_2e86fd67148e4f8cbc67cb0eee7e4036mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo Online Xcom-LAN, STUDER"
  },
  {
    "id": "prod-766",
    "title": "AC Connector, Hoymiles",
    "slug": "ac-connector-hoymiles-766",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_ba857a710686455090f53d6c81a8719bmv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: AC Connector, Hoymiles"
  },
  {
    "id": "prod-764",
    "title": "End Cap Connector, Hoymiles",
    "slug": "end-cap-connector-hoymiles-764",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_4d2a97a84014432a98e466716ccde122mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: End Cap Connector, Hoymiles"
  },
  {
    "id": "prod-762",
    "title": "Breaker DC 1P, 32A, 250V, Yro",
    "slug": "breaker-dc-1p-32a-250v-yro-762",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_5d54a0b2e346463c846893cdf2ea3915mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 1P, 32A, 250V, Yro"
  },
  {
    "id": "prod-761",
    "title": "Breaker DC 1P, 63A, 250V, Yro",
    "slug": "breaker-dc-1p-63a-250v-yro-761",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_5d54a0b2e346463c846893cdf2ea3915mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 1P, 63A, 250V, Yro"
  },
  {
    "id": "prod-760",
    "title": "Breaker DC 2P, 20A, 550V, Yro",
    "slug": "breaker-dc-2p-20a-550v-yro-760",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_4df748c709304bdc93306b65b75369a9mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 2P, 20A, 550V, Yro"
  },
  {
    "id": "prod-759",
    "title": "Breaker DC 2P, 32A, 550V, Yro",
    "slug": "breaker-dc-2p-32a-550v-yro-759",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_4df748c709304bdc93306b65b75369a9mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 2P, 32A, 550V, Yro"
  },
  {
    "id": "prod-758",
    "title": "Breaker DC 2P, 40A, 550V, Yro",
    "slug": "breaker-dc-2p-40a-550v-yro-758",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_4df748c709304bdc93306b65b75369a9mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 2P, 40A, 550V, Yro"
  },
  {
    "id": "prod-757",
    "title": "Breaker DC 2P, 50A, 550V, Yro",
    "slug": "breaker-dc-2p-50a-550v-yro-757",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_4df748c709304bdc93306b65b75369a9mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 2P, 50A, 550V, Yro"
  },
  {
    "id": "prod-756",
    "title": "Breaker DC 2P, 63A, 550V, Yro",
    "slug": "breaker-dc-2p-63a-550v-yro-756",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_4df748c709304bdc93306b65b75369a9mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 2P, 63A, 550V, Yro"
  },
  {
    "id": "prod-746",
    "title": "Porta Fusible en DC 160A, 1000V, YRO",
    "slug": "porta-fusible-en-dc-160a-1000v-yro-746",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/ec6d56_3489b7fa2c6145438311555709ade548mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Porta Fusible en DC 160A, 1000V, YRO"
  },
  {
    "id": "prod-745",
    "title": "Fusible DC 10A, 1000V, YRO",
    "slug": "fusible-dc-10a-1000v-yro-745",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_fc4a11b3e0cf4b8c82f494e0d7547e3fmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Fusible DC 10A, 1000V, YRO"
  },
  {
    "id": "prod-743",
    "title": "Fusible DC 20A, 1000V, YRO",
    "slug": "fusible-dc-20a-1000v-yro-743",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_7525123ca6e24bc9b0187cabf9d287camv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Fusible DC 20A, 1000V, YRO"
  },
  {
    "id": "prod-741",
    "title": "Fusible DC 32A, 1000V, YRO",
    "slug": "fusible-dc-32a-1000v-yro-741",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_9440c716db024f7182ce6ea79b6f7d59mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Fusible DC 32A, 1000V, YRO"
  },
  {
    "id": "prod-739",
    "title": "Batería de Litio 48V, 50Ah, US2000C, Pylontech",
    "slug": "bateria-de-litio-48v-50ah-us2000c-pylontech-739",
    "brand": "Pylontech",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_d98d51cee2ac4de4862d671eb41fa1b7mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería de Litio 48V, 50Ah, US2000C, Pylontech"
  },
  {
    "id": "prod-737",
    "title": "Batería de Litio 48V, 74Ah, US3000C, Pylontech",
    "slug": "bateria-de-litio-48v-74ah-us3000c-pylontech-737",
    "brand": "Pylontech",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_1741d19b08fe4d6aa93ca1a01f739e2cmv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería de Litio 48V, 74Ah, US3000C, Pylontech"
  },
  {
    "id": "prod-735",
    "title": "Fusible DC 40A, 1000V, YRO",
    "slug": "fusible-dc-40a-1000v-yro-735",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_26262188f09142c4bd45285d0a9596a3mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Fusible DC 40A, 1000V, YRO"
  },
  {
    "id": "prod-733",
    "title": "Porta Fusible en DC 63A, 1000V, YRO",
    "slug": "porta-fusible-en-dc-63a-1000v-yro-733",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/ec6d56_3489b7fa2c6145438311555709ade548mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Porta Fusible en DC 63A, 1000V, YRO"
  },
  {
    "id": "prod-731",
    "title": "Wall Mount Cabinet, Gabinete Pylontech",
    "slug": "wall-mount-cabinet-gabinete-pylontech-731",
    "brand": "Pylontech",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_06869a676982473d97e63664c0cf242emv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Wall Mount Cabinet, Gabinete Pylontech"
  },
  {
    "id": "prod-729",
    "title": "Juego de Cables Conexión cortos Baterías x 2, Pylontech",
    "slug": "juego-de-cables-conexion-cortos-baterias-x-2-pylontech-729",
    "brand": "Pylontech",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/821e2a_4964891f2a4a41e0ab8ed2897370bce2mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Juego de Cables Conexión cortos Baterías x 2, Pylontech"
  },
  {
    "id": "prod-727",
    "title": "Inversor Solar OnGrid 6KW, Trifásico a 220V, S5-GR3P6K-LV, SOLIS",
    "slug": "inversor-solar-ongrid-6kw-trifasico-a-220v-s5-gr3p6k-lv-solis-727",
    "brand": "Solis",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_3e65285b54ae414987876c75b39c2e71mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar OnGrid 6KW, Trifásico a 220V, S5-GR3P6K-LV, SOLIS"
  },
  {
    "id": "prod-724",
    "title": "Monitoreo WiFi Box Axpert e Infinisolar, PROCET SCIENTIFIC",
    "slug": "monitoreo-wifi-box-axpert-e-infinisolar-procet-scientific-724",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_57c532e970c14872a3d52c8164804b20mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo WiFi Box Axpert e Infinisolar, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-722",
    "title": "Inversor Solar Cargador 2400 Watts, 24V, Xtender XTM 2400-24-STUDER",
    "slug": "inversor-solar-cargador-2400-watts-24v-xtender-xtm-2400-24-studer-722",
    "brand": "Studer Innotec",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_132c52b7707f49dca2f05d7c2a2b96efmv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Cargador 2400 Watts, 24V, Xtender XTM 2400-24-STUDER"
  },
  {
    "id": "prod-720",
    "title": "Inversor Solar Cargador 2600 Watts, 48V, Xtender XTM 2600-48, STUDER",
    "slug": "inversor-solar-cargador-2600-watts-48v-xtender-xtm-2600-48-studer-720",
    "brand": "Studer Innotec",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_35cb6b1d99764a3ba2c6844fa145b7e7mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Cargador 2600 Watts, 48V, Xtender XTM 2600-48, STUDER"
  },
  {
    "id": "prod-718",
    "title": "Monitoreo Online Xcom-CAN, STUDER",
    "slug": "monitoreo-online-xcom-can-studer-718",
    "brand": "Studer Innotec",
    "category": "Controladores",
    "categorySlug": "controladores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_0596477ccaee43bd869dd991eba4205bmv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo Online Xcom-CAN, STUDER"
  },
  {
    "id": "prod-716",
    "title": "Tablero de Protección, DPS CLAMPER Solar String Box 1E/1S",
    "slug": "tablero-de-proteccion-dps-clamper-solar-string-box-1e-1s-716",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_80df152b40714782893dad319a99d945mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Tablero de Protección, DPS CLAMPER Solar String Box 1E/1S"
  },
  {
    "id": "prod-714",
    "title": "Tablero de Protección, DPS CLAMPER Solar String Box 2E/1S",
    "slug": "tablero-de-proteccion-dps-clamper-solar-string-box-2e-1s-714",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_70b5b51a5368438bb65d7669f583af5emv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Tablero de Protección, DPS CLAMPER Solar String Box 2E/1S"
  },
  {
    "id": "prod-712",
    "title": "Tablero de Protección, DPS CLAMPER Solar String Box 3E/1S",
    "slug": "tablero-de-proteccion-dps-clamper-solar-string-box-3e-1s-712",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_eaebd2b276ce4ce3807250dc54c8086amv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Tablero de Protección, DPS CLAMPER Solar String Box 3E/1S"
  },
  {
    "id": "prod-710",
    "title": "Tablero de Protección, DPS CLAMPER Solar String Box 4E/4S",
    "slug": "tablero-de-proteccion-dps-clamper-solar-string-box-4e-4s-710",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_62aeea6d4f55408d9633917d4fe550c2mv2.avif",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Tablero de Protección, DPS CLAMPER Solar String Box 4E/4S"
  },
  {
    "id": "prod-708",
    "title": "Monitoreo WiFi, EPEVER",
    "slug": "monitoreo-wifi-epever-708",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_5b2a8f02296d4b3ca3a8176318c3a84emv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Monitoreo WiFi, EPEVER"
  },
  {
    "id": "prod-706",
    "title": "Microinversor Ongrid 2000 Watts, Bifásico a 120V, HMS-2000, Hoymiles",
    "slug": "microinversor-ongrid-2000-watts-bifasico-a-120v-hms-2000-hoymiles-706",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_45603f161aa8419693a90be431a7e4c6mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Microinversor Ongrid 2000 Watts, Bifásico a 120V, HMS-2000, Hoymiles"
  },
  {
    "id": "prod-694",
    "title": "Inversor Solar Híbrido 2000 Watts, 24V, Onda Pura, UP2000 HM6021, EPEVER",
    "slug": "inversor-solar-hibrido-2000-watts-24v-onda-pura-up2000-hm6021-epever-694",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_7bcb48a436ce4723865516b2e1932b22mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Híbrido 2000 Watts, 24V, Onda Pura, UP2000 HM6021, EPEVER"
  },
  {
    "id": "prod-692",
    "title": "Inversor Solar Híbrido 3000 Watts, 48V, Onda Pura, UP3000 HM8041, EPEVER",
    "slug": "inversor-solar-hibrido-3000-watts-48v-onda-pura-up3000-hm8041-epever-692",
    "brand": "Epever",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_0b92aa489a644fa1a82785c1aceede1fmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Híbrido 3000 Watts, 48V, Onda Pura, UP3000 HM8041, EPEVER"
  },
  {
    "id": "prod-690",
    "title": "Inversor Solar OnGrid 100KW, Trifásico a 480V, 100K-HV, SOLIS",
    "slug": "inversor-solar-ongrid-100kw-trifasico-a-480v-100k-hv-solis-690",
    "brand": "Solis",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_1fa2dc2b413044d7a95ce14485ed22cfmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar OnGrid 100KW, Trifásico a 480V, 100K-HV, SOLIS"
  },
  {
    "id": "prod-688",
    "title": "Panel solar Monocristalino 555 Watts, 24V, Media Celda,ZNSHINE",
    "slug": "panel-solar-monocristalino-555-watts-24v-media-celda-znshine-688",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_a9172fa6afe6491ca3c530927366ca68mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel solar Monocristalino 555 Watts, 24V, Media Celda,ZNSHINE"
  },
  {
    "id": "prod-687",
    "title": "Inversor Solar Hibrido 3000 Watts, 48V, OP, Axpert Zero LV, PROCET SCIENTIFIC",
    "slug": "inversor-solar-hibrido-3000-watts-48v-op-axpert-zero-lv-procet-scientific-687",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_54d7193dbc7c4190a0926f3f918784fbmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Hibrido 3000 Watts, 48V, OP, Axpert Zero LV, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-685",
    "title": "Inversor Solar 500 watts, 12V a 110V, Onda Pura, PROCET SCIENTIFIC",
    "slug": "inversor-solar-500-watts-12v-a-110v-onda-pura-procet-scientific-685",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_9c95c5b9e3d34e31a774c1b63cc6f9d6mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar 500 watts, 12V a 110V, Onda Pura, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-683",
    "title": "Batería Litio, 120Ah, 25V, PROCET SCIENTIFIC",
    "slug": "bateria-litio-120ah-25v-procet-scientific-683",
    "brand": "Procet Scientific",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_613a24e80a304d688286e10bef09d181mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Batería Litio, 120Ah, 25V, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-681",
    "title": "Breaker DC 1P, 10A, 550V, YRO",
    "slug": "breaker-dc-1p-10a-550v-yro-681",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_eed88a8f51514e52ad7f4ac49cc0ee8cmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 1P, 10A, 550V, YRO"
  },
  {
    "id": "prod-679",
    "title": "Breaker DC 1P, 16A, 550V, YRO",
    "slug": "breaker-dc-1p-16a-550v-yro-679",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_5d54a0b2e346463c846893cdf2ea3915mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 1P, 16A, 550V, YRO"
  },
  {
    "id": "prod-677",
    "title": "Breaker DC 2P, 16A, 550V, YRO",
    "slug": "breaker-dc-2p-16a-550v-yro-677",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_b9f087689e054d068efeca36f19b8241mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 2P, 16A, 550V, YRO"
  },
  {
    "id": "prod-675",
    "title": "Protector de Sobretensiones, DPS POCKET 2P, CLAMPER",
    "slug": "protector-de-sobretensiones-dps-pocket-2p-clamper-675",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_93f2b79dc78e467583182aae272c2b6amv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Protector de Sobretensiones, DPS POCKET 2P, CLAMPER"
  },
  {
    "id": "prod-673",
    "title": "Protector de Sobretensiones, DPS POCKET 3P, CLAMPER",
    "slug": "protector-de-sobretensiones-dps-pocket-3p-clamper-673",
    "brand": "SPECTRUMP Solar",
    "category": "Estructuras",
    "categorySlug": "estructuras",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_63a59d058e02413c869698ca46dedcf7mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Protector de Sobretensiones, DPS POCKET 3P, CLAMPER"
  },
  {
    "id": "prod-671",
    "title": "Fusible DC 63A, 1000V, YRO",
    "slug": "fusible-dc-63a-1000v-yro-671",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_39b8a48debf44dab8419a511290affe2mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Fusible DC 63A, 1000V, YRO"
  },
  {
    "id": "prod-669",
    "title": "Fusible DC 160A, 1000V, Para Baterías, YRO",
    "slug": "fusible-dc-160a-1000v-para-baterias-yro-669",
    "brand": "SPECTRUMP Solar",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_086e362602d2409b9f7332232fbc9cb1mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Fusible DC 160A, 1000V, Para Baterías, YRO"
  },
  {
    "id": "prod-662",
    "title": "Panel Solar Monocristalino 110W, 12V, RESTAR",
    "slug": "panel-solar-monocristalino-110w-12v-restar-662",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_0e2ed6f56b1a4736b4d3b5495c558de4mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Monocristalino 110W, 12V, RESTAR"
  },
  {
    "id": "prod-660",
    "title": "Panel Solar Monocristalino 170W, 12V, RESTAR",
    "slug": "panel-solar-monocristalino-170w-12v-restar-660",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_8f6a326977f042e78396edaa9d05c780mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Monocristalino 170W, 12V, RESTAR"
  },
  {
    "id": "prod-658",
    "title": "Panel Solar Monocristalino 590 Watts,24V, Media Celda, RISEN",
    "slug": "panel-solar-monocristalino-590-watts-24v-media-celda-risen-658",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_edd0695cbc694d40b9f2098fce68934emv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Monocristalino 590 Watts,24V, Media Celda, RISEN"
  },
  {
    "id": "prod-654",
    "title": "Panel solar Monocristalino 580 Watts, 24V, Media Celda,ZNSHINE",
    "slug": "panel-solar-monocristalino-580-watts-24v-media-celda-znshine-654",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_a9172fa6afe6491ca3c530927366ca68mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel solar Monocristalino 580 Watts, 24V, Media Celda,ZNSHINE"
  },
  {
    "id": "prod-653",
    "title": "INVERSOR HIBRIDO ONGRID HYS 7.6-LV-USG1 HOYMILES",
    "slug": "inversor-hibrido-ongrid-hys-7-6-lv-usg1-hoymiles-653",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_9249c603691d45a5bce83538cb4f8e10mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR HIBRIDO ONGRID HYS 7.6-LV-USG1 HOYMILES"
  },
  {
    "id": "prod-652",
    "title": "INVERSOR HIBRIDO ONGRID HYS-9.6-LV-USG1 HOYMILES",
    "slug": "inversor-hibrido-ongrid-hys-9-6-lv-usg1-hoymiles-652",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_9249c603691d45a5bce83538cb4f8e10mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR HIBRIDO ONGRID HYS-9.6-LV-USG1 HOYMILES"
  },
  {
    "id": "prod-651",
    "title": "Cable Solar FV 10mm Rojo x 100 mts.",
    "slug": "cable-solar-fv-10mm-rojo-x-100-mts-651",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 10mm Rojo x 100 mts."
  },
  {
    "id": "prod-650",
    "title": "Cable Solar FV 10mm Negro x 100 mts.",
    "slug": "cable-solar-fv-10mm-negro-x-100-mts-650",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 10mm Negro x 100 mts."
  },
  {
    "id": "prod-649",
    "title": "Cable Solar FV 6mm Rojo x 250 mts.",
    "slug": "cable-solar-fv-6mm-rojo-x-250-mts-649",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 6mm Rojo x 250 mts."
  },
  {
    "id": "prod-648",
    "title": "Cable Solar FV 6mm Rojo x 100 mts.",
    "slug": "cable-solar-fv-6mm-rojo-x-100-mts-648",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 6mm Rojo x 100 mts."
  },
  {
    "id": "prod-647",
    "title": "Cable Solar FV 4mm Rojo Rollo x 100 mts.",
    "slug": "cable-solar-fv-4mm-rojo-rollo-x-100-mts-647",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 4mm Rojo Rollo x 100 mts."
  },
  {
    "id": "prod-646",
    "title": "Cable Solar FV 6mm Negro x 250 mts.",
    "slug": "cable-solar-fv-6mm-negro-x-250-mts-646",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 6mm Negro x 250 mts."
  },
  {
    "id": "prod-645",
    "title": "Cable Solar FV 4mm Negro Rollo x 100 mts.",
    "slug": "cable-solar-fv-4mm-negro-rollo-x-100-mts-645",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/42e0c2_9fe748b6635b4bd48ea8a8620dd148femv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Cable Solar FV 4mm Negro Rollo x 100 mts."
  },
  {
    "id": "prod-643",
    "title": "Panel Solar Monocristalino 425 Watts, 24V, PERC Media Celda, 9 BusBar,R",
    "slug": "panel-solar-monocristalino-425-watts-24v-perc-media-celda-9-busbar-r-643",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/c23565_6c0e9f9eb24b4cfb8941940452d0f167mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Monocristalino 425 Watts, 24V, PERC Media Celda, 9 BusBar,R"
  },
  {
    "id": "prod-641",
    "title": "Microinversor OnGrid HMT 2000 208V HOYMILES Trifásico",
    "slug": "microinversor-ongrid-hmt-2000-208v-hoymiles-trifasico-641",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_9405aa94a9c84cbeb4877772e421c551mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Microinversor OnGrid HMT 2000 208V HOYMILES Trifásico"
  },
  {
    "id": "prod-639",
    "title": "INVERSOR HIBRIDO ONGRID HYS-11.5 HOYMILES",
    "slug": "inversor-hibrido-ongrid-hys-11-5-hoymiles-639",
    "brand": "Hoymiles",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_9249c603691d45a5bce83538cb4f8e10mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR HIBRIDO ONGRID HYS-11.5 HOYMILES"
  },
  {
    "id": "prod-637",
    "title": "Panel Solar Monocristalino 620W Bifacial HC 18BB N DV",
    "slug": "panel-solar-monocristalino-620w-bifacial-hc-18bb-n-dv-637",
    "brand": "SPECTRUMP Solar",
    "category": "Paneles Solares",
    "categorySlug": "paneles-solares",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_b6b09aea37394909a8472f052b6541b2mv2.webp",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Panel Solar Monocristalino 620W Bifacial HC 18BB N DV"
  },
  {
    "id": "prod-635",
    "title": "Producto",
    "slug": "producto-635",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Producto"
  },
  {
    "id": "prod-632",
    "title": "Bateria RV12100CH Litio",
    "slug": "bateria-rv12100ch-litio-632",
    "brand": "SPECTRUMP Solar",
    "category": "Baterías",
    "categorySlug": "baterias",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_2b05b0ac6db24f0db37d2f4075c3aed3mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Bateria RV12100CH Litio"
  },
  {
    "id": "prod-630",
    "title": "SOFAR 3-6KTLM-G3",
    "slug": "sofar-3-6ktlm-g3-630",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_5e5b319c9d2144c8a10c31e73ede805amv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 3-6KTLM-G3"
  },
  {
    "id": "prod-628",
    "title": "SOFAR 6KTLM-G3",
    "slug": "sofar-6ktlm-g3-628",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_5fb4391cb82d4f2a8996f9c90191399amv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 6KTLM-G3"
  },
  {
    "id": "prod-626",
    "title": "SOFAR 7KTLM-G3",
    "slug": "sofar-7ktlm-g3-626",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_643e33be21fc4b9195e61feadb73fd26mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 7KTLM-G3"
  },
  {
    "id": "prod-624",
    "title": "SOFAR 8KTLM-G3",
    "slug": "sofar-8ktlm-g3-624",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_edf510c4fb1b4e7b89c9233f5955efe7mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 8KTLM-G3"
  },
  {
    "id": "prod-622",
    "title": "SOFAR 10KTLM-G3",
    "slug": "sofar-10ktlm-g3-622",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_a568cc6310c3476ab7ea2be860796ce2mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 10KTLM-G3"
  },
  {
    "id": "prod-620",
    "title": "SOFAR 15KTLX-G3-LV",
    "slug": "sofar-15ktlx-g3-lv-620",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_910c33dee744410fb0f285e9ceaa8ae6mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 15KTLX-G3-LV"
  },
  {
    "id": "prod-618",
    "title": "SOFAR 20KTLX-G3-LV",
    "slug": "sofar-20ktlx-g3-lv-618",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_6a4ea87a96e549f5a0149424480a9b8fmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 20KTLX-G3-LV"
  },
  {
    "id": "prod-616",
    "title": "SOFAR 25KTLX-G3-LV",
    "slug": "sofar-25ktlx-g3-lv-616",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_d8c9d6323b59401793a5eca9b7e1edebmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 25KTLX-G3-LV"
  },
  {
    "id": "prod-614",
    "title": "SOFAR 30KTLX-G3-LV",
    "slug": "sofar-30ktlx-g3-lv-614",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_332c9028a3fc4023884ddf68b24bb235mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: SOFAR 30KTLX-G3-LV"
  },
  {
    "id": "prod-612",
    "title": "Inversor MIC 3000TL-X2",
    "slug": "inversor-mic-3000tl-x2-612",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_7e7f654d6c8b49cca128be7f08d5a91emv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor MIC 3000TL-X2"
  },
  {
    "id": "prod-610",
    "title": "MIN 5000TL-X2",
    "slug": "min-5000tl-x2-610",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_328399e2d73e48cf9e3ae2587cdde584mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: MIN 5000TL-X2"
  },
  {
    "id": "prod-606",
    "title": "MIN 8000TL-X2",
    "slug": "min-8000tl-x2-606",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_e97023e5ded44f628256c1788f07ee80mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: MIN 8000TL-X2"
  },
  {
    "id": "prod-604",
    "title": "MIN 10000TL-X2",
    "slug": "min-10000tl-x2-604",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_156cfe8fc8da477aae76435b89377f12mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: MIN 10000TL-X2"
  },
  {
    "id": "prod-602",
    "title": "INVERSOR MID 6KTL3-XL2",
    "slug": "inversor-mid-6ktl3-xl2-602",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_68a25595779b49b68442c3a6fadc58c0mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR MID 6KTL3-XL2"
  },
  {
    "id": "prod-600",
    "title": "INVERSOR -MID 10KTL3-XL2",
    "slug": "inversor-mid-10ktl3-xl2-600",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_406a6866a0d04542ab6758dadd396281mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR -MID 10KTL3-XL2"
  },
  {
    "id": "prod-598",
    "title": "INVESOR- MID 15KTL3-XL2",
    "slug": "invesor-mid-15ktl3-xl2-598",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_aacc379b1a27475e9c921fe3fdf214ffmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVESOR- MID 15KTL3-XL2"
  },
  {
    "id": "prod-596",
    "title": "INVERSOR- MID 20KTL3-XL2",
    "slug": "inversor-mid-20ktl3-xl2-596",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_4357f528108145ae8aaa2bd59160566amv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR- MID 20KTL3-XL2"
  },
  {
    "id": "prod-594",
    "title": "INVERSOR- MID 25KTL3-XL2",
    "slug": "inversor-mid-25ktl3-xl2-594",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_cbf4a32af0f648ff8849bb9a0ff1d525mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR- MID 25KTL3-XL2"
  },
  {
    "id": "prod-592",
    "title": "INVERSOR- MAC 30KTL3-XL",
    "slug": "inversor-mac-30ktl3-xl-592",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_bc5799a928dd46c18072417a0511dd4dmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR- MAC 30KTL3-XL"
  },
  {
    "id": "prod-590",
    "title": "INVERSOR-MAC 36KTL3-XL",
    "slug": "inversor-mac-36ktl3-xl-590",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_45aac85305714df7ab2a36657ee1a8e8mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR-MAC 36KTL3-XL"
  },
  {
    "id": "prod-588",
    "title": "INVERSOR- MAX 50KTL3-XL2",
    "slug": "inversor-max-50ktl3-xl2-588",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_8360458f7ce34504b9f9a9a9231bf5d7mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR- MAX 50KTL3-XL2"
  },
  {
    "id": "prod-586",
    "title": "INVERSOR- MAX 70KTL3-XL2",
    "slug": "inversor-max-70ktl3-xl2-586",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_f9751c4385fb465bb7a2ea0773f09df2mv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR- MAX 70KTL3-XL2"
  },
  {
    "id": "prod-584",
    "title": "INVERSOR- MAX 125K TL3-X2",
    "slug": "inversor-max-125k-tl3-x2-584",
    "brand": "SPECTRUMP Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_5389a2dde1184ff8bdfcc080d142031bmv2.png",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: INVERSOR- MAX 125K TL3-X2"
  },
  {
    "id": "prod-582",
    "title": "Inversor Hibrido On grid PH11-6-KL2 US MUST",
    "slug": "inversor-hibrido-on-grid-ph11-6-kl2-us-must-582",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_4c106805d6b9409d9551276c6e8d19f0mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido On grid PH11-6-KL2 US MUST"
  },
  {
    "id": "prod-580",
    "title": "Inversor Hibrido Ongrid PH11-8KL2 US MUST",
    "slug": "inversor-hibrido-ongrid-ph11-8kl2-us-must-580",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_4f1d4fa6ccaf46d1a751682397f6beb0mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido Ongrid PH11-8KL2 US MUST"
  },
  {
    "id": "prod-579",
    "title": "Inversor Hibrido Ongrid PH11-10KL2 US MUST",
    "slug": "inversor-hibrido-ongrid-ph11-10kl2-us-must-579",
    "brand": "Must Solar",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://improinde.com/wp-content/uploads/2025/12/d376bb_4f1d4fa6ccaf46d1a751682397f6beb0mv2.jpg",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Hibrido Ongrid PH11-10KL2 US MUST"
  },
  {
    "id": "prod-528",
    "title": "Producto",
    "slug": "producto-528",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Producto"
  },
  {
    "id": "prod-382",
    "title": "Producto",
    "slug": "producto-382",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Producto"
  },
  {
    "id": "prod-363",
    "title": "Inversor Solar Hibrido 6 KW, 48V, Onda Pura, PROCET SCIENTIFIC",
    "slug": "inversor-solar-hibrido-6-kw-48v-onda-pura-procet-scientific-363",
    "brand": "Procet Scientific",
    "category": "Inversores",
    "categorySlug": "inversores",
    "imageUrl": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Inversor Solar Hibrido 6 KW, 48V, Onda Pura, PROCET SCIENTIFIC"
  },
  {
    "id": "prod-362",
    "title": "Breaker DC 4P, 10A, 1000 a 1200V, YRO",
    "slug": "breaker-dc-4p-10a-1000-a-1200v-yro-362",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Breaker DC 4P, 10A, 1000 a 1200V, YRO"
  },
  {
    "id": "prod-361",
    "title": "Producto",
    "slug": "producto-361",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Producto"
  },
  {
    "id": "prod-360",
    "title": "Producto",
    "slug": "producto-360",
    "brand": "SPECTRUMP Solar",
    "category": "Protección y Accesorios",
    "categorySlug": "proteccion-y-accesorios",
    "imageUrl": "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80",
    "whatsappMsg": "Hola SPECTRUMP, quisiera cotizar el producto: Producto"
  }
];

// Service layer functions (Ready to be swapped with CMS / Database APIs in the future)
export async function getProducts(): Promise<Product[]> {
  return PRODUCTS_DATABASE;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS_DATABASE.find((p) => p.slug === slug);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  if (!categorySlug || categorySlug === "todos") {
    return PRODUCTS_DATABASE;
  }
  return PRODUCTS_DATABASE.filter((p) => p.categorySlug === categorySlug);
}

export async function getCategories(): Promise<ProductCategory[]> {
  return PRODUCT_CATEGORIES;
}
