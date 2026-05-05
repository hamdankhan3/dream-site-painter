import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-delivery.jpeg";
import courierCity from "@/assets/courier-city.jpg";
import riderHandover from "@/assets/rider-handover.jpg";
import { Phone, Zap, ShieldCheck, Clock, MapPin, Package, Bike, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const phones = ["0343 0951759", "0315 3669551"];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-12 pb-20 bg-gradient-hero">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Zap className="h-4 w-4" /> Lightning fast delivery
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
              FAST <span className="text-gradient-primary">GO</span>
              <br />DELIVERY<br />
              <span className="text-primary">SERVICE</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              We deliver your packages safely, anytime, anywhere. Trusted bike couriers ready at your call.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90 text-base">
                  Book Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`tel:${phones[0].replace(/\s/g, "")}`}>
                <Button size="lg" variant="outline" className="rounded-full border-2 font-bold text-base">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
              {[
                { icon: Zap, label: "Fast Delivery" },
                { icon: ShieldCheck, label: "Safe & Secure" },
                { icon: Clock, label: "Anytime Anywhere" },
              ].map((f) => (
                <div key={f.label} className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-card shadow-card">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <f.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-bold">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
            <img src={heroImage} alt="FastGo delivery rider on orange bike" className="relative rounded-3xl shadow-card w-full" width={1280} height={720} />
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our riders in action</p>
            <h2 className="text-4xl md:text-5xl font-black">Speed meets <span className="text-gradient-primary">reliability</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img src={courierCity} alt="Courier speeding through city" loading="lazy" width={1280} height={800} className="rounded-3xl shadow-card w-full h-72 object-cover" />
            <img src={riderHandover} alt="Rider handing over a package" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-card w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">What we do</p>
            <h2 className="text-5xl md:text-6xl font-black">Built for <span className="text-gradient-primary">speed</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: "Parcel Delivery", desc: "Documents, food, gifts — picked up and delivered in record time." },
              { icon: Bike, title: "Bike Courier", desc: "Two-wheel agility lets us beat traffic and hit deadlines." },
              { icon: MapPin, title: "Live Tracking", desc: "Know exactly where your package is from pickup to handover." },
            ].map((s) => (
              <div key={s.title} className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-glow transition-smooth border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-black mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services"><Button variant="outline" className="rounded-full font-bold">See all services <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Loved by customers</p>
            <h2 className="text-5xl font-black">5-star <span className="text-gradient-primary">service</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ayesha K.", text: "Delivered my documents across the city in under 30 minutes. Incredible." },
              { name: "Bilal R.", text: "Reliable, on-time and friendly riders. My go-to courier service." },
              { name: "Sana M.", text: "Affordable, fast, and they actually pick up the phone. 10/10." },
            ].map((t) => (
              <div key={t.name} className="p-8 rounded-2xl bg-card shadow-card border border-border">
                <div className="flex gap-1 mb-4 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mb-6 text-foreground">"{t.text}"</p>
                <div className="font-bold">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container relative text-center max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-black mb-6">Need it there <span className="text-gradient-primary">now?</span></h2>
          <p className="text-xl opacity-80 mb-10">Pick up the phone. We'll handle the rest.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            {phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>
                <Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90 text-lg px-8 py-6">
                  <Phone className="mr-3 h-5 w-5" /> {p}
                </Button>
              </a>
            ))}
          </div>
          <Link to="/book"><Button variant="outline" size="lg" className="rounded-full border-2 font-bold bg-transparent text-secondary-foreground border-white/30 hover:bg-white/10">Book online <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
