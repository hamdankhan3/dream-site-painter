import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/coverage", label: "Coverage" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-primary text-primary-foreground font-black text-xl px-3 py-1 rounded-md shadow-glow">
              FAST<span className="ml-1">GO</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `transition-smooth hover:text-primary ${isActive ? "text-primary" : "text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/book" className="hidden sm:block">
              <Button className="bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:opacity-90">
                Book Now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <button
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-md border border-border"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `py-2 font-semibold ${isActive ? "text-primary" : "text-foreground"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/book">
                <Button className="w-full bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="bg-secondary text-secondary-foreground">
        <div className="container py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="bg-gradient-primary text-primary-foreground font-black text-lg px-3 py-1 rounded-md inline-block mb-4">
              FAST<span className="ml-1">GO</span>
            </div>
            <p className="text-sm opacity-70">Fast, safe & reliable bike courier service. Anytime. Anywhere.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Pages</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {links.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-primary">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0343 0951759</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0315 3669551</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Hours</h4>
            <p className="text-sm opacity-80">Open 24 / 7<br />Including holidays</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} FastGo Delivery Service. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
