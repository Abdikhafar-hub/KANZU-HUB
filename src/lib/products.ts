import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import catSaudi from "@/assets/cat-saudi.jpg";
import videoPoster from "@/assets/video-poster.jpg";
import eidBanner from "@/assets/eid-banner.jpg";

// Headwear product imports
import kufiCap from "@/assets/kufi_cap.png";
import taqiyahCap from "@/assets/taqiyah_cap.png";
import omaniKumma from "@/assets/omani_kumma.png";
import ghutra from "@/assets/ghutra.png";
import shemagh from "@/assets/shemagh.png";
import keffiyeh from "@/assets/keffiyeh.png";
import agal from "@/assets/agal.png";
import imamah from "@/assets/imamah.png";

// Watches product imports
import watchDressGold from "@/assets/watch_dress_gold.jpg";
import watchMinimalistBlue from "@/assets/watch_minimalist_blue.jpg";
import watchSilverClassic from "@/assets/watch_silver_classic.jpg";
import watchSmartHybrid from "@/assets/watch_smart_hybrid.jpg";
import watchSportLuxury from "@/assets/watch_sport_luxury.jpg";
import watchTwotoneLuxury from "@/assets/watch_twotone_luxury.jpg";
import watchGoldLeather from "@/assets/watch_gold_leather.jpg";
import watchRoseGoldBlack from "@/assets/watch_rose_gold_black.jpg";
import watchEidCampaign from "@/assets/watch_eid_campaign.jpg";
import watchMinimalistWhite from "@/assets/watch_minimalist_white.jpg";
import watchRoyalGold from "@/assets/watch_royal_gold.jpg";
import watchArabicSilver from "@/assets/watch_arabic_silver.jpg";

// Sandals product imports (high-quality user-provided images)
import sandal1 from "@/assets/sandal1.webp";   // Black pebbled leather, silver buckle, tan sole
import sandal2 from "@/assets/sandal2.webp";   // Olive/khaki diamond-embossed, toe ring, dark sole
import sandal3 from "@/assets/sandal3.webp";   // Brown leather toe-ring, woven mat lifestyle
import sandal4 from "@/assets/sandal4.webp";   // Black modern double-strap, matte black sole
import sandal6 from "@/assets/sandal6.jpg";    // Dark brown croc-embossed, gold medallion, tan sole
import sandal7 from "@/assets/sandal7.jpg";    // Burgundy/crimson croc leather, gold buckle, flat black sole
import sandal8 from "@/assets/sandal8.webp";   // Light blue/silver leather, navy footbed, brown welt

// Omani Kanzu product imports
import omani1 from "@/assets/omani1.jpeg";     // Deep teal/petrol, round collar, zip front
import omani2 from "@/assets/omani2.jpeg";     // Beige/sand, zip front, satin finish
import omani3 from "@/assets/omani3.jpeg";     // Mint/sage green, button placket
import omani4 from "@/assets/omani4.jpeg";     // Deep navy/indigo, zip front, satin sheen
import omani5 from "@/assets/omani5.webp";     // Steel grey, V-stitch chevron, zip front
import omani7 from "@/assets/omani7.jpeg";     // Crisp white, V-stitch chevron, zip front
import omani8 from "@/assets/omani8.jpeg";     // Dark teal/forest green, zip front, outdoor


export type ProductCategory =
  | "Saudi Thobes"
  | "Emirati Kanzu"
  | "Omani Kanzu"

  | "Swahili Kanzu"
  | "Kofia Caps"
  | "Tasbih"
  | "Prayer Mats"
  | "Luxury Perfumes"
  | "Men's Sandals"
  | "Headwear"
  | "Watches";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  price: number;
  image: string;
  alt: string;
  colors: string[];
  sizes: string[];
  badge?: "New" | "Best Seller" | "Limited" | "Exclusive";
  description: string;
  specs?: {
    caseSize?: string;
    strapMaterial?: string;
    movement?: string;
    waterResistance?: string;
    material?: string;
    leatherType?: string;
    soleType?: string;
    comfort?: string;
    stylingRecommendations?: string;
  };
  pairsWellWith?: string[];
};

