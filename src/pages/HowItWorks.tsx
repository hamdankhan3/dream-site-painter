import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import riderHandover from "@/assets/rider-handover.jpg";
import { Phone, MapPin, Bike, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Phone, n: "01", title: "Call or Book Online", desc: "Reach us by phone, WhatsApp or our online booking form. Share pickup & drop details." },
  { icon: MapPin, n: "02", title: "We Confirm & Dispatch", desc: "We confirm price and time, then dispatch the nearest available rider in minutes." },
  { icon: Bike, n: "03", title: "Pickup & Transit", desc: "Your package is picked up and tracked live as it travels through the city." },
  { icon: PackageCheck, n: "04", title: "Delivered Safely", desc: "Recipient receives the package. You get a confirmation — every time." },
];

const HowItWorks = () => (
  <Layout>
    <PageHero eyebrow="The process" title="How it" accent="works" subtitle="From booking to delivery in four simple steps." />

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <div className="text-sm font-black text-primary mb-1">STEP {s.n}</div>
                <h3 className="text-2xl font-black mb-1">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
          <img src={riderHandover} alt="Rider handing over a package" loading="lazy" width={1024} height={1024} className="relative rounded-3xl shadow-card w-full" />
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to send something <span className="text-gradient-primary">now?</span></h2>
        <p className="text-muted-foreground mb-8">Average pickup time: under 15 minutes.</p>
        <Link to="/book"><Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90">Book a Delivery</Button></Link>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
