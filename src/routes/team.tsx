import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [{ title: "Our Team — Grovat Healthcare" }, { name: "description", content: "Meet the leadership behind Grovat Healthcare Pvt. Ltd." }] }),
  component: TeamPage,
});

const team = [
  { name: "Mr. Satish Kumar", role: "Founder & Director", initials: "SK" },
  { name: "Dr. A. Mehta", role: "Head of R&D", initials: "AM" },
  { name: "Ms. Priya Sharma", role: "Head of Quality", initials: "PS" },
  { name: "Mr. Rajesh Verma", role: "Operations Lead", initials: "RV" },
];

function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[image:var(--gradient-soft)]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leadership</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Meet our team</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">A passionate group of scientists, operators and healthcare experts.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-3xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-2xl font-bold text-primary-foreground">
                  {m.initials}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
