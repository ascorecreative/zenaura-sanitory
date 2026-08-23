export const COLLECTIONS_DATA = [
  {
    id: 'ginza',
    name: 'Ginza & Ginza Junior',
    tagline: 'The Art of Playful Living & Japanese Boutique Zen',
    category: 'Japandi & Zen',
    image: '/images/addon/image1.png',
    secondaryImage: '/images/addon/image2.png',
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
    image: '/images/addon/image1.png',
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
    image: '/images/cat_tiles_terrazzo.jpg',
    items: [
      'Standard Format Tiles (Wall & Floor Porcelain)',
      'Outdoor Tiles (R11 Anti-Slip Terrace & Poolside)',
      'Small Format Tiles (Metallic Kitkat & Decorative Terrazzo)'
    ],
    specs: {
      absorption: '<0.1% Ultra-Low Water Absorption',
      finish: 'Polished, Honed & Terrazzo Aggregate',
      rectified: '100% Precision Rectified Edges'
    }
  },
  {
    id: 'kitchen',
    title: 'Kitchen Appliance',
    subtitle: 'Bystro Stainless Steel Appliances, Sinks & Taps',
    icon: 'Box',
    image: '/images/cat_kitchen_bystro.png',
    items: [
      'Bystro Professional Kitchen Appliances & Ovens',
      'Kitchen Sink (IX304 Stainless Steel & Ceramic)',
      'Kitchen Taps (Commercial Pull-Out Spray & Pot Fillers)',
      'Refrigerators & Freezers (Integrated & Beverage Coolers)'
    ],
    specs: {
      material: 'Grade 304 Stainless Steel & Knurled Metal Controls',
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
    { 
      name: 'Chrome', 
      hex: '#E5E7EB', 
      gradient: 'linear-gradient(135deg, #f5f7fa 0%, #c5cbd3 50%, #ffffff 100%)', 
      texture: 'Polished Stainless Steel / Brushed Chrome', 
      code: 'FIN-CHM-01' 
    },
    { 
      name: 'Inox / Brushed Nickel', 
      hex: '#B5B09C', 
      gradient: 'linear-gradient(135deg, #d8d2c4 0%, #a49e8e 50%, #c9c3b4 100%)', 
      texture: 'Brushed Inox / Satin Nickel / Platinum Matt', 
      code: 'FIN-INX-02' 
    },
    { 
      name: 'PVD Brushed Gold', 
      hex: '#D1A751', 
      gradient: 'linear-gradient(135deg, #fada87 0%, #ba903b 50%, #e0b853 100%)', 
      texture: 'PVD Gold Brushed Satin / Matt Gold / Durabrass', 
      code: 'FIN-GLD-03' 
    },
    { 
      name: 'PVD Miele / Oyster', 
      hex: '#EAD5A7', 
      gradient: 'linear-gradient(135deg, #faebd0 0%, #dbbf84 50%, #f5e4b8 100%)', 
      texture: 'PVD Oyster / Satin Gold / Champagne Soft Gold', 
      code: 'FIN-OYS-04' 
    },
    { 
      name: 'PVD Gold', 
      hex: '#E5C544', 
      gradient: 'linear-gradient(135deg, #ffee80 0%, #c7a41c 50%, #f5d438 100%)', 
      texture: 'Polished Gold / Polished Brass', 
      code: 'FIN-GLD-05' 
    }
  ],
  timelessClassics: [
    { 
      name: 'Velvet Black', 
      hex: '#121212', 
      gradient: 'linear-gradient(135deg, #2c2d33 0%, #0d0d0f 60%, #1a1a1d 100%)', 
      texture: 'Matt Black / Structured / Hammercoated Black', 
      code: 'FIN-BLK-01' 
    },
    { 
      name: 'Red Canyon / Santiago', 
      hex: '#A46E56', 
      gradient: 'linear-gradient(135deg, #c7896e 0%, #8c533c 50%, #b5775d 100%)', 
      texture: 'PVD Santiago / PVD Red Gold / PVD Copper', 
      code: 'FIN-STG-02' 
    },
    { 
      name: 'Soft Bronze', 
      hex: '#786447', 
      gradient: 'linear-gradient(135deg, #99825e 0%, #5e4c33 50%, #826d4c 100%)', 
      texture: 'Matt Bronze / Brushed Bronze / Tuscany Bronze', 
      code: 'FIN-BRZ-03' 
    },
    { 
      name: 'Brushed Stainless Steel', 
      hex: '#D4D8DF', 
      gradient: 'linear-gradient(135deg, #f2f4f8 0%, #b0b8c4 50%, #dede0 100%)', 
      texture: 'Satin Stainless Steel / AISI 304', 
      code: 'FIN-[#D4D8DF]-04' 
    },
    { 
      name: 'Anthracite', 
      hex: '#4D5054', 
      gradient: 'linear-gradient(135deg, #6e7278 0%, #35373a 50%, #565a60 100%)', 
      texture: 'PVD Brushed Black / Gun Metal / Satin Graphite', 
      code: 'FIN-[#4D5054]-05' 
    }
  ],
  armourCollection: [
    { 
      name: 'Soft Burgundy', 
      hex: '#8C584E', 
      gradient: 'linear-gradient(135deg, #a86f64 0%, #6e3a32 50%, #945348 100%)', 
      texture: 'Brushed Copper PVD / PVD Bronze / Red Gold', 
      code: 'ARM-BUR-01' 
    },
    { 
      name: 'Armour Cocoa', 
      hex: '#4A3B32', 
      gradient: 'linear-gradient(135deg, #614f44 0%, #362921 50%, #524238 100%)', 
      texture: 'Matte Tactile Warm Earth Coating', 
      code: 'ARM-CCA-02' 
    },
    { 
      name: 'Armour Truffle', 
      hex: '#6B5E55', 
      gradient: 'linear-gradient(135deg, #87786e 0%, #52463e 50%, #75675d 100%)', 
      texture: 'Deep Greige Velvet Touch Coating', 
      code: 'ARM-TRF-03' 
    },
    { 
      name: 'Armour Blueberry', 
      hex: '#2A364F', 
      gradient: 'linear-gradient(135deg, #3f4e6e 0%, #1c2538 50%, #313f5c 100%)', 
      texture: 'Deep Midnight Matte Blue Coating', 
      code: 'ARM-BLU-04' 
    },
    { 
      name: 'Armour Mandarin', 
      hex: '#C85A32', 
      gradient: 'linear-gradient(135deg, #e0734a 0%, #a6421c 50%, #d16239 100%)', 
      texture: 'Terracotta Sunset Matte Coating', 
      code: 'ARM-MND-05' 
    },
    { 
      name: 'Armour Lip Gloss', 
      hex: '#A83B4C', 
      gradient: 'linear-gradient(135deg, #c45466 0%, #872535 50%, #b34254 100%)', 
      texture: 'Satin Crimson Accent Coating', 
      code: 'ARM-LIP-06' 
    },
    { 
      name: 'Armour Sage', 
      hex: '#7A8B7B', 
      gradient: 'linear-gradient(135deg, #95a896 0%, #607061 50%, #839484 100%)', 
      texture: 'Calming Botanical Olive Green Coating', 
      code: 'ARM-SGE-07' 
    },
    { 
      name: 'Armour Baby Pink', 
      hex: '#E8C5C8', 
      gradient: 'linear-gradient(135deg, #f7dcdb 0%, #d9b0b4 50%, #edd3d5 100%)', 
      texture: 'Soft Architectural Blush Coating', 
      code: 'ARM-PNK-08' 
    },
    { 
      name: 'Armour Misty Grey', 
      hex: '#B8BCBF', 
      gradient: 'linear-gradient(135deg, #d2d6d9 0%, #9ca0a3 50%, #c4c8cb 100%)', 
      texture: 'Neutral Concrete Soft Smoke Coating', 
      code: 'ARM-GRY-09' 
    }
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
    logoText: 'BAGNODESIGN',
    logoImage: '/images/logos/bagnodesign.svg'
  },
  {
    name: 'SANIPEX GROUP',
    tagline: 'Architectural Tiles, Slabs & Outdoor Living',
    origin: 'Dubai • Worldwide',
    description: 'Global leader in large-format porcelain slabs, outdoor lounge collections, and surface tiles.',
    logoText: 'SANIPEX GROUP',
    logoImage: '/images/logos/sanipex.svg'
  },
  {
    name: 'AQUAECO',
    tagline: 'Water Conservation & Touchless Solutions',
    origin: 'European Standards',
    description: 'WRAS and ESMA certified electronic sensor taps, aerators, and water management technology.',
    logoText: 'AQUAECO',
    logoImage: '/images/logos/aquaeco.svg'
  },
  {
    name: 'BYSTRO',
    tagline: 'Kitchen Appliances, Mixers & Sinks',
    origin: 'Commercial Kitchen Tech',
    description: 'Heavy-duty pull-out spray kitchen mixers, pot fillers, ovens, and IX304 stainless steel undermount sinks.',
    logoText: 'BYSTRO',
    logoImage: '/images/logos/bystro.svg'
  },
  {
    name: 'HEWI',
    tagline: 'German Supportive & Accessible Hardware',
    origin: 'Made in Germany',
    description: 'Award-winning accessible sanitaryware, supportive rails, and hardware compatible with Ginza Junior.',
    logoText: 'HEWI',
    logoImage: '/images/logos/hewi.svg'
  },
  {
    name: 'SANAURA',
    tagline: 'Spanish Alabaster Lighting & Luxury Mirrors',
    origin: 'Spain',
    description: 'Artisan hand-carved Spanish alabaster wall sconces and anti-fog backlit LED mirrors for Carlyle collection.',
    logoText: 'SANAURA',
    logoImage: '/images/logos/sanaura.svg'
  }
];
