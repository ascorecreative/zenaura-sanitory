export const COLLECTIONS_DATA = [
  {
    id: 'ginza',
    name: 'Ginza & Ginza Junior',
    tagline: 'The Art of Playful Living & Japanese Boutique Zen',
    category: 'Japandi & Zen',
    image: '/images/addon/image2.png',
    secondaryImage: '/images/addon/image1.png',
    features: [
      'Tokyo Ginza architectural innovation',
      'Japanese boutique hotel aesthetic',
      'Armour Baby Pink & Misty Grey matte coatings',
      'Ultra-thin 4mm rim porcelain craftsmanship'
    ],
    description: 'Channelling the dynamic energy of Tokyo’s Ginza district, this collection captures the city’s architectural innovation and creative spirit into a cohesive bathroom solution. Taking cues from Japanese boutique hotel interiors, Ginza leads with visual impact for spaces that feel effortlessly cool and expressive.',
    badge: 'Japanese Zen'
  },
  {
    id: 'fonteyn',
    name: 'Fonteyn Collection',
    tagline: 'Graceful Curves & Sculptural Refinement',
    category: 'Mid-Century',
    image: '/images/addon/image4.png',
    secondaryImage: '/images/addon/image3.png',
    features: [
      'Fluidity and finesse of movement',
      'Refinement of mid-century modern design',
      'Integrated terrazzo & custom stone countertops',
      'Sculptural curved vanity profiles'
    ],
    description: 'A sophisticated new range defined by its graceful curves, sculptural forms and timeless elegance, the Fonteyn collection captures the fluidity and finesse of movement, echoing the refinement of mid-century modern design.',
    badge: 'Mid-Century Icon'
  },
  {
    id: 'carlyle',
    name: 'Carlyle Collection',
    tagline: 'Understated Hotel Luxury & Balanced Proportions',
    category: 'Hotel Luxe',
    image: '/images/addon/image6.png',
    secondaryImage: '/images/addon/image5.png',
    features: [
      '5-star hotel luxury experience',
      'Scalloped mixer edges and rich finishes',
      'Spanish alabaster Carlyle wall lighting by SANAURA',
      'Complete bathroom solution across mixers, furniture & ceramics'
    ],
    description: 'A modern take on the flawlessly manicured bathrooms of the world’s finest hotels, Carlyle embodies understated luxury with rich finishes, balanced proportions and refined detailing across mixers, showering, furniture, basins, bathtub, WCs, lighting and accessories to offer a complete bathroom solution.',
    badge: 'Hotel Luxe Signature'
  },
  {
    id: 'isabel',
    name: 'Isabel Collection',
    tagline: 'Murano Master Glassmakers Artisanal Heritage',
    category: 'Featured',
    image: '/images/addon/image8.png',
    secondaryImage: '/images/addon/image7.png',
    features: [
      'Master glassmakers legacy of Murano, Venice',
      'Artisanal glassblowing tradition transformed into modern design',
      'Hand-faceted crystal glass handles & spout inserts',
      'PVD Oyster & Champagne Gold hardware pairing'
    ],
    description: 'Isabel reinterprets the legacy of the master glassmakers of the Italian island of Murano, transforming artisanal tradition into a contemporary design statement for the bathroom.',
    badge: 'Murano Artisanal'
  },
  {
    id: 'european-luxury',
    name: 'European Luxury Bathrooms',
    tagline: 'Sanipex Group Contemporary Architecture',
    category: 'Hotel Luxe',
    image: '/images/addon/image10.png',
    secondaryImage: '/images/addon/image11.png',
    features: [
      'Contemporary European sanitary architecture',
      'Ergonomic mixers and luxury shower columns',
      'Integrated floating vanities and stone basins',
      'High-traffic commercial and residential durability'
    ],
    description: 'Curated luxury European bathroom solutions showcasing premium brassware, sculptural ceramics, and architectural finishes from Sanipex Group.',
    badge: 'European Luxury'
  },
  {
    id: 'italian-surfaces',
    name: 'Italian Artisanal Surfaces',
    tagline: 'Bespoke Italian Craftsmanship & Finishes',
    category: 'Featured',
    image: '/images/addon/image18.png',
    secondaryImage: '/images/addon/image17.png',
    features: [
      'Precision Italian engineered fittings',
      'Opulent marble veining and tile surfaces',
      'PVD Gold, Oyster & Soft Bronze metallic swatches',
      'Bespoke architectural statement pieces'
    ],
    description: 'Refined Italian bathroom design statements featuring precision-engineered mixers, bespoke vanities, and opulent surface materials.',
    badge: 'Italian Craftsmanship'
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'bathroom',
    title: 'Bathroom',
    subtitle: 'Taps, Basins, Furniture, WC, Bidet & Flushing',
    icon: 'Droplets',
    image: '/images/addon/image2.png',
    items: [
      'Taps (Basin Mixers, Wall Faucets, Bath Fillers)',
      'Basin (Countertop Vessel Bowls, Pedestals, Integrated)',
      'Bathroom Furniture (Vanity Units, Cabinets, Mirrors)',
      'WC (Rimless Wall-Hung, Smart Toilet Seats)',
      'Bidet Spray (Heavy Brass Shattafs, Hoses & Valves)',
      'Flushing Systems (Glass & Sensor Flush Plates, Cisterns)'
    ],
    specs: {
      warranty: '10 Years Warranty',
      certification: 'WRAS & ESMA Certified',
      cartridge: 'European Precision Ceramic Discs'
    }
  },
  {
    id: 'tiles',
    title: 'Tiles',
    subtitle: 'Standard Format, Outdoor Tiles & Small Format',
    icon: 'Layers',
    image: '/images/addon/image18.png',
    items: [
      'Standard Format Tiles (Wall & Floor Porcelain)',
      'Outdoor Tiles (R11 Anti-Slip Terrace & Poolside)',
      'Small Format Tiles (Metallic Kitkat & Decorative Mosaic)'
    ],
    specs: {
      absorption: '<0.1% Ultra-Low Water Absorption',
      finish: 'Polished, Honed & Micro-Structured',
      rectified: '100% Precision Rectified Edges'
    }
  },
  {
    id: 'kitchen',
    title: 'Kitchen Appliance',
    subtitle: 'Sink, Taps, Refrigerators & Freezers',
    icon: 'Box',
    image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp',
    items: [
      'Kitchen Sink (IX304 Stainless Steel & Ceramic)',
      'Kitchen Taps (Commercial Pull-Out Spray & Pot Fillers)',
      'Refrigerators & Freezers (Integrated & Beverage Coolers)'
    ],
    specs: {
      material: 'Grade 304 Stainless Steel',
      soundproof: 'Acoustic Sound-Deadening Insulation',
      finish: 'Brushed Steel & Gunmetal'
    }
  },
  {
    id: 'outdoor',
    title: 'Outdoor Living',
    subtitle: 'Sunbed, Poolbed & Sofa Set',
    icon: 'Sparkles',
    image: '/images/sanipex_slides/slide3_pergola.webp',
    items: [
      'Sunbed (Teak Wood & Aluminium Loungers)',
      'Poolbed (Weatherproof Cushion Daybeds)',
      'Sofa Set (Resort Outdoor Lounge Seating & Tables)'
    ],
    specs: {
      weathering: 'UV & All-Weather Resistance',
      fabric: 'Sunbrella Marine Outdoor Fabrics',
      frame: 'Teak & Powder-Coated Aluminium'
    }
  },
  {
    id: 'slabs',
    title: 'Slabs',
    subtitle: 'Indoor & Outdoor Architectural Slabs',
    icon: 'ShowerHead',
    image: '/images/sanipex_slides/slide4_slabs.webp',
    items: [
      'Indoor Slabs (120x280cm Calacatta & Travertine Slabs)',
      'Outdoor Slabs (20mm Heavy Duty Patio Porcelain Slabs)'
    ],
    specs: {
      format: '120x280cm & 160x320cm Jumbo Slabs',
      thickness: '6mm, 12mm & 20mm Options',
      veinMatch: 'Bookmatched Seamless Continuity'
    }
  }
];

