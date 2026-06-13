import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products, type Product } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ChevronDown } from "lucide-react";

type ShopSearch = {
  category?: string;
  subCategory?: string;
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => {
    return {
      category: search.category ? String(search.category) : undefined,
      subCategory: search.subCategory ? String(search.subCategory) : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Shop — Kanzu Bay" },
      { name: "description", content: "Shop premium Saudi Thobes, Emirati Kanzu, Omani Kanzu, Swahili Kanzu, sandals, headwear, watches, perfumes, and lifestyle accessories from Kanzu Bay." },
      { property: "og:title", content: "Shop — Kanzu Bay" },
      { property: "og:description", content: "East Africa's Premium Men's Islamic Fashion House." },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

const CATEGORIES: Array<Product["category"] | "All" | "Thobes" | "Accessories"> = [
  "All",
  "Thobes",
  "Overtops",
  "Traditional Canes",
  "Headwear",
  "Watches",
  "Undergarments",
  "Tasbih",
  "Prayer Mats",
  "Men's Sandals",
  "Accessories",
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "new", label: "Newest" },
] as const;

function Shop() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const cat = (search.category && CATEGORIES.includes(search.category as any)
    ? search.category
    : "All") as (typeof CATEGORIES)[number];

  const setCat = (newCat: string) => {
    navigate({
      search: (prev) => ({
        ...prev,
        category: newCat === "All" ? undefined : newCat,
        subCategory: undefined,
      }),
    });
  };

  const [sort, setSort] = useState<(typeof SORTS)[number]["id"]>("featured");

  const filtered = useMemo(() => {
    let list = products;
    if (cat !== "All") {
      if (cat === "Thobes") {
        list = list.filter((p) =>
          ["Saudi Thobes", "Emirati Kanzu", "Omani Kanzu", "Swahili Kanzu"].includes(p.category)
        );
      } else if (cat === "Accessories") {
        list = list.filter((p) =>
          ["Tasbih", "Prayer Mats", "Traditional Canes"].includes(p.category)
        );
      } else {
        list = list.filter((p) => p.category === cat);
      }
    }
    if (search.subCategory) {
      list = list.filter((p) => p.subCategory === search.subCategory);
    }
    if (sort === "new") list = [...list].sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
    return list;
  }, [cat, search.subCategory, sort]);

  return (
    <div className="bg-background">
      {/* Page header */}
      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-5 md:pt-12 md:pb-7">
        <nav className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground flex items-center flex-wrap gap-1">
          <Link to="/" className="hover:text-ink">Home</Link> <span>/</span> 
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          {cat !== "All" && (
            <>
              <span>/</span> <span className="text-ink">{cat}</span>
            </>
          )}
          {search.subCategory && (
            <>
              <span>/</span> <span className="text-ink">{search.subCategory}</span>
            </>
          )}
        </nav>
        {cat === "Undergarments" && !search.subCategory ? (
          <div className="mt-8 relative overflow-hidden bg-[#181615] border border-hairline p-8 md:p-16 text-white flex flex-col justify-end min-h-[280px] md:min-h-[360px] rounded-sm">
            {/* Background design representing luxury editorial style - folded white garments on wood with soft lighting */}
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-900/90 to-stone-950/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(139,92,26,0.1),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,_rgba(255,255,255,0.03),_transparent_40%)]" />
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-35 bg-[url('/assets/omani7.jpeg')] bg-cover bg-center mix-blend-luminosity grayscale contrast-125" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent md:bg-gradient-to-r md:from-stone-950 md:via-stone-950/60 md:to-transparent" />
            
            <div className="relative z-10 max-w-lg">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Atelier Foundation Collection</span>
              <h2 className="mt-3 font-display text-[44px] leading-none md:text-[60px] tracking-wide text-white uppercase font-light">
                Undergarments
              </h2>
              <p className="mt-4 text-xs md:text-sm leading-relaxed text-stone-300 font-light max-w-md">
                Premium Foundations For Everyday Wear. Breathable, lightweight base layers engineered for comfort and structure under premium Islamic attire.
              </p>
            </div>
          </div>
        ) : cat === "Tasbih" && !search.subCategory ? (
          <div className="mt-8 relative overflow-hidden bg-[#131110] border border-hairline p-8 md:p-16 text-white flex flex-col justify-end min-h-[280px] md:min-h-[360px] rounded-sm">
            {/* Background design representing luxury editorial style - wood table, folded white kanzu, oud bottle, tasbih */}
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-900/95 to-[#1a1512]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(212,175,55,0.1),_transparent_50%)]" />
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-40 bg-[url('/assets/ig4.jpg')] bg-cover bg-center mix-blend-luminosity contrast-110 brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131110] via-[#131110]/50 to-transparent md:bg-gradient-to-r md:from-[#131110] md:via-[#131110]/70 md:to-transparent" />
            
            <div className="relative z-10 max-w-lg">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Spiritual & Heritage Collection</span>
              <h1 className="mt-3 font-display text-[44px] leading-none md:text-[60px] tracking-wide text-white uppercase font-light">
                Tasbih Collection
              </h1>
              <p className="mt-4 text-xs md:text-sm leading-relaxed text-stone-300 font-light max-w-md">
                Crafted For Reflection & Tradition. Premium prayer beads shaped from olive wood, sandalwood, amber, and fine gemstones. Gift-worthy accompaniments of quiet elegance.
              </p>
            </div>
          </div>
        ) : (
          <>
            <h1 className="mt-6 font-display text-[40px] leading-tight md:text-[56px]">
              {search.subCategory || (cat === "All" ? "The Collection" : cat)}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Quietly considered Islamic dress. Each piece is finished in our Nairobi atelier.
            </p>
          </>
        )}
        {search.subCategory && (
          <div className="mt-6 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              Filtering by: <strong className="text-ink font-semibold">{search.subCategory}</strong>
            </span>
            <button
              onClick={() => {
                navigate({
                  search: (prev) => ({
                    ...prev,
                    subCategory: undefined,
                  }),
                });
              }}
              className="text-[10px] uppercase tracking-[0.18em] text-gold hover:text-ink underline underline-offset-4"
            >
              Clear subcategory filter
            </button>
          </div>
        )}
      </div>

      <div className="border-y border-hairline">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  cat === c ? "text-ink" : "text-muted-foreground hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Sort</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="appearance-none bg-transparent pr-7 text-[11px] uppercase tracking-[0.22em] focus:outline-none"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 md:grid-cols-[240px_1fr] md:gap-14 md:py-16">
        <aside className="hidden md:block">
          <FilterGroup title="Category">
            <ul className="space-y-2">
              {CATEGORIES.filter((c) => c !== "All").map((c) => (
                <li key={c}>
                  <button
                    onClick={() => setCat(c)}
                    className={`text-sm ${cat === c ? "text-ink" : "text-muted-foreground hover:text-ink"}`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </FilterGroup>

          <FilterGroup title="Size">
            <div className="flex flex-wrap gap-2">
              {["S", "M", "L", "XL", "XXL"].map((s) => (
                <button key={s} className="grid h-9 w-9 place-items-center border border-hairline text-xs hover:border-ink">
                  {s}
                </button>
              ))}
            </div>
          </FilterGroup>
          <FilterGroup title="Colour">
            <div className="flex flex-wrap gap-2">
              {["#111111", "#F7F4EC", "#E6D2A8", "#0d1a35", "#3a3a3a", "#b56b1f"].map((c) => (
                <button
                  key={c}
                  aria-label={c}
                  className="h-6 w-6 rounded-full border border-hairline hover:border-ink transition-all hover:scale-105"
                  style={{ background: c }}
                />
              ))}
            </div>
          </FilterGroup>
          <FilterGroup title="Availability">
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" className="accent-ink" /> In Stock Only
            </label>
          </FilterGroup>
        </aside>

        <section>
          <p className="mb-8 text-xs text-muted-foreground">{filtered.length} pieces</p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 xl:grid-cols-3">
            {filtered.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>

          <div className="mt-20 flex items-center justify-center gap-2">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`h-9 w-9 text-xs transition-colors duration-200 ${n === 1 ? "bg-ink text-white hover:bg-gold hover:text-ink" : "border border-hairline hover:border-gold hover:text-gold"}`}
              >
                {n}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 border-b border-hairline pb-8">
      <h4 className="mb-5 text-[11px] uppercase tracking-[0.22em] text-ink">{title}</h4>
      {children}
    </div>
  );
}