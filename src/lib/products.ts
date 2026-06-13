import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p8 from "@/assets/p8.jpg";
import catSaudi from "@/assets/cat-saudi.jpeg";
import videoPoster from "@/assets/video-poster.jpg";
import eidBanner from "@/assets/eid-banner.jpg";
import over1 from "@/assets/over1.jpeg";
import over2 from "@/assets/over2.jpeg";
import over3 from "@/assets/over3.jpeg";
import over4 from "@/assets/over4.jpeg";
import over5 from "@/assets/over5.jpeg";
import over6 from "@/assets/over6.jpeg";
import over7 from "@/assets/over7.jpeg";
import over8 from "@/assets/over8.jpeg";
import over9 from "@/assets/over9.jpeg";

import bak1 from "@/assets/bak1.jpeg";
import bak2 from "@/assets/bak2.jpeg";
import bak3 from "@/assets/bak3.jpeg";
import bak4 from "@/assets/bak4.jpeg";
import bak5 from "@/assets/bak5.jpeg";

import under1 from "@/assets/under1.webp";
import under2 from "@/assets/under2.webp";
import under3 from "@/assets/under3.webp";
import under4 from "@/assets/under4.jpeg";
import under5 from "@/assets/under5.jpeg";

import tas1 from "@/assets/tas1.jpeg";
import tas2 from "@/assets/tas2.jpeg";
import tas3 from "@/assets/tas3.jpeg";
import tas4 from "@/assets/tas4.jpeg";
import tas5 from "@/assets/tas5.jpeg";

import lifestyleKumma from "@/assets/lifestyle_kumma.png";
import lifestyleShemagh from "@/assets/lifestyle_shemagh.png";
import lifestyleKufi from "@/assets/lifestyle_kufi.png";
import lifestyleGhutra from "@/assets/lifestyle_ghutra.png";
import lifestyleKeffiyeh from "@/assets/lifestyle_keffiyeh.png";

