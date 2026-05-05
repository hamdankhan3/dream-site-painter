import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import coverageMap from "@/assets/coverage-map.jpg";
import { MapPin, CheckCircle2 } from "lucide-react";

const areas = [
  "Karachi Central", "Clifton", "DHA Phase 1-8", "Gulshan-e-Iqbal", "Gulistan-e-Johar",
  "North Nazimabad", "PECHS", "Saddar", "Korangi", "Malir", "Nazimabad", "Bahadurabad",
  "Federal B Area", "Shahrah-e-Faisal", "Tariq Road", "Garden", "II Chundrigar Road",
];

const Coverage = () => (
  <Layout>
    <PageHero eyebrow="Where we deliver" title="City-wide" accent="coverage" subtitle="From the heart of the city to its outer suburbs — we've got every street covered." />

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
          <img src={coverageMap} alt="FastGo coverage map" loading="lazy" width={1280} height={800} className="relative rounded-3xl shadow-card w-full" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">Reaching every <span className="text-gradient-primary">corner.</span></h2>
          <p className="text-muted-foreground text-lg mb-6">
            Our riders are stationed across the city to ensure ultra-fast pickup times. Don't see your area listed? Just call us — we likely cover it.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {areas.map((a) => (
              <div key={a} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Live coverage</p>
          <h2 className="text-4xl md:text-5xl font-black flex items-center justify-center gap-3"><MapPin className="h-10 w-10 text-primary" /> Find us on the map</h2>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-card border border-border">
          <iframe
            title="FastGo coverage area on Google Maps"
            src="https://www.google.com/maps?q=Karachi&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Coverage;
