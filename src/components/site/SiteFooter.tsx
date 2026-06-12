import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-hairline bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="block">
              <span className="font-display text-2xl tracking-[0.32em] text-ink">KANZU BAY</span>
            </Link>
            <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Where Tradition Meets Class
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              East Africa's Premium Men's Islamic Fashion House crafting the world's most refined
              Saudi Thobes, Emirati Kanzu, Omani Kanzu, and Swahili Kanzu.
              Made for those who dress with intention.
            </p>
            <div className="mt-8 flex items-center gap-4 text-ink">
              <a aria-label="Instagram" href="#" className="hover:text-gold"><Instagram className="h-4 w-4" strokeWidth={1.25} /></a>
              <a aria-label="Facebook" href="#" className="hover:text-gold"><Facebook className="h-4 w-4" strokeWidth={1.25} /></a>
              <a aria-label="YouTube" href="#" className="hover:text-gold"><Youtube className="h-4 w-4" strokeWidth={1.25} /></a>
              <a aria-label="WhatsApp" href="https://wa.me/254700000000" className="hover:text-gold"><MessageCircle className="h-4 w-4" strokeWidth={1.25} /></a>
            </div>
          </div>

          <FooterCol title="Shop" items={[{ label: "Thobes", to: "/shop", search: { category: "Thobes" } }, "Headwear", "Watches", "Sandals", "Luxury Perfumes"]} />
          <FooterCol title="Collections" items={["Wedding Collection", "Eid Collection", "Friday Prayer Collection"]} />
          <FooterCol
            title="Company"
            items={[
              { label: "About Kanzu Bay", to: "/about" },
              { label: "Our Atelier", to: "/about" },
              { label: "Editorial", to: "/shop" },
              { label: "Contact", to: "/about" }
            ]}
          />

          <div className="md:col-span-3">
            <h4 className="eyebrow">Newsletter</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Be the first to receive new arrivals and private previews.
            </p>
            <form className="mt-5 flex border-b border-ink/80">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              <button type="submit" className="px-1 text-[11px] uppercase tracking-[0.22em]">
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Kanzu Bay. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-ink">Shipping</a>
            <a href="#" className="hover:text-ink">Returns</a>
            <a href="#" className="hover:text-ink">Size Guide</a>
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: Array<string | { label: string; to: string; search?: Record<string, string> }>;
}) {
  return (
    <div className="md:col-span-2">
      <h4 className="eyebrow">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-foreground/80">
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const to = typeof item === "string" ? "/shop" : item.to;
          const search =
            typeof item === "string"
              ? [
                  "Saudi Thobes",
                  "Emirati Kanzu",
                  "Omani Kanzu",
                  "Swahili Kanzu",
                  "Headwear",
                  "Watches",
                  "Luxury Perfumes",
                ].includes(item)
                ? { category: item }
                : undefined
              : item.search;
          return (
            <li key={label}>
              <Link to={to} search={search} className="link-underline">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}