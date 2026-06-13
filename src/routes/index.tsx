import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Truck, Scissors, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/thobe.png";
import catSaudi from "@/assets/cat-saudi.jpeg";
import catEmirati from "@/assets/cat-emirati.jpg";
import catOmani from "@/assets/cat-omani.jpg";
import catMoroccan from "@/assets/cat-moroccan.jpg";
import p4 from "@/assets/p4.png";
import catAcc from "@/assets/cat-accessories.jpg";
import watchImage from "@/assets/watch_arabic_silver.jpg";
import sandalImage from "@/assets/sandal8.webp";
import eidBanner from "@/assets/eid-banner.jpg";
import videoPoster from "@/assets/video-poster.jpg";
import over1 from "@/assets/over1.jpeg";
import bak1 from "@/assets/bak1.jpeg";
import ig1 from "@/assets/ig1.jpg";
import ig2 from "@/assets/ig2.jpg";
import ig3 from "@/assets/ig3.jpg";
import ig4 from "@/assets/ig4.jpg";
import ig5 from "@/assets/ig5.jpg";
import ig6 from "@/assets/ig6.jpg";
import { products, isPremiumProduct } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

// Headwear lifestyle imports
import lifestyleKumma from "@/assets/lifestyle_kumma.png";
import lifestyleKufi from "@/assets/lifestyle_kufi.png";
import lifestyleGhutra from "@/assets/lifestyle_ghutra.png";
import lifestyleShemagh from "@/assets/lifestyle_shemagh.png";
import lifestyleKeffiyeh from "@/assets/lifestyle_keffiyeh.png";