export const MATERIALS_DATA = {
  warmTones: [
    { name: 'PVD Oyster', hex: '#C5C5C0', texture: 'Brushed Platinum Pearl', code: 'PVD-OYS-01' },
    { name: 'PVD Santiago', hex: '#635345', texture: 'Dark Titanium Copper Alloy', code: 'PVD-STG-02' },
    { name: 'Soft Bronze', hex: '#8C6D53', texture: 'Warm Antique Satin Bronze', code: 'PVD-BRZ-03' },
    { name: 'PVD Gold', hex: '#D4AF37', texture: 'Polished Champagne Gold', code: 'PVD-GLD-04' },
    { name: 'PVD Soft Burgundy', hex: '#6B3E44', texture: 'Satin Deep Velvet Burgundy', code: 'PVD-BUR-05' }
  ],
  timelessClassics: [
    { name: 'Matt Black', hex: '#1C1D21', texture: 'Ultra-Matte Architectural Obsidian', code: 'CLS-BLK-01' },
    { name: 'Brushed Nickel', hex: '#A3A39F', texture: 'Silky Fine Brushed Steel', code: 'CLS-NCK-02' },
    { name: 'Chrome', hex: '#E5E7EB', texture: 'Mirror Polished Pure Chrome', code: 'CLS-CHM-03' },
    { name: 'Gold', hex: '#E6C657', texture: 'Rich Warm Polished Gold', code: 'CLS-GLD-04' },
    { name: 'Brushed Stainless Steel', hex: '#94A3B8', texture: 'AISI Grade 304 Satin Steel', code: 'CLS-[#94A3B8]-05' },
    { name: 'Anthracite', hex: '#4B5563', texture: 'Deep Graphite Slate Finish', code: 'CLS-[#4B5563]-06' }
  ],
  armourCollection: [
    { name: 'Armour Cocoa', hex: '#4A3B32', texture: 'Matte Tactile Warm Earth Coating', code: 'ARM-CCA-01' },
    { name: 'Armour Truffle', hex: '#6B5E55', texture: 'Deep Greige Velvet Touch Coating', code: 'ARM-TRF-02' },
    { name: 'Armour Blueberry', hex: '#2A364F', texture: 'Deep Midnight Matte Blue Coating', code: 'ARM-BLU-03' },
    { name: 'Armour Mandarin', hex: '#C85A32', texture: 'Terracotta Sunset Matte Coating', code: 'ARM-MND-04' },
    { name: 'Armour Lip Gloss', hex: '#A83B4C', texture: 'Satin Crimson Accent Coating', code: 'ARM-LIP-05' },
    { name: 'Armour Sage', hex: '#7A8B7B', texture: 'Calming Botanical Olive Green Coating', code: 'ARM-SGE-06' },
    { name: 'Armour Baby Pink', hex: '#E8C5C8', texture: 'Soft Architectural Blush Coating', code: 'ARM-PNK-07' },
    { name: 'Armour Misty Grey', hex: '#B8BCBF', texture: 'Neutral Concrete Soft Smoke Coating', code: 'ARM-GRY-08' }
  ]
};

