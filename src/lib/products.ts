import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Kanzu" | "Jubbas" | "Abayas" | "Accessories" | "Perfumes";
  region?: "Saudi" | "Emirati" | "Omani" | "Moroccan";
  price: number;
  image: string;
  alt: string;
  colors: string[];
  sizes: string[];
  badge?: "New" | "Best Seller" | "Limited";
  description: string;
};

export const products: Product[] = [
  {
    slug: "saudi-kanzu-ivory",
    name: "Saudi Kanzu — Pearl Ivory",
    category: "Kanzu",
    region: "Saudi",
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
    category: "Kanzu",
    region: "Emirati",
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
    category: "Kanzu",
    region: "Omani",
    price: 9800,
    image: p3,
    alt: "Graphite Omani dishdasha with embroidered collar",
    colors: ["#3a3a3a", "#111111", "#7a6a4a"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Signature Omani collar with restrained embroidery in tonal thread. Mid-weight cotton blend tailored for the Nairobi climate.",
  },
  {
    slug: "abaya-noir-gold",
    name: "Noir Abaya — Gold Trim",
    category: "Abayas",
    price: 12500,
    image: p4,
    alt: "Black abaya with gold trim",
    colors: ["#111111", "#1f1f1f"],
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
    description:
      "A floor-length abaya in matte black crepe, finished with a single line of antique-gold trim. Designed to move.",
  },
  {
    slug: "moroccan-jubba-midnight",
    name: "Moroccan Jubba — Midnight",
    category: "Jubbas",
    region: "Moroccan",
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
    category: "Accessories",
    price: 2400,
    image: p6,
    alt: "Embroidered black and gold kofia cap",
    colors: ["#111111"],
    sizes: ["One Size"],
    description:
      "A traditional kofia finished with antique gold embroidery. Soft-structured for everyday wear.",
  },
  {
    slug: "oud-tansoor",
    name: "Oud Tansoor — Eau de Parfum",
    category: "Perfumes",
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
    category: "Accessories",
    price: 1900,
    image: p8,
    alt: "Sandalwood 99-bead tasbih with tassel",
    colors: ["#7b4b2a"],
    sizes: ["99 Beads"],
    description:
      "Hand-turned sandalwood beads strung on waxed cotton with a silk tassel. Sized to settle quietly in the hand.",
  },
];

export const formatKES = (n: number) =>
  `KES ${n.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);