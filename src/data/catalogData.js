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
    id: 'mixers',
    title: 'Luxury Mixers & Brassware',
    subtitle: 'La Dolce Vita Italian Series & PVD Finishes',
    icon: 'Droplets',
    image: '/images/sestriere_collection.png',
    items: [
      'Monoblock Basin Mixers',
      'Concealed 2-Way & 3-Way Shower Mixers',
      'Floor-Mounted Freestanding Bathtub Fillers',
      'Wall-Mounted Spouts & Bidet Mixers',
      'Sensor-Activated Touchless Brassware'
    ],
    specs: {
      warranty: '10 Years Warranty',
      certification: 'WRAS & ESMA Certified',
      cartridge: 'Kerox European Ceramic Discs'
    }
  },
  {
    id: 'bagnospa',
    title: 'Bagnospa & Showering',
    subtitle: 'Thermostatic Recessed LED Rain & Laminar Jets',
    icon: 'ShowerHead',
    image: '/images/studio316_collection.png',
    items: [
      'Recessed LED Chromotherapy Rain Shower Heads',
      'Cascade Waterfall & Laminar Stream Jets',
      'Multi-Function Concealed Body Sprays',
      'Smart Thermostatic Push-Button Control Valves',
      'Grade 316 Stainless Steel Outdoor Shower Columns'
    ],
    specs: {
      flowControl: 'Eco-Flow Water Conservation',
      lighting: 'Integrated Low-Voltage RGB LED',
      material: 'Grade 316 Marine Stainless Steel'
    }
  },
  {
    id: 'furniture',
    title: 'Furniture & Sanitaryware',
    subtitle: 'Rimless Wall-Mounted WCs & Touchless Cisterns',
    icon: 'Bath',
    image: '/images/carlyle_collection.png',
    items: [
      'Wall-Mounted Modular Vanities',
      'Integrated Custom Porcelain Wash Basins',
      'Rimless Hygienic Wall-Mounted WCs',
      'Bidet Solutions & Smart Heated Seats',
      'Concealed Touchless Pneumatic Cistern Plates'
    ],
    specs: {
      glaze: 'AquaClean Anti-Bacterial Nanoglaze',
      flush: 'Dual Flush 3/4.5L Eco Technology',
      mounting: 'Heavy-Duty Steel Carrier Systems'
    }
  },
  {
    id: 'basins',
    title: 'Basins & Countertops',
    subtitle: 'Murano Glass, Alpine Porcelain & Bagnoquartz',
    icon: 'Box',
    image: '/images/ginza_collection.png',
    items: [
      'Alpine Custom Cut Porcelain Slabs',
      'Murano Handcrafted Crystal Glass Vessels',
      'Natural Italian Travertine & Calacatta Marble',
      'Bagnoquartz Composite Stone Countertops',
      'Artisan Concrete & Sculptural Freestanding Basins'
    ],
    specs: {
      thickness: 'Slim 4mm Rim Profile',
      durability: 'Scratch & Stain Resistant',
      origin: 'Crafted in Italy & Spain'
    }
  },
  {
    id: 'bathing',
    title: 'Bathing, Enclosures & Wetrooms',
    subtitle: 'Freestanding Tubs & Glass Wetroom Systems',
    icon: 'Sparkles',
    image: '/images/hero_bathtub.png',
    items: [
      'Bagnoquartz Freestanding Soaking Bathtubs',
      'Custom Frameless Glass Wetroom Enclosures',
      'Tile-Insert Stainless Steel Linear Drains',
      'Concealed Floor Drain Channels',
      'Integrated Heated Towel Warmers'
    ],
    specs: {
      glass: '8mm Tempered Easy-Clean Glass',
      drainage: 'High-Capacity 50L/min Flow Rate',
      insulation: 'Thermal-Heat Retention Resin'
    }
  },
  {
    id: 'tiles',
    title: 'Luxury Architectural Tiles',
    subtitle: 'Large Format Porcelain Slabs & Terrazzo',
    icon: 'Layers',
    image: '/images/fonteyn_collection.png',
    items: [
      '120x280cm Large Format Porcelain Wall Slabs',
      'Bookmatched Italian Marble Effect Tiles',
      'Architectural Terrazzo & Fluted Wall Panels',
      'Anti-Slip R11 Outdoor Patio Porcelain Slabs',
      'Tactile Metallic & Textured Wall Coverings'
    ],
    specs: {
      absorption: '<0.1% Ultra-Low Water Absorption',
      finish: 'Polished, Honed & Micro-Structured',
      rectified: '100% Precision Rectified Edges'
    }
  }
];

