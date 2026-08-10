export const COLLECTIONS_DATA = [
  {
    id: 'carlyle',
    name: 'Carlyle Collection',
    tagline: '5-Star Hotel Glamour & Timeless Alabaster Luminosity',
    category: 'Hotel Luxe',
    image: '/images/carlyle_collection.png',
    features: [
      'Scalloped mirror edge silhouettes',
      'Handcrafted Spanish alabaster wall sconce integration',
      'PVD Brushed Gold & Santiago hardware finishes',
      'Italian Calacatta Viola marble countertops'
    ],
    description: 'Designed for signature hospitality and penthouse residences, the Carlyle Collection brings classic Art Deco curves into 21st-century luxury with soft ambient backlighting and precision Italian metalwork.',
    badge: 'Hotel Luxe Signature'
  },
  {
    id: 'fonteyn',
    name: 'Fonteyn Collection',
    tagline: 'Transitional 1940s-60s Sculptural Elegance',
    category: 'Mid-Century',
    image: '/images/fonteyn_collection.png',
    features: [
      'Curved mid-century modern vanity profiles',
      'Integrated terrazzo & custom stone countertops',
      'Dual-tone metal & fluted drawer fronts',
      'Precision ceramic undermount basins'
    ],
    description: 'Inspired by iconic mid-century European design, Fonteyn marries fluid organic curves with engineered terrazzo surfaces and hand-polished brass handles.',
    badge: 'Transitional Icon'
  },
  {
    id: 'ginza',
    name: 'Ginza & Ginza Junior',
    tagline: 'Japandi Zen & Architectural Minimalist Basins',
    category: 'Japandi & Zen',
    image: '/images/ginza_collection.png',
    features: [
      'Armour Baby Pink & Misty Grey matte coating',
      'Ultra-thin 4mm rim porcelain craftsmanship',
      'Floating natural oak console pairing',
      'Concealed water drainage technology'
    ],
    description: 'Ginza embodies Japanese boutique hotel tranquility, offering tactile organic basins in curated pastels and earth tones paired with wall-mounted titanium mixers.',
    badge: 'Japandi Masterpiece'
  },
  {
    id: 'sestriere',
    name: 'Sestriere & Isabel',
    tagline: 'Jewellery-Inspired Brassware & Italian Marble Handles',
    category: 'Featured',
    image: '/images/sestriere_collection.png',
    features: [
      'Murano handcrafted crystal glass lever handles',
      'Genuine Calacatta Viola & Italian Travertine inserts',
      'High-durability PVD Oyster & Champagne Gold',
      'Zero-lead eco-brass inner fluid channels'
    ],
    description: 'A celebration of Haute Joaillerie for the bath. Sestriere incorporates hand-faceted Italian marble and Murano glass into precision quarter-turn ceramic disc mixers.',
    badge: 'Haute Craftsmanship'
  },
  {
    id: 'studio316',
    name: 'Studio 316 & Beach House',
    tagline: 'Marine-Grade 316 Stainless Steel Outdoor & Spa Columns',
    category: 'Industrial Chic',
    image: '/images/studio316_collection.png',
    features: [
      'AISI 316L Marine Grade Stainless Steel construction',
      'Corrosion & salt-air resistant brushed finish',
      'Integrated foot-wash & thermostatic mixer valves',
      'Freestanding resort poolside & beachfront installation'
    ],
    description: 'Engineered specifically for coastal Middle Eastern environments, Studio 316 delivers ultra-durable outdoor showers and spa elements with minimal maintenance requirements.',
    badge: 'Marine Grade 316'
  },
  {
    id: 'toko',
    name: 'Toko Flavours & Toko Groove',
    tagline: 'Color-Rich Armour Coatings & 70s Fluted Textures',
    category: 'Mid-Century',
    image: '/images/toko_collection.png',
    features: [
      'Retro 70s vertical fluted vanity front panels',
      'Armour Cocoa & Truffle matte tactile coatings',
      'Anti-fingerprint thermal repair nanotech',
      'Modular floating and floor-standing configurations'
    ],
    description: 'Toko brings warmth and tactile depth through rich earthy Armour coatings and architectural linear fluting, setting the trend for modern luxury residential bathrooms.',
    badge: 'Architectural Fluted'
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'bathroom',
    title: 'Bathroom',
    subtitle: 'Taps, Basins, Furniture, WC, Bidet & Flushing',
    icon: 'Droplets',
    image: '/images/hero_pedestal.png',
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
      cartridge: 'Kerox European Ceramic Discs'
    }
  },
  {
    id: 'tiles',
    title: 'Tiles',
    subtitle: 'Standard Format, Outdoor Tiles & Small Format',
    icon: 'Layers',
    image: '/images/fonteyn_collection.png',
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
    image: '/images/kitchen.png',
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
    image: '/images/cat_outdoor.png',
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
    image: '/images/cat_slabs.png',
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
    { name: 'Matt Black', hex: '#1C1D21', texture: 'Ultra-Matte Architectural Obsidian', code: 'CLS-[#1C1D21]-01' },
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
    name: 'BAGNODESIGN',
    tagline: 'Luxury Sanitaryware & Brassware',
    origin: 'London • Milan',
    description: 'Premier Italian and UK engineered mixers, sanitaryware, and Bagnospa wellness systems.',
    logoText: 'BAGNODESIGN'
  },
  {
    name: 'AQUAECO',
    tagline: 'Water Conservation & Touchless Solutions',
    origin: 'European Standards',
    description: 'WRAS and ESMA certified electronic sensor taps, aerators, and water management technology.',
    logoText: 'AQUAECO'
  },
  {
    name: 'SANIPEX GROUP',
    tagline: 'Architectural Tiles, Slabs & Outdoor Living',
    origin: 'Dubai • Worldwide',
    description: 'Global leader in large-format porcelain slabs, outdoor lounge collections, and surface tiles.',
    logoText: 'SANIPEX GROUP'
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
    tagline: 'German Engineering & Supportive Hardware',
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
