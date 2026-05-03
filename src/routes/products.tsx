import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Heart, Brain, Baby, Pill, Stethoscope, Activity } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Products — Grovat Healthcare" }, { name: "description", content: "Explore Grovat Healthcare's portfolio of research-driven pharmaceutical formulations." }] }),
  component: ProductsPage,
});

const categories = [
  { icon: Heart, name: "Women's Health", items: ["FOLACARE", "REGSET Syrup"], color: "from-rose-100 to-pink-50" },
  { icon: Brain, name: "Mental Wellness", items: ["MENTOFRESH"], color: "from-indigo-100 to-blue-50" },
  { icon: Baby, name: "Active Childhood", items: ["FOLACARE Syrup"], color: "from-amber-100 to-yellow-50" },
  { icon: Pill, name: "General Medicine", items: ["Antibiotics", "Analgesics", "Antacids"], color: "from-teal-100 to-cyan-50" },
  { icon: Stethoscope, name: "Cardio & Diabetes", items: ["Cardiac Care", "Anti-diabetic"], color: "from-emerald-100 to-green-50" },
  { icon: Activity, name: "Nutraceuticals", items: ["Vitamins", "Minerals", "Supplements"], color: "from-violet-100 to-purple-50" },
];

function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[image:var(--gradient-soft)]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Portfolio</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">Formulations across every therapy area.</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">From women's health to mental wellness — discover a portfolio designed for modern healthcare needs.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.name} className={`group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${c.color} p-6 transition-transform hover:-translate-y-1`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/80 text-primary shadow-[var(--shadow-card)]">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{c.name}</h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {c.items.map((i) => <li key={i}>· {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
