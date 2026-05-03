import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Pill } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
              <Pill className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-bold text-foreground">Grovat Healthcare</div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Health · Life · People</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            A research-driven pharmaceutical manufacturing company crafting safe,
            effective and affordable formulations for healthcare partners worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/team" className="hover:text-foreground">Team</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> info@grovathealthcare.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +91-7052711525</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Grovat Healthcare Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
