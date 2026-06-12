import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/eid-banner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kanzu Bay" },
      { name: "description", content: "Kanzu Bay is East Africa's Premium Men's Islamic Fashion House. Premium Saudi Thobes, Emirati Kanzu, Omani Kanzu, Moroccan Jubbas, and Swahili Kanzu." },
      { property: "og:title", content: "About — Kanzu Bay" },
      { property: "og:description", content: "East Africa's Premium Men's Islamic Fashion House." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="eyebrow">The House</p>
        <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
          A quiet study in modern Islamic dress.
        </h1>
        <p className="mt-8 text-[15px] leading-relaxed text-foreground/80">
          Kanzu Bay was founded with a singular intention — to be East Africa's Premium Men's
          Islamic Fashion House. We pair heritage silhouettes like the Emirati Kanzu, Saudi Thobe,
          Omani Dishdasha, and Swahili Kanzu with the discipline of contemporary tailoring,
          sourcing from heritage mills that have spent generations perfecting their craft.
        </p>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-[1440px] gap-0 md:grid-cols-2">
          <img src={heroImg} alt="The Kanzu Bay atelier" loading="lazy" className="h-full w-full object-cover" />
          <div className="flex items-center px-6 py-20 md:px-16">
            <div className="max-w-md">
              <p className="eyebrow">The Atelier</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Cut in Nairobi.</h2>
              <p className="mt-6 text-sm leading-relaxed text-foreground/80">
                Every Kanzu Bay piece is finished by hand in our Eastleigh atelier — from the
                drafting of the pattern to the final pressing. We work in small runs, and we
                refuse to compromise on a single seam.
              </p>
              <Link
                to="/shop"
                className="mt-10 inline-flex h-12 items-center bg-ink px-8 text-[11px] uppercase tracking-[0.24em] text-white"
              >
                Explore the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}