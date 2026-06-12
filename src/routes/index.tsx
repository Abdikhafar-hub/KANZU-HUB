import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Truck, Scissors, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import catSaudi from "@/assets/cat-saudi.jpg";
import catEmirati from "@/assets/cat-emirati.jpg";
import catOmani from "@/assets/cat-omani.jpg";
import catMoroccan from "@/assets/cat-moroccan.jpg";
import catAbaya from "@/assets/cat-abaya.jpg";
import catAcc from "@/assets/cat-accessories.jpg";
import eidBanner from "@/assets/eid-banner.jpg";
import videoPoster from "@/assets/video-poster.jpg";
import ig1 from "@/assets/ig1.jpg";
import ig2 from "@/assets/ig2.jpg";
import ig3 from "@/assets/ig3.jpg";
import ig4 from "@/assets/ig4.jpg";
import ig5 from "@/assets/ig5.jpg";
import ig6 from "@/assets/ig6.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanzu Bay — Where Tradition Meets Class" },
      {
        name: "description",
        content:
          "Luxury Islamic fashion. Premium Kanzu, Jubbas, Thobes, Abayas and accessories crafted with refined fabrics and elegant tailoring.",
      },
      { property: "og:title", content: "Kanzu Bay — Where Tradition Meets Class" },
      { property: "og:description", content: "Premium Islamic fashion crafted in Nairobi." },
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
          alt="Model in pristine white Saudi kanzu"
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
              A new chapter of Islamic dressing. Refined fabrics, considered tailoring,
              quietly luxurious detail.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/shop"
                className="inline-flex h-12 items-center bg-ink px-7 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-foreground"
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
  { label: "Saudi Kanzu", image: catSaudi, large: true },
  { label: "Emirati Kanzu", image: catEmirati },
  { label: "Omani Kanzu", image: catOmani },
  { label: "Moroccan Jubbas", image: catMoroccan },
  { label: "Abayas", image: catAbaya },
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
  cta?: { label: string; to: string };
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
              className="mt-10 inline-flex h-12 items-center bg-ink px-8 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-foreground"
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
    name: "Layla M.",
    place: "Mombasa",
    quote:
      "My noir abaya arrived wrapped beautifully and fits like it was made for me. The gold trim is so subtle and so right.",
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
                className="inline-flex h-12 items-center bg-ink px-7 text-[11px] uppercase tracking-[0.24em] text-white"
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
