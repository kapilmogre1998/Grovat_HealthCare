import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Grovat Healthcare" }, { name: "description", content: "Get in touch with Grovat Healthcare Pvt. Ltd." }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[image:var(--gradient-soft)]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Let's talk healthcare.</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Partner with Grovat Healthcare for distribution, manufacturing or product enquiries.</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "info@grovathealthcare.com" },
              { icon: Phone, label: "Phone", value: "+91-7052711525" },
              { icon: MapPin, label: "Address", value: "Grovat Healthcare Pvt. Ltd., India" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-medium text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-xl font-semibold text-foreground">Send us a message</h2>
            <div className="mt-6 grid gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" rows={5} placeholder="Tell us about your enquiry..." className="mt-1.5" />
              </div>
              <Button variant="hero" type="submit" className="mt-2">Send message</Button>
            </div>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