const HEADWEAR_LIFESTYLE = [
  { label: "Omani Kumma", image: lifestyleKumma, subCategory: "Omani Kumma" },
  { label: "White Kufi", image: lifestyleKufi, subCategory: "Kufi Caps" },
  { label: "Ghutra + Agal", image: lifestyleGhutra, subCategory: "Ghutra" },
  { label: "Red Shemagh", image: lifestyleShemagh, subCategory: "Shemagh" },
  { label: "Keffiyeh", image: lifestyleKeffiyeh, subCategory: "Keffiyeh" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanzu Bay — East Africa's Premium Men's Islamic Fashion House" },
      {
        name: "description",
        content:
          "East Africa's Premium Men's Islamic Fashion House. Premium Saudi Thobes, Emirati Kanzu, Omani Kanzu, Swahili Kanzu, perfumes, and lifestyle accessories.",
      },
      { property: "og:title", content: "Kanzu Bay — East Africa's Premium Men's Islamic Fashion House" },
      { property: "og:description", content: "Premium Men's Islamic fashion crafted in Nairobi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <EidBanner />
      <BestSellers />
      <CeremonialOvertopsSection />
      <TraditionalHeadwearSection />
      <IslamicEssentialsSection />
      <TraditionalAccessoriesSection />
      <CompleteTheLook />
      <WhyKanzuBay />
      <VideoSection />
      <Reviews />
      <InstagramSection />
      <LocationSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[88vh] min-h-[640px] w-full overflow-hidden bg-ivory">
        <img
          src={heroImg}
          alt="Model in premium white Emirati thobe"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/10 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 md:px-12">
          <div className="max-w-xl">
            <p className="eyebrow text-ink/70">The Autumn Edit · 2026</p>
            <h1 className="mt-6 font-display text-[44px] leading-[1.02] tracking-tight text-ink md:text-[64px] lg:text-[76px]">
              Where Tradition<br /> Meets Class.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/80">
              A new chapter of premium men's Islamic fashion. Refined fabrics, considered tailoring,
              quietly luxurious detail.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/shop"
                className="inline-flex h-12 items-center bg-ink px-7 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-gold hover:text-ink transition-colors duration-200"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="inline-flex h-12 items-center border border-ink px-7 text-[11px] uppercase tracking-[0.24em] text-ink hover:bg-ink hover:text-white"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-ink/60">
          Scroll
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = [
  { label: "Thobes", image: catSaudi, large: true },
  { label: "Overtops", image: over1 },
  { label: "Men's Sandals", image: sandalImage },
  { label: "Watches", image: watchImage },
  { label: "Headwear", image: catOmani },
  { label: "Accessories", image: catAcc },
];

function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
      <SectionHeader eyebrow="The Collections" title="Featured Categories" />
      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
        {CATEGORIES.map((c) => (
          <Link
            key={c.label}
            to="/shop"
            search={{ category: c.label }}
            className="group relative block aspect-[3/4] overflow-hidden bg-ivory"
          >
            <img
              src={c.image}
              alt={c.label}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
              <h3 className="font-display text-xl text-white drop-shadow-md md:text-2xl">
                {c.label}
              </h3>
              <span className="hidden text-[10px] uppercase tracking-[0.24em] text-white/90 md:inline">
                Shop →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  align = "center",
  cta,
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
  cta?: { label: string; to: string; search?: Record<string, string> };
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      } md:flex-row md:items-end md:justify-between`}
    >
      <div className={align === "center" ? "mx-auto md:mx-0" : ""}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-[32px] leading-tight tracking-tight md:text-[44px]">
          {title}
        </h2>
      </div>
      {cta && (
        <Link
          to={cta.to}
          search={cta.search}
          className="text-[11px] uppercase tracking-[0.24em] text-ink link-underline"
        >
          {cta.label} →
        </Link>
      )}
    </div>
  );
}

function NewArrivals() {
  const items = products.slice(0, 4);
  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Just Landed"
          title="New Arrivals"
          align="left"
          cta={{ label: "View All", to: "/shop" }}
        />
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
          {items.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  const items = products.slice(2, 6);
  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Most Loved"
          title="Best Sellers"
          align="left"
          cta={{ label: "Shop Best Sellers", to: "/shop" }}
        />
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
          {items.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function CeremonialOvertopsSection() {
  const items = products.filter((p) => p.category === "Overtops").slice(0, 4);
  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Premium Collection"
          title="Ceremonial Overtops"
          align="left"
          cta={{ label: "Shop Overtops", to: "/shop", search: { category: "Overtops" } }}
        />
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          For Eid, weddings, Jummah and distinguished occasions.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
          {items.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function TraditionalHeadwearSection() {
  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Complete Your Look"
          title="Traditional Headwear Collection"
          align="center"
          cta={{ label: "Shop Headwear", to: "/shop", search: { category: "Headwear" } }}
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 md:gap-6">
          {HEADWEAR_LIFESTYLE.map((h) => (
            <Link
              key={h.label}
              to="/shop"
              search={{ category: "Headwear", subCategory: h.subCategory }}
              className="group relative block aspect-[3/4] overflow-hidden bg-ivory border border-hairline"
            >
              <img
                src={h.image}
                alt={h.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col p-5 md:p-6 text-white text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Collection</span>
                <h3 className="mt-1 font-display text-lg leading-tight md:text-xl">
                  {h.label}
                </h3>
                <span className="mt-3 text-[10px] uppercase tracking-[0.24em] text-gold opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TraditionalAccessoriesSection() {
  const slugs = ["royal-omani-kumma", "sultan-royal-gold", "olive-wood-tasbih", "sultan-bakora"];
  const items = products.filter((p) => slugs.includes(p.slug));
  const sortedItems = slugs.map(slug => items.find(p => p.slug === slug)).filter(Boolean) as typeof products;

  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Curated Essentials"
          title="Traditional Accessories"
          align="left"
          cta={{ label: "Shop Accessories", to: "/shop", search: { category: "Accessories" } }}
        />
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Timeless pieces representing heritage, prestige, and distinction for the modern gentleman.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
          {sortedItems.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function IslamicEssentialsSection() {
  const essentials = [
    {
      title: "Handcrafted Tasbih",
      description: "Olive Wood, Sandalwood, and natural gemstone beads designed for contemplation.",
      image: ig4,
      to: "/shop" as const,
      search: { category: "Tasbih" },
      label: "Explore Tasbih"
    },
    {
      title: "Omani Kumma",
      description: "Authentic hand-embroidered caps representing coastal Swahili and Omani heritage.",
      image: lifestyleKumma,
      to: "/shop" as const,
      search: { category: "Headwear", subCategory: "Omani Kumma" },
      label: "Explore Kummas"
    },
    {
      title: "Traditional Canes",
      description: "Fine, hand-carved hardwood Bakora canes representing East African heritage and authority.",
      image: bak1,
      to: "/shop" as const,
      search: { category: "Traditional Canes" },
      label: "Explore Canes"
    },
    {
      title: "Prayer Mats",
      description: "Plush, high-density woven tapestry designed for daily devotion.",
      image: ig1,
      to: "/shop" as const,
      search: { category: "Prayer Mats" },
      label: "Explore Mats"
    }
  ];

  return (
    <section className="border-t border-hairline bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Faith & Tradition</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-white">Islamic Essentials</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            A curated collection of spiritual and cultural accompaniments. Each piece represents heritage, devotion, and refined Islamic craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {essentials.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              search={item.search}
              className="group relative block aspect-[3/4] overflow-hidden bg-ink/40 border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.08] opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl text-white">{item.title}</h3>
                <p className="mt-2.5 text-xs text-white/70 leading-relaxed font-sans line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
                  {item.label} <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompleteTheLook() {
  const outfitSlugs = [
    "swahili-kanzu-mombasa",
    "royal-omani-kumma",
    "olive-wood-tasbih",
    "omani-royal-heritage-tan",
  ];
  const outfitItems = products.filter((p) => outfitSlugs.includes(p.slug));

  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Curated Ensemble"
          title="Complete The Look"
          align="left"
        />
        
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_400px]">
          {/* Grid of the 4 items */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8 lg:grid-cols-4">
            {outfitItems.map((p) => (
              <div key={p.slug} className="flex flex-col">
                <ProductCard p={p} />
                <span className="mt-2 text-[10px] text-muted-foreground uppercase tracking-wider">
                  {p.category === "Watches" ? "Luxury Accessory" : p.category}
                </span>
              </div>
            ))}
          </div>

          {/* Bundle purchase summary card */}
          <div className="border border-hairline bg-ivory p-6 md:p-8 flex flex-col justify-between h-fit">
            <div>
              <p className="eyebrow text-gold">The Friday / Eid Ensemble</p>
              <h3 className="mt-2 font-display text-2xl">Complete Look</h3>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                A carefully curated outfit composition matching our Mombasa White Linen Kanzu with hand-knit detailing, an embroidered Royal Omani Kumma, our premium handcrafted Jerusalem Olive Wood Tasbih, and hand-crafted traditional Arabic leather sandals.
              </p>
              <div className="my-6 hairline" />
              <ul className="space-y-3">
                {outfitItems.map((p) => (
                  <li key={p.slug} className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground truncate max-w-[220px]">{p.name}</span>
                    <span className="text-[10px] text-gold uppercase tracking-wider font-medium">
                      {p.category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="my-6 hairline" />
              <a
                href={`https://wa.me/254700000000?text=${encodeURIComponent(
                  `Hello Kanzu Bay, I would like to inquire about the Friday / Eid Ensemble:\n- Mombasa White Linen Kanzu\n- Royal Omani Kumma\n- Jerusalem Olive Wood Tasbih\n- Omani Royal Heritage Tan Sandals`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full text-center bg-ink py-4 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-gold hover:text-ink transition-colors duration-200 font-medium"
              >
                Inquire Ensemble
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EidBanner() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-0 md:grid-cols-2">
        <div className="relative aspect-[5/6] md:aspect-auto">
          <img src={eidBanner} alt="Eid campaign" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-6 py-20 md:px-16">
          <div className="max-w-md">
            <p className="eyebrow">Eid 2026 · Campaign</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">
              An occasion deserves its own silhouette.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/80">
              The Eid Edit is a study in restraint — fluid white, midnight navy,
              and the slow shimmer of antique gold. Limited pieces, made to order.
            </p>
            <Link
              to="/shop"
              className="mt-10 inline-flex h-12 items-center bg-ink px-8 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-gold hover:text-ink transition-colors duration-200"
            >
              Discover the Edit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyKanzuBay() {
  const items = [
    {
      icon: Sparkles,
      title: "Premium Fabrics",
      body: "Japanese poplins, Italian crepes and Egyptian cottons sourced from heritage mills.",
    },
    {
      icon: Scissors,
      title: "Elegant Tailoring",
      body: "Each piece is cut and finished in our Nairobi atelier by master tailors.",
    },
    {
      icon: Truck,
      title: "Considered Delivery",
      body: "Complimentary Nairobi delivery and discreet packaging on every order.",
    },
  ];
  return (
    <section className="border-y border-hairline">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-3">
        {items.map((i, idx) => (
          <div
            key={i.title}
            className={`flex flex-col items-center px-8 py-16 text-center md:px-12 md:py-20 ${
              idx > 0 ? "md:border-l md:border-hairline" : ""
            } ${idx > 0 ? "border-t border-hairline md:border-t-0" : ""}`}
          >
            <i.icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
            <h3 className="mt-6 font-display text-xl">{i.title}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {i.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-ink">
        <img
          src={videoPoster}
          alt="The Kanzu Bay film"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-6 pb-16 md:px-12 md:pb-24">
          <div className="max-w-lg text-white">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/80">The Film</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">A study in stillness.</h2>
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              Watch the Autumn 2026 collection unfold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Amir H.",
    place: "Nairobi",
    quote:
      "The cut, the fabric, the finish — everything about my Saudi Kanzu feels considered. It has replaced everything else in my wardrobe.",
  },
  {
    name: "Suleiman O.",
    place: "Mombasa",
    quote:
      "The Swahili Kanzu from Kanzu Bay has an exceptional drape and the hand-knit collar detailing is pure class. Perfect for Friday prayers.",
  },
  {
    name: "Yusuf K.",
    place: "Dubai",
    quote:
      "I have ordered three pieces. Quality on par with houses I shop in Dubai, at a much fairer price. Quietly impressed.",
  },
];

function Reviews() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        <SectionHeader eyebrow="The House Diary" title="From Our Clients" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="bg-background p-8 md:p-10">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-[19px] leading-snug text-ink">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {r.name} · {r.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const imgs = [ig1, ig2, ig3, ig4, ig5, ig6];
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="@kanzubay"
        title="From the Atelier"
        cta={{ label: "Follow on Instagram", to: "/" }}
      />
      <div className="mt-14 grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3">
        {imgs.map((src, i) => (
          <a key={i} href="#" className="group block aspect-square overflow-hidden bg-ivory">
            <img
              src={src}
              alt={`Instagram post ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-2">
        <div className="flex items-center px-6 py-20 md:px-16">
          <div className="max-w-md">
            <p className="eyebrow">Visit the Atelier</p>
            <h2 className="mt-4 font-display text-4xl">Business Bay Square Mall</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Business Bay Square (BBS) Mall, Eastleigh, Nairobi.<br />
              Open Monday – Sunday, 10:00 – 20:00 EAT.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://wa.me/254700000000"
                className="inline-flex h-12 items-center bg-ink px-7 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-gold hover:text-ink transition-colors duration-200"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+254700000000"
                className="inline-flex h-12 items-center border border-ink px-7 text-[11px] uppercase tracking-[0.24em] text-ink hover:bg-ink hover:text-white"
              >
                Call the Store
              </a>
            </div>
          </div>
        </div>
        <div className="h-[420px] w-full md:h-auto">
          <iframe
            title="Kanzu Bay — BBS Mall"
            src="https://www.google.com/maps?q=Business+Bay+Square+Mall+Eastleigh+Nairobi&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
