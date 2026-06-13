import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Heart, User, ShoppingBag, MessageCircle, Menu, X, Instagram, Phone } from "lucide-react";
import { useInquiry } from "@/context/InquiryContext";

function TiktokIcon({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

// Headwear product imports for mega menu
import kufiCap from "@/assets/kufi_cap.png";
import taqiyahCap from "@/assets/taqiyah_cap.png";
import omaniKumma from "@/assets/omani_kumma.png";
import ghutra from "@/assets/ghutra.png";
import shemagh from "@/assets/shemagh.png";
import keffiyeh from "@/assets/keffiyeh.png";
import agal from "@/assets/agal.png";
import imamah from "@/assets/imamah.png";

// Watches product imports for mega menu
import dressWatch from "@/assets/dress_watch.png";

const HEADWEAR_COLLECTIONS = [
  { label: "Kufi Caps", image: kufiCap },
  { label: "Taqiyah", image: taqiyahCap },
  { label: "Omani Kumma", image: omaniKumma },
  { label: "Ghutra", image: ghutra },
  { label: "Shemagh", image: shemagh },
  { label: "Keffiyeh", image: keffiyeh },
  { label: "Agal", image: agal },
  { label: "Imamah", image: imamah },
];

const WATCH_COLLECTIONS = [
  { label: "Dress Watches", image: dressWatch },
  { label: "Arabic Dial Watches", image: dressWatch },
  { label: "Classic Collection", image: dressWatch },
  { label: "Gold Collection", image: dressWatch },
  { label: "Silver Collection", image: dressWatch },
  { label: "Premium Collection", image: dressWatch },
  { label: "Smart Watches", image: dressWatch },
];

const NAV: { label: string; to: string; search?: Record<string, string> }[] = [
  { label: "Shop All", to: "/shop" },
  { label: "Thobes", to: "/shop", search: { category: "Thobes" } },
  { label: "Overtops", to: "/shop", search: { category: "Overtops" } },
  { label: "Traditional Canes", to: "/shop", search: { category: "Traditional Canes" } },
  { label: "Headwear", to: "/shop", search: { category: "Headwear" } },
  { label: "Sandals", to: "/shop", search: { category: "Men's Sandals" } },
  { label: "Watches", to: "/shop", search: { category: "Watches" } },
  { label: "Tasbih", to: "/shop", search: { category: "Tasbih" } },
  { label: "Undergarments", to: "/shop", search: { category: "Undergarments" } },
  { label: "Accessories", to: "/shop", search: { category: "Accessories" } },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [headwearHovered, setHeadwearHovered] = useState(false);
  const [mobileHeadwearOpen, setMobileHeadwearOpen] = useState(false);
  const [watchesHovered, setWatchesHovered] = useState(false);
  const [mobileWatchesOpen, setMobileWatchesOpen] = useState(false);
  const { inquiryCount, setDrawerOpen } = useInquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="w-full bg-ink text-[11px] tracking-[0.18em] uppercase text-white">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-6">
          <div className="hidden sm:block w-36"></div>
          <span className="font-medium text-center flex-1">
            Complimentary Nairobi Delivery on All Boutique Orders
          </span>
          <div className="hidden sm:flex items-center justify-end gap-4 w-36">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="TikTok"
            >
              <TiktokIcon className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
            <a
              href="tel:+254700000000"
              className="hover:text-gold transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </div>
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
            <nav className="hidden items-center gap-8 lg:flex">
              <Link to="/" className="text-[12px] tracking-[0.18em] uppercase nav-link">
                Home
              </Link>
              <Link to="/shop" className="text-[12px] tracking-[0.18em] uppercase nav-link">
                Shop
              </Link>
              <Link to="/shop" className="text-[12px] tracking-[0.18em] uppercase nav-link">
                Collections
              </Link>
            </nav>
          </div>

          {/* Center: wordmark */}
          <Link to="/" className="text-center select-none">
            <span className="block font-display text-[13px] tracking-[0.2em] leading-none text-gold-secondary whitespace-nowrap sm:text-lg sm:tracking-[0.24em] md:text-[26px] md:tracking-[0.32em]">
              KANZU BAY
            </span>
          </Link>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-1 text-ink">
            <IconButton label="Search"><Search className="h-[18px] w-[18px]" strokeWidth={1.25} /></IconButton>
            <IconButton label="Wishlist"><Heart className="h-[18px] w-[18px]" strokeWidth={1.25} /></IconButton>
            <IconButton label="Account"><User className="h-[18px] w-[18px]" strokeWidth={1.25} /></IconButton>
            <IconButton 
              label="Inquiry List" 
              badge={inquiryCount > 0 ? String(inquiryCount) : undefined}
              onClick={() => setDrawerOpen(true)}
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
            </IconButton>
            <a
              href="https://wa.me/254700000000"
              aria-label="WhatsApp"
              className="ml-1 hidden h-10 w-10 place-items-center text-ink hover:text-gold sm:grid"
            >
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={1.25} />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center text-ink lg:hidden hover:text-gold"
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>

        {/* Secondary nav (desktop) */}
        <div 
          className="relative hidden border-t border-hairline lg:block"
          onMouseLeave={() => {
            setHeadwearHovered(false);
            setWatchesHovered(false);
          }}
        >
          <nav className="mx-auto flex max-w-[1440px] items-center justify-center gap-10 px-6 py-3">
            {NAV.map((n) => {
              if (n.label === "Headwear") {
                return (
                  <div 
                    key={n.label}
                    className="relative py-1"
                    onMouseEnter={() => {
                      setHeadwearHovered(true);
                      setWatchesHovered(false);
                    }}
                  >
                    <Link
                      to={n.to}
                      search={n.search}
                      className={`text-[11px] tracking-[0.22em] uppercase nav-link ${headwearHovered ? '!text-gold' : ''}`}
                    >
                      {n.label}
                    </Link>
                  </div>
                );
              }
              if (n.label === "Watches") {
                return (
                  <div 
                    key={n.label}
                    className="relative py-1"
                    onMouseEnter={() => {
                      setWatchesHovered(true);
                      setHeadwearHovered(false);
                    }}
                  >
                    <Link
                      to={n.to}
                      search={n.search}
                      className={`text-[11px] tracking-[0.22em] uppercase nav-link ${watchesHovered ? '!text-gold' : ''}`}
                    >
                      {n.label}
                    </Link>
                  </div>
                );
              }
              return (
                <Link
                  key={n.label}
                  to={n.to}
                  search={n.search}
                  onMouseEnter={() => {
                    setHeadwearHovered(false);
                    setWatchesHovered(false);
                  }}
                  className="text-[11px] tracking-[0.22em] uppercase nav-link py-1"
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          {/* Headwear Mega Menu panel */}
          {headwearHovered && (
            <div 
              className="absolute left-0 right-0 top-full z-40 border-b border-hairline bg-background shadow-lg transition-all duration-300"
              onMouseEnter={() => {
                setHeadwearHovered(true);
                setWatchesHovered(false);
              }}
              onMouseLeave={() => setHeadwearHovered(false)}
            >
              <div className="mx-auto max-w-[1440px] px-6 py-10">
                <div className="grid grid-cols-8 gap-4">
                  {HEADWEAR_COLLECTIONS.map((c) => (
                    <Link
                      key={c.label}
                      to="/shop"
                      search={{ category: "Headwear", subCategory: c.label }}
                      className="group flex flex-col items-center text-center"
                      onClick={() => setHeadwearHovered(false)}
                    >
                      <div className="aspect-square w-full overflow-hidden bg-ivory border border-hairline transition-all duration-300 group-hover:border-ink">
                        <img 
                          src={c.image} 
                          alt={c.label} 
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <span className="mt-3 text-[10px] font-medium tracking-[0.16em] uppercase text-ink/85 group-hover:text-gold transition-colors duration-200">
                        {c.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Watches Mega Menu panel */}
          {watchesHovered && (
            <div 
              className="absolute left-0 right-0 top-full z-40 border-b border-hairline bg-background shadow-lg transition-all duration-300"
              onMouseEnter={() => {
                setWatchesHovered(true);
                setHeadwearHovered(false);
              }}
              onMouseLeave={() => setWatchesHovered(false)}
            >
              <div className="mx-auto max-w-[1440px] px-6 py-10">
                <div className="grid grid-cols-8 gap-4">
                  {WATCH_COLLECTIONS.map((c) => (
                    <Link
                      key={c.label}
                      to="/shop"
                      search={{ category: "Watches", subCategory: c.label }}
                      className="group flex flex-col items-center text-center"
                      onClick={() => setWatchesHovered(false)}
                    >
                      <div className="aspect-square w-full overflow-hidden bg-ivory border border-hairline transition-all duration-300 group-hover:border-ink">
                        <img 
                          src={c.image} 
                          alt={c.label} 
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <span className="mt-3 text-[10px] font-medium tracking-[0.16em] uppercase text-ink/85 group-hover:text-gold transition-colors duration-200">
                        {c.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/40 lg:hidden" onClick={() => setOpen(false)}>
          <aside
            className="absolute right-0 top-0 h-full w-[82%] max-w-[360px] bg-background p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl tracking-[0.28em] text-gold-secondary">KANZU BAY</span>
              <button aria-label="Close" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>
            <div className="my-6 hairline" />
            <nav className="flex flex-col gap-4">
              {NAV.map((n) => {
                if (n.label === "Headwear") {
                  return (
                    <div key={n.label} className="flex flex-col">
                      <button 
                        onClick={() => setMobileHeadwearOpen(!mobileHeadwearOpen)}
                        className="flex items-center justify-between text-sm tracking-[0.18em] uppercase text-left py-1 text-ink/80"
                      >
                        <span>{n.label}</span>
                        <span className="text-xs">{mobileHeadwearOpen ? "−" : "+"}</span>
                      </button>
                      
                      {mobileHeadwearOpen && (
                        <div className="mt-3 pl-4 grid grid-cols-2 gap-3 pb-3 border-l border-hairline">
                          {HEADWEAR_COLLECTIONS.map((c) => (
                            <Link
                              key={c.label}
                              to="/shop"
                              search={{ category: "Headwear", subCategory: c.label }}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 py-1 group"
                            >
                              <div className="h-8 w-8 overflow-hidden bg-ivory border border-hairline rounded">
                                <img src={c.image} alt={c.label} className="h-full w-full object-cover" />
                              </div>
                              <span className="text-[11px] tracking-wider uppercase text-muted-foreground group-hover:text-ink">
                                {c.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                if (n.label === "Watches") {
                  return (
                    <div key={n.label} className="flex flex-col">
                      <button 
                        onClick={() => setMobileWatchesOpen(!mobileWatchesOpen)}
                        className="flex items-center justify-between text-sm tracking-[0.18em] uppercase text-left py-1 text-ink/80"
                      >
                        <span>{n.label}</span>
                        <span className="text-xs">{mobileWatchesOpen ? "−" : "+"}</span>
                      </button>
                      
                      {mobileWatchesOpen && (
                        <div className="mt-3 pl-4 grid grid-cols-2 gap-3 pb-3 border-l border-hairline">
                          {WATCH_COLLECTIONS.map((c) => (
                            <Link
                              key={c.label}
                              to="/shop"
                              search={{ category: "Watches", subCategory: c.label }}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 py-1 group"
                            >
                              <div className="h-8 w-8 overflow-hidden bg-ivory border border-hairline rounded">
                                <img src={c.image} alt={c.label} className="h-full w-full object-cover" />
                              </div>
                              <span className="text-[11px] tracking-wider uppercase text-muted-foreground group-hover:text-ink">
                                {c.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={n.label}
                    to={n.to}
                    search={n.search}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-[0.18em] uppercase py-1"
                  >
                    {n.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}

function IconButton({ children, label, badge, onClick }: { children: React.ReactNode; label: string; badge?: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
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