export const MATERIALS_DATA = {
  metallics: [
    { name: 'PVD Gold', hex: '#D4AF37', texture: 'Polished Champagne Gold', code: 'PVD-GLD-01' },
    { name: 'PVD Oyster', hex: '#C5C5C0', texture: 'Brushed Platinum Pearl', code: 'PVD-OYS-02' },
    { name: 'Soft Bronze', hex: '#8C6D53', texture: 'Warm Antique Satin Bronze', code: 'PVD-BRZ-03' },
    { name: 'Brushed Nickel', hex: '#A3A39F', texture: 'Silky Fine Brushed Steel', code: 'PVD-NCK-04' },
    { name: 'PVD Santiago', hex: '#635345', texture: 'Dark Titanium Copper Alloy', code: 'PVD-STG-05' },
    { name: 'Chrome', hex: '#E5E7EB', texture: 'Mirror Polished Pure Chrome', code: 'CHM-MIR-06' }
  ],
  armour: [
    { name: 'Cocoa', hex: '#4A3B32', texture: 'Matte Tactile Warm Earth', code: 'ARM-CCA-10' },
    { name: 'Truffle', hex: '#6B5E55', texture: 'Deep Greige Velvet Touch', code: 'ARM-TRF-11' },
    { name: 'Blueberry', hex: '#2A364F', texture: 'Deep Midnight Matte Blue', code: 'ARM-BLU-12' },
    { name: 'Mandarin', hex: '#C85A32', texture: 'Terracotta Sunset Matte', code: 'ARM-MND-13' },
    { name: 'Lip Gloss', hex: '#A83B4C', texture: 'Satin Crimson Accent Coating', code: 'ARM-LIP-14' },
    { name: 'Sage', hex: '#7A8B7B', texture: 'Calming Botanical Olive Green', code: 'ARM-SGE-15' },
    { name: 'Baby Pink', hex: '#E8C5C8', texture: 'Soft Architectural Blush', code: 'ARM-PNK-16' },
    { name: 'Misty Grey', hex: '#B8BCBF', texture: 'Neutral Concrete Soft Smoke', code: 'ARM-GRY-17' }
  ],
  materials: [
    { name: 'Italian Travertine', hex: '#D8C3A5', texture: 'Vein-Cut Cross-Filled Natural Travertine', code: 'MAT-TRV-20' },
    { name: 'Calacatta Viola', hex: '#E5D6DC', texture: 'Pure White Marble with Rich Cabernet Veining', code: 'MAT-VLA-21' },
    { name: 'Murano Glass', hex: '#E0F2FE', texture: 'Facetted Crystal Clear Venetian Glass', code: 'MAT-MRN-22' },
    { name: '316 SS Marine', hex: '#94A3B8', texture: 'AISI 316L Salt-Resistant Brushed Alloy', code: 'MAT-316-23' }
  ]
};

export const PROJECTS_DATA = [
  {
    name: 'Bluewaters Island',
    location: 'Dubai, UAE',
    type: 'Luxury Residential & Hospitality',
    details: 'Custom Bagnodesign brassware, freestanding tubs, and large-format porcelain wall slabs installed across ultra-luxury seafront apartments.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Museum of the Future',
    location: 'Dubai, UAE',
    type: 'Architectural Icon & Public Landmark',
    details: 'Touchless concealed sensor brassware and custom stainless steel wash stations engineered for futuristic high-traffic public space excellence.',
    image: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Zayed International Airport',
    location: 'Abu Dhabi, UAE',
    type: 'International Terminal & VIP Lounges',
    details: 'Heavy-duty WRAS-approved sanitaryware, touchless pneumatic cisterns, and water-conserving commercial mixer solutions.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'The Lana - Dorchester Collection',
    location: 'Business Bay, Dubai',
    type: '5-Star Ultra-Luxury Hotel & Spa',
    details: 'Carlyle and Sestriere bespoke gold mixers with Murano glass levers, paired with natural Calacatta marble vanity slabs in penthouse suites.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'VOX Cinemas',
    location: 'UAE & Kingdom of Saudi Arabia',
    type: 'Commercial Entertainment Venues',
    details: 'High-traffic commercial sanitary solutions, modern matte black sensor mixers, and integrated solid surface wash basins.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Jumeirah Al Naseem',
    location: 'Jumeirah, Dubai',
    type: 'Beachfront Resort & Spa Villas',
    details: 'Grade 316 Marine Stainless Steel outdoor poolside showers, freestanding soaking tubs, and custom rain shower chromotherapy systems.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80'
  }
];
