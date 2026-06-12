import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Heart, User, ShoppingBag, MessageCircle, Menu, X } from "lucide-react";

const NAV: { label: string; to: string }[] = [
  { label: "Shop", to: "/shop" },
  { label: "Kanzu", to: "/shop", },
  { label: "Jubbas", to: "/shop" },
  { label: "Abayas", to: "/shop" },
  { label: "Accessories", to: "/shop" },
  { label: "New Arrivals", to: "/shop" },
  { label: "Best Sellers", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="w-full bg-ink text-[11px] tracking-[0.18em] uppercase text-white">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-center px-6">
          <span className="font-medium">Free Nairobi Delivery on Orders Above KES 5,000</span>
        </div>
      </div>

      <div
        className={`border-b border-hairline transition-shadow ${
          scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.04)]" : ""
        }`}
      >
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6">
          {/* Left: mobile menu + nav */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <nav className="hidden items-center gap-8 lg:flex">
              <Link to="/" className="text-[12px] tracking-[0.18em] uppercase text-ink link-underline">
                Home
              </Link>
              <Link to="/shop" className="text-[12px] tracking-[0.18em] uppercase text-ink link-underline">
                Shop
              </Link>
              <Link to="/shop" className="text-[12px] tracking-[0.18em] uppercase text-ink link-underline">
                Collections
              </Link>
            </nav>
          </div>

          {/* Center: wordmark */}
          <Link to="/" className="text-center">
            <span className="block font-display text-[26px] leading-none tracking-[0.32em] text-ink">
              KANZU BAY
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.32em] text-muted-foreground">
              Where Tradition Meets Class
            </span>
          </Link>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-1 text-ink">
            <IconButton label="Search"><Search className="h-[18px] w-[18px]" strokeWidth={1.25} /></IconButton>
            <IconButton label="Wishlist"><Heart className="h-[18px] w-[18px]" strokeWidth={1.25} /></IconButton>
            <IconButton label="Account"><User className="h-[18px] w-[18px]" strokeWidth={1.25} /></IconButton>
            <IconButton label="Cart" badge="0"><ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} /></IconButton>
            <a
              href="https://wa.me/254700000000"
              aria-label="WhatsApp"
              className="ml-1 hidden h-10 w-10 place-items-center text-ink hover:text-gold sm:grid"
            >
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={1.25} />
            </a>
          </div>
        </div>

        {/* Secondary nav (desktop) */}
        <div className="hidden border-t border-hairline lg:block">
          <nav className="mx-auto flex max-w-[1440px] items-center justify-center gap-10 px-6 py-3">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="text-[11px] tracking-[0.22em] uppercase text-ink/80 hover:text-ink"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/40 lg:hidden" onClick={() => setOpen(false)}>
          <aside
            className="absolute left-0 top-0 h-full w-[82%] max-w-[360px] bg-background p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl tracking-[0.28em]">KANZU BAY</span>
              <button aria-label="Close" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>
            <div className="my-6 hairline" />
            <nav className="flex flex-col gap-4">
              {NAV.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.18em] uppercase"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}

function IconButton({ children, label, badge }: { children: React.ReactNode; label: string; badge?: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative grid h-10 w-10 place-items-center hover:text-gold"
    >
      {children}
      {badge && (
        <span className="absolute right-1 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-ink px-1 text-[9px] font-medium text-white">
          {badge}
        </span>
      )}
    </button>
  );
}