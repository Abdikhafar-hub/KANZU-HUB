import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, MessageCircle, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { getProduct, products, formatKES } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Kanzu Bay` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Kanzu Bay` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:type", content: "product" },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `/products/${loaderData.product.slug}` }]
      : [],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Piece not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">This piece is no longer in our atelier.</p>
      <Link to="/shop" className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] link-underline">
        Return to Shop
      </Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData() as ReturnType<typeof getProduct> extends infer T
    ? { product: NonNullable<ReturnType<typeof getProduct>> }
    : never;
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-[1440px] px-6 pt-10">
        <nav className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="px-2">/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span className="px-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-12 md:grid-cols-2 md:gap-20 md:py-16">
        {/* Gallery */}
        <div>
          <div className="aspect-[3/4] overflow-hidden bg-ivory">
            <img src={product.image} alt={product.alt} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[product.image, product.image, product.image, product.image].map((src, i) => (
              <button
                key={i}
                className={`aspect-[3/4] overflow-hidden bg-ivory ${i === 0 ? "ring-1 ring-ink" : ""}`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="md:pt-8">
          {product.badge && (
            <span className="inline-block bg-ivory px-2.5 py-1 text-[10px] uppercase tracking-[0.22em]">
              {product.badge}
            </span>
          )}
          <h1 className="mt-4 font-display text-[34px] leading-tight md:text-[44px]">{product.name}</h1>
          <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {product.category}{product.region ? ` · ${product.region}` : ""}
          </p>
          <p className="mt-6 text-xl tabular-nums text-ink">{formatKES(product.price)}</p>
          <p className="mt-1 text-xs text-muted-foreground">Inclusive of all duties · Free returns within 14 days</p>

          <div className="my-8 hairline" />

          <p className="text-[15px] leading-relaxed text-foreground/80">{product.description}</p>

          {/* Colour */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] uppercase tracking-[0.22em]">Colour</h4>
              <span className="text-xs text-muted-foreground">Selected</span>
            </div>
            <div className="mt-3 flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  aria-label={c}
                  className={`h-9 w-9 rounded-full border ${color === c ? "border-ink ring-2 ring-ink/10 ring-offset-2" : "border-hairline"}`}
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] uppercase tracking-[0.22em]">Size</h4>
              <button className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground link-underline">
                Size Guide
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[52px] border px-4 py-3 text-xs uppercase tracking-[0.14em] ${
                    size === s ? "border-ink bg-ink text-white" : "border-hairline hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8 flex items-center gap-6">
            <div className="inline-flex h-12 items-center border border-hairline">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="grid h-12 w-12 place-items-center">−</button>
              <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="grid h-12 w-12 place-items-center">+</button>
            </div>
            <button className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]">
              <Heart className="h-4 w-4" strokeWidth={1.25} /> Wishlist
            </button>
          </div>

          {/* Actions */}
          <div className="mt-8 grid gap-3">
            <button className="h-13 inline-flex h-13 items-center justify-center bg-ink py-4 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-foreground">
              Add to Bag
            </button>
            <button className="inline-flex items-center justify-center border border-ink py-4 text-[11px] uppercase tracking-[0.24em] text-ink hover:bg-ink hover:text-white">
              Buy Now
            </button>
            <a
              href="https://wa.me/254700000000"
              className="inline-flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-[0.22em] text-ink link-underline"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.25} /> Order via WhatsApp
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground">
            <div className="flex flex-col items-start gap-2">
              <Truck className="h-4 w-4 text-ink" strokeWidth={1.25} />
              Free Nairobi delivery
            </div>
            <div className="flex flex-col items-start gap-2">
              <RefreshCw className="h-4 w-4 text-ink" strokeWidth={1.25} />
              14-day returns
            </div>
            <div className="flex flex-col items-start gap-2">
              <ShieldCheck className="h-4 w-4 text-ink" strokeWidth={1.25} />
              Atelier-finished
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-4xl">You may also love</h2>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}