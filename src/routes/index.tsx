import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";
import products from "@/assets/products.jpg";
import { ArrowRight, ShieldCheck, FlaskConical, Award, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grovat Healthcare — Health, Life, People" },
      { name: "description", content: "Grovat Healthcare Pvt. Ltd.: research-driven pharmaceutical formulations for a healthier tomorrow." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Announcement bar */}
        <div className="border-b border-border bg-secondary/60">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2 text-xs text-secondary-foreground sm:px-6 lg:px-8">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="truncate">
              <strong className="font-semibold">New launches:</strong> FOLACARE & REGSET Syrup for women's health · MENTOFRESH for mental wellness
            </span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[image:var(--gradient-soft)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center md:py-28 lg:px-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Health · Life · People
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                Crafting medicine for a <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">healthier tomorrow</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Grovat Healthcare Pvt. Ltd. is a research-driven pharmaceutical manufacturer building safe,
                effective and trusted formulations for partners across the globe.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/products">Explore Products <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">About Grovat Healthcare</Link>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
                {[["120+", "Products"], ["25+", "States"], ["10+", "Years"]].map(([k, v]) => (
                  <div key={v}>
                    <div className="text-2xl font-bold text-foreground">{k}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />
              <img
                src={hero}
                alt="Grovat Healthcare pharmaceutical research"
                width={1536}
                height={1024}
                className="relative rounded-[2rem] shadow-[var(--shadow-soft)]"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">WHO-GMP Aligned</div>
                    <div className="text-xs text-muted-foreground">Quality you can trust</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Grovat Healthcare</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Built on science, delivered with care.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: FlaskConical, title: "Research-driven R&D", text: "Every formulation backed by rigorous scientific research and clinical insight." },
              { icon: ShieldCheck, title: "Strict Compliance", text: "Manufacturing aligned with global regulatory standards and quality protocols." },
              { icon: Award, title: "Proven Partners", text: "Trusted by distributors, wholesalers and healthcare institutions worldwide." },
            ].map((f) => (
              <div key={f.title} className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-hero)] text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products preview */}
        <section className="bg-secondary/40 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
            <img src={products} alt="Grovat Healthcare products" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-[var(--shadow-card)]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Portfolio</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">A formulation for every need.</h2>
              <p className="mt-4 text-muted-foreground">
                From women's health and mental wellness to active childhood — explore our growing portfolio
                of trusted brands designed for modern healthcare.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["FOLACARE — Women's Health", "REGSET Syrup — Women's Health", "MENTOFRESH — Anxiety & Depression", "FOLACARE Syrup — Active Childhood"].map((p) => (
                  <li key={p} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="font-medium text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" className="mt-8">
                <Link to="/products">View all products <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-[image:var(--gradient-hero)] p-10 text-primary-foreground md:p-16">
            <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Partner with Grovat Healthcare</h2>
                <p className="mt-3 max-w-xl text-primary-foreground/90">
                  Join distributors, wholesalers and healthcare institutions who trust Grovat Healthcare for quality formulations.
                </p>
              </div>
              <div className="md:justify-self-end">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link to="/contact">Get in Touch <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