import ig1 from "@/assets/ig1.jpg";
import ig2 from "@/assets/ig2.jpg";
import ig3 from "@/assets/ig3.jpg";
import ig4 from "@/assets/ig4.jpg";
import ig5 from "@/assets/ig5.jpg";
import ig6 from "@/assets/ig6.jpg";

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
  | "Overtops"
  | "Tasbih"
  | "Prayer Mats"
  | "Men's Sandals"
  | "Headwear"
  | "Watches"
  | "Traditional Canes"
  | "Undergarments";

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
    fabricType?: string;
    trimColor?: string;
    occasion?: string;
    recommendedThobePairing?: string;
    careInstructions?: string;
    handleStyle?: string;
    finish?: string;
    length?: string;
    origin?: string;
    fabricComposition?: string;
    breathability?: string;
    comfortLevel?: string;
    climateSuitability?: string;
    washingInstructions?: string;
    beadMaterial?: string;
    beadCount?: number;
    isHandcrafted?: boolean;
    packagingDetails?: string;
  };
  pairsWellWith?: string[];
  images?: string[];
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
    pairsWellWith: ["emirati-premium-midnight-black", "elegance-smart-hybrid"],
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
    pairsWellWith: ["omani-royal-heritage-tan", "royal-omani-kumma"],
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
    pairsWellWith: ["medina-eid-special", "omani-royal-heritage-tan"],
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
    pairsWellWith: ["swahili-sandals-classic"],
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
    pairsWellWith: ["al-hamra-wedding-gold", "heritage-grand-premium"],
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
    pairsWellWith: ["royal-bisht-onyx", "wedding-kanzu-gold"],
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
    pairsWellWith: ["royal-bisht-onyx", "wedding-kanzu-gold"],
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
    pairsWellWith: ["emirati-kanzu-sand", "swahili-kanzu-mombasa"],
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
    pairsWellWith: ["al-aqsa-premium-steel-grey"],
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
    pairsWellWith: ["swahili-kanzu-mombasa", "medina-eid-special-sandal"],
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
    pairsWellWith: ["swahili-kanzu-mombasa", "swahili-sandals-classic"],
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
    pairsWellWith: ["wedding-kanzu-gold", "al-hamra-wedding-gold"],
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
    pairsWellWith: ["swahili-kanzu-mombasa"],
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
    pairsWellWith: ["omani-dishdasha-graphite", "royal-omani-kumma"],
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
    pairsWellWith: ["emirati-kanzu-sand", "elegance-smart-hybrid"],
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
    pairsWellWith: ["saudi-kanzu-ivory", "sahara-gold-leather"],
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
    pairsWellWith: ["wedding-kanzu-gold", "sultan-rose-gold"],
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
    pairsWellWith: ["swahili-kanzu-mombasa", "medina-eid-special"],
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
    pairsWellWith: ["swahili-kanzu-mombasa"],
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
    pairsWellWith: ["royal-bisht-onyx", "sultan-royal-gold"],
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
    pairsWellWith: ["omani-dishdasha-indigo", "rose-gold-executive"],
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
    pairsWellWith: ["swahili-kanzu-mombasa", "tasbih-sandalwood"],
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
    pairsWellWith: ["emirati-kanzu-sand", "astronomer-arabic-dial"],
  },
  {
    slug: "black-bisht-gold",
    name: "Black Bisht with Gold Trim",
    category: "Overtops",
    price: 18500,
    image: over1,
    alt: "Onyx black ceremonial bisht with gold embroidery",
    colors: ["#111111", "#DAA520"],
    sizes: ["M", "L", "XL"],
    badge: "Exclusive",
    description: "An exquisite ceremonial bisht crafted from sheer, lightweight fabric. Styled with rich gold zari borders that are hand-embroidered by master artisans. Represents the height of formal Islamic attire.",
    specs: {
      fabricType: "Premium sheer wool blend",
      trimColor: "Gold Zari Metallic Thread",
      occasion: "Weddings, Eid, VIP events, Nikah",
      recommendedThobePairing: "Pairs beautifully with our Pearl Ivory or Royal Gold thobes.",
      careInstructions: "Dry clean only. Store on a wide hanger."
    },
    pairsWellWith: ["saudi-kanzu-ivory", "wedding-kanzu-gold", "sultan-royal-gold"]
  },
  {
    slug: "white-bisht-silver",
    name: "White Bisht with Silver Trim",
    category: "Overtops",
    price: 19500,
    image: over2,
    alt: "Pure white ceremonial bisht with silver embroidery",
    colors: ["#ffffff", "#C0C0C0"],
    sizes: ["M", "L", "XL"],
    badge: "New",
    description: "Designed for summer ceremonies and wedding guests. A premium pure white bisht with delicate hand-stitched silver embroidery along the seams. Light, airy, and dignified.",
    specs: {
      fabricType: "Sheer Swiss Voile",
      trimColor: "Silver Metallic Thread",
      occasion: "Nikah, Summer weddings, Jummah",
      recommendedThobePairing: "Best paired with a crisp white Omani Dishdasha or Swahili Kanzu.",
      careInstructions: "Dry clean only. Steam gently."
    },
    pairsWellWith: ["omani-dishdasha-pearl-white", "swahili-kanzu-mombasa", "astronomer-arabic-dial"]
  },
  {
    slug: "cream-bisht-gold",
    name: "Cream Bisht with Gold Trim",
    category: "Overtops",
    price: 21000,
    image: over3,
    alt: "Cream ceremonial bisht with gold borders",
    colors: ["#FFFDD0", "#DAA520"],
    sizes: ["M", "L", "XL"],
    badge: "Exclusive",
    description: "A majestic cream bisht displaying custom gold patterns along the front placket. Crafted from premium breathable fabric with a soft-touch texture that is suitable for daytime VIP events.",
    specs: {
      fabricType: "Lightweight cashmere-cotton blend",
      trimColor: "Polished Gold Zari",
      occasion: "Weddings, Eid, VIP receptions",
      recommendedThobePairing: "Perfect alongside our Desert Sand Emirati Kanzu.",
      careInstructions: "Dry clean only."
    },
    pairsWellWith: ["emirati-kanzu-sand", "sultan-rose-gold", "al-hamra-wedding-gold"]
  },
  {
    slug: "navy-bisht-silver",
    name: "Royal Navy Bisht",
    category: "Overtops",
    price: 17800,
    image: over4,
    alt: "Navy blue ceremonial bisht with silver borders",
    colors: ["#0d1a35", "#C0C0C0"],
    sizes: ["M", "L", "XL"],
    badge: "Limited",
    description: "Commanding deep navy blue bisht styled with high-contrast silver borders. Brings a modern elegance to traditional evening wear and official receptions.",
    specs: {
      fabricType: "Sheer wool-cotton blend",
      trimColor: "Premium Silver Thread",
      occasion: "VIP events, evening ceremonies, Eid",
      recommendedThobePairing: "Pairs beautifully with steel grey or light blue thobes.",
      careInstructions: "Dry clean only."
    },
    pairsWellWith: ["omani-dishdasha-steel", "rose-gold-executive", "al-malik-silver-blue"]
  },
  {
    slug: "brown-bisht-gold",
    name: "Classic Brown Bisht",
    category: "Overtops",
    price: 18000,
    image: over5,
    alt: "Brown ceremonial bisht with gold trim",
    colors: ["#5b4b34", "#DAA520"],
    sizes: ["M", "L", "XL"],
    description: "The traditional brown bisht, a staple in Gulf diplomatic and royal circles. Rich earthy brown tones accented by hand-wound gold embroidery.",
    specs: {
      fabricType: "Mid-weight sheer crepe",
      trimColor: "Gold Zari Cord",
      occasion: "Weddings, official events, Jummah",
      recommendedThobePairing: "Pairs exceptionally well with off-white or beige thobes.",
      careInstructions: "Dry clean only."
    },
    pairsWellWith: ["emirati-kanzu-sand", "sahara-gold-leather", "tasbih-sandalwood"]
  },
  {
    slug: "saudi-ceremonial-cloak",
    name: "Saudi Ceremonial Cloak",
    category: "Overtops",
    price: 22500,
    image: over6,
    alt: "Heavy black Saudi cloak with gold embroidery",
    colors: ["#111111", "#DAA520"],
    sizes: ["M", "L", "XL", "XXL"],
    badge: "Exclusive",
    description: "An authentic Saudi-style ceremonial cloak. Features a heavier drape for structural prominence and double-stitched gold borders for maximum prestige.",
    specs: {
      fabricType: "Premium wool weave",
      trimColor: "Double-Stitch Gold Zari",
      occasion: "VIP events, royal assemblies, weddings",
      recommendedThobePairing: "Must be paired with a white thobe and a red/white Shemagh secured with an Agal.",
      careInstructions: "Professional dry clean only."
    },
    pairsWellWith: ["saudi-kanzu-ivory", "double-loop-agal", "royal-shemagh-red"]
  },
  {
    slug: "emirati-formal-overtop",
    name: "Emirati Formal Overtop",
    category: "Overtops",
    price: 19800,
    image: over7,
    alt: "Grey Emirati formal overtop cloak",
    colors: ["#708090", "#C0C0C0"],
    sizes: ["M", "L", "XL"],
    badge: "New",
    description: "Tailored to align with the minimalist elegance of Emirati thobes. Features custom silver detailing along the collar line and a lightweight fluid cut.",
    specs: {
      fabricType: "Ultra-light silk-cotton blend",
      trimColor: "Minimalist Silver Embroidery",
      occasion: "Weddings, Eid, family events",
      recommendedThobePairing: "Pairs perfectly with our tassel-finished Emirati Kanzu.",
      careInstructions: "Dry clean only."
    },
    pairsWellWith: ["emirati-kanzu-sand", "elegance-smart-hybrid", "emirati-premium-midnight-black"]
  },
  {
    slug: "wedding-overtop-cream",
    name: "Royal Wedding Overtop",
    category: "Overtops",
    price: 24500,
    image: over8,
    alt: "Luxury cream and gold wedding overtop",
    colors: ["#FFFDD0", "#DAA520"],
    sizes: ["M", "L", "XL"],
    badge: "Exclusive",
    description: "The pinnacle of our ceremonial collection. Created specifically for grooms, featuring heavy gold zari patterns that represent heritage and blessings.",
    specs: {
      fabricType: "Elite silk-cashmere blend",
      trimColor: "Heavy Royal Gold Zari",
      occasion: "Nikah, Wedding ceremony",
      recommendedThobePairing: "Designed exclusively for our Wedding Kanzu in Royal Gold.",
      careInstructions: "Professional dry clean only. Store in garment bag."
    },
    pairsWellWith: ["wedding-kanzu-gold", "sultan-royal-gold", "al-hamra-wedding-gold"]
  },
  {
    slug: "eid-overtop-sand",
    name: "Eid Special Overtop",
    category: "Overtops",
    price: 19000,
    image: over9,
    alt: "Light cream and gold Eid overtop",
    colors: ["#E6D2A8", "#DAA520"],
    sizes: ["M", "L", "XL", "XXL"],
    badge: "Limited",
    description: "Celebrate Eid in refined style. This limited-edition cloak offers a breezy drape and soft gold accents, ensuring comfort during warm outdoor Eid prayers and family lunches.",
    specs: {
      fabricType: "Breathable linen-cotton",
      trimColor: "Soft Gold Accent Thread",
      occasion: "Eid prayers, Eid family gatherings",
      recommendedThobePairing: "Pairs with the Mombasa White Kanzu or Pearl Ivory Thobe.",
      careInstructions: "Dry clean only."
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "medina-eid-special", "medina-eid-special-sandal"]
  },
  {
    slug: "sheikh-style-cloak",
    name: "Sheikh-Style Royal Cloak",
    category: "Overtops",
    price: 23500,
    image: over1,
    alt: "Elite Sheikh-style black cloak with heavy gold trim",
    colors: ["#111111", "#DAA520"],
    sizes: ["M", "L", "XL"],
    badge: "Exclusive",
    description: "A cloak that commands respect. Crafted with the traditional thick gold zari detailing worn by dignitaries and sheikhs at formal functions.",
    specs: {
      fabricType: "Premium high-grade wool",
      trimColor: "Elite Gold Zari",
      occasion: "VIP events, diplomatic assemblies, weddings",
      recommendedThobePairing: "Complements high-end white thobes and watch ensembles.",
      careInstructions: "Professional dry clean only."
    },
    pairsWellWith: ["saudi-kanzu-ivory", "heritage-grand-premium", "double-loop-agal"]
  },
  {
    slug: "imam-formal-cloak",
    name: "Imam Formal Cloak",
    category: "Overtops",
    price: 20000,
    image: over2,
    alt: "Imam white and gold ceremonial cloak",
    colors: ["#ffffff", "#DAA520"],
    sizes: ["M", "L", "XL"],
    description: "A dignified white cloak designed for Imams and students of knowledge for Friday sermons, lectures, and formal Islamic functions.",
    specs: {
      fabricType: "Premium structured cotton-poly blend",
      trimColor: "Classic Gold Accent Trim",
      occasion: "Jummah sermons, Islamic lectures, Nikah officiating",
      recommendedThobePairing: "Best worn with a white thobe and Al-Azhar Imamah.",
      careInstructions: "Dry clean only."
    },
    pairsWellWith: ["saudi-kanzu-ivory", "premium-al-azhar-imamah", "tasbih-sandalwood"]
  },
  {
    slug: "sultan-bakora",
    name: "Sultan Traditional Bakora",
    category: "Traditional Canes",
    price: 12500,
    image: bak1,
    alt: "Sultan Bakora cane, dark hardwood, elegant curved handle, luxury finish",
    colors: ["#3E2723", "#000000"],
    sizes: ["36\"", "38\""],
    badge: "Best Seller",
    description: "A masterfully crafted dark hardwood bakora, featuring a perfectly balanced curved handle. Designed for formal Islamic occasions and traditional gatherings, embodying leadership and dignity.",
    specs: {
      material: "Premium Dark African Hardwood",
      handleStyle: "Traditional Curved Crooke",
      finish: "High-gloss luxury lacquer",
      length: "36 to 38 inches",
      origin: "Zanzibar, East Africa",
      stylingRecommendations: "Ideally paired with an Omani Dishdasha and a matching Omani Kumma."
    },
    pairsWellWith: ["omani-dishdasha-pearl-white", "royal-omani-kumma", "sultan-royal-gold"]
  },
  {
    slug: "sheikh-bakora",
    name: "Sheikh Polished Bakora",
    category: "Traditional Canes",
    price: 11000,
    image: bak2,
    alt: "Sheikh Bakora, black polished wood, traditional Islamic styling, minimal",
    colors: ["#111111"],
    sizes: ["36\"", "38\""],
    badge: "New",
    description: "A minimalist, sleek black polished wood bakora with a traditional Islamic silhouette. Represents prestige, simplicity, and Islamic elegance.",
    specs: {
      material: "Polished Black Ebony Wood",
      handleStyle: "Ergonomic L-Shape Grip",
      finish: "Satin matte black",
      length: "36 to 38 inches",
      origin: "Mombasa, Kenya",
      stylingRecommendations: "Pairs excellently with a Saudi Thobe, red/white shemagh, and black sandals."
    },
    pairsWellWith: ["saudi-kanzu-ivory", "royal-shemagh-red", "medina-eid-special-sandal"]
  },
  {
    slug: "zanzibar-bakora",
    name: "Zanzibar Swahili Bakora",
    category: "Traditional Canes",
    price: 9800,
    image: bak3,
    alt: "Zanzibar Bakora, Swahili-inspired craftsmanship, rich brown finish",
    colors: ["#5D4037", "#8D6E63"],
    sizes: ["36\"", "38\""],
    description: "A rich brown wood cane displaying Swahili-inspired carving. Celebrates the coastal East African Muslim heritage of wood carving and craftsmanship.",
    specs: {
      material: "Wild Olive Hardwood",
      handleStyle: "Curved Hook",
      finish: "Natural beeswax and oil finish",
      length: "36 to 38 inches",
      origin: "Zanzibar Archipelago",
      stylingRecommendations: "Best styled with a white Swahili Kanzu and an embroidered Kofia."
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "sultan-rose-gold"]
  },
  {
    slug: "heritage-bakora",
    name: "Heritage Carved Bakora",
    category: "Traditional Canes",
    price: 14000,
    image: bak4,
    alt: "Heritage Bakora, traditional East African style, hand-carved detailing, premium appearance",
    colors: ["#4E342E"],
    sizes: ["36\"", "38\""],
    badge: "Limited",
    description: "A distinguished, hand-carved traditional East African bakora. Every cane is individually carved by master artisans, making it a highly unique, premium heritage statement.",
    specs: {
      material: "Rare African Mvule Wood",
      handleStyle: "Decorated Scroll Grip",
      finish: "Hand-rubbed shellac",
      length: "36 to 38 inches",
      origin: "Lamu, Kenya",
      stylingRecommendations: "Complements wedding attire and VIP assemblies."
    },
    pairsWellWith: ["wedding-kanzu-gold", "double-loop-agal", "heritage-grand-premium"]
  },
  {
    slug: "royal-bakora",
    name: "Royal Ceremonial Bakora",
    category: "Traditional Canes",
    price: 24500,
    image: bak5,
    alt: "Royal Bakora, gold-accent details, luxury ceremonial piece",
    colors: ["#ffd700", "#111111"],
    sizes: ["36\"", "38\""],
    badge: "Exclusive",
    description: "Our most luxurious ceremonial bakora. Adorned with 18K gold-plated collar details and a refined solid brass tip. Crafted for grooms, dignitaries, and prestigious Islamic occasions.",
    specs: {
      material: "Polished African Ebony & 18K Gold Plated Brass",
      handleStyle: "Symmetric T-Bar Ceremony Grip",
      finish: "Mirror-gloss black piano finish",
      length: "36 to 38 inches",
      origin: "Nairobi, Kenya (Custom Workshop)",
      stylingRecommendations: "Worn during wedding ceremonies alongside a cream/black ceremonial Bisht."
    },
    pairsWellWith: ["wedding-overtop-cream", "sultan-royal-gold", "al-hamra-wedding-gold"]
  },
  {
    slug: "premium-white-vest",
    name: "Premium White Vest",
    category: "Undergarments",
    price: 1800,
    image: under1,
    alt: "Premium white vest in breathable organic cotton",
    colors: ["#ffffff"],
    sizes: ["S", "M", "L", "XL"],
    description: "An essential lightweight vest crafted from ultra-soft, breathable organic cotton. Offers clean styling under your thobe or kanzu.",
    specs: {
      fabricComposition: "100% GOTS Certified Organic Cotton",
      breathability: "High / Open Knit structure",
      comfortLevel: "Exceptional / Soft seamless edges",
      climateSuitability: "Excellent for hot, humid coastal climates",
      washingInstructions: "Machine wash cold with like colors, tumble dry low"
    },
    pairsWellWith: ["saudi-kanzu-ivory"]
  },
  {
    slug: "premium-inner-shirt",
    name: "Premium Inner Shirt",
    category: "Undergarments",
    price: 2400,
    image: under2,
    alt: "Lightweight premium inner shirt for hot climates",
    colors: ["#ffffff"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Best Seller",
    description: "A tailored crew-neck inner shirt designed to sit cleanly under high-collared thobes. Constructed from thin, cooling cotton thread.",
    specs: {
      fabricComposition: "95% Cotton, 5% Lycra for comfort stretch",
      breathability: "Ultra-high air flow",
      comfortLevel: "Featherlight second-skin feel",
      climateSuitability: "Designed specifically for East African and Gulf summers",
      washingInstructions: "Warm wash, air dry recommended to maintain shape"
    },
    pairsWellWith: ["omani-dishdasha-pearl-white"]
  },
  {
    slug: "premium-undershirt-vneck",
    name: "Premium Undershirt - V-Neck",
    category: "Undergarments",
    price: 2200,
    image: under3,
    alt: "Moisture-wicking V-neck undershirt",
    colors: ["#ffffff", "#f5f5dc"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "A deep V-neck profile that remains completely invisible even when the top collar buttons of your kanzu are open.",
    specs: {
      fabricComposition: "90% Micro-modal, 10% Elastane",
      breathability: "Excellent ventilation",
      comfortLevel: "Silky smooth anti-friction texture",
      climateSuitability: "All-season daily wear comfort",
      washingInstructions: "Gentle cycle wash, avoid chlorine bleach"
    },
    pairsWellWith: ["swahili-kanzu-mombasa"]
  },
  {
    slug: "cotton-undergarment-set",
    name: "Cotton Undergarment Set",
    category: "Undergarments",
    price: 4500,
    image: under4,
    alt: "Premium white cotton undershirt and inner pants set",
    colors: ["#ffffff"],
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
    description: "The complete premium foundation set. Includes our breathable short-sleeve undershirt and traditional-fit inner pants.",
    specs: {
      fabricComposition: "100% Long-staple Egyptian Cotton",
      breathability: "High breathable weave",
      comfortLevel: "Structured, non-restrictive fit",
      climateSuitability: "Perfect for formal gatherings and daily wear",
      washingInstructions: "Machine wash at 40°C, iron on medium heat"
    },
    pairsWellWith: ["emirati-kanzu-white"]
  },
  {
    slug: "lightweight-inner-pants",
    name: "Lightweight Inner Pants",
    category: "Undergarments",
    price: 2500,
    image: under5,
    alt: "Traditional lightweight inner pants",
    colors: ["#ffffff"],
    sizes: ["S", "M", "L", "XL"],
    description: "Traditional loose-fitting inner trousers featuring a soft elastic waistband and split ankles for maximum mobility and comfort.",
    specs: {
      fabricComposition: "80% Cotton, 20% Linen blend",
      breathability: "Very high cooling airflow",
      comfortLevel: "Relaxed fit, zero irritation",
      climateSuitability: "Optimal cooling under thobes in high humidity",
      washingInstructions: "Machine wash warm, hang dry to reduce wrinkles"
    },
    pairsWellWith: ["saudi-kanzu-navy"]
  },
  {
    slug: "olive-wood-tasbih",
    name: "Jerusalem Olive Wood Tasbih",
    category: "Tasbih",
    price: 3800,
    image: tas1,
    images: [tas1, ig4, ig3, tas2],
    alt: "Handcrafted Jerusalem Olive Wood Tasbih with 99 beads",
    colors: ["#c19a6b"],
    sizes: ["99 Beads"],
    badge: "Best Seller",
    description: "A beautifully warm and tactile prayer bead set crafted from pruned branches of ancient olive trees in the hills of Jerusalem. Each bead carries a distinct grain, hand-finished to a smooth satin touch.",
    specs: {
      beadMaterial: "Premium Palestinian Olive Wood",
      beadCount: 99,
      isHandcrafted: true,
      origin: "Jerusalem, Palestine",
      packagingDetails: "Supplied in a velvet-lined natural cedarwood presentation box."
    },
    pairsWellWith: ["saudi-kanzu-ivory", "sultan-royal-gold"]
  },
  {
    slug: "royal-sandalwood-tasbih",
    name: "Royal Sandalwood Tasbih",
    category: "Tasbih",
    price: 4900,
    image: tas2,
    images: [tas2, ig3, ig2, tas1],
    alt: "Highly fragrant Sandalwood Tasbih with 99 beads",
    colors: ["#8b5a2b"],
    sizes: ["99 Beads"],
    badge: "Limited",
    description: "Emits a soft, calming natural aroma that deepens over time. Crafted from high-density heartwood of premium Mysore sandalwood, featuring handmade silken tassel accents.",
    specs: {
      beadMaterial: "Mysore Sandalwood (Heartwood)",
      beadCount: 99,
      isHandcrafted: true,
      origin: "Karnataka, India",
      packagingDetails: "Enclosed in a breathable raw linen pouch with gold foil calligraphy."
    },
    pairsWellWith: ["swahili-kanzu-mombasa", "sultan-bakora"]
  },
  {
    slug: "black-onyx-ebony-tasbih",
    name: "Ebony & Black Onyx Tasbih",
    category: "Tasbih",
    price: 5400,
    image: tas3,
    images: [tas3, ig1, ig5, tas4],
    alt: "Matte black luxury ebony and onyx tasbih with sterling silver tassel",
    colors: ["#111111"],
    sizes: ["33 Beads"],
    badge: "New",
    description: "A modern, minimalist luxury piece. Deep black African ebony wood beads alternated with polished black onyx gemstones, finished with a handcrafted sterling silver tassel.",
    specs: {
      beadMaterial: "African Ebony Wood & Natural Black Onyx",
      beadCount: 33,
      isHandcrafted: true,
      origin: "Nairobi Atelier / Kenya",
      packagingDetails: "Housed in a matte-black textured rigid casket with velvet insert."
    },
    pairsWellWith: ["royal-bisht-onyx", "elegance-smart-hybrid"]
  },
  {
    slug: "royal-amber-tasbih",
    name: "Royal Ceremonial Amber Tasbih",
    category: "Tasbih",
    price: 12500,
    image: tas4,
    images: [tas4, ig5, ig2, tas5],
    alt: "Luxury warm golden Baltic amber style tasbih with 33 beads",
    colors: ["#ffbf00"],
    sizes: ["33 Beads"],
    badge: "Exclusive",
    description: "An exceptional ceremonial piece crafted from reconstituted Baltic amber, catching the light with warm honey-colored hues. Features a custom gold-plated metal tassel.",
    specs: {
      beadMaterial: "Genuine Baltic Amber-style resin",
      beadCount: 33,
      isHandcrafted: false,
      origin: "Gdańsk, Poland",
      packagingDetails: "Presented in a piano-gloss mahogany chest with gold velvet padding."
    },
    pairsWellWith: ["wedding-overtop-cream", "sultan-royal-gold"]
  },
  {
    slug: "lapis-lazuli-tasbih",
    name: "Lapis Lazuli Stone Tasbih",
    category: "Tasbih",
    price: 6500,
    image: tas5,
    images: [tas5, ig6, ig1, tas3],
    alt: "Translucent deep royal blue lapis lazuli stone beads tasbih",
    colors: ["#000080"],
    sizes: ["99 Beads"],
    description: "Meticulously selected deep blue lapis lazuli stone beads showing beautiful golden flecks of pyrite. Finished with an elegant silk tassel.",
    specs: {
      beadMaterial: "Natural Afghan Lapis Lazuli Gemstone",
      beadCount: 99,
      isHandcrafted: true,
      origin: "Badakhshan, Afghanistan",
      packagingDetails: "Delivered in a hard-shell protective travel box with suede lining."
    },
    pairsWellWith: ["omani-dishdasha-indigo", "rose-gold-executive"]
  },
  {
    slug: "sultan-gold-tasbih-gift",
    name: "Sultan Rosewood & Gold Gift Set",
    category: "Tasbih",
    price: 9200,
    image: ig2,
    images: [ig2, tas1, tas2, ig4],
    alt: "Luxury boxed rosewood tasbih and premium attar perfume bottle",
    colors: ["#3d2314"],
    sizes: ["99 Beads"],
    badge: "Exclusive",
    description: "The ultimate spiritual gifting piece. Contains a polished East Indian Rosewood tasbih accented with 18K gold-plated separators, alongside a mini bottle of Oud Tansoor concentrated oil.",
    specs: {
      beadMaterial: "East Indian Rosewood & 18K Gold Plated Brass",
      beadCount: 99,
      isHandcrafted: true,
      origin: "Istanbul, Turkey",
      packagingDetails: "Presented in a hand-embellished emerald-green royal Ottoman casket."
    },
    pairsWellWith: ["saudi-ceremonial-cloak", "sultan-royal-gold"]
  }
];

export const formatKES = (n: number) =>
  `KES ${n.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export function isPremiumProduct(product: { name: string; category?: string; subCategory?: string }): boolean {
  const name = product.name.toLowerCase();
  const category = (product.category || "").toLowerCase();
  const subCategory = (product.subCategory || "").toLowerCase();

  return (
    name.includes("royal omani") ||
    name.includes("signature oud") ||
    name.includes("heritage bakora") ||
    name.includes("oud tansoor") ||
    name.includes("royal bisht") ||
    name.includes("royal gold") ||
    name.includes("sultan royal") ||
    name.includes("sultan rose") ||
    name.includes("al-hamra wedding") ||
    name.includes("wedding kanzu") ||
    name.includes("eid campaign") ||
    category.includes("royal omani") ||
    subCategory.includes("royal omani") ||
    category.includes("signature oud") ||
    category.includes("heritage bakora") ||
    category.includes("overtops") ||
    category.includes("traditional canes") ||
    category.includes("bakora") ||
    name.includes("bisht") ||
    name.includes("overtop") ||
    name.includes("cloak") ||
    name.includes("bakora") ||
    name.includes("cane")
  );
}