export const BRANDS_DATA = [
  {
    name: 'GROHE',
    tagline: 'German Engineering & Premium Brassware',
    origin: 'Germany',
    description: 'World-leading provider of sanitary fittings, thermostatic showers, and smart water management.',
    logoText: 'GROHE',
    logoImage: '/images/addon/image13.png'
  },
  {
    name: 'GEBERIT',
    tagline: 'Concealed Flushing Systems & Sanitaryware',
    origin: 'Switzerland',
    description: 'European leader in sanitary products, concealed cisterns, and rimless hygiene technology.',
    logoText: 'GEBERIT',
    logoImage: '/images/addon/image16.png'
  },
  {
    name: 'JAGUAR',
    tagline: 'Complete Bathroom & Showering Solutions',
    origin: 'Global Excellence',
    description: 'High-performance faucets, thermostatic shower systems, wellness, and sanitaryware.',
    logoText: 'JAGUAR',
    logoImage: '/images/addon/image14.png'
  },
  {
    name: 'RAK CERAMICS',
    tagline: 'World Leading Porcelain Slabs & Ceramics',
    origin: 'UAE • Global',
    description: 'One of the largest ceramic brands in the world, specializing in large format porcelain slabs and sanitaryware.',
    logoText: 'RAK CERAMICS',
    logoImage: '/images/addon/image15.png'
  },
  {
    name: 'BAGNODESIGN',
    tagline: 'Luxury Italian & UK Sanitaryware',
    origin: 'London • Milan',
    description: 'Premier Italian and UK engineered mixers, sanitaryware, and Bagnospa wellness systems.',
    logoText: 'BAGNODESIGN'
  },
  {
    name: 'SANIPEX GROUP',
    tagline: 'Architectural Tiles, Slabs & Outdoor Living',
    origin: 'Dubai • Worldwide',
    description: 'Global leader in large-format porcelain slabs, outdoor lounge collections, and surface tiles.',
    logoText: 'SANIPEX GROUP'
  },
  {
    name: 'AQUAECO',
    tagline: 'Water Conservation & Touchless Solutions',
    origin: 'European Standards',
    description: 'WRAS and ESMA certified electronic sensor taps, aerators, and water management technology.',
    logoText: 'AQUAECO'
  },
  {
    name: 'BYSTRO',
    tagline: 'Kitchen Mixers & Professional Sinks',
    origin: 'Commercial Kitchen Tech',
    description: 'Heavy-duty pull-out spray kitchen mixers, pot fillers, and IX304 stainless steel undermount sinks.',
    logoText: 'BYSTRO'
  },
  {
    name: 'HEWI',
    tagline: 'German Supportive & Accessible Hardware',
    origin: 'Made in Germany',
    description: 'Award-winning accessible sanitaryware, supportive rails, and hardware compatible with Ginza Junior.',
    logoText: 'HEWI'
  },
  {
    name: 'SANAURA',
    tagline: 'Spanish Alabaster Lighting & Luxury Mirrors',
    origin: 'Spain',
    description: 'Artisan hand-carved Spanish alabaster wall sconces and anti-fog backlit LED mirrors for Carlyle collection.',
    logoText: 'SANAURA'
  }
];