export const products: Product[] = [
  {
    slug: "saudi-kanzu-ivory",
    name: "Saudi Kanzu — Pearl Ivory",
    category: "Saudi Thobes",
    price: 8500,
    image: p1,
    alt: "Pearl ivory Saudi kanzu on mannequin",
    colors: ["#F7F4EC", "#111111", "#5b4b34"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "Best Seller",
    description:
      "Cut from a tightly woven Japanese poplin, the Pearl Ivory Saudi Kanzu drapes with a quiet authority. Hand-finished placket, mother-of-pearl buttons and a tailored mandarin collar.",
    pairsWellWith: ["saudi-classic-chestnut", "double-loop-agal", "pearl-white-ghutra"],
  },
  {
    slug: "emirati-kanzu-sand",
    name: "Emirati Kanzu — Desert Sand",
    category: "Emirati Kanzu",
    price: 9200,
    image: p2,
    alt: "Desert sand Emirati kanzu with tassel",
    colors: ["#E6D2A8", "#F2EADB", "#111111"],
    sizes: ["M", "L", "XL", "XXL"],
    badge: "New",
    description:
      "An Emirati silhouette finished with a handwoven gold tassel. Fluid drape, breathable weave, and a soft sheen that catches the light without flourish.",
    pairsWellWith: ["emirati-premium-midnight-black", "elegance-smart-hybrid", "oud-tansoor"],
  },
  {
    slug: "omani-dishdasha-graphite",
    name: "Omani Dishdasha — Graphite",
    category: "Omani Kanzu",
    price: 9800,
    image: p3,
    alt: "Graphite Omani dishdasha with embroidered collar",
    colors: ["#3a3a3a", "#111111", "#7a6a4a"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Signature Omani collar with restrained embroidery in tonal thread. Mid-weight cotton blend tailored for the Nairobi climate.",
    pairsWellWith: ["omani-royal-heritage-tan", "royal-omani-kumma", "oud-tansoor"],
  },
  {
    slug: "omani-dishdasha-teal",
    name: "Omani Dishdasha — Petrol Teal",
    category: "Omani Kanzu",
    price: 10500,
    image: omani1,
    alt: "Deep teal Omani dishdasha with round collar and zip front",
    colors: ["#1a5c5c", "#111111"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "New",
    description:
      "A striking petrol teal Omani dishdasha in premium linen-cotton blend. Features a clean round collar, concealed zip placket, and a luxurious drape perfect for Jummah or evening gatherings.",
    pairsWellWith: ["omani-royal-heritage-tan", "royal-omani-kumma", "al-malik-silver-blue"],
  },
  {
    slug: "omani-dishdasha-sand",
    name: "Omani Dishdasha — Desert Sand",
    category: "Omani Kanzu",
    price: 9500,
    image: omani2,
    alt: "Beige sand Omani dishdasha with zip front and satin finish",
    colors: ["#C8B08C", "#E6D2A8"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "Best Seller",
    description:
      "A classic desert sand Omani dishdasha in soft satin-finish cotton. The warm neutral tone pairs effortlessly with any headwear. Zip-front closure and tailored cuffs for a refined silhouette.",
    pairsWellWith: ["pearl-white-ghutra", "royal-omani-kumma", "sahara-gold-leather"],
  },
  {
    slug: "omani-dishdasha-sage",
    name: "Omani Dishdasha — Sage Mint",
    category: "Omani Kanzu",
    price: 10200,
    image: omani3,
    alt: "Soft sage mint green Omani dishdasha with button placket",
    colors: ["#ACE1AF", "#C5E1A5"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A refreshing sage mint Omani dishdasha for the modern gentleman. Cut from premium Egyptian cotton with a classic Omani button placket. Perfect for Eid celebrations and summer gatherings.",
    pairsWellWith: ["omani-royal-heritage-tan", "classic-white-taqiyah", "tasbih-sandalwood"],
  },
  {
    slug: "omani-dishdasha-indigo",
    name: "Omani Dishdasha — Royal Indigo",
    category: "Omani Kanzu",
    price: 11500,
    image: omani4,
    alt: "Deep royal indigo Omani dishdasha with satin sheen and zip front",
    colors: ["#1a1a4e", "#0d1a35"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "Exclusive",
    description:
      "A commanding deep indigo Omani dishdasha with a rich satin sheen. The premium polyester-cotton blend delivers an elevated drape. Zip-front with mandarin collar — ideal for formal occasions and wedding ceremonies.",
    pairsWellWith: ["double-loop-agal", "sultan-royal-gold", "omani-royal-heritage-tan"],
  },
  {
    slug: "omani-dishdasha-steel",
    name: "Omani Dishdasha — Steel Grey",
    category: "Omani Kanzu",
    price: 10800,
    image: omani5,
    alt: "Steel grey Omani dishdasha with V-stitch chevron detail",
    colors: ["#708090", "#555555"],
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
    description:
      "A sophisticated steel grey Omani dishdasha with signature V-stitch chevron detailing on the chest. Zip-front closure, premium satin cotton, and a sharp tailored silhouette for business and formal settings.",
    pairsWellWith: ["al-aqsa-premium-steel-grey", "al-faris-chrono-steel", "pearl-white-ghutra"],
  },
  {
    slug: "omani-dishdasha-pearl-white",
    name: "Omani Dishdasha — Pearl White",
    category: "Omani Kanzu",
    price: 9800,
    image: omani7,
    alt: "Crisp pearl white Omani dishdasha with V-stitch chevron and zip front",
    colors: ["#ffffff", "#F7F4EC"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "Best Seller",
    description:
      "The quintessential white Omani dishdasha. Tailored from high-thread-count Egyptian cotton with a crisp finish. Features the signature V-stitch chevron and concealed zip placket. Essential for Jummah and Eid.",
    pairsWellWith: ["omani-royal-heritage-tan", "royal-omani-kumma", "sultan-rose-gold"],
  },
  {
    slug: "omani-dishdasha-forest",
    name: "Omani Dishdasha — Forest Green",
    category: "Omani Kanzu",
    price: 10500,
    image: omani8,
    alt: "Dark forest green Omani dishdasha with zip front detail",
    colors: ["#1a4a3a", "#2d5a4a"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Limited",
    description:
      "A rich forest green Omani dishdasha in premium satin-finish fabric. The deep green commands attention while remaining tastefully understated. Zip-front with clean mandarin collar — suited for evening occasions.",
    pairsWellWith: ["medina-eid-special", "omani-royal-heritage-tan", "oud-tansoor"],
  },
  {
    slug: "kofia-noir-gold",
    name: "Kofia — Noir & Gold",
    category: "Kofia Caps",
    price: 2400,
    image: p6,
    alt: "Embroidered black and gold kofia cap",
    colors: ["#111111"],
    sizes: ["One Size"],
    description:
      "A traditional Swahili kofia finished with intricate antique gold embroidery. Soft-structured for everyday wear and Eid celebrations.",
  },
  {
    slug: "oud-tansoor",
    name: "Oud Tansoor — Eau de Parfum",
    category: "Luxury Perfumes",
    price: 6800,
    image: p7,
    alt: "Amber glass bottle of Oud Tansoor perfume",
    colors: ["#b56b1f"],
    sizes: ["50ml", "100ml"],
    badge: "Limited",
    description:
      "A composition of Cambodian oud, saffron and warm leather. Long-wearing, unmistakably refined.",
  },
  {
    slug: "tasbih-sandalwood",
    name: "Tasbih — Sandalwood 99",
    category: "Tasbih",
    price: 1900,
    image: p8,
    alt: "Sandalwood 99-bead tasbih with tassel",
    colors: ["#7b4b2a"],
    sizes: ["99 Beads"],
    description:
      "Hand-turned sandalwood beads strung on waxed cotton with a silk tassel. Sized to settle quietly in the hand.",
  },
  {
    slug: "swahili-kanzu-mombasa",
    name: "Swahili Kanzu — Mombasa White",
    category: "Swahili Kanzu",
    price: 8900,
    image: catSaudi,
    alt: "Mombasa style Swahili Kanzu in crisp white",
    colors: ["#ffffff"],
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
    description:
      "Traditional Coastal Swahili Kanzu crafted from lightweight premium linen. Includes authentic hand-knit detailing around the collar.",
    pairsWellWith: ["swahili-sandals-classic", "kofia-noir-gold", "oud-tansoor"],
  },
  {
    slug: "royal-bisht-onyx",
    name: "Royal Bisht — Onyx & Gold",
    category: "Saudi Thobes",
    price: 18500,
    image: videoPoster,
    alt: "Onyx black royal bisht with gold embroidery",
    colors: ["#111111"],
    sizes: ["M", "L", "XL"],
    badge: "Exclusive",
    description:
      "The definitive ceremonial garment. Crafted from ultra-lightweight fabric with heavy gold zari metallic embroidery along the borders. Essential for weddings and high occasions.",
    pairsWellWith: ["saudi-kanzu-ivory", "sultan-royal-gold", "double-loop-agal"],
  },
  {
    slug: "wedding-kanzu-gold",
    name: "Wedding Kanzu — Royal Gold",
    category: "Saudi Thobes",
    price: 12500,
    image: eidBanner,
    alt: "Wedding collection white kanzu with subtle gold details",
    colors: ["#ffffff", "#F7F4EC"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "Exclusive",
    description:
      "A tailored thobe in premium Japanese cotton, accented with refined gold embroidery at the neck and cuffs. Designed for grooms and wedding attendees.",
    pairsWellWith: ["al-hamra-wedding-gold", "heritage-grand-premium", "oud-tansoor"],
  },

  // Headwear Products
  {
    slug: "al-munawwar-kufi",
    name: "Al-Munawwar Kufi Cap",
    category: "Headwear",
    subCategory: "Kufi Caps",
    price: 2500,
    image: kufiCap,
    alt: "Premium hand-knitted white Kufi Cap",
    colors: ["#ffffff"],
    sizes: ["S", "M", "L"],
    badge: "Best Seller",
    description:
      "Intricately hand-knitted cotton kufi cap. Breathable and soft, popular across East Africa. Perfect accent for Friday prayer attire.",
  },
  {
    slug: "classic-white-taqiyah",
    name: "Classic White Taqiyah",
    category: "Headwear",
    subCategory: "Taqiyah",
    price: 1200,
    image: taqiyahCap,
    alt: "Classic white Taqiyah skull cap",
    colors: ["#ffffff"],
    sizes: ["One Size"],
    description:
      "Premium white knit prayer skull cap. Flexible and form-fitting, designed to sit comfortably under ghutra or wear standalone.",
  },
  {
    slug: "royal-omani-kumma",
    name: "Royal Omani Kumma",
    category: "Headwear",
    subCategory: "Omani Kumma",
    price: 4800,
    image: omaniKumma,
    alt: "Embroidered white and gold Omani Kumma cap",
    colors: ["#ffffff", "#F2EADB"],
    sizes: ["56", "57", "58", "59"],
    badge: "New",
    description:
      "Authentic hand-embroidered Omani Kumma cap. Features intricate floral and geometric gold threading on a crisp cotton base.",
  },
  {
    slug: "pearl-white-ghutra",
    name: "Pearl White Ghutra",
    category: "Headwear",
    subCategory: "Ghutra",
    price: 3500,
    image: ghutra,
    alt: "Traditional white Gulf Ghutra scarf",
    colors: ["#ffffff"],
    sizes: ["54", "56", "58"],
    description:
      "Traditional lightweight white Gulf head covering. Crafted from premium breathable Swiss cotton voile.",
  },
  {
    slug: "royal-shemagh-red",
    name: "Royal Red & White Shemagh",
    category: "Headwear",
    subCategory: "Shemagh",
    price: 3800,
    image: shemagh,
    alt: "Red and white patterned Shemagh scarf",
    colors: ["#e63946"],
    sizes: ["55", "57", "60"],
    badge: "Best Seller",
    description:
      "High-grade woven red and white patterned Shemagh headscarf. Features a soft texture and classic weighted border tassels.",
  },
  {
    slug: "traditional-keffiyeh-black",
    name: "Traditional Arab Keffiyeh",
    category: "Headwear",
    subCategory: "Keffiyeh",
    price: 3600,
    image: keffiyeh,
    alt: "Black and white patterned Keffiyeh scarf",
    colors: ["#111111", "#ffffff"],
    sizes: ["One Size"],
    description:
      "Classic black and white patterned Keffiyeh scarf. Hand-finished tassels, made from premium cotton.",
  },
  {
    slug: "double-loop-agal",
    name: "Double-Loop Black Agal",
    category: "Headwear",
    subCategory: "Agal",
    price: 1800,
    image: agal,
    alt: "Black braided double-loop Agal cord",
    colors: ["#111111"],
    sizes: ["Standard"],
    description:
      "Heavyweight double-loop black Agal cord. Traditionally braided to secure the ghutra or shemagh in place.",
  },
  {
    slug: "premium-al-azhar-imamah",
    name: "Premium Al-Azhar Imamah",
    category: "Headwear",
    subCategory: "Imamah",
    price: 5500,
    image: imamah,
    alt: "Pre-wrapped white Imamah turban",
    colors: ["#ffffff"],
    sizes: ["M", "L"],
    badge: "Exclusive",
    description:
      "Pre-wrapped premium white cotton Imamah turban. Structured base ensures a stable, elegant fit for Imams and students of knowledge.",
  },

  // Watches Category (12 unique products)
  {
    slug: "sultan-royal-gold",
    name: "Sultan Royal Gold",
    category: "Watches",
    subCategory: "Gold Collection",
    price: 18500,
    image: watchRoyalGold,
    alt: "Luxury gold watch with black dial and gold strap",
    colors: ["#ffd700", "#111111"],
    sizes: ["40mm"],
    badge: "Exclusive",
    description:
      "A stunning dress watch featuring a polished 18K gold-plated case, an onyx black dial, and a matching gold-plated stainless steel mesh band. Ideal for weddings and formal events.",
    specs: {
      caseSize: "40mm",
      strapMaterial: "18K Gold-plated Stainless Steel Mesh",
      movement: "Precision Swiss Quartz",
      waterResistance: "5 ATM (50m)",
      stylingRecommendations: "Excellent for grooms and wedding attendees. Best styled with our Royal Bisht and white thobes.",
    },
    pairsWellWith: ["royal-bisht-onyx", "wedding-kanzu-gold", "oud-tansoor"],
  },
  {
    slug: "al-malik-silver-blue",
    name: "Al-Malik Silver Sunburst",
    category: "Watches",
    subCategory: "Silver Collection",
    price: 13900,
    image: watchMinimalistBlue,
    alt: "Silver watch with deep blue dial",
    colors: ["#c0c0c0", "#0000ff"],
    sizes: ["39mm"],
    description:
      "A classic stainless steel timepiece featuring a deep navy blue sunburst dial. Provides a professional and highly polished look that complements any Friday prayer attire.",
    specs: {
      caseSize: "39mm",
      strapMaterial: "316L Stainless Steel Bracelet",
      movement: "Japanese Quartz",
      waterResistance: "5 ATM (50m)",
      stylingRecommendations: "Pairs beautifully with Omani Dishdashas or graphite shades.",
    },
    pairsWellWith: ["omani-dishdasha-graphite", "royal-omani-kumma", "tasbih-sandalwood"],
  },
  {
    slug: "heritage-grand-premium",
    name: "Heritage Grand Premium",
    category: "Watches",
    subCategory: "Premium Collection",
    price: 22000,
    image: watchTwotoneLuxury,
    alt: "Two-tone gold and silver watch",
    colors: ["#ffd700", "#c0c0c0"],
    sizes: ["41mm"],
    badge: "Exclusive",
    description:
      "The pinnacle of our watch collection. Combining an 18K gold fluted bezel, a champagne dial, and a dual-tone link bracelet. Truly a heritage piece designed to last.",
    specs: {
      caseSize: "41mm",
      strapMaterial: "18K Gold & Stainless Steel Dual-Tone Bracelet",
      movement: "Swiss Automatic Chronometer",
      waterResistance: "10 ATM (100m)",
      stylingRecommendations: "The definitive choice to style with our Royal Bisht and wedding kanzus.",
    },
    pairsWellWith: ["royal-bisht-onyx", "wedding-kanzu-gold", "oud-tansoor"],
  },
  {
    slug: "elegance-smart-hybrid",
    name: "Elegance Smart Watch",
    category: "Watches",
    subCategory: "Smart Watches",
    price: 15500,
    image: watchSmartHybrid,
    alt: "Minimalist smart watch with brown leather strap",
    colors: ["#8b5a2b", "#111111"],
    sizes: ["42mm"],
    badge: "New",
    description:
      "A smart hybrid timepiece that keeps you connected while maintaining a traditional aesthetic. Featuring a polished steel casing and a premium calfskin leather strap.",
    specs: {
      caseSize: "42mm",
      strapMaterial: "Top-grain Calfskin Leather",
      movement: "Smart Hybrid OS (2-Week Battery)",
      waterResistance: "3 ATM (Splash resistant)",
      stylingRecommendations: "Excellent for the modern professional. Complements desert sand and earth-toned kanzus.",
    },
    pairsWellWith: ["emirati-kanzu-sand", "swahili-kanzu-mombasa", "kofia-noir-gold"],
  },
  {
    slug: "sahara-gold-leather",
    name: "Sahara Gold Leather",
    category: "Watches",
    subCategory: "Gold Collection",
    price: 13500,
    image: watchGoldLeather,
    alt: "Gold watch with brown leather strap",
    colors: ["#ffd700", "#8b5a2b"],
    sizes: ["38mm"],
    badge: "New",
    description:
      "Inspired by the warm tones of the Sahara, this timepiece pairs a polished gold case with a rich brown alligator-style leather strap.",
    specs: {
      caseSize: "38mm",
      strapMaterial: "Genuine Alligator-embossed Leather",
      movement: "Japanese Quartz",
      waterResistance: "3 ATM",
      stylingRecommendations: "Looks stunning when paired with brown leather sandals and Friday prayer collections.",
    },
    pairsWellWith: ["saudi-kanzu-ivory", "saudi-classic-chestnut", "tasbih-sandalwood"],
  },
  {
    slug: "rose-gold-executive",
    name: "Rose Gold Executive",
    category: "Watches",
    subCategory: "Dress Watches",
    price: 15900,
    image: watchRoseGoldBlack,
    alt: "rose gold case watch with black leather strap",
    colors: ["#b56b1f", "#111111"],
    sizes: ["40mm"],
    badge: "Exclusive",
    description:
      "A sleek dress watch featuring a refined 18K rose gold casing, matching hands, and an ultra-soft black Italian leather strap.",
    specs: {
      caseSize: "40mm",
      strapMaterial: "Premium Matte Black Italian Leather",
      movement: "Swiss Quartz",
      waterResistance: "5 ATM (50m)",
      stylingRecommendations: "Designed for business executives and formal Jummah wear. Pairs well with midnight navy.",
    },
    pairsWellWith: ["al-aqsa-premium-steel-grey", "kofia-noir-gold", "oud-tansoor"],
  },
  {
    slug: "medina-eid-special",
    name: "Medina Eid Special",
    category: "Watches",
    subCategory: "Arabic Dial Watches",
    price: 19500,
    image: watchEidCampaign,
    alt: "Gold watch with green dial and gold link strap",
    colors: ["#ffd700", "#008000"],
    sizes: ["41mm"],
    badge: "Limited",
    description:
      "A commemorative limited-edition Eid timepiece featuring a vibrant forest green dial with gold Arabic numerals and gold-plated link strap.",
    specs: {
      caseSize: "41mm",
      strapMaterial: "18K Gold-plated Stainless Steel Link Bracelet",
      movement: "Swiss Automatic",
      waterResistance: "5 ATM",
      stylingRecommendations: "Our Eid hero piece. Make a statement alongside a crisp white Swahili Kanzu.",
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "medina-eid-special-sandal", "oud-tansoor"],
  },
  {
    slug: "al-faris-chrono-steel",
    name: "Al-Faris Chronograph Steel",
    category: "Watches",
    subCategory: "Classic Collection",
    price: 17500,
    image: watchSportLuxury,
    alt: "Steel chronograph watch with black dial",
    colors: ["#c0c0c0", "#111111"],
    sizes: ["42mm"],
    description:
      "A robust stainless steel chronograph featuring a matte black dial and custom three-dial tachymeter layout. Balances classic capability with formal Jummah sophistication.",
    specs: {
      caseSize: "42mm",
      strapMaterial: "Brushed 316L Stainless Steel",
      movement: "Precision Chronograph Quartz",
      waterResistance: "10 ATM (100m)",
      stylingRecommendations: "A bold statement piece for daily wear. Complements any sharp Swahili kanzu.",
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "swahili-sandals-classic", "kofia-noir-gold"],
  },
  {
    slug: "al-nur-minimalist-ivory",
    name: "Al-Nur Minimalist Ivory",
    category: "Watches",
    subCategory: "Classic Collection",
    price: 11800,
    image: watchMinimalistWhite,
    alt: "Ultra-thin minimalist watch with white dial and black leather strap",
    colors: ["#ffffff", "#111111"],
    sizes: ["38mm"],
    description:
      "An ultra-thin, low-profile dress watch with a sterile white dial, silver baton markers, and a premium black leather strap. Designed to slip effortlessly beneath the cuff.",
    specs: {
      caseSize: "38mm",
      strapMaterial: "Sleek Black Genuine Leather",
      movement: "Japanese Slim Quartz",
      waterResistance: "3 ATM (Splash resistant)",
      stylingRecommendations: "An excellent companion for formal occasions, weddings, and Eid day where clean minimalism is desired.",
    },
    pairsWellWith: ["saudi-kanzu-ivory", "royal-bisht-onyx", "tasbih-sandalwood"],
  },
  {
    slug: "desert-classic-black",
    name: "Desert Classic Black",
    category: "Watches",
    subCategory: "Classic Collection",
    price: 12500,
    image: watchSilverClassic,
    alt: "Minimalist silver watch with black dial and black leather strap",
    colors: ["#c0c0c0", "#111111"],
    sizes: ["40mm"],
    description:
      "A classic silver-cased watch featuring a sleek black dial, minimal silver indices, and a genuine textured black leather strap. Versatile and sharp.",
    specs: {
      caseSize: "40mm",
      strapMaterial: "Textured Italian Calfskin Leather",
      movement: "Japanese Quartz",
      waterResistance: "3 ATM",
      stylingRecommendations: "Versatile styling. Perfect for daily office wear or Jummah service.",
    },
    pairsWellWith: ["omani-dishdasha-graphite", "mombasa-swahili-noir", "classic-white-taqiyah"],
  },
  {
    slug: "sultan-rose-gold",
    name: "Sultan Rose Gold",
    category: "Watches",
    subCategory: "Gold Collection",
    price: 19200,
    image: watchDressGold,
    alt: "Rose gold case watch with white dial and rose gold metal mesh band",
    colors: ["#b56b1f", "#ffffff"],
    sizes: ["40mm"],
    description:
      "An elegant rose gold luxury timepiece featuring an ivory white dial and a premium rose gold metal mesh band. Radiates luxury for ceremonial wear.",
    specs: {
      caseSize: "40mm",
      strapMaterial: "Rose Gold-plated Stainless Steel Mesh",
      movement: "Precision Swiss Quartz",
      waterResistance: "5 ATM",
      stylingRecommendations: "The perfect ceremonial match. Best paired with wedding-focused white thobes.",
    },
    pairsWellWith: ["wedding-kanzu-gold", "al-hamra-wedding-gold", "oud-tansoor"],
  },
  {
    slug: "astronomer-arabic-dial",
    name: "Astronomer Arabic Dial",
    category: "Watches",
    subCategory: "Arabic Dial Watches",
    price: 16800,
    image: watchArabicSilver,
    alt: "Silver watch with white dial and silver Arabic numerals",
    colors: ["#c0c0c0", "#ffffff"],
    sizes: ["41mm"],
    description:
      "A gorgeous luxury watch showcasing traditional silver Arabic numeral dial layout. Encased in polished stainless steel with a matching steel link bracelet.",
    specs: {
      caseSize: "41mm",
      strapMaterial: "316L Stainless Steel Link Bracelet",
      movement: "Japanese Automatic",
      waterResistance: "5 ATM",
      stylingRecommendations: "A beautiful fusion of heritage and watchmaking. Style with premium Omani or Emirati kanzus.",
    },
    pairsWellWith: ["emirati-kanzu-sand", "omani-royal-heritage-tan", "royal-omani-kumma"],
  },

  // Sandals Category (16 unique products using user-provided authentic assets)
  {
    slug: "swahili-sandals-classic",
    name: "Swahili Sandals — Classic Brown",
    category: "Men's Sandals",
    subCategory: "Leather Sandals",
    price: 6500,
    image: sandal3,
    alt: "Classic brown hand-crafted Swahili leather sandals",
    colors: ["#5b4b34", "#111111"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    badge: "Best Seller",
    description:
      "Hand-crafted Swahili leather sandals, made in Kenya using genuine full-grain leather. Solid brass buckles, hand-stitched detailing, and a comfortable sole designed for Jummah prayers.",
    specs: {
      material: "Local Full-Grain Leather",
      leatherType: "Vegetable-Tanned Saddle Leather",
      soleType: "Recycled Tire Rubber Insole with Leather Lining",
      comfort: "Molded arch support with break-in leather contouring",
      stylingRecommendations: "Perfect match for the Swahili White Kanzu and a traditional Kofia.",
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "kofia-noir-gold", "oud-tansoor"],
  },
  {
    slug: "omani-royal-heritage-tan",
    name: "Omani Royal Heritage — Desert Tan",
    category: "Men's Sandals",
    subCategory: "Omani Sandals",
    price: 9800,
    image: sandal6,
    alt: "Premium traditional Omani leather sandal in tan with embroidered straps",
    colors: ["#C29B68", "#8B5A2B"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    badge: "Best Seller",
    description:
      "Traditional Omani Naal crafted from premium full-grain leather, featuring intricate hand-embroidered straps and an ergonomic footbed. Perfect for formal gatherings and national celebrations.",
    specs: {
      material: "Full-Grain Calfskin Leather",
      leatherType: "Vegetable-Tanned Tan Leather",
      soleType: "Hand-stitched Leather Sole with Rubber Grip",
      comfort: "Ergonomic arch support with memory foam cushioning",
      stylingRecommendations: "Designed to complement the Omani Dishdasha and a matching embroidered Omani Kumma.",
    },
    pairsWellWith: ["omani-dishdasha-graphite", "royal-omani-kumma", "oud-tansoor"],
  },
  {
    slug: "emirati-premium-midnight-black",
    name: "Emirati Premium — Midnight Black",
    category: "Men's Sandals",
    subCategory: "Emirati Sandals",
    price: 10500,
    image: sandal1,
    alt: "Sleek Emirati style black leather sandal with textured cross-strap and silver buckle",
    colors: ["#111111", "#333333"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    badge: "New",
    description:
      "Modern minimalist Emirati sandal featuring premium pebbled leather straps and a signature polished silver buckle. Designed for style, durability, and daily comfort.",
    specs: {
      material: "Premium Pebbled Calf Leather",
      leatherType: "Chrome-Tanned Matte Black Leather",
      soleType: "Lightweight Polyurethane Comfort Outsole",
      comfort: "High-density padded footbed with soft calfskin lining",
      stylingRecommendations: "Matches beautifully with a Desert Sand Emirati Kanzu and a premium black smart watch.",
    },
    pairsWellWith: ["emirati-kanzu-sand", "elegance-smart-hybrid", "oud-tansoor"],
  },
  {
    slug: "saudi-classic-chestnut",
    name: "Saudi Classic — Royal Chestnut",
    category: "Men's Sandals",
    subCategory: "Saudi Sandals",
    price: 9500,
    image: sandal6,
    alt: "Classic Saudi traditional sandal in rich chestnut brown leather",
    colors: ["#5C4033", "#8B5A2B"],
    sizes: ["41", "42", "43", "44", "45"],
    badge: "Exclusive",
    description:
      "Elegant Saudi-style sandal handcrafted with broad crossover straps and custom brass buckles. Offers a sophisticated look suitable for Friday prayers and wedding attendance.",
    specs: {
      material: "Full-Grain Italian Leather",
      leatherType: "Aniline Polished Chestnut Leather",
      soleType: "Vibram Slip-Resistant Rubber Outsole",
      comfort: "Orthotic footbed design for superior long-wear comfort",
      stylingRecommendations: "Complete the look with a Pearl Ivory Saudi Kanzu and matching brown leather watch.",
    },
    pairsWellWith: ["saudi-kanzu-ivory", "sahara-gold-leather", "oud-tansoor"],
  },
  {
    slug: "al-hamra-wedding-gold",
    name: "Al-Hamra Wedding — Gold & Cream",
    category: "Men's Sandals",
    subCategory: "Wedding Collection",
    price: 13500,
    image: sandal8,
    alt: "Luxury cream leather ceremonial sandal with gold embroidery detailing",
    colors: ["#FFFDD0", "#DAA520"],
    sizes: ["40", "41", "42", "43", "44"],
    badge: "Exclusive",
    description:
      "A masterpiece designed for grooms and wedding ceremonies. Hand-stitched with authentic gold zari thread patterns on a premium cream leather base with polished golden hardware.",
    specs: {
      material: "Nappa Calfskin & Gold Zari Thread",
      leatherType: "Ultra-Soft Nappa Cream Leather",
      soleType: "Double-Layer Premium Leather Sole",
      comfort: "Extra-padded ceremonial insole with micro-ventilation",
      stylingRecommendations: "The definitive choice to wear with a Royal Gold Wedding Kanzu and a gold timepiece.",
    },
    pairsWellWith: ["wedding-kanzu-gold", "sultan-rose-gold", "oud-tansoor"],
  },
  {
    slug: "medina-eid-special-sandal",
    name: "Medina Eid Campaign — Crimson & Gold",
    category: "Men's Sandals",
    subCategory: "Eid Collection",
    price: 11200,
    image: sandal7,
    alt: "Deep crimson leather sandal with gold-tone hardware and buckle detail",
    colors: ["#800020", "#DAA520"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    badge: "Limited",
    description:
      "Celebrate in unmatched elegance. A limited campaign release featuring premium deep crimson leather, contrast cream stitching, and custom gold-finished buckles.",
    specs: {
      material: "Suede Lining & Calfskin Outer",
      leatherType: "Deep Crimson Aniline Leather",
      soleType: "Flexible Crepe Rubber Sole",
      comfort: "Cushioned footbed with moisture-wicking suede lining",
      stylingRecommendations: "Pairs exceptionally well with the Swahili White Kanzu and a premium Arabic perfume.",
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "medina-eid-special", "oud-tansoor"],
  },
  {
    slug: "swahili-heritage-handcrafted",
    name: "Swahili Heritage — Classic Tan",
    category: "Men's Sandals",
    subCategory: "Leather Sandals",
    price: 7500,
    image: sandal3,
    alt: "Classic brown hand-crafted Swahili leather sandals",
    colors: ["#5b4b34", "#111111"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description:
      "Hand-crafted Swahili leather sandals, made using genuine full-grain leather. Solid brass buckles, hand-stitched detailing, and a comfortable sole designed for Jummah prayers.",
    specs: {
      material: "Local Full-Grain Leather",
      leatherType: "Vegetable-Tanned Saddle Leather",
      soleType: "Recycled Tire Rubber Insole with Leather Lining",
      comfort: "Molded arch support with break-in leather contouring",
      stylingRecommendations: "Perfect match for the Swahili White Kanzu and a traditional Kofia.",
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "kofia-noir-gold", "oud-tansoor"],
  },
  {
    slug: "zubairi-classic-desert-tan",
    name: "Zubairi Classic — Desert Tan",
    category: "Men's Sandals",
    subCategory: "Arabic Sandals",
    price: 9900,
    image: sandal2,
    alt: "Traditional Zubairi style sandal in natural desert tan leather",
    colors: ["#C2A278", "#8B5A2B"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description:
      "The ultimate traditional Gulf-inspired Zubairi sandal. Features the iconic wide foot strap, integrated toe ring, and durable flat leather sole.",
    specs: {
      material: "Full-Grain Cowhide Leather",
      leatherType: "Desert Tan Oiled Leather",
      soleType: "Traditional Flat Leather Sole with Rubber Underlay",
      comfort: "Natural cork mid-sole that molds to the foot shape over time",
      stylingRecommendations: "Designed to be worn with traditional Saudi Thobes and Ghutra headwear.",
    },
    pairsWellWith: ["saudi-kanzu-ivory", "pearl-white-ghutra", "sahara-gold-leather"],
  },
  {
    slug: "omani-premium-olive",
    name: "Omani Premium — Olive & Brass",
    category: "Men's Sandals",
    subCategory: "Omani Sandals",
    price: 10200,
    image: sandal2,
    alt: "Premium Omani leather sandal in olive green with brass hardware",
    colors: ["#556B2F", "#D2B48C"],
    sizes: ["41", "42", "43", "44"],
    description:
      "A rich olive green variant of the traditional Omani sandal. Hand-crafted with subtle side stitch details and custom brushed brass buckles.",
    specs: {
      material: "Calfskin Leather & Brass",
      leatherType: "Drum-Dyed Olive Green Leather",
      soleType: "Slip-resistant textured rubber sole",
      comfort: "Contoured memory foam bed with breathable lining",
      stylingRecommendations: "Complements Earth-toned thobes, linen dishdashas, and Swahili outfits.",
    },
    pairsWellWith: ["omani-dishdasha-graphite", "tasbih-sandalwood", "al-malik-silver-blue"],
  },
  {
    slug: "emirati-minimalist-sand",
    name: "Emirati Minimalist — Sand & Silver",
    category: "Men's Sandals",
    subCategory: "Emirati Sandals",
    price: 9700,
    image: sandal1,
    alt: "Modern minimalist Emirati sandal in sand beige color",
    colors: ["#F5F5DC", "#FFFFFF"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description:
      "Sleek sand-colored Emirati sandal featuring modern double-strap design and minimal hardware. The ultimate daily-wear luxury option.",
    specs: {
      material: "Nappa Calf Leather",
      leatherType: "Beige Nappa Matte Leather",
      soleType: "Ultra-Lightweight Crepe-Textured Rubber Outsole",
      comfort: "Shock-absorbing EVA footbed layer with leather cover",
      stylingRecommendations: "Perfect for hot summer days combined with a light Emirati Kanzu.",
    },
    pairsWellWith: ["emirati-kanzu-sand", "elegance-smart-hybrid", "classic-white-taqiyah"],
  },
  {
    slug: "saudi-royal-chocolate",
    name: "Saudi Royal — Chocolate Brown",
    category: "Men's Sandals",
    subCategory: "Saudi Sandals",
    price: 11800,
    image: sandal6,
    alt: "Royal Saudi style sandal in chocolate brown crocodile textured leather",
    colors: ["#3D2314", "#DAA520"],
    sizes: ["41", "42", "43", "44", "45"],
    badge: "Best Seller",
    description:
      "Hand-crafted Saudi dress sandal in chocolate brown with a premium crocodile-skin texture and gold buckle accents. Made for formal ceremonies and high-level meetings.",
    specs: {
      material: "Crocodile-Embossed Calfskin",
      leatherType: "Polished Semi-Gloss Patent Leather",
      soleType: "Premium Hard Leather Dress Sole",
      comfort: "High-density orthopedic foam support with soft leather wrap",
      stylingRecommendations: "Wear with a premium black Royal Bisht and a gold dial timepiece.",
    },
    pairsWellWith: ["royal-bisht-onyx", "sultan-royal-gold", "oud-tansoor"],
  },
  {
    slug: "al-aqsa-premium-steel-grey",
    name: "Al-Aqsa Premium — Steel Grey",
    category: "Men's Sandals",
    subCategory: "Arabic Sandals",
    price: 9600,
    image: sandal4,
    alt: "Traditional steel grey leather sandal with silver hardware",
    colors: ["#708090", "#C0C0C0"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description:
      "Clean and sharp. A traditional Arabic sandal in polished steel-grey leather, featuring silver hardware and contrast black soles.",
    specs: {
      material: "Full-Grain Calfskin",
      leatherType: "Matte Steel Grey Calf Leather",
      soleType: "Vibram Rubber Grip Sole",
      comfort: "Ergonomic arch support with premium leather lining",
      stylingRecommendations: "Matches perfectly with a midnight black Moroccan Jubba or silver watches.",
    },
    pairsWellWith: ["omani-dishdasha-indigo", "rose-gold-executive", "kofia-noir-gold"],
  },
  {
    slug: "mombasa-swahili-noir",
    name: "Mombasa Swahili — Onyx Black",
    category: "Men's Sandals",
    subCategory: "Leather Sandals",
    price: 7800,
    image: sandal4,
    alt: "Hand-crafted black Swahili leather sandals",
    colors: ["#111111", "#5b4b34"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description:
      "The black version of our classic Swahili sandal. Hand-carved and dyed in Mombasa, featuring durable tire rubber soles and brass buckle hardware.",
    specs: {
      material: "Genuine Buffalo Hide",
      leatherType: "Vegetable-Tanned Onyx Black Leather",
      soleType: "Heavy-Duty Vulcanized Rubber Sole",
      comfort: "Contoured leather bed that breaks in for personalized comfort",
      stylingRecommendations: "Goes perfectly with Swahili Kanzus and dark-coloured Jubbas.",
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "omani-dishdasha-indigo", "desert-classic-black"],
  },
  {
    slug: "jummah-classic-tan",
    name: "Jummah Classic — Tan Leather",
    category: "Men's Sandals",
    subCategory: "Leather Sandals",
    price: 8200,
    image: sandal8,
    alt: "Classic tan leather sandal for Friday prayer",
    colors: ["#D2B48C", "#8B5A2B"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description:
      "Designed specifically for Jummah prayers and weekend leisure. Hand-crafted leather strap detail and an extra-cushioned footbed for long standing.",
    specs: {
      material: "Calfskin Leather",
      leatherType: "Vegetable-Tanned Soft Tan Leather",
      soleType: "Shock-absorbing Flexible Crepe Outsole",
      comfort: "Jummah special extra padding for standing and walking comfort",
      stylingRecommendations: "Wear with any Friday prayer collection kanzus and premium oud.",
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "tasbih-sandalwood", "oud-tansoor"],
  },
  {
    slug: "swahili-royal-gold-embroidered",
    name: "Swahili Royal — Gold Embroidered",
    category: "Men's Sandals",
    subCategory: "Wedding Collection",
    price: 12800,
    image: sandal8,
    alt: "Royal Swahili wedding sandal with gold stitch work",
    colors: ["#ffffff", "#DAA520"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    badge: "Exclusive",
    description:
      "An East African coastal adaptation of the royal wedding sandal. Made with soft white leather, hand-knit gold borders, and gold-plated buckles.",
    specs: {
      material: "Premium Kidskin Leather & Gold Zari",
      leatherType: "Polished White Kidskin Leather",
      soleType: "Double-cushioned Premium Leather Sole",
      comfort: "Ergonomic arch contours with silk-soft leather linings",
      stylingRecommendations: "Ideally suited for coastal wedding kanzus and Friday prayer collections.",
    },
    pairsWellWith: ["wedding-kanzu-gold", "royal-omani-kumma", "sultan-royal-gold"],
  },
  {
    slug: "al-faris-eid-suede",
    name: "Al-Faris Eid — Royal Blue Suede",
    category: "Men's Sandals",
    subCategory: "Eid Collection",
    price: 11500,
    image: sandal7,
    alt: "Luxury royal blue suede leather sandal with gold details",
    colors: ["#4169E1", "#DAA520"],
    sizes: ["41", "42", "43", "44"],
    badge: "Limited",
    description:
      "Make a statement this Eid. A premium combination of royal blue suede leather and solid brass buckle fittings, hand-finished by master cobblers.",
    specs: {
      material: "Premium Calf Suede",
      leatherType: "Royal Blue Suede Outer with Soft Calfskin Lining",
      soleType: "Crepe Textured Rubber Comfort Sole",
      comfort: "Breathable suede-covered memory foam bed",
      stylingRecommendations: "Matches perfectly with a white Emirati Kanzu and a royal blue shemagh.",
    },
    pairsWellWith: ["emirati-kanzu-sand", "astronomer-arabic-dial", "oud-tansoor"],
  },
];

export const formatKES = (n: number) =>
  `KES ${n.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);