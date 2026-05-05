import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";

const services = ["Parcel", "Document", "Food", "Gift", "Business / B2B", "Other"];

const BookNow = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Layout>
        <section className="py-32">
          <div className="container max-w-xl text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
              <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-black mb-4">Booking <span className="text-gradient-primary">received!</span></h1>
            <p className="text-muted-foreground text-lg mb-8">A FastGo agent will call you within 5 minutes to confirm pickup details.</p>
            <a href="tel:03430951759"><Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow"><Phone className="mr-2 h-5 w-5" /> Call us now</Button></a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero eyebrow="Schedule a pickup" title="Book a" accent="Delivery" subtitle="Fill in the details below and we'll dispatch the nearest rider." />

      <section className="py-20">
        <div className="container max-w-3xl">
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="bg-card rounded-3xl shadow-card border border-border p-8 md:p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Your Name</label>
                <input required className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Phone Number</label>
                <input required type="tel" className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Service Type</label>
              <select required className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select a service</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Pickup Address</label>
                <input required className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Drop-off Address</label>
                <input required className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Pickup Date</label>
                <input required type="date" className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Pickup Time</label>
                <input required type="time" className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Notes (optional)</label>
              <textarea rows={4} placeholder="Anything we should know about the package?" className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <Button type="submit" size="lg" className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90 w-full">
              Book My Delivery
            </Button>
            <p className="text-xs text-muted-foreground text-center">By booking you agree to receive a confirmation call from our team.</p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default BookNow;
