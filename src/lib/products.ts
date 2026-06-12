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

export type ProductCategory =
  | "Saudi Thobes"
  | "Emirati Kanzu"
  | "Omani Kanzu"
  | "Moroccan Jubbas"
  | "Swahili Kanzu"
  | "Bisht Collection"
  | "Kofia Caps"
  | "Tasbih"
  | "Prayer Mats"
  | "Luxury Perfumes"
  | "Men's Sandals"
  | "Headwear";

export type HeadwearSubCategory =
  | "Kufi Caps"
  | "Taqiyah"
  | "Omani Kumma"
  | "Ghutra"
  | "Shemagh"
  | "Keffiyeh"
  | "Agal"
  | "Imamah";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  subCategory?: HeadwearSubCategory;
  price: number;
  image: string;
  alt: string;
  colors: string[];
  sizes: string[];
  badge?: "New" | "Best Seller" | "Limited" | "Exclusive";
  description: string;
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
  },
  {
    slug: "swahili-sandals-classic",
    name: "Swahili Sandals — Classic Brown",
    category: "Men's Sandals",
    price: 6500,
    image: p4,
    alt: "Classic brown hand-crafted Swahili leather sandals",
    colors: ["#5b4b34", "#111111"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    badge: "New",
    description:
      "Hand-crafted Swahili leather sandals, made in Kenya using genuine full-grain leather. Solid brass buckles, hand-stitched detailing, and a comfortable sole designed for Friday prayers and everyday style.",
  },
  {
    slug: "moroccan-jubba-midnight",
    name: "Moroccan Jubba — Midnight",
    category: "Moroccan Jubbas",
    price: 11200,
    image: p5,
    alt: "Midnight navy Moroccan jubba",
    colors: ["#0d1a35", "#111111"],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Open-front Moroccan jubba in midnight navy with hand-guided silk embroidery along the placket. A heritage cut for considered occasions.",
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
  },
  {
    slug: "royal-bisht-onyx",
    name: "Royal Bisht — Onyx & Gold",
    category: "Bisht Collection",
    price: 18500,
    image: videoPoster,
    alt: "Onyx black royal bisht with gold embroidery",
    colors: ["#111111"],
    sizes: ["M", "L", "XL"],
    badge: "Exclusive",
    description:
      "The definitive ceremonial garment. Crafted from ultra-lightweight fabric with heavy gold zari metallic embroidery along the borders. Essential for weddings and high occasions.",
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
];

export const formatKES = (n: number) =>
  `KES ${n.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);