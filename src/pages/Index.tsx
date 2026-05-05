import heroImage from "@/assets/hero-delivery.jpeg";
import { Phone, Zap, ShieldCheck, Clock, MapPin, Package, Bike, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const phones = ["0343 0951759", "0315 3669551"];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="bg-gradient-primary text-primary-foreground font-black text-xl px-3 py-1 rounded-md shadow-glow">FAST<span className="ml-1">GO</span></div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-smooth">Services</a>
            <a href="#how" className="hover:text-primary transition-smooth">How it works</a>
            <a href="#coverage" className="hover:text-primary transition-smooth">Coverage</a>
            <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
          </nav>
          <a href="#contact">
            <Button className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90">
              Book Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Zap className="h-4 w-4" /> Lightning fast delivery
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
              FAST <span className="text-gradient-primary">GO</span>
              <br />
              DELIVERY
              <br />
              <span className="text-primary">SERVICE</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              We deliver your packages safely, anytime, anywhere. Trusted bike couriers ready at your call.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90 text-base">
                  Book Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
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
            <img src={heroImage} alt="FastGo delivery rider on orange bike" className="relative rounded-3xl shadow-card w-full" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">What we do</p>
            <h2 className="text-5xl md:text-6xl font-black">Built for <span className="text-gradient-primary">speed</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: "Parcel Delivery", desc: "Documents, food, gifts — picked up and delivered in record time across the city." },
              { icon: Bike, title: "Bike Courier", desc: "Two-wheel agility lets us beat traffic and hit your deadlines, every time." },
              { icon: MapPin, title: "Live Tracking", desc: "Know exactly where your package is from pickup to handover. Total peace of mind." },
            ].map((s) => (
              <div key={s.title} className="group relative p-8 rounded-2xl bg-card shadow-card hover:shadow-glow transition-smooth border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-black mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">How it works</p>
              <h2 className="text-5xl md:text-6xl font-black mb-8">Three steps. <br/>Done in <span className="text-gradient-primary">minutes.</span></h2>
              <div className="space-y-6">
                {[
                  { n: "01", title: "Call or Book", desc: "Reach us by phone or WhatsApp with pickup & drop details." },
                  { n: "02", title: "We Pick Up", desc: "Our nearest rider is dispatched within minutes." },
                  { n: "03", title: "Delivered Safely", desc: "Your package arrives on time — every time." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5">
                    <div className="text-4xl font-black text-gradient-primary leading-none">{step.n}</div>
                    <div>
                      <h4 className="text-xl font-black mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="coverage" className="relative">
              <div className="bg-gradient-dark text-secondary-foreground rounded-3xl p-10 shadow-card">
                <h3 className="text-3xl font-black mb-6">Why FastGo?</h3>
                <ul className="space-y-4">
                  {[
                    "On-time delivery guarantee",
                    "Trained, verified riders",
                    "City-wide coverage",
                    "Affordable transparent pricing",
                    "24/7 customer support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-black text-primary">5K+</div>
                    <div className="text-xs uppercase tracking-wider opacity-70">Deliveries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-primary">30m</div>
                    <div className="text-xs uppercase tracking-wider opacity-70">Avg time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-primary">24/7</div>
                    <div className="text-xs uppercase tracking-wider opacity-70">Available</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 bg-gradient-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Need it there <span className="text-gradient-primary">now?</span>
            </h2>
            <p className="text-xl opacity-80 mb-10">Pick up the phone. We'll handle the rest.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90 text-lg px-8 py-6">
                    <Phone className="mr-3 h-5 w-5" /> {p}
                  </Button>
                </a>
              ))}
            </div>
            <p className="mt-10 text-sm opacity-60">Available across the city — book 24 hours a day.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-secondary text-secondary-foreground">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary text-primary-foreground font-black text-lg px-3 py-1 rounded-md">FAST<span className="ml-1">GO</span></div>
            <span className="text-sm opacity-70">Delivery Service</span>
          </div>
          <p className="text-sm opacity-60">© {new Date().getFullYear()} FastGo Delivery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
