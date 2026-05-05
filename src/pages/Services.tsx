import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Package, Bike, MapPin, Building2, Pizza, FileText, Gift, Truck, CheckCircle2 } from "lucide-react";
import parcels from "@/assets/parcels.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Package, title: "Parcel Delivery", desc: "Same-day pickup and drop for parcels of any size, across the city." },
  { icon: FileText, title: "Document Courier", desc: "Confidential, urgent documents delivered safely with proof of receipt." },
  { icon: Pizza, title: "Food Delivery", desc: "Hot food picked from your favorite restaurants and delivered fresh." },
  { icon: Gift, title: "Gift & Surprise Delivery", desc: "Send flowers, cakes and gifts on time for the moments that matter." },
  { icon: Building2, title: "Business / B2B", desc: "Recurring delivery solutions for shops, e-commerce stores and offices." },
  { icon: Truck, title: "Bulk Movement", desc: "Multiple drops on a single route — optimized to save you time and cost." },
  { icon: Bike, title: "On-demand Bike Courier", desc: "A nearest-rider model that gets to you within minutes." },
  { icon: MapPin, title: "Live Tracking", desc: "Real-time location updates from pickup to delivery." },
];

const Services = () => (
  <Layout>
    <PageHero eyebrow="What we offer" title="Our" accent="Services" subtitle="A complete suite of fast, reliable delivery solutions for individuals and businesses." />

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center mb-16">
        <img src={parcels} alt="FastGo branded parcels" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-card w-full" />
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">Anything you need moved — <span className="text-gradient-primary">we move it.</span></h2>
          <p className="text-muted-foreground text-lg mb-6">From small envelopes to bulk parcels, our riders handle it with care and speed. Every delivery is tracked, insured and confirmed.</p>
          <ul className="space-y-3">
            {["Same-day & express options", "Cash on delivery support", "Fragile & sensitive handling", "Photo proof of delivery"].map((i) => (
              <li key={i} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> <span className="font-medium">{i}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-glow transition-smooth border border-border">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-black mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="container text-center mt-16">
        <Link to="/book"><Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90">Book a delivery</Button></Link>
      </div>
    </section>
  </Layout>
);

export default Services;
