import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Heart, MessageCircle, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { getProduct, products, isPremiumProduct } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { useInquiry } from "@/context/InquiryContext";

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
  const [activeImage, setActiveImage] = useState(product.image);
  const { openInquiryModal, addToInquiryList } = useInquiry();

  useEffect(() => {
    setActiveImage(product.image);
    setColor(product.colors[0]);
    setSize(product.sizes[0]);
  }, [product]);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const pairsWell = products.filter((p) => product.pairsWellWith?.includes(p.slug));

  const galleryImages = (product as any).images || [product.image, product.image, product.image, product.image];

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
            <img src={activeImage} alt={product.alt} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {galleryImages.map((src: string, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImage(src)}
                className={`aspect-[3/4] overflow-hidden bg-ivory transition-all ${activeImage === src ? "ring-1 ring-ink opacity-100 scale-[0.98]" : "opacity-70 hover:opacity-100"}`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="md:pt-8">
          {product.badge && (
            <span className="inline-block bg-transparent border border-gold px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-gold">
              {product.badge}
            </span>
          )}
          <h1 className="mt-4 font-display text-[34px] leading-tight md:text-[44px]">{product.name}</h1>
          <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {product.category}
          </p>
          <button
            type="button"
            onClick={() => openInquiryModal(product)}
            className="mt-6 bg-ink px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-white hover:bg-gold hover:text-ink transition-colors duration-200 font-medium"
          >
            Inquire Price
          </button>
          <p className="mt-2 text-[10px] text-muted-foreground uppercase tracking-wider">Pricing provided dynamically upon boutique request</p>

          <div className="my-8 hairline" />

          <p className="text-[15px] leading-relaxed text-foreground/80">{product.description}</p>

          {/* Specifications for Watches */}
          {product.category === "Watches" && product.specs && (
            <div className="mt-8 border-t border-hairline pt-6">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-ink font-semibold">Specifications</h4>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
                {product.specs.caseSize && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Case Size</span>
                    <span className="font-medium text-ink">{product.specs.caseSize}</span>
                  </div>
                )}
                {product.specs.strapMaterial && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Strap</span>
                    <span className="font-medium text-ink">{product.specs.strapMaterial}</span>
                  </div>
                )}
                {product.specs.movement && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Movement</span>
                    <span className="font-medium text-ink">{product.specs.movement}</span>
                  </div>
                )}
                {product.specs.waterResistance && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Water Resistance</span>
                    <span className="font-medium text-ink">{product.specs.waterResistance}</span>
                  </div>
                )}
              </div>
              {product.specs.stylingRecommendations && (
                <div className="mt-4 text-xs text-muted-foreground leading-relaxed italic bg-ivory p-4 border border-hairline rounded">
                  <strong>Styling Note:</strong> {product.specs.stylingRecommendations}
                </div>
              )}
            </div>
          )}

          {/* Specifications for Sandals */}
          {product.category === "Men's Sandals" && product.specs && (
            <div className="mt-8 border-t border-hairline pt-6">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-ink font-semibold">Specifications</h4>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
                {product.specs.material && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium text-ink">{product.specs.material}</span>
                  </div>
                )}
                {product.specs.leatherType && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Leather Type</span>
                    <span className="font-medium text-ink">{product.specs.leatherType}</span>
                  </div>
                )}
                {product.specs.soleType && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Sole Type</span>
                    <span className="font-medium text-ink">{product.specs.soleType}</span>
                  </div>
                )}
                {product.specs.comfort && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Comfort</span>
                    <span className="font-medium text-ink">{product.specs.comfort}</span>
                  </div>
                )}
              </div>
              {product.specs.stylingRecommendations && (
                <div className="mt-4 text-xs text-muted-foreground leading-relaxed italic bg-ivory p-4 border border-hairline rounded">
                  <strong>Styling Note:</strong> {product.specs.stylingRecommendations}
                </div>
              )}
            </div>
          )}

          {/* Specifications for Overtops */}
          {product.category === "Overtops" && product.specs && (
            <div className="mt-8 border-t border-hairline pt-6">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-ink font-semibold">Ceremonial Details</h4>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
                {product.specs.fabricType && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Fabric Type</span>
                    <span className="font-medium text-ink">{product.specs.fabricType}</span>
                  </div>
                )}
                {product.specs.trimColor && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Trim & Embroidery</span>
                    <span className="font-medium text-ink">{product.specs.trimColor}</span>
                  </div>
                )}
                {product.specs.occasion && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Occasion</span>
                    <span className="font-medium text-ink">{product.specs.occasion}</span>
                  </div>
                )}
                {product.specs.careInstructions && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Care</span>
                    <span className="font-medium text-ink">{product.specs.careInstructions}</span>
                  </div>
                )}
              </div>
              {product.specs.recommendedThobePairing && (
                <div className="mt-4 text-xs text-muted-foreground leading-relaxed italic bg-ivory p-4 border border-hairline rounded">
                  <strong>Recommended Thobe Pairing:</strong> {product.specs.recommendedThobePairing}
                </div>
              )}
            </div>
          )}

          {/* Specifications for Traditional Canes */}
          {product.category === "Traditional Canes" && product.specs && (
            <div className="mt-8 border-t border-hairline pt-6">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-ink font-semibold">Cane Craftsmanship</h4>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
                {product.specs.material && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium text-ink">{product.specs.material}</span>
                  </div>
                )}
                {product.specs.handleStyle && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Handle Style</span>
                    <span className="font-medium text-ink">{product.specs.handleStyle}</span>
                  </div>
                )}
                {product.specs.finish && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Finish</span>
                    <span className="font-medium text-ink">{product.specs.finish}</span>
                  </div>
                )}
                {product.specs.length && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Length</span>
                    <span className="font-medium text-ink">{product.specs.length}</span>
                  </div>
                )}
                {product.specs.origin && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Origin</span>
                    <span className="font-medium text-ink">{product.specs.origin}</span>
                  </div>
                )}
              </div>
              {product.specs.stylingRecommendations && (
                <div className="mt-4 text-xs text-muted-foreground leading-relaxed italic bg-ivory p-4 border border-hairline rounded">
                  <strong>Styling Note:</strong> {product.specs.stylingRecommendations}
                </div>
              )}
            </div>
          )}

          {/* Specifications for Undergarments */}
          {product.category === "Undergarments" && product.specs && (
            <div className="mt-8 border-t border-hairline pt-6">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-ink font-semibold">Atelier Undergarment Specifications</h4>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
                {product.specs.fabricComposition && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Composition</span>
                    <span className="font-medium text-ink">{product.specs.fabricComposition}</span>
                  </div>
                )}
                {product.specs.breathability && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Breathability</span>
                    <span className="font-medium text-ink">{product.specs.breathability}</span>
                  </div>
                )}
                {product.specs.comfortLevel && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Comfort Level</span>
                    <span className="font-medium text-ink">{product.specs.comfortLevel}</span>
                  </div>
                )}
                {product.specs.climateSuitability && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Climate Suitability</span>
                    <span className="font-medium text-ink">{product.specs.climateSuitability}</span>
                  </div>
                )}
                {product.specs.washingInstructions && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Washing Care</span>
                    <span className="font-medium text-ink">{product.specs.washingInstructions}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Specifications for Tasbih */}
          {product.category === "Tasbih" && product.specs && (
            <div className="mt-8 border-t border-hairline pt-6">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-ink font-semibold">Tasbih Specifications & Craft</h4>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
                {product.specs.beadMaterial && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Bead Material</span>
                    <span className="font-medium text-ink">{product.specs.beadMaterial}</span>
                  </div>
                )}
                {product.specs.beadCount && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Bead Count</span>
                    <span className="font-medium text-ink">{product.specs.beadCount} Beads</span>
                  </div>
                )}
                {product.specs.isHandcrafted !== undefined && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Craftsmanship</span>
                    <span className="font-medium text-ink">{product.specs.isHandcrafted ? "Masterfully Handcrafted" : "Refined Precision Craft"}</span>
                  </div>
                )}
                {product.specs.origin && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Origin</span>
                    <span className="font-medium text-ink">{product.specs.origin}</span>
                  </div>
                )}
                {product.specs.packagingDetails && (
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-muted-foreground">Packaging</span>
                    <span className="font-medium text-ink">{product.specs.packagingDetails}</span>
                  </div>
                )}
              </div>
            </div>
          )}




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
                  className={`h-9 w-9 rounded-full border transition-all ${color === c ? "border-ink ring-2 ring-ink/10 ring-offset-2 scale-[1.05]" : "border-hairline hover:border-ink"}`}
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
            <button 
              onClick={() => addToInquiryList(product, color, size, qty)}
              className="h-13 inline-flex items-center justify-center bg-ink py-4 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-gold hover:text-ink transition-colors duration-200 font-medium"
            >
              Add to Inquiry List
            </button>
            <button 
              onClick={() => openInquiryModal(product)}
              className="inline-flex items-center justify-center border border-ink py-4 text-[11px] uppercase tracking-[0.24em] text-ink hover:bg-ink hover:text-white transition-colors duration-200 font-medium"
            >
              Inquire Price
            </button>
            <a
              href={`https://wa.me/254700000000?text=${encodeURIComponent(
                `Hello Kanzu Bay, I would like to inquire about the ${product.name} (Color: ${color}, Size: ${size}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-[0.22em] text-ink link-underline hover:text-gold font-medium"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.25} /> Inquire via WhatsApp
            </a>
          </div>

          {/* Complete Your Collection (Premium Kanzu Pages) */}
          {(product.category === "Saudi Thobes" ||
            product.category === "Emirati Kanzu" ||
            product.category === "Omani Kanzu" ||
            product.category === "Swahili Kanzu") && (
            <div className="mt-8 border-t border-hairline pt-6">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-ink font-semibold flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 bg-gold rounded-full"></span>
                Complete Your Collection
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs text-ink/80">
                <li className="flex items-center gap-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>Premium White Emirati Kanzu</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>Royal Omani Kumma (Hand-embroidered)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>Royal Oud Tansoor (Eau de Parfum)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>Premium Handcrafted Tasbih</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>Classic Full-Grain Arabic Sandals</span>
                </li>
              </ul>
            </div>
          )}

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

      {/* Pairs Well With */}
      {pairsWell.length > 0 && (
        <section className="border-t border-hairline bg-ivory">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28">
            <p className="eyebrow text-center">Curated Ensemble</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-center">Pairs Well With</h2>
            <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-3 justify-center max-w-5xl mx-auto">
              {pairsWell.map((p) => (
                <div key={p.slug} className="flex flex-col">
                  <ProductCard p={p} />
                  <span className="mt-2 text-[10px] text-muted-foreground uppercase tracking-wider text-center">
                    {p.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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