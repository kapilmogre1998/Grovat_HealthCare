import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import facility from "@/assets/facility.jpg";
import { ShieldCheck, FlaskConical, Globe2, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Grovat Healthcare Pvt. Ltd." }, { name: "description", content: "Learn about Grovat Healthcare, a research-driven pharmaceutical manufacturing company." }] }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Quality First", text: "WHO-GMP aligned processes and rigorous QA at every stage." },
  { icon: FlaskConical, title: "Research Driven", text: "Formulations grounded in clinical evidence and innovation." },
  { icon: Globe2, title: "Global Reach", text: "Partners across distributors, wholesalers and institutions." },
  { icon: Heart, title: "Patient Centric", text: "Every product is built around real-world patient outcomes." },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[image:var(--gradient-soft)]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Grovat Healthcare</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Building trust in healthcare through quality formulations.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Grovat Healthcare Pvt. Ltd. is a leading pharmaceutical manufacturing company dedicated to producing
              high-quality, research-driven medicines for partners worldwide.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <img src={facility} alt="Grovat Healthcare manufacturing facility" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-[var(--shadow-card)]" />
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Company Overview</h2>
              <p className="mt-4 text-muted-foreground">
                We collaborate with distributors, wholesalers, and healthcare institutions to ensure safe and
                effective pharmaceutical solutions reach the market — supporting healthcare providers with
                top-notch formulations while maintaining strict compliance with industry regulations.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[["120+", "Products"], ["25+", "States Reached"], ["10+", "Years Heritage"]].map(([k, v]) => (
                  <div key={v} className="rounded-2xl border border-border bg-card p-4 text-center">
                    <div className="text-2xl font-bold text-foreground">{k}</div>
                    <div className="text-xs text-muted-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">Our Values</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
