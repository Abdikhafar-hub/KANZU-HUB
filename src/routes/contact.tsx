import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kanzu Bay" },
      { name: "description", content: "Visit Kanzu Bay at Business Bay Square Mall, Eastleigh, Nairobi. Speak with our team by WhatsApp, phone or email." },
      { property: "og:title", content: "Contact — Kanzu Bay" },
      { property: "og:description", content: "Visit the atelier or speak with our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">We're here to help.</h1>
        <p className="mt-6 text-[15px] leading-relaxed text-foreground/80">
          Speak with a member of our atelier team Monday – Sunday, 10:00 – 20:00 EAT.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-4">
        {[
          { Icon: MapPin, title: "Atelier", body: "BBS Mall, Eastleigh\nNairobi, Kenya" },
          { Icon: MessageCircle, title: "WhatsApp", body: "+254 700 000 000", href: "https://wa.me/254700000000" },
          { Icon: Phone, title: "Call", body: "+254 700 000 000", href: "tel:+254700000000" },
          { Icon: Mail, title: "Email", body: "atelier@kanzubay.com", href: "mailto:atelier@kanzubay.com" },
        ].map(({ Icon, title, body, href }) => {
          const inner = (
            <div className="flex flex-col items-start gap-4 border border-hairline p-8">
              <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
              <h3 className="font-display text-lg">{title}</h3>
              <p className="whitespace-pre-line text-sm text-muted-foreground">{body}</p>
            </div>
          );
          return href ? (
            <a key={title} href={href}>{inner}</a>
          ) : (
            <div key={title}>{inner}</div>
          );
        })}
      </div>

      <form className="mx-auto mt-24 max-w-xl">
        <h2 className="font-display text-3xl">Send a message</h2>
        <div className="mt-10 grid gap-6">
          <Field label="Name" />
          <Field label="Email" type="email" />
          <Field label="Subject" />
          <div>
            <label className="eyebrow">Message</label>
            <textarea rows={5} className="mt-2 w-full border-b border-ink/80 bg-transparent py-3 text-sm focus:outline-none focus:border-ink" />
          </div>
          <button className="mt-4 h-12 bg-ink text-[11px] uppercase tracking-[0.24em] text-white">Send</button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow">{label}</label>
      <input type={type} className="mt-2 w-full border-b border-ink/80 bg-transparent py-3 text-sm focus:outline-none focus:border-ink" />
    </div>
  );
}