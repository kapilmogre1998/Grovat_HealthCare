import { Link } from "@tanstack/react-router";
import { Menu, X, Pill, UserCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
            <Pill className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight text-foreground">Grovat Healthcare</div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">We care for you</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/member-login"
            className="group relative inline-flex h-9 items-center gap-2 overflow-hidden rounded-full border border-primary/20 bg-secondary/60 pl-1 pr-4 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] transition-all hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground transition-transform group-hover:scale-110">
              <UserCircle2 className="h-4 w-4" />
            </span>
            <span>Member Login</span>
            <span className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] opacity-0 transition-opacity group-hover:opacity-10" />
          </Link>
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/member-login"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center gap-2 rounded-full border border-primary/20 bg-secondary/60 pl-1 pr-4 text-sm font-semibold text-foreground shadow-[var(--shadow-card)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground">
                <UserCircle2 className="h-4 w-4" />
              </span>
              Member Login
            </Link>
            <Button asChild variant="hero" size="sm" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Get in Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
