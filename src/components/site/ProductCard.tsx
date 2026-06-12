import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatKES } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group">
      <Link to="/products/$slug" params={{ slug: p.slug }} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
          <img
            src={p.image}
            alt={p.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          {p.badge && (
            <span className="absolute left-4 top-4 bg-background px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-ink">
              {p.badge}
            </span>
          )}
          <button
            type="button"
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-background/80 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
          >
            <Heart className="h-4 w-4" strokeWidth={1.25} />
          </button>
          <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="block w-full bg-ink py-3 text-center text-[11px] uppercase tracking-[0.24em] text-white">
              Quick View
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[15px] leading-snug text-ink">{p.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {p.category}{p.region ? ` · ${p.region}` : ""}
            </p>
          </div>
          <p className="whitespace-nowrap text-sm tabular-nums text-ink">{formatKES(p.price)}</p>
        </div>
      </Link>
    </article>
  );
}