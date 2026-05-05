import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <Layout>
    <PageHero eyebrow="Get in touch" title="Contact" accent="us" subtitle="We're available 24/7. Call, WhatsApp or stop by — whichever works for you." />

    <section className="py-20">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { icon: Phone, title: "Call Us", value: "0343 0951759", href: "tel:03430951759" },
          { icon: Phone, title: "Alt. Number", value: "0315 3669551", href: "tel:03153669551" },
          { icon: MessageCircle, title: "WhatsApp", value: "Chat now", href: "https://wa.me/923430951759" },
          { icon: Clock, title: "Hours", value: "Open 24 / 7" },
        ].map((c) => (
          <a key={c.title} href={c.href || "#"} className="block p-6 rounded-2xl bg-card shadow-card hover:shadow-glow transition-smooth border border-border text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
              <c.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">{c.title}</div>
            <div className="font-black text-lg">{c.value}</div>
          </a>
        ))}
      </div>

      <div className="container grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-black mb-6">Send us a <span className="text-gradient-primary">message</span></h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you shortly."); }}>
            <input required placeholder="Your name" className="w-full px-5 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
            <input required type="tel" placeholder="Phone number" className="w-full px-5 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" placeholder="Email (optional)" className="w-full px-5 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
            <textarea required rows={5} placeholder="How can we help?" className="w-full px-5 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
            <Button type="submit" size="lg" className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90 w-full">Send message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-4xl font-black mb-6">Find us on the <span className="text-gradient-primary">map</span></h2>
          <div className="rounded-3xl overflow-hidden shadow-card border border-border h-[420px]">
            <iframe
              title="FastGo location on Google Maps"
              src="https://www.google.com/maps?q=Karachi&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex items-start gap-3 mt-6 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <span>Serving across Karachi & surrounding areas. Pickup available city-wide.</span>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
