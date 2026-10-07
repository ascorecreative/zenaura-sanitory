// Comprehensive Brand Portfolio Data for Zenaura Sanitary (63 Luxury Brands)

export const ALL_BRANDS_DATA = [
  // 1. SANIPEX GROUP
  {
    id: 'sanipex-group',
    name: 'SANIPEX GROUP',
    origin: 'Dubai • Worldwide',
    category: 'Sanitary & Mixers',
    tagline: 'Architectural Tiles, Slabs, Outdoor Living & Luxury Sanitaryware',
    description: 'SANIPEX GROUP is a global leader in high-end bathroom, kitchen, and outdoor lifestyle solutions. Operating across 30+ countries, SANIPEX GROUP curates over 5,000 architectural products spanning Italian brassware, spa systems, porcelain slabs, and luxury outdoor furniture.',
    features: [
      'Comprehensive architectural bathroom & outdoor portfolio',
      'Exclusive distribution of Bagnodesign, Bystro & Gymkhana',
      'Grade 316 Stainless Steel & PVD metallic coatings',
      'WRAS, CE & ESMA certified international compliance'
    ],
    logoImage: '/images/logos/sanipex.svg',
    bannerImage: '/images/sanipex_slides/slide1_ginza.webp',
    specs: { warranty: '10 Years Warranty', certification: 'WRAS & ESMA Certified', material: 'Grade 316 Stainless Steel & PVD' },
    popularProducts: [
      { name: 'Sanipex Porcelain Slab System', category: 'Slabs', image: '/images/sanipex_slides/slide4_slabs.webp', description: 'Bookmatched 120x280cm porcelain slabs for seamless wall cladding.' },
      { name: 'Bagnospa Hydro Rain Shower', category: 'Showering', image: '/images/sestriere_collection.png', description: 'Thermostatic chromotherapy recessed ceiling shower head.' },
      { name: 'Ginza Countertop Basin', category: 'Sanitaryware', image: '/images/addon/image1.png', description: 'Japanese boutique 4mm thin-rim ceramic vessel bowl.' }
    ],
    seoTitle: 'SANIPEX GROUP UAE | Authorized Distributor & Supplier | Zenaura Sanitary',
    seoDescription: 'Explore the full SANIPEX GROUP catalog at Zenaura Sanitary. Official supplier of Bagnodesign, Bystro, porcelain slabs, tiles & outdoor living solutions across the UAE.',
    seoKeywords: 'SANIPEX GROUP UAE, Bagnodesign Dubai, Sanipex Ajman, Luxury Sanitaryware UAE, Sanipex Tiles, Sanipex Outdoor'
  },

  // 2. BAGNODESIGN
  {
    id: 'bagnodesign',
    name: 'BAGNODESIGN',
    origin: 'London • Milan',
    category: 'Sanitary & Mixers',
    tagline: 'Luxury Italian & UK Sanitaryware, Mixers & Spa Systems',
    description: 'BAGNODESIGN brings refined British design and Italian engineering to sophisticated interiors. Recognized globally for iconic brassware collections like Sestriere, Carlyle, and M2, BAGNODESIGN offers complete, end-to-end luxury bathroom architecture.',
    features: [
      'Award-winning Italian & British mixer craftsmanship',
      'PVD Gold, Oyster, Santiago & Armour color finishes',
      'Integrated floating porcelain vanities & Murano glass',
      'Eco-conscious aerators with 5L/min water efficiency'
    ],
    logoImage: '/images/logos/bagnodesign.svg',
    bannerImage: '/images/hero_bathtub.png',
    specs: { warranty: '10 Years Warranty', certification: 'WRAS Approved', material: 'Solid Italian Brass & PVD' },
    popularProducts: [
      { name: 'Carlyle Monobloc Basin Mixer', category: 'Mixers', image: '/images/addon/image6.png', description: 'Scalloped edge mixer with PVD Gold coating.' },
      { name: 'Sestriere Freestanding Bath Filler', category: 'Bath Fillers', image: '/images/sestriere_collection.png', description: 'Architectural column filler with hand shower.' },
      { name: 'M2 Rimless Wall-Hung WC', category: 'Sanitaryware', image: '/images/addon/image10.png', description: 'Matte white ceramic rimless WC with soft close seat.' }
    ],
    seoTitle: 'BAGNODESIGN London & Milan UAE | Zenaura Sanitary',
    seoDescription: 'Discover BAGNODESIGN luxury mixers, showers, WCs & vanities in UAE. Authorized supplier of BAGNODESIGN London/Milan collections at Zenaura Sanitary.',
    seoKeywords: 'BAGNODESIGN UAE, BAGNODESIGN Dubai, BAGNODESIGN Ajman, Sestriere Mixers, Carlyle Bathroom'
  },

  // 3. GROHE
  {
    id: 'grohe',
    name: 'GROHE',
    origin: 'Germany',
    category: 'Sanitary & Mixers',
    tagline: 'German Engineering, Pure Freude an Wasser & Thermostatic Excellence',
    description: 'GROHE is the global pioneer in luxury sanitary fittings and water management technology. Renowned for precision German engineering, GROHE SilkMove cartridges, StarLight chrome, and Grohtherm thermostatic valves ensure unmatched performance and durability.',
    features: [
      'German engineered ceramic cartridge technology',
      'GROHE StarLight scratch-resistant surface finish',
      'Grohtherm 100% anti-scald thermostatic safety',
      'GROHE EcoJoy water saving reduction up to 50%'
    ],
    logoImage: '/images/logos/grohe.svg',
    bannerImage: '/images/addon/image10.png',
    specs: { warranty: '10 Years Warranty', certification: 'DIN ISO 9001 & ESMA Certified', material: 'DR Brass & German Polymers' },
    popularProducts: [
      { name: 'Grohtherm SmartControl Concealed Shower System', category: 'Showering', image: '/images/addon/image10.png', description: 'Push-button intuitive thermostatic shower control valve.' },
      { name: 'Eurocube Basin Mixer', category: 'Mixers', image: '/images/addon/image11.png', description: 'Sharp geometric architecture in Grohe StarLight chrome.' },
      { name: 'Rapid SL Concealed Cistern System', category: 'Flushing', image: '/images/addon/image12.png', description: 'Self-supporting steel frame for wall-hung WCs.' }
    ],
    seoTitle: 'GROHE Germany UAE | Official Supplier | Zenaura Sanitary',
    seoDescription: 'Buy original GROHE faucets, thermostatic shower systems, concealed cisterns & kitchen mixers in UAE at Zenaura Sanitary. German quality guaranteed.',
    seoKeywords: 'GROHE UAE, GROHE Dubai, GROHE Ajman, GROHE Showers, Grohtherm SmartControl, GROHE Faucets'
  },

  // 4. GEBERIT
  {
    id: 'geberit',
    name: 'GEBERIT',
    origin: 'Switzerland',
    category: 'Sanitary & Mixers',
    tagline: 'Swiss Sanitary Technology, Concealed Cisterns & Rimless Hygiene',
    description: 'GEBERIT is the undisputed European market leader in concealed flushing systems and sanitary technology. Engineered in Switzerland, GEBERIT Duofix frames, Sigma actuator flush plates, and AquaClean smart toilets set the gold standard for hygiene and acoustic quietness.',
    features: [
      'Swiss precision engineered Duofix concealed frames',
      'Sigma01, Sigma20 & Sigma50 designer flush plates',
      'Whisper quiet filling valves & acoustic isolation',
      'AquaClean shower toilets with automated hygiene'
    ],
    logoImage: '/images/logos/geberit.svg',
    bannerImage: '/images/addon/image12.png',
    specs: { warranty: '10 Years Warranty', certification: 'CE & Swiss Quality Approved', material: 'High-Density HDPE & Stainless Steel' },
    popularProducts: [
      { name: 'Geberit Duofix Element 114cm for Wall WC', category: 'Flushing', image: '/images/addon/image12.png', description: 'Concealed frame with 8cm Sigma cistern.' },
      { name: 'Sigma01 Dual Flush Plate Bright Chrome', category: 'Flush Plates', image: '/images/addon/image13.png', description: 'Water-saving dual flush actuator plate.' },
      { name: 'Geberit Acanto Rimless Wall-Hung WC', category: 'Sanitaryware', image: '/images/addon/image14.png', description: 'TurboFlush technology rimless ceramic pan.' }
    ],
    seoTitle: 'GEBERIT Switzerland UAE | Concealed Cisterns & WCs | Zenaura Sanitary',
    seoDescription: 'Official supplier of GEBERIT Swiss concealed cisterns, Duofix frames, flush plates & rimless WCs in UAE at Zenaura Sanitary. In-stock availability.',
    seoKeywords: 'GEBERIT UAE, GEBERIT Dubai, GEBERIT Cistern Ajman, Geberit Duofix, Geberit Flush Plate'
  },

  // 5. JAGUAR
  {
    id: 'jaquar',
    name: 'JAGUAR',
    origin: 'Global Excellence',
    category: 'Sanitary & Mixers',
    tagline: 'Complete Bathroom Solutions, Hydrotherapy & Designer Brassware',
    description: 'JAGUAR (Jaquar Bath + Light) is one of the fastest-growing global bathroom brands, operating across 55+ countries. Offering complete high-performance faucets, thermostatic showers, whirlpool tubs, and LED ambient illumination.',
    features: [
      'Jaquar Bath + Light integrated bathroom solutions',
      'PVD finishes including Rose Gold, Antique Bronze & Gold',
      'Thermostatic shower columns with anti-scald safety',
      'Water-saving air-in-shower aeration systems'
    ],
    logoImage: '/images/logos/jaquar.svg',
    bannerImage: '/images/hero_fluted.png',
    specs: { warranty: '10 Years Warranty', certification: 'ISO 9001 & ESMA Approved', material: 'Forged Brass & PVD' },
    popularProducts: [
      { name: 'Jaquar Kubix Prime Single Lever Basin Mixer', category: 'Mixers', image: '/images/hero_fluted.png', description: 'Cubical architectural basin faucet.' },
      { name: 'Jaquar Thermostatic Shower Column', category: 'Showering', image: '/images/hero_bathtub.png', description: 'Multi-function overhead shower with body jets.' },
      { name: 'Jaquar Ceramic Freestanding Bathtub', category: 'Bathing', image: '/images/hero_bathtub.png', description: 'Monolithic acrylic bath with integrated overflow.' }
    ],
    seoTitle: 'JAGUAR Bath + Light UAE | Authorized Partner | Zenaura Sanitary',
    seoDescription: 'Explore JAGUAR luxury faucets, showers, whirlpools & sanitaryware in UAE. Complete bathroom solutions with 10-year warranty at Zenaura Sanitary.',
    seoKeywords: 'JAGUAR Bath UAE, Jaquar Faucets Dubai, Jaquar Sanitary Ajman, Jaquar Showers UAE'
  },

  // 6. RAK CERAMICS
  {
    id: 'rak-ceramics',
    name: 'RAK CERAMICS',
    origin: 'UAE • Global',
    category: 'Tiles & Surfaces',
    tagline: 'World Leading Porcelain Slabs, Architectural Ceramics & Sanitaryware',
    description: 'RAK CERAMICS is one of the world’s largest ceramic brands, producing over 118 million square meters of tiles and 5 million pieces of sanitaryware annually. Renowned for MAXIMUS super-sized porcelain slabs, antimicrobial surface coatings, and luxury bath collections.',
    features: [
      'MAXIMUS jumbo format porcelain slabs (120x280cm / 160x320cm)',
      'Ultra-low water absorption (<0.05%) porcelain tile technology',
      'Antimicrobial Hygiene ceramic glazes',
      'Precision rectified edges for seamless grout lines'
    ],
    logoImage: '/images/logos/rak.svg',
    bannerImage: '/images/sanipex_slides/slide4_slabs.webp',
    specs: { warranty: '10 Years Warranty', certification: 'ISO 13006 & ESMA Certified', material: 'Vitrified Porcelain & Fine Ceramics' },
    popularProducts: [
      { name: 'MAXIMUS Calacatta Marble Porcelain Slab', category: 'Slabs', image: '/images/sanipex_slides/slide4_slabs.webp', description: '120x280cm bookmatched polished porcelain slab.' },
      { name: 'RAK Resort Rimless Wall-Hung WC', category: 'Sanitaryware', image: '/images/addon/image1.png', description: 'Compact water-saving rimless ceramic pan.' },
      { name: 'RAK Venice Terrazzo Porcelain Tile', category: 'Tiles', image: '/images/cat_tiles_terrazzo.jpg', description: 'Decorative aggregate porcelain floor tile.' }
    ],
    seoTitle: 'RAK CERAMICS UAE | Porcelain Slabs & Tiles | Zenaura Sanitary',
    seoDescription: 'Official RAK CERAMICS distributor in UAE. Discover MAXIMUS jumbo slabs, floor tiles & sanitaryware collections at Zenaura Sanitary Ajman.',
    seoKeywords: 'RAK CERAMICS UAE, RAK Tiles Dubai, RAK Slabs Ajman, RAK Sanitaryware, MAXIMUS Porcelain Slabs'
  },

  // 7. BONGIO
  {
    id: 'bongio',
    name: 'BONGIO',
    origin: 'Italy (Since 1936)',
    category: 'Sanitary & Mixers',
    tagline: 'Italian Luxury Artisan Mixers & Handcrafted Brassware since 1936',
    description: 'Founded on the shores of Lake Orta in 1936, BONGIO represents the pinnacle of Italian brassware artistry. Fusing artisanal craftsmanship with avant-garde design, BONGIO mixers grace luxury villas, yachts, and boutique hotels worldwide.',
    features: [
      '88+ years of Italian handcrafted brassware heritage',
      'Murano hand-blown glass faucet handles & accents',
      'Sustainable eco-flow ceramic cartridges',
      'Bespoke PVD finishes & 24k Gold plating'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image18.png',
    specs: { warranty: '10 Years Warranty', certification: 'Made in Italy 100% Certified', material: 'Dezincification Resistant Brass & Crystal' },
    popularProducts: [
      { name: 'Bongio T cross Monobloc Mixer', category: 'Mixers', image: '/images/addon/image18.png', description: 'Iconic T-handle mixer in PVD Brushed Gold.' },
      { name: 'Bongio Wellness Rain Shower Head', category: 'Showering', image: '/images/addon/image17.png', description: 'Recessed ceiling rain shower with LED atmosphere.' },
      { name: 'Bongio One Hole Bidet Faucet', category: 'Mixers', image: '/images/addon/image18.png', description: 'Swivel aerator bidet tap in Tuscan Bronze.' }
    ],
    seoTitle: 'BONGIO Italy Mixers UAE | Zenaura Sanitary',
    seoDescription: 'Discover BONGIO 1936 handcrafted Italian mixers & brassware in UAE. Authorized partner offering bespoke luxury faucets at Zenaura Sanitary.',
    seoKeywords: 'BONGIO Italy, Bongio Faucets UAE, Bongio Mixers Dubai, Italian Designer Taps UAE'
  },

  // 8. BOSSINI
  {
    id: 'bossini',
    name: 'BOSSINI',
    origin: 'Italy',
    category: 'Wellness & Hydrotherapy',
    tagline: 'Italian Hydrotherapy Shower Systems, Shower Columns & Wellness Tech',
    description: 'BOSSINI has been a world leader in shower systems and hydrotherapy since 1960. Engineered in Italy, Bossini shower columns, multi-pattern hand showers, and chromotherapy ceiling heads blend ergonomic luxury with eco-friendly water management.',
    features: [
      'Easy-Clean anti-limestone silicone spray nozzles',
      'Eco-Smart water saving flow restrictors',
      'Chromotherapy LED rain & mist spray modes',
      'Heavy-duty double-interlocked flexible shower hoses'
    ],
    logoImage: null,
    bannerImage: '/images/hero_bathtub.png',
    specs: { warranty: '5 Years Warranty', certification: 'UNI EN ISO 9001 Approved', material: 'Brass & ABS Chrome' },
    popularProducts: [
      { name: 'Bossini Dream-Flat Ceiling Light Rain Head', category: 'Showering', image: '/images/hero_bathtub.png', description: 'Stainless steel ultra-flat shower head with RGB LEDs.' },
      { name: 'Bossini Dinamica Shower Column', category: 'Shower Columns', image: '/images/addon/image10.png', description: 'Thermostatic column with hand shower & diverter.' },
      { name: 'Bossini Zenith Hand Shower Set', category: 'Hand Showers', image: '/images/addon/image11.png', description: '3-spray massage hand shower with wall bracket.' }
    ],
    seoTitle: 'BOSSINI Italy Showers UAE | Zenaura Sanitary',
    seoDescription: 'Buy BOSSINI Italian shower heads, thermostatic columns & hydrotherapy systems in UAE at Zenaura Sanitary. Official partner in Ajman/Dubai.',
    seoKeywords: 'BOSSINI Italy, Bossini Showers UAE, Bossini Shower Column Dubai, Hydrotherapy Showers'
  },

  // 9. DORNBRACHT
  {
    id: 'dornbracht',
    name: 'DORNBRACHT',
    origin: 'Germany',
    category: 'Sanitary & Mixers',
    tagline: 'German Ultra-Luxury Designer Fittings & Architectural Spa Culture',
    description: 'DORNBRACHT represents the zenith of German luxury fittings and architectural water design. Famous for iconic series like MEM, Tara, and CL.1, Dornbracht transforms water into an art form with precision manufacturing in Iserlohn, Germany.',
    features: [
      'Ultra-precise German manufacturing quality',
      'Exclusive finishes including Cyprum, Dark Platinum & Durabrass',
      'Integrated Spa Solutions & Sensory Sky rain cabins',
      '100% lead-free brass formulations'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image17.png',
    specs: { warranty: '10 Years Warranty', certification: 'DVGW & ISO 9001 Certified', material: 'Unleaded Brass & Precious Metals' },
    popularProducts: [
      { name: 'Dornbracht Tara. Three-Hole Basin Mixer', category: 'Mixers', image: '/images/addon/image17.png', description: 'The legendary cross-handle architectural faucet.' },
      { name: 'Dornbracht MEM Wall Mounted Bath Spout', category: 'Bath Spouts', image: '/images/addon/image18.png', description: 'Flat wide water sheet cascade spout.' },
      { name: 'Dornbracht Rainmoon Spa Module', category: 'Spas', image: '/images/hero_bathtub.png', description: 'Weightless water massage dome with light therapy.' }
    ],
    seoTitle: 'DORNBRACHT Germany UAE | Ultra-Luxury Fittings | Zenaura Sanitary',
    seoDescription: 'Experience DORNBRACHT German designer faucets & spa systems in UAE at Zenaura Sanitary. Premium supplier for luxury villas & penthouses.',
    seoKeywords: 'DORNBRACHT UAE, Dornbracht Dubai, Dornbracht Tara, Luxury German Faucets UAE'
  },

  // 10. JEE-O
  {
    id: 'jee-o',
    name: 'JEE-O',
    origin: 'Netherlands',
    category: 'Sanitary & Mixers',
    tagline: 'Minimalist Freestanding Stainless Steel Showers, Taps & Solid Surface Basins',
    description: 'JEE-O creates bold, minimalist freestanding outdoor and indoor showers, taps, and baths. Crafted from high-grade AISI 316 stainless steel, JEE-O designs feature single-lever ring controls and raw industrial aesthetics.',
    features: [
      'Grade AISI 316 outdoor-proof stainless steel construction',
      'Iconic ring-handle control valve mechanisms',
      'DADOquartz solid surface freestanding bathtubs',
      'All-weather UV & saltwater resistance'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide3_pergola.webp',
    specs: { warranty: '10 Years Warranty', certification: 'CE & Outdoor Grade Approved', material: 'Stainless Steel AISI 316' },
    popularProducts: [
      { name: 'JEE-O Original Freestanding Shower Column', category: 'Outdoor Showers', image: '/images/sanipex_slides/slide3_pergola.webp', description: 'Freestanding 316 steel shower with ring handle.' },
      { name: 'JEE-O Soho High Basin Mixer', category: 'Mixers', image: '/images/addon/image1.png', description: 'Matte black industrial lever basin faucet.' },
      { name: 'JEE-O Bloom Freestanding Bath', category: 'Bathtubs', image: '/images/hero_bathtub.png', description: 'DADOquartz resin composite freestanding bathtub.' }
    ],
    seoTitle: 'JEE-O Stainless Steel Showers UAE | Zenaura Sanitary',
    seoDescription: 'Discover JEE-O Dutch freestanding 316 stainless steel showers & taps in UAE at Zenaura Sanitary. Ideal for luxury poolsides & villas.',
    seoKeywords: 'JEE-O Showers UAE, JEE-O Dubai, Freestanding Outdoor Shower UAE, 316 Stainless Steel Shower'
  },

  // 11. LEFROY BROOKS
  {
    id: 'lefroy-brooks',
    name: 'LEFROY BROOKS',
    origin: 'United Kingdom',
    category: 'Sanitary & Mixers',
    tagline: 'The Classic Bathroom, Century of Classics & British Heritage Brassware',
    description: 'LEFROY BROOKS is the ultimate reference for luxury heritage bathrooms. Tracing British design history through the Victorian 1900s, Edwardian 1910s, French 1920s, and Art Deco 1930s, Lefroy Brooks crafts timeless brassware for palaces and estates.',
    features: [
      'Authentic historical design era collections (1900 to 1950)',
      'Hand-cast solid brass with ceramic indices',
      'Finishes include Silver Nickel, Antique Gold & Chromium',
      'Hand-pressed ceramic tiles & heritage chinaware'
    ],
    logoImage: null,
    bannerImage: '/images/carlyle_collection.png',
    specs: { warranty: '10 Years Warranty', certification: 'UK Heritage Standard Approved', material: 'Cast Brass & English Porcelain' },
    popularProducts: [
      { name: '1900 Classic Three-Hole Basin Tap', category: 'Mixers', image: '/images/carlyle_collection.png', description: 'Victorian white ceramic lever handle faucet.' },
      { name: 'Mackintosh Art Deco Shower Set', category: 'Showering', image: '/images/addon/image6.png', description: '1930s geometric exposed shower valve with rigid riser.' },
      { name: 'La Chapelle Console Basin Stand', category: 'Sanitaryware', image: '/images/addon/image5.png', description: 'Fireclay basin on nickel legs.' }
    ],
    seoTitle: 'LEFROY BROOKS Heritage Brassware UAE | Zenaura Sanitary',
    seoDescription: 'Buy LEFROY BROOKS British heritage taps, showers & chinaware in UAE at Zenaura Sanitary. Victorian & Art Deco luxury bathrooms.',
    seoKeywords: 'LEFROY BROOKS UAE, Lefroy Brooks Dubai, Heritage Taps UAE, Classic British Bathrooms'
  },

  // 12. NOBILI
  {
    id: 'nobili',
    name: 'NOBILI',
    origin: 'Italy',
    category: 'Sanitary & Mixers',
    tagline: 'Italian Eco-Friendly Engineered Faucets & High-Efficiency Mixers',
    description: 'Carlo Nobili Rubinetterie is one of Italy’s most technologically advanced brassware manufacturers. Producing over 2.8 million items annually in Suno, Italy, Nobili combines eco-friendly Nobili Widd® energy-saving cartridges with slick Italian aesthetics.',
    features: [
      'Nobili Widd® 28mm friction-free ceramic cartridges',
      '100% zero-waste Italian production technology',
      'Nobili EcoFresh water saving temperature limiters',
      'PVD Scratch-proof Velvet Black & Inox finishes'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image18.png',
    specs: { warranty: '10 Years Warranty', certification: 'ISO 9001 & WRAS Certified', material: 'Eco Brass & PVD' },
    popularProducts: [
      { name: 'Nobili Flag Outdoor Kitchen Mixer', category: 'Kitchen Taps', image: '/images/addon/image18.png', description: 'Grade 316 stainless steel pull-out swivel mixer.' },
      { name: 'Nobili Dress Designer Basin Tap', category: 'Mixers', image: '/images/addon/image17.png', description: 'Customizable handle casing in matte slate.' },
      { name: 'Nobili Seven Concealed Shower Valve', category: 'Showering', image: '/images/addon/image10.png', description: 'Slim 2-way push button thermostatic mixer.' }
    ],
    seoTitle: 'NOBILI Italian Faucets UAE | Zenaura Sanitary',
    seoDescription: 'Official NOBILI Rubinetterie Italian faucets & kitchen mixers in UAE at Zenaura Sanitary. Energy-saving luxury brassware.',
    seoKeywords: 'NOBILI Faucets UAE, Nobili Rubinetterie Dubai, Nobili Mixers Ajman, Italian Kitchen Taps'
  },

  // 13. STELLA
  {
    id: 'stella',
    name: 'STELLA',
    origin: 'Italy (Since 1882)',
    category: 'Sanitary & Mixers',
    tagline: 'Rubinetterie Stella 1882, Royalty Brassware & Timeless Italian Craft',
    description: 'Rubinetterie Stella is Italy’s oldest luxury tapware maker, crafting royal faucets since 1882. Found in the Grand Hotel Villa d’Este and historic ocean liners, Stella collections like Roma and Aster represent historic Italian brassware perfection.',
    features: [
      '142+ years of continuous Italian tapware craftsmanship',
      'Iconic Roma star-handle design patented in 1926',
      'Bespoke hand-polishing and 24k Gold electroplating',
      'Cast brass bodies tested to 50 BAR water pressure'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image8.png',
    specs: { warranty: '10 Years Warranty', certification: 'Original Italian Heritage Certified', material: 'Heavy Cast Brass & Gold Plate' },
    popularProducts: [
      { name: 'Stella Roma Star-Handle Basin Faucet', category: 'Mixers', image: '/images/addon/image8.png', description: 'The original 1926 Italian star-handle basin tap.' },
      { name: 'Stella Aster Monobloc Mixer', category: 'Mixers', image: '/images/addon/image7.png', description: 'Neoclassical lever handle basin faucet.' },
      { name: 'Stella Italico Exposed Shower System', category: 'Showering', image: '/images/addon/image6.png', description: 'Thermostatic shower column with phone handset.' }
    ],
    seoTitle: 'STELLA 1882 Italy Faucets UAE | Zenaura Sanitary',
    seoDescription: 'Discover Rubinetterie STELLA 1882 historic Italian luxury faucets in UAE at Zenaura Sanitary. Royal brassware for grand villas.',
    seoKeywords: 'STELLA 1882 UAE, Rubinetterie Stella Dubai, Stella Roma Faucet, Classic Italian Taps'
  },

  // 14. THG PARIS
  {
    id: 'thg-paris',
    name: 'THG PARIS',
    origin: 'France',
    category: 'Sanitary & Mixers',
    tagline: 'Haute Couture French Fittings, Baccarat & Lalique Crystal Accents',
    description: 'THG PARIS is the pinnacle of French Haute Couture bath fittings. Collaborating with world-famous crystal houses like Baccarat, Lalique, and Daum, THG Paris crafts hand-finished jewelry for water in Normandy, France.',
    features: [
      'Handcrafted Normandy metalworking & lapidary artistry',
      'Genuine Baccarat, Lalique & Bernardaud porcelain handles',
      'Over 40 bespoke precious metal finishes (Rose Gold, Palladium, Bronze)',
      'Custom monograms and jewel-encrusted handles'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image8.png',
    specs: { warranty: '10 Years Warranty', certification: 'EPV French Living Heritage Approved', material: 'Cast Brass & French Crystal' },
    popularProducts: [
      { name: 'THG Paris Lalique Papillon Basin Mixer', category: 'Mixers', image: '/images/addon/image8.png', description: 'Satin crystal butterfly handles with 24k Gold spout.' },
      { name: 'THG Paris Baccarat Icon Faucet', category: 'Mixers', image: '/images/addon/image7.png', description: 'Deep red Baccarat crystal cross handles.' },
      { name: 'THG Paris Oceanique Bath Set', category: 'Bath Fillers', image: '/images/hero_bathtub.png', description: 'Sculptural shell motif rim-mounted bath filler.' }
    ],
    seoTitle: 'THG PARIS French Luxury Fittings UAE | Zenaura Sanitary',
    seoDescription: 'Buy THG PARIS Haute Couture French faucets with Lalique & Baccarat crystal handles in UAE at Zenaura Sanitary. Royal French elegance.',
    seoKeywords: 'THG PARIS UAE, THG Paris Dubai, Lalique Faucet UAE, Baccarat Crystal Taps'
  },

  // 15. VOLA
  {
    id: 'vola',
    name: 'VOLA',
    origin: 'Denmark',
    category: 'Sanitary & Mixers',
    tagline: 'Iconic Danish Modernist Architectural Taps by Arne Jacobsen (1968)',
    description: 'Designed in 1968 by legendary Danish architect Arne Jacobsen, VOLA is the world’s original minimalist tapware system. Built in Horsens, Denmark, VOLA’s modular concealed architecture hides all functional mechanics behind pristine wall surfaces.',
    features: [
      'Original 1968 Arne Jacobsen modernist design system',
      'Solid brass and AISI 316 stainless steel modular components',
      '28 vibrant powder-coated colors & brushed metallic PVDs',
      'Built-in eco water flow limiters & hands-free sensor taps'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image2.png',
    specs: { warranty: '10 Years Warranty', certification: 'Danish Design Council Awarded', material: 'Dezincification Brass & 316 Stainless Steel' },
    popularProducts: [
      { name: 'VOLA 111 Wall-Mounted Basin Mixer', category: 'Mixers', image: '/images/addon/image2.png', description: 'The iconic 1968 single-lever wall spout faucet.' },
      { name: 'VOLA KV1 Deck-Mounted Kitchen Tap', category: 'Kitchen Taps', image: '/images/addon/image18.png', description: 'Single-lever kitchen mixer with 360 swivel spout.' },
      { name: 'VOLA T39 Modular Heated Towel Rail', category: 'Towel Rails', image: '/images/addon/image1.png', description: 'Individual horizontal heated bars concealed in wall.' }
    ],
    seoTitle: 'VOLA Danish Taps UAE | Arne Jacobsen Faucets | Zenaura Sanitary',
    seoDescription: 'Official VOLA Danish modernist taps & heated towel rails by Arne Jacobsen in UAE at Zenaura Sanitary. Minimalist architectural icon.',
    seoKeywords: 'VOLA Taps UAE, VOLA Dubai, Arne Jacobsen Faucet, VOLA 111, Danish Sanitaryware'
  },

  // 16. AXENT
  {
    id: 'axent',
    name: 'AXENT',
    origin: 'Switzerland',
    category: 'Sanitary & Mixers',
    tagline: 'Swiss Intelligent Smart Toilets, Vacuum Flush & Electronic Bidet Tech',
    description: 'AXENT Switzerland is a global pioneer in intelligent smart toilets and luxury sanitaryware. Engineered in Switzerland, AXENT products combine AST (Axent Smart Technology), tankless vacuum flushing, and automated heated seats.',
    features: [
      'Tankless AST (Axent Smart Technology) vacuum flush',
      'Rear & lady bidet wash spray with warm air dryer',
      'Automated hands-free motion sensor lid opening',
      'Stain-resistant Easy-Clean antibacterial glaze'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image10.png',
    specs: { warranty: '5 Years Warranty', certification: 'CE & Swiss Tech Certified', material: 'Vitreous China & Smart Electronics' },
    popularProducts: [
      { name: 'AXENT.ONE C Plus Smart Toilet', category: 'Smart Toilets', image: '/images/addon/image10.png', description: 'Wall-hung intelligent bidet toilet with app control.' },
      { name: 'AXENT Primus Tankless Floor Standing WC', category: 'Smart Toilets', image: '/images/addon/image1.png', description: 'Tankless floor WC with integrated foot sensor flush.' },
      { name: 'AXENT Grace Thin-Wall Countertop Basin', category: 'Basins', image: '/images/addon/image2.png', description: 'Architectural ceramic vessel bowl with matte finish.' }
    ],
    seoTitle: 'AXENT Smart Toilets UAE | Swiss Bidet Tech | Zenaura Sanitary',
    seoDescription: 'Buy AXENT Switzerland intelligent smart toilets & electronic bidet WCs in UAE at Zenaura Sanitary. Swiss high-tech sanitaryware.',
    seoKeywords: 'AXENT Smart Toilet UAE, AXENT Dubai, Swiss Intelligent Toilet, Bidet Toilet UAE'
  },

  // 17. ALICE CERAMICA
  {
    id: 'alice',
    name: 'ALICE CERAMICA',
    origin: 'Italy',
    category: 'Sanitary & Mixers',
    tagline: 'Italian Designer Ceramic Sanitaryware, Colored Basins & Vanities',
    description: 'Produced in Civita Castellana, ALICE Ceramica creates contemporary Italian ceramic sanitaryware. Celebrated for rich matte color palettes (Matte Olive, Pink, Ocean Blue), Alice offers sculptural basins, rimless WCs, and vanity units.',
    features: [
      'Alizero 100% antibacterial ceramic glaze',
      'Matte color palette options (15+ designer shades)',
      'Slim 3mm ceramic edge technology (Hide collection)',
      'Rimless water-saving flushing performance'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image1.png',
    specs: { warranty: '10 Years Warranty', certification: '100% Made in Italy', material: 'Vitreous China & Matte Glaze' },
    popularProducts: [
      { name: 'Alice Hide Thin-Edge Counter Basin', category: 'Basins', image: '/images/addon/image1.png', description: 'Matte Sage Green 3mm thin-rim vessel bowl.' },
      { name: 'Alice Form Rimless Wall-Hung WC', category: 'Sanitaryware', image: '/images/addon/image10.png', description: 'Matte Cotton White rimless ceramic pan.' },
      { name: 'Alice Unica Modular Vanity Cabinet', category: 'Furniture', image: '/images/addon/image3.png', description: 'Floating vanity unit with integrated ceramic top.' }
    ],
    seoTitle: 'ALICE CERAMICA Italy UAE | Colored Basins & WCs | Zenaura Sanitary',
    seoDescription: 'Discover ALICE Ceramica Italian designer colored basins, rimless WCs & vanities in UAE at Zenaura Sanitary. Made in Italy.',
    seoKeywords: 'ALICE Ceramica UAE, Alice Basins Dubai, Colored Sanitaryware UAE, Italian Basins'
  },

  // 18. BALDUCCI DESIGN
  {
    id: 'balducci-design',
    name: 'BALDUCCI DESIGN',
    origin: 'Italy',
    category: 'Sanitary & Mixers',
    tagline: 'Italian Luxury Marble Vanity Units & Bespoke Bathroom Furniture',
    description: 'BALDUCCI Design crafts bespoke Italian bathroom furniture, pairing rare natural marbles (Calacatta, Nero Marquina) with fluted solid wood and metallic PVD frames. Each piece is a hand-crafted masterwork for luxury residences.',
    features: [
      'Selected Italian Calacatta & Travertine marble tops',
      'FSC-certified solid oak & walnut fluted wood drawers',
      'Soft-close Blumotion hardware concealed runners',
      'Water-repellent anti-scratch nano coating'
    ],
    logoImage: null,
    bannerImage: '/images/fonteyn_collection.png',
    specs: { warranty: '5 Years Warranty', certification: 'Artisanal Italian Certified', material: 'Italian Marble & Solid Wood' },
    popularProducts: [
      { name: 'Balducci Fluted Walnut Vanity Unit', category: 'Furniture', image: '/images/fonteyn_collection.png', description: 'Fluted wood vanity with Calacatta Gold marble top.' },
      { name: 'Balducci Floating Marble Double Basin', category: 'Basins', image: '/images/addon/image4.png', description: 'Seamless integrated double slab marble trough sink.' },
      { name: 'Balducci LED Arch Backlit Mirror', category: 'Mirrors', image: '/images/addon/image5.png', description: 'Anti-fog LED illuminated brushed brass arched mirror.' }
    ],
    seoTitle: 'BALDUCCI DESIGN Marble Vanities UAE | Zenaura Sanitary',
    seoDescription: 'Custom BALDUCCI Design Italian marble vanities & luxury wood bathroom furniture in UAE at Zenaura Sanitary. Bespoke craftsmanship.',
    seoKeywords: 'BALDUCCI Design UAE, Italian Marble Vanity Dubai, Luxury Bathroom Furniture UAE'
  },

  // 19. GALASSIA
  {
    id: 'galassia',
    name: 'GALASSIA',
    origin: 'Italy',
    category: 'Sanitary & Mixers',
    tagline: 'GSI / Ceramica Galassia Italian Contemporary Ceramic Architecture',
    description: 'Ceramica GALASSIA (GSI Group) is a premier Italian manufacturer of ceramic sanitaryware. Working with top architects like Romano Adolini, Galassia produces minimalist washbasins, WCs, and bathtub collections like SmartVB and Midas.',
    features: [
      'Extraglaze+ anti-bacterial ceramic coating',
      'DualSave water conservation 4.5/3L flushing',
      'Ultra-compact thin ceramic rim technology',
      'Coordinated metallic matte color finishes'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image10.png',
    specs: { warranty: '10 Years Warranty', certification: 'UNI EN ISO 14001 Certified', material: 'Fine Fireclay & Ceramic' },
    popularProducts: [
      { name: 'Galassia Midas Gold-Rim Counter Basin', category: 'Basins', image: '/images/addon/image1.png', description: 'White ceramic basin with real 24k Gold outer rim.' },
      { name: 'Galassia SmartVB Wall-Hung Rimless WC', category: 'Sanitaryware', image: '/images/addon/image10.png', description: 'Compact rimless WC with Extraglaze+.' },
      { name: 'Galassia Meg11 Freestanding Pedestal Sink', category: 'Basins', image: '/images/hero_pedestal.png', description: 'Monolithic floor-standing ceramic pedestal washbasin.' }
    ],
    seoTitle: 'GALASSIA Ceramica Italy UAE | Zenaura Sanitary',
    seoDescription: 'Official GALASSIA Ceramica Italian basins & rimless WCs in UAE at Zenaura Sanitary. Italian ceramic elegance for luxury projects.',
    seoKeywords: 'GALASSIA Ceramica UAE, Galassia Basins Dubai, GSI Sanitaryware UAE, Galassia Ajman'
  },

  // 20. IDEAGROUP
  {
    id: 'ideagroup',
    name: 'IDEAGROUP',
    origin: 'Italy',
    category: 'Sanitary & Mixers',
    tagline: 'Modular Italian Designer Bathroom Furniture & Storage Architecture',
    description: 'IDEAGROUP is a leading Italian manufacturer of modular bathroom furniture. Combining brands like Idea, Aqua, and Blob, Ideagroup offers endless customization across lacquered finishes, solid surface countertops, and integrated lighting.',
    features: [
      'Modular custom dimension vanity configurations',
      'Over 40 matte & gloss lacquer finish choices',
      'Fenix NTM® anti-fingerprint thermal repair tops',
      'Integrated LED recessed cabinet illumination'
    ],
    logoImage: null,
    bannerImage: '/images/fonteyn_collection.png',
    specs: { warranty: '5 Years Warranty', certification: 'Made in Italy Furniture Certified', material: 'Lacquered MDF & Fenix NTM' },
    popularProducts: [
      { name: 'Ideagroup Cubik Floating Vanity', category: 'Furniture', image: '/images/fonteyn_collection.png', description: 'Modular vanity in Fenix NTM Charcoal.' },
      { name: 'Ideagroup My Time Double Basin Unit', category: 'Furniture', image: '/images/addon/image4.png', description: 'Twin drawer unit with integrated Stonematt double sink.' },
      { name: 'Ideagroup Sense Mirror Cabinet', category: 'Mirrors', image: '/images/addon/image5.png', description: 'Double sided mirror cabinet with internal power outlets.' }
    ],
    seoTitle: 'IDEAGROUP Italian Bathroom Furniture UAE | Zenaura Sanitary',
    seoDescription: 'Explore IDEAGROUP modular Italian bathroom furniture & floating vanities in UAE at Zenaura Sanitary. Custom layouts & finishes.',
    seoKeywords: 'IDEAGROUP UAE, Ideagroup Furniture Dubai, Italian Floating Vanity UAE'
  },

  // 21. NOVELLINI
  {
    id: 'novellini',
    name: 'NOVELLINI',
    origin: 'Italy',
    category: 'Wellness & Hydrotherapy',
    tagline: 'Italian Custom Shower Enclosures, Steam Cabins & Hydro Massage Tubs',
    description: 'NOVELLINI is Europe’s premier producer of luxury shower enclosures, steam cabins, and hydro massage bathtubs. Operating in Mantova, Italy, Novellini crafts tempered safety glass doors, chrome frames, and wellness cabins.',
    features: [
      'Crystal Clear anti-limescale glass treatment',
      '8mm heavy-duty toughened safety glass panels',
      'Integrated Turkish steam bath & aromatherapies',
      'Whisper-quiet hydro massage water jets'
    ],
    logoImage: null,
    bannerImage: '/images/hero_bathtub.png',
    specs: { warranty: '5 Years Warranty', certification: 'TÜV & CE Certified Safety', material: 'Tempered Glass & Anodized Aluminium' },
    popularProducts: [
      { name: 'Novellini Kuadra H Walk-In Shower Screen', category: 'Shower Enclosures', image: '/images/addon/image6.png', description: '8mm clear glass screen with matte black support bar.' },
      { name: 'Novellini Elytron Hydro Steam Cabin', category: 'Steam Cabins', image: '/images/hero_bathtub.png', description: 'Steam enclosure with seat & Bluetooth audio.' },
      { name: 'Novellini Calypso Whirlpool Tub', category: 'Bathtubs', image: '/images/hero_bathtub.png', description: 'Dual hydro massage bath with LED underwater lighting.' }
    ],
    seoTitle: 'NOVELLINI Shower Enclosures & Steam Cabins UAE | Zenaura Sanitary',
    seoDescription: 'Buy NOVELLINI Italian walk-in shower screens, steam cabins & whirlpool baths in UAE at Zenaura Sanitary. Premium glass enclosures.',
    seoKeywords: 'NOVELLINI UAE, Novellini Shower Enclosures Dubai, Italian Steam Cabins UAE'
  },

  // 22. WELLIS
  {
    id: 'wellis',
    name: 'WELLIS',
    origin: 'Europe',
    category: 'Wellness & Hydrotherapy',
    tagline: 'European Luxury Outdoor Hydrotherapy Spas, Hot Tubs & Wellness Pools',
    description: 'WELLIS is Europe’s largest manufacturer of luxury outdoor hot tubs, swim spas, and saunas. Built in state-of-the-art European robotic factories, Wellis spas feature eco-energy polyurethane insulation and powerful massage jets.',
    features: [
      'W-EC energy-efficient water circulation pumps',
      'Polyu-Foam 2cm eco-insulation for high heat retention',
      'MyMusic™ waterproof audio & smartphone app control',
      'Ozone water disinfection filtration technology'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide3_pergola.webp',
    specs: { warranty: '10 Years Shell Warranty', certification: 'CE & TUV Certified', material: 'Aristech Acrylic & Eco-Polyurethane' },
    popularProducts: [
      { name: 'Wellis PeakLine Everest Spa', category: 'Hot Tubs', image: '/images/sanipex_slides/slide3_pergola.webp', description: '9-seater outdoor hydrotherapy tub with 98 jets.' },
      { name: 'Wellis Danube Turbine Swim Spa', category: 'Swim Spas', image: '/images/sanipex_slides/slide3_pergola.webp', description: 'Counter-current turbine swimming training spa.' },
      { name: 'Wellis Sun Sauna Cabin', category: 'Saunas', image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp', description: 'Hemlock wood infrared sauna with chromotherapy.' }
    ],
    seoTitle: 'WELLIS Luxury Hot Tubs & Spas UAE | Zenaura Sanitary',
    seoDescription: 'Official WELLIS European outdoor hot tubs, swim spas & saunas supplier in UAE at Zenaura Sanitary. Hydrotherapy for villas & resorts.',
    seoKeywords: 'WELLIS Spas UAE, Wellis Hot Tubs Dubai, Outdoor Swim Spa UAE, Hydrotherapy Tub'
  },

  // 23. CARMENTA
  {
    id: 'carmenta',
    name: 'CARMENTA',
    origin: 'Italy',
    category: 'Wellness & Hydrotherapy',
    tagline: 'Italian Wellness Industry, Custom Saunas, Hammams & Turkish Baths',
    description: 'CARMENTA is an Italian master manufacturer of luxury spa cabins, saunas, and hammams. Blending technopolymer insulation with cedar wood, marble slabs, and glass walls, Carmenta installs high-end wellness rooms in luxury residences.',
    features: [
      'Custom modular Sauna + Hammam + Shower combos',
      'High-performance steam generator technology',
      'Aromatic oil dispenser & chromotherapy light starry ceiling',
      'Thermic glass insulation for maximum heat retention'
    ],
    logoImage: null,
    bannerImage: '/images/hero_bathtub.png',
    specs: { warranty: '5 Years Warranty', certification: '100% Made in Italy Spa Tech', material: 'Finnish Birch, Teak & Marble' },
    popularProducts: [
      { name: 'Carmenta Matrix Combined Sauna & Hammam', category: 'Spas', image: '/images/hero_bathtub.png', description: 'Dual cabin Finnish sauna and steam bath combo.' },
      { name: 'Carmenta Sensation Turkish Bath', category: 'Steam Baths', image: '/images/hero_bathtub.png', description: 'Marble clad hammam cabin with touch screen.' },
      { name: 'Carmenta Emotional Shower Column', category: 'Showering', image: '/images/addon/image10.png', description: 'Multi-sensory shower with tropical rain & ice fog.' }
    ],
    seoTitle: 'CARMENTA Italian Saunas & Hammams UAE | Zenaura Sanitary',
    seoDescription: 'Bespoke CARMENTA Italian saunas, steam rooms & hammams in UAE at Zenaura Sanitary. Luxury home spa installations.',
    seoKeywords: 'CARMENTA Spa UAE, Italian Saunas Dubai, Custom Hammam UAE, Steam Room Installation'
  },

  // 24. HARVIA
  {
    id: 'harvia',
    name: 'HARVIA',
    origin: 'Finland',
    category: 'Wellness & Hydrotherapy',
    tagline: 'Finnish Sauna Heaters, Infrared Cabins & Traditional Wellness Tech',
    description: 'HARVIA is the global leader in sauna heaters and traditional Finnish sauna culture. Founded in Muurame, Finland in 1950, Harvia supplies electric sauna stoves, wood-burning heaters, and outdoor sauna cabins worldwide.',
    features: [
      'Authentic Finnish sauna heater technology since 1950',
      'Cylindro & Legend high-capacity stone towers',
      'Xenio WiFi digital touch-screen control panels',
      'Infrared radiator panels & full-glass sauna doors'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide2_outdoor_kitchen.webp',
    specs: { warranty: '5 Years Warranty', certification: 'CE & Finnish Sauna Society Approved', material: 'Stainless Steel & Peridotite Stones' },
    popularProducts: [
      { name: 'Harvia Cylindro Black Steel Electric Heater', category: 'Sauna Heaters', image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp', description: 'Column stone tower heater with 80kg rocks.' },
      { name: 'Harvia Radiant Infrared Sauna Cabin', category: 'Saunas', image: '/images/sanipex_slides/slide3_pergola.webp', description: 'Hemlock wood 2-person infrared sauna.' },
      { name: 'Harvia Legend Wood-Burning Sauna Stove', category: 'Sauna Heaters', image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp', description: 'Hand-forged steel cage stove for authentic wood heat.' }
    ],
    seoTitle: 'HARVIA Finnish Saunas & Heaters UAE | Zenaura Sanitary',
    seoDescription: 'Buy original HARVIA Finnish sauna heaters, electric stoves & sauna cabins in UAE at Zenaura Sanitary. Official supplier in Ajman/Dubai.',
    seoKeywords: 'HARVIA Sauna UAE, Harvia Heater Dubai, Finnish Sauna Stove UAE, Sauna Installation'
  },

  // 25. BAGNOSPA
  {
    id: 'bagnospa',
    name: 'BAGNOSPA',
    origin: 'Italy • UK',
    category: 'Wellness & Hydrotherapy',
    tagline: 'Luxury Hydrotherapy Rain Showers, Body Sprays & LED Chromotherapy',
    description: 'BAGNOSPA is BAGNODESIGN’s dedicated hydrotherapy and wellness collection. Featuring oversized recessed ceiling rain shower heads, waterfall spouts, body mist jets, and underwater LED chromotherapy lights for private home spas.',
    features: [
      'Recessed ceiling rain & mist shower panels (up to 80x80cm)',
      'RGB LED chromotherapy with remote control',
      'Micro-jet body massage spray nozzles',
      'Grade 316 Stainless Steel mirror polished plates'
    ],
    logoImage: null,
    bannerImage: '/images/hero_bathtub.png',
    specs: { warranty: '10 Years Warranty', certification: 'WRAS Approved', material: 'Grade 316 Stainless Steel & LEDs' },
    popularProducts: [
      { name: 'Bagnospa 60x60cm LED Recessed Rain Shower', category: 'Showering', image: '/images/hero_bathtub.png', description: 'Quad-function rain, waterfall, mist & LED chromotherapy.' },
      { name: 'Bagnospa Flush Body Spray Jet', category: 'Body Sprays', image: '/images/addon/image10.png', description: 'Swivel directional massage jet in PVD Gold.' },
      { name: 'Bagnospa Cascade Wall Waterfall Spout', category: 'Spouts', image: '/images/addon/image18.png', description: 'Polished stainless steel sheet waterfall spout.' }
    ],
    seoTitle: 'BAGNOSPA Hydrotherapy Showers UAE | Zenaura Sanitary',
    seoDescription: 'Discover BAGNOSPA luxury LED rain shower heads, body sprays & mist systems in UAE at Zenaura Sanitary. Spa hydrotherapy.',
    seoKeywords: 'BAGNOSPA UAE, Bagnospa Showers Dubai, Rain Shower Ceiling LED, Hydrotherapy Sprays'
  },

  // 26. WEDI
  {
    id: 'wedi',
    name: 'WEDI',
    origin: 'Germany',
    category: 'Tiles & Surfaces',
    tagline: 'German Waterproof Building Boards & Curbless Wetroom Systems',
    description: 'WEDI is the world standard in 100% waterproof building boards and curbless shower systems. Manufactured in Emsdetten, Germany, Wedi XPS foam boards and shower elements replace traditional cement backing with lightweight, waterproof insulation.',
    features: [
      '100% internally waterproof extruded polystyrene (XPS) core',
      'Fiberglass mesh cement-coated surface ready for tile bonding',
      'Fundo pre-sloped curbless shower floor elements with linear drain',
      'Mold & mildew proof thermal insulation'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide4_slabs.webp',
    specs: { warranty: '10 Years System Warranty', certification: 'ETA & ETAG 022 Waterproof Certified', material: 'XPS Foam & Cement Mesh' },
    popularProducts: [
      { name: 'Wedi Building Board 12.5mm', category: 'Waterproofing', image: '/images/sanipex_slides/slide4_slabs.webp', description: 'Waterproof tile backer board for wetroom walls.' },
      { name: 'Wedi Fundo Riolito Linear Shower Base', category: 'Shower Bases', image: '/images/sanipex_slides/slide4_slabs.webp', description: 'Pre-sloped shower floor element with channel drain.' },
      { name: 'Wedi Non-Niche Waterproof Wall Recess', category: 'Niches', image: '/images/addon/image1.png', description: 'Prefabricated waterproof shower wall niche.' }
    ],
    seoTitle: 'WEDI Waterproof Building Boards UAE | Zenaura Sanitary',
    seoDescription: 'Buy WEDI German 100% waterproof building boards & pre-sloped shower bases in UAE at Zenaura Sanitary. Curbless wetroom solutions.',
    seoKeywords: 'WEDI Board UAE, Wedi Waterproofing Dubai, Curbless Shower Base UAE, Wedi Ajman'
  },

  // 27. TUBES
  {
    id: 'tubes',
    name: 'TUBES',
    origin: 'Italy',
    category: 'Hardware & Accessories',
    tagline: 'Tubes Radiatori, Designer Heating Elements & Architectural Towel Warmers',
    description: 'TUBES Radiatori redefines heating elements into fine architectural art. Designed by world luminaries like Ludovica+Roberto Palomba and Alberto Meda, Tubes electric towel warmers and sculptural radiators transform warmth into visual design.',
    features: [
      'Sculptural designer radiators recognized by MoMA New York',
      'Energy-efficient dry electric and hydraulic heating technology',
      '140+ RAL lacquer colors & electro-plated metallic finishes',
      'Touch-screen room thermostat programming'
    ],
    logoImage: null,
    bannerImage: '/images/hero_fluted.png',
    specs: { warranty: '5 Years Warranty', certification: 'CE & EN 442 Certified', material: 'Carbon Steel & Recyclable Aluminium' },
    popularProducts: [
      { name: 'Tubes Scaletta Freestanding Towel Warmer', category: 'Towel Rails', image: '/images/hero_fluted.png', description: 'Iconic ladder-shaped plug-in electric towel warmer.' },
      { name: 'Tubes Add-On Modular Wall Radiator', category: 'Radiators', image: '/images/addon/image1.png', description: 'Honeycomb modular aluminium heating element.' },
      { name: 'Tubes Soho Vertical Radiator', category: 'Radiators', image: '/images/hero_fluted.png', description: 'Slender vertical extruded aluminium radiator.' }
    ],
    seoTitle: 'TUBES Italian Designer Radiators UAE | Zenaura Sanitary',
    seoDescription: 'Discover TUBES Radiatori Italian designer towel warmers & architectural heating elements in UAE at Zenaura Sanitary. Luxury finishes.',
    seoKeywords: 'TUBES Radiatori UAE, Tubes Towel Rail Dubai, Italian Designer Radiator UAE'
  },

  // 28. WINDISCH
  {
    id: 'windisch',
    name: 'WINDISCH',
    origin: 'Spain',
    category: 'Hardware & Accessories',
    tagline: 'Spanish Handcrafted Luxury Bathroom Accessories, Mirrors & Holders',
    description: 'WINDISCH is Spain’s premier craftsman of luxury bathroom accessories. Since 1934 in Barcelona, Windisch hand-crafts solid brass magnifying mirrors, soap dispensers, towel stands, and tissue boxes plated in 24k Gold and Chrome.',
    features: [
      '100% solid brass construction hand-polished in Barcelona',
      '24k Gold, Chrome, Satin Nickel & Bronze electro-plating',
      'Optical glass LED 3x/5x magnifying makeup mirrors',
      'Heavy weighted anti-tip base construction'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image8.png',
    specs: { warranty: '10 Years Warranty', certification: 'Handcrafted in Spain Certified', material: 'Heavy Cast Brass & Optical Glass' },
    popularProducts: [
      { name: 'Windisch LED Wall Magnifying Mirror 5X', category: 'Mirrors', image: '/images/addon/image8.png', description: 'Swivel arm lighted mirror in 24k Gold finish.' },
      { name: 'Windisch Freestanding Towel Stand', category: 'Accessories', image: '/images/addon/image7.png', description: '3-arm brass towel tree stand.' },
      { name: 'Windisch Crystal Soap Dispenser', category: 'Accessories', image: '/images/addon/image6.png', description: 'Cut glass pump dispenser with gold pump.' }
    ],
    seoTitle: 'WINDISCH Spanish Bathroom Accessories UAE | Zenaura Sanitary',
    seoDescription: 'Buy WINDISCH Spain handcrafted luxury bathroom accessories & LED magnifying mirrors in UAE at Zenaura Sanitary. 24k Gold & Chrome plating.',
    seoKeywords: 'WINDISCH Accessories UAE, Windisch Mirror Dubai, Spanish Bathroom Accessories'
  },

  // 29. ALISEO
  {
    id: 'aliseo',
    name: 'ALISEO',
    origin: 'Germany',
    category: 'Hardware & Accessories',
    tagline: 'German Luxury Hospitality Accessories, Hairdryers & LED Mirrors',
    description: 'ALISEO is the preferred German brand for 5-star hotel bathroom amenities. Headquartered in Wolfach, Germany, Aliseo engineers eco-friendly LED illuminated mirrors, whisper-quiet wall hairdryers, and stainless steel waste bins.',
    features: [
      'T-Light SMD LED illuminated mirror technology',
      'Ionic whisper-quiet hotel wall hairdryers',
      'Sensor touchless stainless steel pedal bins',
      'Heavy-duty hotel commercial durability'
    ],
    logoImage: null,
    bannerImage: '/images/addon/image5.png',
    specs: { warranty: '3 Years Warranty', certification: 'CE & GS Safety Approved', material: 'Stainless Steel & ABS' },
    popularProducts: [
      { name: 'Aliseo Moon Dance LED Wall Mirror', category: 'Mirrors', image: '/images/addon/image5.png', description: 'Touch sensor warm/cool LED magnifying mirror.' },
      { name: 'Aliseo Black Mambo Wall Hairdryer', category: 'Hairdryers', image: '/images/addon/image1.png', description: 'Ionic 1800W safety hairdryer with wall cradle.' },
      { name: 'Aliseo Hotel Pedal Bin 5L', category: 'Bins', image: '/images/addon/image2.png', description: 'Soft-close stainless steel anti-fingerprint bin.' }
    ],
    seoTitle: 'ALISEO German Hotel Accessories UAE | Zenaura Sanitary',
    seoDescription: 'Official ALISEO German luxury hotel accessories, LED vanity mirrors & hairdryers in UAE at Zenaura Sanitary. Preferred hospitality supplier.',
    seoKeywords: 'ALISEO Accessories UAE, Aliseo Hairdryer Dubai, Aliseo Mirror UAE, Hotel Bathroom Amenities'
  },

  // 30. RICHMOND
  {
    id: 'richmond',
    name: 'RICHMOND',
    origin: 'United Kingdom',
    category: 'Hardware & Accessories',
    tagline: 'Thoughtful Architectural Hardware, Brass Handles & Sanitary Design',
    description: 'RICHMOND provides British architectural hardware and luxury sanitary accessories. Characterized by knurled metal textures, precision-machined brass, and refined proportions across pull handles, hinges, and bathroom hardware.',
    features: [
      'Diamond knurled tactile brass textures',
      'Solid forged brass construction',
      'PVD Gunmetal, Satin Gold & Bronze finishes',
      'Concealed screw fixing mechanism'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide5_hardware.webp',
    specs: { warranty: '10 Years Warranty', certification: 'BS EN 1906 Hardware Standard', material: 'Forged Solid Brass' },
    popularProducts: [
      { name: 'Richmond Knurled Door Lever Handle', category: 'Hardware', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Diamond knurled brass lever in PVD Gunmetal.' },
      { name: 'Richmond Robe Hook & Towel Bar Set', category: 'Accessories', image: '/images/addon/image6.png', description: 'Machined brass bathroom accessory suite.' },
      { name: 'Richmond Glass Shower Door Hinge', category: 'Shower Fittings', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Heavy duty self-closing 90 degree shower hinge.' }
    ],
    seoTitle: 'RICHMOND Architectural Hardware UAE | Zenaura Sanitary',
    seoDescription: 'Buy RICHMOND British knurled door handles & bathroom hardware accessories in UAE at Zenaura Sanitary. Premium solid brass.',
    seoKeywords: 'RICHMOND Hardware UAE, Richmond Handles Dubai, Knurled Door Handles UAE'
  },

  // 31. AQUAECO
  {
    id: 'aquaeco',
    name: 'AQUAECO',
    origin: 'European Standards',
    category: 'Sanitary & Mixers',
    tagline: 'Water Conservation, Touchless Sensor Taps & Commercial Valves',
    description: 'AQUAECO specializes in eco-friendly water-saving taps, electronic sensor faucets, and commercial plumbing essentials. WRAS and ESMA certified, Aquaeco products are engineered for high-traffic commercial projects, airports, and green buildings.',
    features: [
      'Infrared electronic sensor touchless operation',
      'WRAS & ESMA water flow restrictors (1.9L/min to 5L/min)',
      'Heavy-duty solid brass construction with vandal resistance',
      'AC/DC battery and mains power operation'
    ],
    logoImage: '/images/logos/aquaeco.svg',
    bannerImage: '/images/addon/image10.png',
    specs: { warranty: '5 Years Warranty', certification: 'WRAS & ESMA Certified', material: 'Solid Chrome Brass' },
    popularProducts: [
      { name: 'Aquaeco Touchless Sensor Basin Tap', category: 'Sensor Taps', image: '/images/addon/image10.png', description: 'Infrared electronic sensor faucet in Bright Chrome.' },
      { name: 'Aquaeco Angle Valve with Flange 1/2 x 3/8', category: 'Valves', image: '/images/addon/image12.png', description: 'Brushed Nickel ceramic disc quarter turn valve.' },
      { name: 'Aquaeco PP Bottle Trap 1 1/2 White', category: 'Plumbing', image: '/images/addon/image13.png', description: 'Heavy-duty polypropylene bottle trap.' }
    ],
    seoTitle: 'AQUAECO Sensor Taps & Water Saving Valves UAE | Zenaura Sanitary',
    seoDescription: 'Official AQUAECO supplier in UAE. Touchless sensor taps, angle valves & WRAS/ESMA certified eco plumbing essentials at Zenaura Sanitary.',
    seoKeywords: 'AQUAECO UAE, Aquaeco Sensor Tap Dubai, Touchless Faucet UAE, Water Saving Valve'
  },

  // 32. DEL CONCA
  {
    id: 'del-conca',
    name: 'DEL CONCA',
    origin: 'Italy',
    category: 'Tiles & Surfaces',
    tagline: 'Italian Heavy-Duty Architectural Porcelain Tiles & due2 Outdoor Surfaces',
    description: 'Ceramica DEL CONCA is a pioneer in Italian porcelain tile manufacturing. Famous for the due2 20mm extra-thick outdoor porcelain slab system, Del Conca produces stone, concrete, and wood-look surfaces for high-traffic paving.',
    features: [
      'due2 system: 20mm heavy-duty outdoor porcelain slabs',
      'R11 anti-slip textured surface rating for poolside safety',
      'Frost-proof, thermal shock resistant & zero stain retention',
      'High-definition digital marble & travertine printing'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide4_slabs.webp',
    specs: { warranty: '10 Years Warranty', certification: 'UNI EN ISO 9001 & LEED Approved', material: '20mm Full-Body Porcelain' },
    popularProducts: [
      { name: 'Del Conca due2 20mm Outdoor Slab', category: 'Outdoor Tiles', image: '/images/sanipex_slides/slide4_slabs.webp', description: '60x60cm 20mm patio porcelain slab in Stone Grey.' },
      { name: 'Del Conca Boutique Marble Porcelain Tile', category: 'Indoor Tiles', image: '/images/cat_tiles_terrazzo.jpg', description: '120x120cm polished Calacatta porcelain floor tile.' },
      { name: 'Del Conca Vignoni Wood-Look Tile', category: 'Wood Tiles', image: '/images/sanipex_slides/slide1_ginza.webp', description: '20x120cm wood plank porcelain tile.' }
    ],
    seoTitle: 'DEL CONCA Italian Porcelain Tiles UAE | Zenaura Sanitary',
    seoDescription: 'Buy DEL CONCA Italian porcelain tiles & due2 20mm outdoor slabs in UAE at Zenaura Sanitary. Poolside anti-slip tiles.',
    seoKeywords: 'DEL CONCA UAE, Del Conca Tiles Dubai, 20mm Outdoor Tiles UAE, Italian Porcelain Slabs'
  },

  // 33. FAP CERAMICHE
  {
    id: 'fap-ceramiche',
    name: 'FAP CERAMICHE',
    origin: 'Italy',
    category: 'Tiles & Surfaces',
    tagline: 'Italian Luxury Wall Tiles, Decorative Ceramics & Mosaic Surfaces',
    description: 'FAP CERAMICHE is an Italian master of decorative wall ceramics and 3D textured tiles. Crafted in San Marino di Lupari, Fap tiles turn bathroom and living room walls into vibrant artistic tapestries.',
    features: [
      'Original 3D sculpted ceramic wall reliefs',
      'White-body ceramic wall tiles for brilliant color depth',
      'Metallic, satin & high-gloss decorative glazes',
      'Precision rectified edges for 1mm seamless jointing'
    ],
    logoImage: null,
    bannerImage: '/images/cat_tiles_terrazzo.jpg',
    specs: { warranty: '10 Years Warranty', certification: 'Made in Italy 100% Certified', material: 'White Body Ceramic & Porcelain' },
    popularProducts: [
      { name: 'Fap Roma Diamond Marble Wall Tile', category: 'Wall Tiles', image: '/images/cat_tiles_terrazzo.jpg', description: '50x110cm 3D white marble ceramic wall tile.' },
      { name: 'Fap Color Now Satin Wall Panel', category: 'Wall Tiles', image: '/images/addon/image1.png', description: '30x90cm dusty rose matte ceramic wall tile.' },
      { name: 'Fap Mosaico Metallic Kitkat Tile', category: 'Mosaics', image: '/images/cat_tiles_terrazzo.jpg', description: 'Finger mosaic tile with gold luster finish.' }
    ],
    seoTitle: 'FAP CERAMICHE Italian Wall Tiles UAE | Zenaura Sanitary',
    seoDescription: 'Explore FAP CERAMICHE Italian luxury 3D wall tiles & decorative ceramics in UAE at Zenaura Sanitary. High-end wall cladding.',
    seoKeywords: 'FAP CERAMICHE UAE, Fap Tiles Dubai, Italian Wall Tiles UAE, 3D Decorative Tiles'
  },

  // 34. COEM
  {
    id: 'coem',
    name: 'COEM',
    origin: 'Italy',
    category: 'Tiles & Surfaces',
    tagline: 'Ceramica Coem, Italian Natural Stone-Look Architectural Porcelain',
    description: 'Ceramica COEM reproduces the authentic beauty of natural stone in high-performance porcelain stoneware. Produced in Fiorano Modenese, Coem tiles replicate travertine, limestone, and slate with environmental responsibility.',
    features: [
      'Eco-Body tiles containing 30%+ recycled raw materials',
      'g+ high-resolution digital surface vein matching',
      'High resistance to deep abrasion (PEI V)',
      'Suitable for high-traffic commercial & outdoor application'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide4_slabs.webp',
    specs: { warranty: '10 Years Warranty', certification: 'Greenguard Gold & ISO 14001', material: 'Porcelain Stoneware' },
    popularProducts: [
      { name: 'Coem Widestone Travertine Porcelain Tile', category: 'Tiles', image: '/images/sanipex_slides/slide4_slabs.webp', description: '90x90cm vein-cut Roman Travertine porcelain tile.' },
      { name: 'Coem Brit Stone Slate Porcelain Panel', category: 'Tiles', image: '/images/cat_tiles_terrazzo.jpg', description: '60x120cm textured English slate tile.' },
      { name: 'Coem Terrazzo Slab', category: 'Slabs', image: '/images/cat_tiles_terrazzo.jpg', description: '120x260cm large format terrazzo porcelain slab.' }
    ],
    seoTitle: 'COEM Ceramica Italian Tiles UAE | Zenaura Sanitary',
    seoDescription: 'Buy COEM Ceramica Italian stone-look porcelain tiles in UAE at Zenaura Sanitary. Travertine & limestone porcelain stoneware.',
    seoKeywords: 'COEM Ceramica UAE, Coem Tiles Dubai, Italian Travertine Porcelain UAE'
  },

  // 35. CERDOMUS
  {
    id: 'cerdomus',
    name: 'CERDOMUS',
    origin: 'Italy',
    category: 'Tiles & Surfaces',
    tagline: 'Italian Artisan Porcelain Stoneware & Contemporary Architecture',
    description: 'CERDOMUS has been crafting artistic Italian porcelain stoneware in Castel Bolognese since 1969. Renowned for rich warm color palettes, wood-effect porcelain planks, and terracotta interpretations.',
    features: [
      'Artisanal Italian ceramic heritage since 1969',
      'Realistic wood, terracotta & metal porcelain finishes',
      'R10 & R11 slip resistance for indoor/outdoor continuity',
      'Stain proof & chemical resistant porcelain composition'
    ],
    logoImage: null,
    bannerImage: '/images/cat_tiles_terrazzo.jpg',
    specs: { warranty: '10 Years Warranty', certification: 'Ceramics of Italy Certified', material: 'Vitrified Porcelain Stoneware' },
    popularProducts: [
      { name: 'Cerdomus Verve Wood-Look Tile', category: 'Tiles', image: '/images/sanipex_slides/slide1_ginza.webp', description: '20x120cm distressed oak porcelain plank.' },
      { name: 'Cerdomus Imperium Marble Porcelain', category: 'Tiles', image: '/images/cat_tiles_terrazzo.jpg', description: '80x80cm polished STATUARIO marble tile.' },
      { name: 'Cerdomus Cotto Terracotta Porcelain', category: 'Tiles', image: '/images/cat_outdoor.png', description: '40x40cm warm rustic Italian terracotta tile.' }
    ],
    seoTitle: 'CERDOMUS Italian Porcelain Stoneware UAE | Zenaura Sanitary',
    seoDescription: 'Discover CERDOMUS Italian artisan porcelain tiles & wood-effect stoneware in UAE at Zenaura Sanitary. 100% Italian ceramics.',
    seoKeywords: 'CERDOMUS UAE, Cerdomus Tiles Dubai, Italian Wood Porcelain UAE'
  },

  // 36. GARDENIA ORCHIDEA
  {
    id: 'gardenia-orchidea',
    name: 'GARDENIA ORCHIDEA',
    origin: 'Italy',
    category: 'Tiles & Surfaces',
    tagline: 'Italian Haute Couture Porcelain Tiles & Exclusive Designer Ceramics',
    description: 'GARDENIA ORCHIDEA is synonymous with Italian fashion ceramics and luxury surfaces. Collaborating exclusively with Versace Home, Gardenia Orchidea creates marble slabs, gold damask tiles, and opulent floor ceramics.',
    features: [
      'Haute couture luxury surface styling',
      'Deep 3D micro-relief and precious metal 24k Gold inlays',
      'Mega-format porcelain slabs up to 120x280cm',
      'Mirror-polished crystal glaze technology'
    ],
    logoImage: null,
    bannerImage: '/images/cat_tiles_terrazzo.jpg',
    specs: { warranty: '10 Years Warranty', certification: 'Ceramics of Italy Approved', material: 'Fine Porcelain & Gold Inlays' },
    popularProducts: [
      { name: 'Gardenia Orchidea Versace Marble Slab', category: 'Slabs', image: '/images/cat_tiles_terrazzo.jpg', description: '120x280cm polished Nero Marquina porcelain slab with gold detailing.' },
      { name: 'Gardenia Orchidea Walk Stone Tile', category: 'Tiles', image: '/images/sanipex_slides/slide4_slabs.webp', description: '80x160cm Italian quartzite porcelain tile.' },
      { name: 'Gardenia Orchidea Damasco Gold Decor', category: 'Wall Decor', image: '/images/cat_tiles_terrazzo.jpg', description: '60x120cm damask motif wall tile with metallic luster.' }
    ],
    seoTitle: 'GARDENIA ORCHIDEA Italian Tiles UAE | Zenaura Sanitary',
    seoDescription: 'Buy GARDENIA ORCHIDEA Italian luxury porcelain tiles & marble slabs in UAE at Zenaura Sanitary. Exclusive designer surfaces.',
    seoKeywords: 'GARDENIA ORCHIDEA UAE, Gardenia Tiles Dubai, Italian Fashion Porcelain UAE'
  },

  // 37. TERRATINTA GROUP
  {
    id: 'terratinta',
    name: 'TERRATINTA GROUP',
    origin: 'Italy',
    category: 'Tiles & Surfaces',
    tagline: 'Nordic Minimalist & Italian Porcelain Tile Concepts (Terratinta / Micro.)',
    description: 'TERRATINTA Group blends Scandinavian minimalism with Italian porcelain expertise. Comprising brands like Terratinta Ceramiche, Micro., and Sartoria, they produce concrete-look tiles, pastel subways, and micro-mosaic surfaces.',
    features: [
      'Nordic warm minimalist color schemes (Greige, White, Anthracite)',
      'B-Corp certified sustainable ceramic production',
      'Micro-mosaic & small format 3D subway tiles',
      'Seamless matte resin-look porcelain finishes'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide1_ginza.webp',
    specs: { warranty: '10 Years Warranty', certification: 'B-Corp & ISO 14001 Certified', material: 'Eco-Friendly Porcelain' },
    popularProducts: [
      { name: 'Terratinta Betonstil Concrete Porcelain Tile', category: 'Tiles', image: '/images/sanipex_slides/slide1_ginza.webp', description: '90x90cm smooth concrete effect porcelain tile.' },
      { name: 'Sartoria Tbrick Subway Gloss Tile', category: 'Subway Tiles', image: '/images/cat_tiles_terrazzo.jpg', description: '5x15cm handmade look glossy ceramic wall brick.' },
      { name: 'Micro. Terracotta Micro Mosaic', category: 'Mosaics', image: '/images/cat_tiles_terrazzo.jpg', description: '1x1cm eco-resin porcelain mosaic sheet.' }
    ],
    seoTitle: 'TERRATINTA GROUP Italian Tiles UAE | Zenaura Sanitary',
    seoDescription: 'Explore TERRATINTA Group Nordic-Italian minimalist porcelain tiles & subways in UAE at Zenaura Sanitary. B-Corp eco tiles.',
    seoKeywords: 'TERRATINTA UAE, Terratinta Tiles Dubai, Concrete Look Tiles UAE'
  },

  // 38. GYMKHANA
  {
    id: 'gymkhana',
    name: 'GYMKHANA',
    origin: 'Dubai • Global',
    category: 'Outdoor Living',
    tagline: 'Luxury Outdoor Living Furniture, Pergolas, Sunbeds & Resort Loungers',
    description: 'GYMKHANA is SANIPEX GROUP’s flagship brand for luxury outdoor living furniture. Tailored for GCC climate conditions, Gymkhana crafts teak wood sofa sets, aluminum daybeds, outdoor dining tables, and bioclimatic pergolas.',
    features: [
      'Grade A Burmese Teak & powder-coated aluminium frames',
      'QuickDry FOAM® water-draining outdoor cushions',
      'Sunbrella® marine-grade UV resistant fabrics',
      'Motorized bioclimatic aluminium pergolas with LED lights'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide3_pergola.webp',
    specs: { warranty: '5 Years Outdoor Warranty', certification: 'UV & Marine Grade Tested', material: 'Teak Wood, Aluminium & Sunbrella' },
    popularProducts: [
      { name: 'Gymkhana Modular Teak Outdoor Sofa Set', category: 'Outdoor Furniture', image: '/images/sanipex_slides/slide3_pergola.webp', description: 'L-shaped teak wood lounge sofa with Sunbrella cushions.' },
      { name: 'Gymkhana Double Poolside Sunbed', category: 'Sunbeds', image: '/images/cat_outdoor.png', description: 'Adjustable dual daybed with integrated side tables.' },
      { name: 'Gymkhana Bioclimatic Motorized Pergola', category: 'Pergolas', image: '/images/sanipex_slides/slide3_pergola.webp', description: 'Aluminium louvered pergola with rain sensor & LED strip.' }
    ],
    seoTitle: 'GYMKHANA Outdoor Furniture & Pergolas UAE | Zenaura Sanitary',
    seoDescription: 'Buy GYMKHANA luxury outdoor furniture, teak sofa sets, sunbeds & pergolas in UAE at Zenaura Sanitary. Premium resort outdoor living.',
    seoKeywords: 'GYMKHANA Outdoor UAE, Gymkhana Furniture Dubai, Outdoor Teak Sofa UAE, Bioclimatic Pergola'
  },

  // 39. TALENTI
  {
    id: 'talenti',
    name: 'TALENTI',
    origin: 'Italy',
    category: 'Outdoor Living',
    tagline: 'Talenti Italian Elegance Reimagined, Designer Outdoor Furniture',
    description: 'TALENTI is an Italian master of high-end outdoor furniture. Designed by global icons like Marco Acerbis and Ludovica+Roberto Palomba, Talenti transforms terraces and poolside decks with nautical ropes, teak, and plush seating.',
    features: [
      'Designed by renowned international Italian architects',
      'Synthetic nautical rope weaving with high UV resistance',
      'Stainless steel & die-cast aluminium frames',
      'Removable machine-washable outdoor cushions'
    ],
    logoImage: null,
    bannerImage: '/images/cat_outdoor.png',
    specs: { warranty: '5 Years Outdoor Warranty', certification: '100% Made in Italy Outdoor', material: 'Nautical Rope, Teak & Aluminium' },
    popularProducts: [
      { name: 'Talenti Cliff Nautical Rope Armchair', category: 'Outdoor Seating', image: '/images/cat_outdoor.png', description: 'Woven synthetic rope lounge chair with soft cushions.' },
      { name: 'Talenti Panama Outdoor Dining Table', category: 'Dining Tables', image: '/images/sanipex_slides/slide3_pergola.webp', description: '8-seater teak top dining table with aluminium legs.' },
      { name: 'Talenti Scena Outdoor Canopy Daybed', category: 'Daybeds', image: '/images/cat_outdoor.png', description: 'Curved canopy daybed with integrated curtains.' }
    ],
    seoTitle: 'TALENTI Outdoor Furniture Italy UAE | Zenaura Sanitary',
    seoDescription: 'Discover TALENTI Italian designer outdoor furniture & nautical rope seating in UAE at Zenaura Sanitary. High-end villa outdoor living.',
    seoKeywords: 'TALENTI Outdoor UAE, Talenti Furniture Dubai, Italian Outdoor Seating UAE'
  },

  // 40. ROYAL BOTANIA
  {
    id: 'royal-botania',
    name: 'ROYAL BOTANIA',
    origin: 'Belgium',
    category: 'Outdoor Living',
    tagline: 'Belgian Premium Luxury Outdoor Furniture, Teak Sunbeds & Lighting',
    description: 'ROYAL BOTANIA represents the pinnacle of Belgian outdoor luxury. Engineered in Antwerp, Royal Botania crafts iconic teak sun loungers, stainless steel dining sets, and architectural outdoor lighting.',
    features: [
      'Sustainably harvested Grade A Plantation Teak',
      'Electropolished stainless steel 316 outdoor frames',
      'Bespoke Batyline® breathable mesh seating',
      'Architectural low-voltage LED garden & bollard lights'
    ],
    logoImage: null,
    bannerImage: '/images/cat_outdoor.png',
    specs: { warranty: '5 Years Warranty', certification: 'FSC Teak & CE Certified', material: 'Plantation Teak & 316 Steel' },
    popularProducts: [
      { name: 'Royal Botania Wave Floating Lounger', category: 'Sunbeds', image: '/images/cat_outdoor.png', description: 'Sculptural stainless steel & Batyline canopy sunbed.' },
      { name: 'Royal Botania Ninix Teak Dining Set', category: 'Dining Sets', image: '/images/sanipex_slides/slide3_pergola.webp', description: 'Minimalist stainless steel & teak 10-seater dining set.' },
      { name: 'Royal Botania Dome Outdoor Floor Lamp', category: 'Lighting', image: '/images/sanipex_slides/slide6_lighting.webp', description: 'Handmade glass & powder-coated aluminium lantern.' }
    ],
    seoTitle: 'ROYAL BOTANIA Belgian Outdoor Furniture UAE | Zenaura Sanitary',
    seoDescription: 'Buy ROYAL BOTANIA Belgian luxury outdoor furniture, teak sunbeds & garden lighting in UAE at Zenaura Sanitary. Authorized partner.',
    seoKeywords: 'ROYAL BOTANIA UAE, Royal Botania Dubai, Belgian Teak Furniture UAE, Wave Lounger'
  },

  // 41. CANE-LINE
  {
    id: 'cane-line',
    name: 'CANE-LINE',
    origin: 'Denmark',
    category: 'Outdoor Living',
    tagline: 'Danish High-End All-Weather Outdoor Living Furniture & Cushions',
    description: 'CANE-LINE is a Danish design company with 30+ years of experience in all-weather outdoor furniture. Built on Danish design values, Cane-line furniture features Cane-line Weave® and AirTouch cushions that dry within 1 hour after rain.',
    features: [
      'Cane-line AirTouch & SoftTouch® weather-resistant fabrics',
      'QuickDry System drying cushions within 60 minutes',
      'Hand-woven Cane-line Tex® high-durability fiber',
      'Maintenance-free powder-coated aluminium frames'
    ],
    logoImage: null,
    bannerImage: '/images/cat_outdoor.png',
    specs: { warranty: '5 Years Outdoor Warranty', certification: 'Danish Design Standard Approved', material: 'Cane-line Weave & QuickDry Foam' },
    popularProducts: [
      { name: 'Cane-line Consep Outdoor Sofa', category: 'Outdoor Furniture', image: '/images/cat_outdoor.png', description: 'Danish modular sofa with QuickDry grey cushions.' },
      { name: 'Cane-line Breeze Woven Lounge Chair', category: 'Outdoor Seating', image: '/images/cat_outdoor.png', description: 'Hand-woven fiber ergonomic lounge chair.' },
      { name: 'Cane-line Area Aluminium Coffee Table', category: 'Tables', image: '/images/sanipex_slides/slide3_pergola.webp', description: 'Round powder-coated aluminium garden table.' }
    ],
    seoTitle: 'CANE-LINE Danish Outdoor Furniture UAE | Zenaura Sanitary',
    seoDescription: 'Official CANE-LINE Danish outdoor furniture & QuickDry sofa sets in UAE at Zenaura Sanitary. Elevate your outdoor living.',
    seoKeywords: 'CANE-LINE UAE, Cane-line Dubai, Danish Outdoor Furniture UAE, QuickDry Cushions'
  },

  // 42. EMU
  {
    id: 'emu',
    name: 'EMU',
    origin: 'Italy',
    category: 'Outdoor Living',
    tagline: 'Iconic Italian Powder-Coated Metal Outdoor Furniture & Garden Chairs',
    description: 'EMU has been producing iconic Italian metal outdoor furniture in Marsciano, Italy since 1951. Famous for laser-cut metal mesh chairs, Emu furniture graces cafe terraces, luxury hotels, and private garden landscapes.',
    features: [
      'Emu-Coat 4-layer anticorrosion powder coating system',
      'Laser-cut sheet metal & tubular steel engineering',
      'Stackable space-saving patio & garden seating',
      'Tested to withstand extreme desert heat & humidity'
    ],
    logoImage: null,
    bannerImage: '/images/cat_outdoor.png',
    specs: { warranty: '5 Years Outdoor Warranty', certification: '100% Made in Italy Certified', material: 'Cataphoresis Treated Steel' },
    popularProducts: [
      { name: 'Emu Rio Pattern Stackable Armchair', category: 'Outdoor Seating', image: '/images/cat_outdoor.png', description: 'Laser-cut mesh steel armchair in Matte White.' },
      { name: 'Emu Star Steel Bistro Table', category: 'Tables', image: '/images/sanipex_slides/slide3_pergola.webp', description: '70x70cm square outdoor steel cafe table.' },
      { name: 'Emu Snooze Reclining Deck Chair', category: 'Sunbeds', image: '/images/cat_outdoor.png', description: 'Foldable synthetic fabric reclining sun lounger.' }
    ],
    seoTitle: 'EMU Italian Outdoor Metal Furniture UAE | Zenaura Sanitary',
    seoDescription: 'Buy EMU Italian powder-coated metal outdoor chairs & garden tables in UAE at Zenaura Sanitary. Iconic Italian patio furniture.',
    seoKeywords: 'EMU Outdoor UAE, Emu Furniture Dubai, Italian Metal Garden Chair UAE'
  },

  // 43. JATI & KEBON
  {
    id: 'jati-kebon',
    name: 'JATI & KEBON',
    origin: 'Belgium',
    category: 'Outdoor Living',
    tagline: 'Teak Wood & Aluminium Resort Garden Furniture & Sun Loungers',
    description: 'JATI & KEBON is a Belgian producer of high-end resort garden furniture. Specializing in clean-lined aluminium frames, Indonesian teak accents, and weather-proof outdoor ropes for commercial and residential poolsides.',
    features: [
      'Sustainable Indonesian SVLK-certified teak wood',
      'Seamless robot-welded aluminium frames',
      'Textilene® breathable mesh sunbed slings',
      'High UV & salt water resistance for coastal villas'
    ],
    logoImage: null,
    bannerImage: '/images/cat_outdoor.png',
    specs: { warranty: '5 Years Outdoor Warranty', certification: 'SVLK Teak Certified', material: 'Indonesian Teak & Aluminium' },
    popularProducts: [
      { name: 'Jati & Kebon Truro Teak Dining Armchair', category: 'Outdoor Seating', image: '/images/cat_outdoor.png', description: 'Aluminium frame chair with teak armrests.' },
      { name: 'Jati & Kebon Sincro Adjustable Sunbed', category: 'Sunbeds', image: '/images/cat_outdoor.png', description: 'Wheeled sun lounger with Textilene mesh sling.' },
      { name: 'Jati & Kebon Modular Corner Sofa', category: 'Outdoor Furniture', image: '/images/sanipex_slides/slide3_pergola.webp', description: 'Weatherproof cushion modular patio lounge.' }
    ],
    seoTitle: 'JATI & KEBON Resort Furniture UAE | Zenaura Sanitary',
    seoDescription: 'Discover JATI & KEBON teak wood & aluminium outdoor furniture in UAE at Zenaura Sanitary. Resort pool loungers & dining sets.',
    seoKeywords: 'JATI & KEBON UAE, Jati Kebon Dubai, Teak Garden Furniture UAE'
  },

  // 44. ECOSMART FIRE
  {
    id: 'ecosmart-fire',
    name: 'ECOSMART FIRE',
    origin: 'Australia • Global',
    category: 'Outdoor Living',
    tagline: 'Clean-Burning Bioethanol Fireplaces & Ventless Outdoor Fire Pits',
    description: 'ECOSMART FIRE is the global leader in clean-burning bioethanol fireplaces. Operating from Sydney and Los Angeles, EcoSmart Fire manufactures ventless indoor fire features, concrete fire pit tables, and stainless steel burner inserts.',
    features: [
      'Clean e-NRG bioethanol fuel (smokeless, ash-free & odorless)',
      'Ventless operation requiring no chimney or gas connection',
      'Fluid™ Concrete weather-proof fire pit table enclosures',
      'ISO 9001 & UL 1370 international safety certification'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide2_outdoor_kitchen.webp',
    specs: { warranty: '2 Years Warranty', certification: 'UL 1370 & EN 16647 Safety Certified', material: 'Fluid Concrete & 304 Stainless Steel' },
    popularProducts: [
      { name: 'EcoSmart Ark 40 Concrete Fire Pit Table', category: 'Fire Pits', image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp', description: 'Round bioethanol fire pit table in Bone Concrete.' },
      { name: 'EcoSmart AB8 Stainless Steel Bioethanol Burner', category: 'Fireplace Inserts', image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp', description: '8L capacity bioethanol burner insert.' },
      { name: 'EcoSmart Ghost Glass Freestanding Fireplace', category: 'Fireplaces', image: '/images/addon/image1.png', description: 'Transparent toughened glass indoor bioethanol fire.' }
    ],
    seoTitle: 'ECOSMART FIRE Bioethanol Fire Pits UAE | Zenaura Sanitary',
    seoDescription: 'Buy ECOSMART FIRE bioethanol fireplaces & outdoor fire pit tables in UAE at Zenaura Sanitary. Smokeless ventless luxury fire features.',
    seoKeywords: 'ECOSMART FIRE UAE, EcoSmart Fireplace Dubai, Outdoor Fire Pit UAE, Bioethanol Fireplace'
  },

  // 45. BORETTI
  {
    id: 'boretti',
    name: 'BORETTI',
    origin: 'Netherlands • Italy',
    category: 'Kitchen & Appliances',
    tagline: 'Italian Culinary Excellence, Outdoor Barbecues & Built-In Kitchens',
    description: 'BORETTI delivers Italian passion for cooking straight to outdoor kitchens and luxury homes. Designed in Amsterdam and Italy, Boretti builds heavy-duty charcoal BBQs, gas outdoor kitchens, and freestanding range cookers.',
    features: [
      'Passione in Cucina Italian culinary performance',
      'Heavy-duty cast iron cooking grilles & infrared burners',
      'Integrated food warming drawers & side burners',
      'Powder-coated heat resistant steel construction'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide2_outdoor_kitchen.webp',
    specs: { warranty: '2 Years Warranty', certification: 'CE Gas Safety Approved', material: 'Stainless Steel & Cast Iron' },
    popularProducts: [
      { name: 'Boretti Imperatore 4-Burner Outdoor Gas BBQ', category: 'Outdoor Kitchens', image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp', description: 'Stainless steel gas BBQ with side burner & rotisserie.' },
      { name: 'Boretti Barilo Charcoal Barbecue', category: 'BBQ', image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp', description: 'Barrel charcoal smoker BBQ in matte black.' },
      { name: 'Boretti Built-In Outdoor Sink & Cabinet', category: 'Outdoor Kitchens', image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp', description: 'Integrated stainless steel outdoor kitchen module.' }
    ],
    seoTitle: 'BORETTI Outdoor Kitchens & BBQs UAE | Zenaura Sanitary',
    seoDescription: 'Official BORETTI supplier in UAE. Buy luxury Italian outdoor gas BBQs, charcoal smokers & built-in outdoor kitchens at Zenaura Sanitary.',
    seoKeywords: 'BORETTI BBQ UAE, Boretti Outdoor Kitchen Dubai, Gas Barbecue UAE'
  },

  // 46. OLIVARI
  {
    id: 'olivari',
    name: 'OLIVARI',
    origin: 'Italy (Since 1911)',
    category: 'Hardware & Accessories',
    tagline: 'Architectural Brass Door Handles by World Architects since 1911',
    description: 'OLIVARI has been manufacturing 100% Italian door handles in Borgomanero since 1911. Collaborating with architectural legends like Zaha Hadid, Rem Koolhaas, and Gio Ponti, Olivari handles are architectural masterpieces.',
    features: [
      '113+ years of Italian brass door handle manufacturing',
      'Designed by Pritzker-prize winning global architects',
      'SuperFinish® 30-year anti-corrosion PVD coating guarantee',
      'Precision internal return spring rosette mechanisms'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide5_hardware.webp',
    specs: { warranty: '30 Years SuperFinish Warranty', certification: '100% Made in Italy Certified', material: 'Forged Solid Brass & PVD' },
    popularProducts: [
      { name: 'Olivari Chevy Lever Handle by Zaha Hadid', category: 'Door Handles', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Sculptural aerodynamic door lever in SuperGold Satin.' },
      { name: 'Olivari Lama Handle by Gio Ponti', category: 'Door Handles', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'The legendary ultra-thin 1954 razor blade lever handle.' },
      { name: 'Olivari Open Handle by Rem Koolhaas', category: 'Door Handles', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Geometric sliced brass lever handle in SuperAnthracite.' }
    ],
    seoTitle: 'OLIVARI Italian Door Handles UAE | Zenaura Sanitary',
    seoDescription: 'Buy OLIVARI 1911 Italian architectural door handles designed by Zaha Hadid & Gio Ponti in UAE at Zenaura Sanitary. 30-year finish guarantee.',
    seoKeywords: 'OLIVARI Handles UAE, Olivari Door Handles Dubai, Italian Architectural Brassware'
  },

  // 47. DND
  {
    id: 'dnd',
    name: 'DND',
    origin: 'Italy',
    category: 'Hardware & Accessories',
    tagline: 'dnd Handles, Italian Sculptural Architectural Door Handles & Levers',
    description: 'DND (dnd by Martinelli) is an Italian design workshop dedicated to door handles and locking hardware. Working with designers like Karim Rashid and Giulio Iacchetti, dnd creates sculptural levers in matte finishes.',
    features: [
      'Design-focused Italian architectural lever handles',
      'VIS® spring mechanism tested to 200,000 opening cycles',
      'Matte Black, Warm Bronze & Satin Gold PVD finishes',
      'Concealed magnetic latch mechanism'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide5_hardware.webp',
    specs: { warranty: '10 Years Warranty', certification: 'EN 1906 Grade 4 Approved', material: 'Forged Brass & Zamak' },
    popularProducts: [
      { name: 'dnd Coda Handle by Karim Rashid', category: 'Door Handles', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Organic fluid lever handle in Satin Gold.' },
      { name: 'dnd Intake Handle by Andrea Morgante', category: 'Door Handles', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Recessed thumb grip architectural door handle.' },
      { name: 'dnd Magnetic Internal Door Latch', category: 'Latches', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Silent magnetic door latch & strike plate.' }
    ],
    seoTitle: 'DND Italian Door Handles UAE | Zenaura Sanitary',
    seoDescription: 'Explore dnd Handles Italian architectural door handles & magnetic latches in UAE at Zenaura Sanitary. Modern designer hardware.',
    seoKeywords: 'dnd Handles UAE, DND Door Handles Dubai, Italian Designer Levers UAE'
  },

  // 48. OLIVER KNIGHTS
  {
    id: 'oliver-knights',
    name: 'OLIVER KNIGHTS',
    origin: 'United Kingdom',
    category: 'Hardware & Accessories',
    tagline: 'British Handcrafted Solid Brass Architectural Hardware & Pulls',
    description: 'OLIVER KNIGHTS designs and hand-finishes exquisite solid brass door, window, and cabinet hardware in England. Known for bespoke knurled, ribbed, and hammered textures for high-end luxury interiors.',
    features: [
      '100% British hand-finished solid brass construction',
      'Bespoke knurled, reed, and fluted surface textures',
      'Over 20 hand-applied metal patina finishes (Mid Antique, Polished Nickel)',
      'Custom length pull handles for entry doors & wardrobes'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide5_hardware.webp',
    specs: { warranty: '10 Years Warranty', certification: 'Made in England Certified', material: 'Solid Machined Brass' },
    popularProducts: [
      { name: 'Oliver Knights Ribbed Entrance Pull Bar', category: 'Pull Handles', image: '/images/sanipex_slides/slide5_hardware.webp', description: '600mm solid brass ribbed door pull bar.' },
      { name: 'Oliver Knights Knurled Cabinet Knob', category: 'Cabinet Hardware', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Diamond knurled T-bar cabinet pull in Antique Brass.' },
      { name: 'Oliver Knights Flush Edge Pull', category: 'Hardware', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Recessed sliding door flush pull.' }
    ],
    seoTitle: 'OLIVER KNIGHTS British Brass Hardware UAE | Zenaura Sanitary',
    seoDescription: 'Buy OLIVER KNIGHTS British handcrafted solid brass door & cabinet hardware in UAE at Zenaura Sanitary. Bespoke metal patinas.',
    seoKeywords: 'OLIVER KNIGHTS UAE, Oliver Knights Handles Dubai, British Brassware UAE'
  },

  // 49. CROFT
  {
    id: 'croft',
    name: 'CROFT',
    origin: 'England',
    category: 'Hardware & Accessories',
    tagline: 'Croft Hardware, Designed, Crafted & Perfected in England since 1868',
    description: 'CROFT Hardware has been hand-crafting luxury architectural ironmongery in the West Midlands of England since 1868. Over 5 generations, Croft has forged solid brass and bronze hardware for palaces and heritage residences.',
    features: [
      '156+ years of English hand-foundry craftsmanship',
      'Hand-cast solid brass, bronze & real gunmetal',
      'Historical restoration & custom architect commissions',
      'Hand-patinated Dark Bronze & Polished Chrome'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide5_hardware.webp',
    specs: { warranty: '10 Years Warranty', certification: 'Made in England 1868 Certified', material: 'Cast Brass & Bronze' },
    popularProducts: [
      { name: 'Croft Bloxwich Mortice Knob', category: 'Door Handles', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Classic reeded brass door knob in Antique Nickel.' },
      { name: 'Croft Espagnolette Window Bolt', category: 'Window Hardware', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Full-length locking window bolt for French windows.' },
      { name: 'Croft Heavy Duty Front Door Letter Plate', category: 'Front Door Hardware', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Solid bronze front door mail slot.' }
    ],
    seoTitle: 'CROFT English Architectural Hardware UAE | Zenaura Sanitary',
    seoDescription: 'Discover CROFT 1868 English hand-crafted solid brass & bronze door knobs & hardware in UAE at Zenaura Sanitary. Heritage ironmongery.',
    seoKeywords: 'CROFT Hardware UAE, Croft Handles Dubai, English Solid Brass Hardware'
  },

  // 50. ARMAC MARTIN
  {
    id: 'armac-martin',
    name: 'ARMAC MARTIN',
    origin: 'United Kingdom',
    category: 'Hardware & Accessories',
    tagline: 'Heritage Made Contemporary, Luxury Handcrafted British Cabinet Hardware',
    description: 'ARMAC MARTIN is a world-renowned British manufacturer of luxury cabinet hardware. Handcrafted in Birmingham, England since 1929, Armac Martin brass knobs, pulls, and grilles grace bespoke kitchens and dressing rooms.',
    features: [
      'Handcrafted in Birmingham, England since 1929',
      'Over 38 hand-finished patinas (Satin Brass, Burnished Brass, American Bronze)',
      'Solid brass knurled & fluted cabinet pulls',
      'Bespoke woven decorative brass mesh grilles'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide5_hardware.webp',
    specs: { warranty: '10 Years Warranty', certification: 'Handcrafted in England Approved', material: 'Solid Machined Brass' },
    popularProducts: [
      { name: 'Armac Martin Queslett Cabinet Pull', category: 'Cabinet Pulls', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Classic cup pull with exposed slot screws.' },
      { name: 'Armac Martin Mix Cabinet Knob', category: 'Cabinet Knobs', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Interchangeable knurled brass cabinet knob.' },
      { name: 'Armac Martin Decorative Brass Grille', category: 'Cabinet Grilles', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Diamond woven brass wire mesh for wardrobe doors.' }
    ],
    seoTitle: 'ARMAC MARTIN British Cabinet Hardware UAE | Zenaura Sanitary',
    seoDescription: 'Buy ARMAC MARTIN luxury handcrafted British cabinet knobs, brass pulls & grilles in UAE at Zenaura Sanitary. Premium kitchen hardware.',
    seoKeywords: 'ARMAC MARTIN UAE, Armac Martin Dubai, British Cabinet Hardware UAE, Brass Pulls'
  },

  // 51. HENDEL & HENDEL
  {
    id: 'hendel-hendel',
    name: 'HENDEL & HENDEL',
    origin: 'United Kingdom',
    category: 'Hardware & Accessories',
    tagline: 'HH Hendel & Hendel, Architectural Cabinet Handles & Designer Pulls',
    description: 'HENDEL & HENDEL (HH) is a luxury British cabinet hardware brand. Known for statement knurled handles, cup pulls, and T-bar knobs engineered to elevate kitchen cabinetry, wardrobes, and furniture.',
    features: [
      'Precision engineered solid metal cabinet hardware',
      'Tactile diamond & linear knurling patterns',
      'Signature finishes: Brushed Brass, Matt Black & Aged Bronze',
      'Supplied with M4 break-off installation screws'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide5_hardware.webp',
    specs: { warranty: '5 Years Warranty', certification: 'UK Hardware Standard', material: 'Solid Brass & Zinc Alloy' },
    popularProducts: [
      { name: 'Hendel & Hendel Barwick Knurled Pull', category: 'Cabinet Pulls', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Linear knurled drawer bar pull in Brushed Brass.' },
      { name: 'Hendel & Hendel Fold Cup Pull', category: 'Cabinet Pulls', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Curved minimal drawer cup pull in Matt Black.' },
      { name: 'Hendel & Hendel Form T-Bar Knob', category: 'Cabinet Knobs', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'Ribbed T-bar handle for wardrobe doors.' }
    ],
    seoTitle: 'HENDEL & HENDEL Cabinet Handles UAE | Zenaura Sanitary',
    seoDescription: 'Buy HENDEL & HENDEL (HH) British architectural cabinet handles & knurled pulls in UAE at Zenaura Sanitary. Luxury kitchen hardware.',
    seoKeywords: 'HENDEL & HENDEL UAE, Hendel Hendel Dubai, Knurled Cabinet Pulls UAE'
  },

  // 52. HEWI
  {
    id: 'hewi',
    name: 'HEWI',
    origin: 'Made in Germany',
    category: 'Hardware & Accessories',
    tagline: 'German Supportive & Accessible Hardware, Universal Barrier-Free Design',
    description: 'HEWI is the pioneer in universal accessible hardware and barrier-free bathroom design. Engineered in Bad Arolsen, Germany, HEWI produces grab bars, shower seats, and architectural door handles compatible with ADA and ESMA standards.',
    features: [
      'German universal barrier-free design standards (DIN 18040)',
      'High-gloss polyamide & Grade 316 stainless steel materials',
      'Integrated antimicrobial silver ion surface coating',
      'Heavy-duty load bearing capacity (up to 150kg)'
    ],
    logoImage: '/images/logos/hewi.svg',
    bannerImage: '/images/addon/image10.png',
    specs: { warranty: '10 Years Warranty', certification: 'DIN 18040 & Barrier-Free Approved', material: 'Grade 316 Steel & High-Gloss Polyamide' },
    popularProducts: [
      { name: 'HEWI System 900 Hinged Support Rail', category: 'Accessible Hardware', image: '/images/addon/image10.png', description: 'Foldable stainless steel grab bar with toilet paper holder.' },
      { name: 'HEWI Modular Hanging Shower Seat', category: 'Shower Seats', image: '/images/addon/image1.png', description: 'Removable ergonomic wall-mounted shower seat.' },
      { name: 'HEWI System 111 Polyamide Door Handle', category: 'Door Handles', image: '/images/sanipex_slides/slide5_hardware.webp', description: 'The iconic 1969 colorful lever handle.' }
    ],
    seoTitle: 'HEWI German Accessible Hardware UAE | Zenaura Sanitary',
    seoDescription: 'Official HEWI German barrier-free accessible sanitary hardware, grab bars & shower seats in UAE at Zenaura Sanitary. ADA & DIN certified.',
    seoKeywords: 'HEWI UAE, HEWI Grab Bars Dubai, Accessible Bathroom UAE, Barrier Free Sanitary'
  },

  // 53. FULGOR MILANO
  {
    id: 'fulgor-milano',
    name: 'FULGOR MILANO',
    origin: 'Italy',
    category: 'Kitchen & Appliances',
    tagline: 'Italian Professional Built-In Cooking Appliances & Dual-Fuel Ranges',
    description: 'FULGOR MILANO brings professional Italian culinary performance to home kitchens. Operating in Gallarate, Italy since 1949, Fulgor Milano crafts Sofia professional range cookers, induction hobs, and blast chillers.',
    features: [
      'Sofia professional range cookers with dual-fuel brass burners',
      'Crema-Clean self-cleaning pyrolytic oven technology',
      'Celeris ultra-rapid pre-heating function',
      'Commercial-grade 304 stainless steel construction'
    ],
    logoImage: null,
    bannerImage: '/images/cat_kitchen_bystro.png',
    specs: { warranty: '3 Years Warranty', certification: 'CE & ISO 9001 Approved', material: '304 Stainless Steel & Cast Iron' },
    popularProducts: [
      { name: 'Fulgor Milano Sofia 48 Dual-Fuel Range Cooker', category: 'Range Cookers', image: '/images/cat_kitchen_bystro.png', description: '48-inch dual oven range cooker with 6 brass gas burners.' },
      { name: 'Fulgor Milano 90cm Induction Hob', category: 'Hobs', image: '/images/cat_kitchen_bystro.png', description: '5-zone touch control induction cooktop with slider controls.' },
      { name: 'Fulgor Milano Built-In Blast Chiller', category: 'Ovens', image: '/images/cat_kitchen_bystro.png', description: 'Multi-function blast chiller & slow cooker.' }
    ],
    seoTitle: 'FULGOR MILANO Italian Kitchen Appliances UAE | Zenaura Sanitary',
    seoDescription: 'Discover FULGOR MILANO Italian professional built-in cooking appliances & Sofia range cookers in UAE at Zenaura Sanitary. Italian culinary excellence.',
    seoKeywords: 'FULGOR MILANO UAE, Fulgor Milano Dubai, Italian Range Cooker UAE'
  },

  // 54. BYSTRO
  {
    id: 'bystro',
    name: 'BYSTRO',
    origin: 'Commercial Kitchen Tech',
    category: 'Kitchen & Appliances',
    tagline: 'Professional Kitchen Appliances, Pull-Out Spray Mixers & Sinks',
    description: 'BYSTRO is a high-performance commercial kitchen appliance and sink manufacturer. Specializing in heavy-duty IX304 stainless steel undermount sinks, commercial pull-out spray faucets, built-in ovens, and gas hobs.',
    features: [
      'Grade 304 heavy-gauge stainless steel sinks',
      'SoundDeadening acoustic rubber insulation pads',
      'High-pressure dual spray pull-out kitchen mixers',
      'Commercial grade gas safety flame failure devices'
    ],
    logoImage: '/images/logos/bystro.svg',
    bannerImage: '/images/cat_kitchen_bystro.png',
    specs: { warranty: '5 Years Warranty', certification: 'CE & ESMA Approved', material: 'Grade 304 Stainless Steel' },
    popularProducts: [
      { name: 'Bystro EX316 Single Bowl Undermount Sink', category: 'Kitchen Sinks', image: '/images/cat_kitchen_bystro.png', description: '540x440mm satin stainless steel undermount sink.' },
      { name: 'Bystro Commercial Pull-Out Kitchen Faucet', category: 'Kitchen Taps', image: '/images/addon/image18.png', description: 'High-arch swivel mixer with dual spray head.' },
      { name: 'Bystro Built-In 90cm Gas Hob', category: 'Hobs', image: '/images/cat_kitchen_bystro.png', description: '5-burner stainless steel gas hob with triple ring wok burner.' }
    ],
    seoTitle: 'BYSTRO Kitchen Appliances & Sinks UAE | Zenaura Sanitary',
    seoDescription: 'Official BYSTRO supplier in UAE. Buy stainless steel kitchen undermount sinks, pull-out spray taps & built-in hobs at Zenaura Sanitary.',
    seoKeywords: 'BYSTRO Kitchen UAE, Bystro Sink Dubai, Stainless Steel Kitchen Sink UAE'
  },

  // 55. FHIABA
  {
    id: 'fhiaba',
    name: 'FHIABA',
    origin: 'Italy',
    category: 'Kitchen & Appliances',
    tagline: 'Italian Ultra-Luxury Integrated Refrigerators & Wine Preservation',
    description: 'FHIABA is the gold standard in Italian ultra-luxury refrigeration. Handcrafted in Codroipo, Italy, Fhiaba integrated refrigerators, freezers, and wine preservation columns feature stainless steel interiors and TriPro™ triple cooling.',
    features: [
      'ProVent™ independent ventilation for precise temperature',
      'TriPro™ triple refrigeration system for humidity control',
      'Full stainless steel interior antibacterial lining',
      'Equilance™ dual-pivot concealed door hinge system'
    ],
    logoImage: null,
    bannerImage: '/images/cat_kitchen_bystro.png',
    specs: { warranty: '3 Years Warranty', certification: '100% Made in Italy', material: 'Micro-Shot Stainless Steel' },
    popularProducts: [
      { name: 'Fhiaba Country Series Integrated Refrigerator', category: 'Refrigerators', image: '/images/cat_kitchen_bystro.png', description: '90cm wide integrated fridge-freezer with ice maker.' },
      { name: 'Fhiaba Wine Column Cellar', category: 'Wine Coolers', image: '/images/cat_kitchen_bystro.png', description: 'Dual-zone wine preservation column holding 72 bottles.' },
      { name: 'Fhiaba Integrated Drawer Refrigerator', category: 'Refrigerators', image: '/images/cat_kitchen_bystro.png', description: 'Under-counter stainless steel refrigerated drawers.' }
    ],
    seoTitle: 'FHIABA Italian Luxury Refrigerators UAE | Zenaura Sanitary',
    seoDescription: 'Discover FHIABA Italian ultra-luxury integrated refrigerators & wine preservation columns in UAE at Zenaura Sanitary. Handcrafted refrigeration.',
    seoKeywords: 'FHIABA UAE, Fhiaba Refrigerator Dubai, Luxury Italian Fridge UAE'
  },

  // 56. LOFRA
  {
    id: 'lofra',
    name: 'LOFRA',
    origin: 'Italy (Since 1956)',
    category: 'Kitchen & Appliances',
    tagline: 'Lofra Italian Heritage Range Cookers & Professional Built-In Ovens',
    description: 'LOFRA has been crafting authentic Italian range cookers in Torreglia since 1956. Celebrated for Dolcevita vintage style cookers with chrome accents, Lofra blends 50s Italian charm with modern induction and gas performance.',
    features: [
      'Dolcevita Italian vintage freestanding range cookers',
      'Sabaf dual-ring high efficiency gas burners',
      'Triple glazed cool-touch removable oven doors',
      'Telescopic oven shelf support runners'
    ],
    logoImage: null,
    bannerImage: '/images/cat_kitchen_bystro.png',
    specs: { warranty: '2 Years Warranty', certification: 'Made in Italy 1956 Certified', material: 'Enamelled Steel & Brass Trims' },
    popularProducts: [
      { name: 'Lofra Dolcevita 90cm Gas Range Cooker', category: 'Range Cookers', image: '/images/cat_kitchen_bystro.png', description: 'Matte Black 5-burner range cooker with dual oven.' },
      { name: 'Lofra Built-In Multifunction Electric Oven', category: 'Ovens', image: '/images/cat_kitchen_bystro.png', description: '60cm stainless steel 9-function fan oven.' },
      { name: 'Lofra Curva Curved Designer Range Hood', category: 'Range Hoods', image: '/images/cat_kitchen_bystro.png', description: 'Matching 90cm wall range hood in Matte Black.' }
    ],
    seoTitle: 'LOFRA Italian Range Cookers UAE | Zenaura Sanitary',
    seoDescription: 'Buy LOFRA 1956 Italian heritage range cookers & Dolcevita vintage built-in ovens in UAE at Zenaura Sanitary. Authentic Italian kitchens.',
    seoKeywords: 'LOFRA UAE, Lofra Range Cooker Dubai, Dolcevita Cooker UAE'
  },

  // 57. FABER
  {
    id: 'faber',
    name: 'FABER',
    origin: 'Italy',
    category: 'Kitchen & Appliances',
    tagline: 'Italian Master Kitchen Range Hoods & Downdraft Induction Ventilation',
    description: 'FABER invented the world’s first kitchen range hood in Fabriano, Italy in 1955. Today, Faber is the global technology leader in whisper-quiet extractor hoods, Galileo downdraft induction hobs, and air purification.',
    features: [
      'Inventor of the modern kitchen range hood (1955)',
      'Galileo integrated downdraft induction hob extraction',
      'Sound-proofing Silence Panel technology (reduces noise by 25%)',
      'Brushless eco-energy motors with A+++ energy efficiency'
    ],
    logoImage: null,
    bannerImage: '/images/cat_kitchen_bystro.png',
    specs: { warranty: '3 Years Warranty', certification: 'ISO 9001 & CE Certified', material: 'Stainless Steel & Black Glass' },
    popularProducts: [
      { name: 'Faber Galileo Smart Downdraft Induction Hob', category: 'Downdraft Hobs', image: '/images/cat_kitchen_bystro.png', description: 'Induction cooktop with flush center extractor.' },
      { name: 'Faber Beat Suspension Island Range Hood', category: 'Range Hoods', image: '/images/cat_kitchen_bystro.png', description: 'Chandelier-style cylindrical island extractor hood.' },
      { name: 'Faber In-Nova Recessed Wall Hood', category: 'Range Hoods', image: '/images/cat_kitchen_bystro.png', description: 'Concealed cabinet range hood with LED bar.' }
    ],
    seoTitle: 'FABER Italian Range Hoods UAE | Zenaura Sanitary',
    seoDescription: 'Official FABER Italian kitchen range hoods & Galileo downdraft induction hobs supplier in UAE at Zenaura Sanitary. Silent extraction tech.',
    seoKeywords: 'FABER Range Hoods UAE, Faber Extractor Dubai, Downdraft Induction Hob UAE'
  },

  // 58. DUNAVOX
  {
    id: 'dunavox',
    name: 'DUNAVOX',
    origin: 'Europe',
    category: 'Kitchen & Appliances',
    tagline: 'The Wine Cooling Expert, Premium Built-In Wine Cellars & Cabinets',
    description: 'DUNAVOX is Europe’s leading specialist in premium wine cooling cabinets. Engineered exclusively for wine preservation, Dunavox wine fridges feature push-to-open handleless doors, UV-protected glass, and wooden display shelves.',
    features: [
      'Dual & triple temperature zone cooling (5°C to 20°C)',
      'Push-to-open motorized handleless glass doors',
      'Anti-vibration compressor mounting technology',
      'UV-treated tinted glass door panels'
    ],
    logoImage: null,
    bannerImage: '/images/cat_kitchen_bystro.png',
    specs: { warranty: '3 Years Warranty', certification: 'CE & Energy Class Certified', material: 'Stainless Steel & Beech Wood Shelves' },
    popularProducts: [
      { name: 'Dunavox Glance 114 Bottle Integrated Wine Cooler', category: 'Wine Coolers', image: '/images/cat_kitchen_bystro.png', description: 'Full height push-to-open dual zone wine cellar.' },
      { name: 'Dunavox Flow Under-Counter Wine Fridge', category: 'Wine Coolers', image: '/images/cat_kitchen_bystro.png', description: 'Under-counter 34 bottle wine fridge with beech shelves.' },
      { name: 'Dunavox Home Compact Wine Cabinet', category: 'Wine Coolers', image: '/images/cat_kitchen_bystro.png', description: 'Freestanding 18 bottle compact wine cooler.' }
    ],
    seoTitle: 'DUNAVOX Premium Wine Coolers UAE | Zenaura Sanitary',
    seoDescription: 'Buy DUNAVOX European built-in wine fridges & wine preservation cellars in UAE at Zenaura Sanitary. The wine cooling expert.',
    seoKeywords: 'DUNAVOX UAE, Dunavox Wine Cooler Dubai, Built-In Wine Fridge UAE'
  },

  // 59. ELLECI
  {
    id: 'elleci',
    name: 'ELLECI',
    origin: 'Italy',
    category: 'Kitchen & Appliances',
    tagline: 'Composite Granitek Kitchen Sinks & Italian Designer Faucets',
    description: 'ELLECI is an Italian manufacturer of composite granite kitchen sinks. Engineered in San Felice Circeo, Elleci’s patented Granitek® and Keratek® composite quartz materials provide unmatched heat, scratch, and stain resistance.',
    features: [
      'Granitek® & Keratek® ceramic nanotech composite quartz',
      'Heat resistant up to 340°C & zero stain absorption',
      'Integrated UV protection preventing color fading',
      'Available in 12 matte natural stone shades'
    ],
    logoImage: null,
    bannerImage: '/images/cat_kitchen_bystro.png',
    specs: { warranty: '10 Years Warranty', certification: '100% Made in Italy', material: 'Granitek Composite Quartz' },
    popularProducts: [
      { name: 'Elleci Quadra 130 Composite Sink', category: 'Kitchen Sinks', image: '/images/cat_kitchen_bystro.png', description: 'Single bowl Granitek composite sink in Matte Black.' },
      { name: 'Elleci Best 450 Double Bowl Undermount Sink', category: 'Kitchen Sinks', image: '/images/cat_kitchen_bystro.png', description: 'Twin bowl composite sink in Titanium Grey.' },
      { name: 'Elleci Como Matching Composite Faucet', category: 'Kitchen Taps', image: '/images/addon/image18.png', description: 'Color-matched swivel kitchen tap.' }
    ],
    seoTitle: 'ELLECI Italian Composite Granite Sinks UAE | Zenaura Sanitary',
    seoDescription: 'Buy ELLECI Italian Granitek composite quartz kitchen sinks & faucets in UAE at Zenaura Sanitary. Scratch & stain-proof sinks.',
    seoKeywords: 'ELLECI Sinks UAE, Elleci Granite Sink Dubai, Composite Kitchen Sink UAE'
  },

  // 60. ARTINOX
  {
    id: 'artinox',
    name: 'ARTINOX',
    origin: 'Italy',
    category: 'Kitchen & Appliances',
    tagline: 'Italian Custom Stainless Steel Kitchen Sinks & Worktop Modules',
    description: 'ARTINOX has been crafting custom stainless steel kitchen sinks and seamless worktops in Conegliano, Italy since 1984. Celebrated for radius 12mm welded sink bowls, micro-brushed steel finishes, and integrated drainers.',
    features: [
      'AISI 304 18/10 surgical grade stainless steel',
      'Precision welded 12mm internal radius sink corners',
      'Seamless welded worktop sink integration',
      'PVD Gunmetal, Copper & Brass steel color finishes'
    ],
    logoImage: null,
    bannerImage: '/images/cat_kitchen_bystro.png',
    specs: { warranty: '10 Years Warranty', certification: 'Made in Italy 1984 Certified', material: 'AISI 304 Stainless Steel' },
    popularProducts: [
      { name: 'Artinox Layer Custom Stainless Steel Sink', category: 'Kitchen Sinks', image: '/images/cat_kitchen_bystro.png', description: 'Sink bowl with integrated ledge for colander & cutting board.' },
      { name: 'Artinox Ghost Retractable Tap Sink Combo', category: 'Kitchen Sinks', image: '/images/cat_kitchen_bystro.png', description: 'Sink with fold-down faucet & glass cover plate.' },
      { name: 'Artinox Custom Stainless Steel Worktop', category: 'Worktops', image: '/images/cat_kitchen_bystro.png', description: 'Bespoke welded stainless steel island worktop.' }
    ],
    seoTitle: 'ARTINOX Custom Stainless Steel Sinks UAE | Zenaura Sanitary',
    seoDescription: 'Discover ARTINOX Italian custom stainless steel kitchen sinks & integrated worktops in UAE at Zenaura Sanitary. Professional surgical steel.',
    seoKeywords: 'ARTINOX UAE, Artinox Sink Dubai, Italian Stainless Steel Kitchen Sink'
  },

  // 61. REGINOX
  {
    id: 'reginox',
    name: 'REGINOX',
    origin: 'Netherlands',
    category: 'Kitchen & Appliances',
    tagline: 'Dutch Precision Stainless Steel Sinks, RegiColor & Kitchen Tapware',
    description: 'REGINOX is a Dutch manufacturer of premium stainless steel kitchen sinks and RegiColor enamel sinks. Operating in Rijssen, Netherlands, Reginox produces over 150 sink models exported to 50+ countries.',
    features: [
      'Dutch precision deep-drawn stainless steel technology',
      'RegiColor enamel color-coated granite & steel sinks',
      'Integrated waste kits & overflow covers',
      'Lifetime warranty on stainless steel sink bodies'
    ],
    logoImage: null,
    bannerImage: '/images/cat_kitchen_bystro.png',
    specs: { warranty: 'Lifetime Steel Warranty', certification: 'ISO 9001 Dutch Quality', material: 'Deep-Drawn Stainless Steel' },
    popularProducts: [
      { name: 'Reginox Texas 50x40 Undermount Sink', category: 'Kitchen Sinks', image: '/images/cat_kitchen_bystro.png', description: 'Satin stainless steel undermount single bowl.' },
      { name: 'Reginox RegiColor Midnight Sky Sink', category: 'Kitchen Sinks', image: '/images/cat_kitchen_bystro.png', description: 'Deep navy blue enamel coated steel sink.' },
      { name: 'Reginox Cano Swivel Kitchen Tap', category: 'Kitchen Taps', image: '/images/addon/image18.png', description: 'Single lever chrome swivel neck faucet.' }
    ],
    seoTitle: 'REGINOX Dutch Stainless Steel Sinks UAE | Zenaura Sanitary',
    seoDescription: 'Buy REGINOX Dutch precision stainless steel sinks & RegiColor enamel sinks in UAE at Zenaura Sanitary. Lifetime warranty.',
    seoKeywords: 'REGINOX Sinks UAE, Reginox Dubai, Dutch Stainless Steel Sink UAE'
  },

  // 62. AQUADRAIN
  {
    id: 'aquadrain',
    name: 'AQUADRAIN',
    origin: 'Germany • UAE',
    category: 'Hardware & Accessories',
    tagline: 'Architectural Stainless Steel Linear Drains & Wetroom Channels',
    description: 'AQUADRAIN specializes in high-capacity architectural linear shower drains and floor channels. Crafted from Grade 316 stainless steel, Aquadrain provides tile-insert frameless drains and sleek slots for luxury curbless wetrooms.',
    features: [
      'Grade 316L solid stainless steel construction',
      'Reversible tile-insert or brushed stainless steel grate',
      'Ultra-low profile installation height (from 54mm)',
      'Integrated odor trap & removable hair strainer'
    ],
    logoImage: null,
    bannerImage: '/images/sanipex_slides/slide4_slabs.webp',
    specs: { warranty: '10 Years Warranty', certification: 'EN 1253 Flow Rated Certified', material: 'Grade 316L Stainless Steel' },
    popularProducts: [
      { name: 'Aquadrain Contract Reversible Tile Insert Drain 146x146mm', category: 'Shower Drains', image: '/images/addon/image10.png', description: 'Grade 316L brushed stainless steel floor drain.' },
      { name: 'Aquadrain Slim Line 800mm Linear Channel', category: 'Shower Drains', image: '/images/sanipex_slides/slide4_slabs.webp', description: 'Linear slot shower channel with hair catcher.' },
      { name: 'Aquadrain Corner Triangular Shower Drain', category: 'Shower Drains', image: '/images/addon/image1.png', description: 'Corner tile-insert shower floor drain.' }
    ],
    seoTitle: 'AQUADRAIN Stainless Steel Linear Drains UAE | Zenaura Sanitary',
    seoDescription: 'Official AQUADRAIN supplier in UAE. Grade 316L stainless steel linear shower drains, tile-insert channels & wetroom drains at Zenaura Sanitary.',
    seoKeywords: 'AQUADRAIN UAE, Aquadrain Linear Drain Dubai, Tile Insert Shower Drain UAE'
  },

  // 63. SANAURA
  {
    id: 'sanaura',
    name: 'SANAURA',
    origin: 'Spain',
    category: 'Hardware & Accessories',
    tagline: 'Spanish Alabaster Architectural Lighting & Luxury Anti-Fog Mirrors',
    description: 'SANAURA crafts Spanish alabaster wall lighting and anti-fog LED mirrors. Sourced from natural alabaster quarries in Spain, each Sanaura sconce features translucent stone veins that emit warm ambient light.',
    features: [
      'Hand-carved natural Spanish translucent alabaster stone',
      'Anti-fog heating demister pads on all LED mirrors',
      '3000K warm architectural LED illumination',
      'PVD Brushed Gold & Bronze mounting brackets'
    ],
    logoImage: '/images/logos/sanaura.svg',
    bannerImage: '/images/sanipex_slides/slide6_lighting.webp',
    specs: { warranty: '5 Years Warranty', certification: 'CE & IP44 Bathroom Rated', material: 'Natural Spanish Alabaster & LED' },
    popularProducts: [
      { name: 'Sanaura Carlyle Alabaster Wall Sconce', category: 'Lighting', image: '/images/sanipex_slides/slide6_lighting.webp', description: 'Spanish alabaster cylindrical wall light.' },
      { name: 'Sanaura Halo Circular LED Anti-Fog Mirror', category: 'Mirrors', image: '/images/addon/image5.png', description: 'Backlit LED vanity mirror with demister pad.' },
      { name: 'Sanaura Linear Fluted Glass Wall Light', category: 'Lighting', image: '/images/sanipex_slides/slide6_lighting.webp', description: 'Vertical fluted glass bathroom vanity sconce.' }
    ],
    seoTitle: 'SANAURA Spanish Alabaster Lighting UAE | Zenaura Sanitary',
    seoDescription: 'Discover SANAURA Spanish alabaster wall sconces & anti-fog LED vanity mirrors in UAE at Zenaura Sanitary. Luxury bathroom lighting.',
    seoKeywords: 'SANAURA Lighting UAE, Sanaura Mirrors Dubai, Spanish Alabaster Light UAE'
  }
];
