import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Lock, User, Pill, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/member-login")({
  head: () => ({
    meta: [
      { title: "Member Login — Grovat Healthcare" },
      { name: "description", content: "Secure member portal for Grovat Healthcare partners and field staff." },
      { property: "og:title", content: "Member Login — Grovat Healthcare" },
      { property: "og:description", content: "Sign in to the Grovat Healthcare member portal." },
    ],
  }),
  component: MemberLoginPage,
});

function MemberLoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Forward to external SFM portal
    // window.open("http://118.185.57.3/gnxtsfmkp/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-background">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--border))_1px,transparent_0)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Left: brand panel */}
        <div className="hidden flex-col justify-between rounded-3xl border border-border/60 bg-[image:var(--gradient-hero)] p-10 text-primary-foreground shadow-[var(--shadow-soft)] lg:flex">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Member Portal
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight">
              Welcome back to <br /> Grovat Healthcare
            </h1>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/85">
              Securely access your dashboard, manage orders, track field activity and stay connected with the Grovat team.
            </p>
          </div>

          <ul className="mt-10 space-y-4 text-sm">
            {[
              "Real-time order & inventory tracking",
              "Field staff and territory management",
              "Secure, encrypted member access",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-10 text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} Grovat Healthcare · We care for you
          </div>
        </div>

        {/* Right: form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-border/60 bg-card/80 p-8 shadow-[var(--shadow-card)] backdrop-blur-xl sm:p-10">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
                <Pill className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-tight">Grovat Healthcare</div>
                <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Member Portal</div>
              </div>
            </Link>

            <h2 className="mt-8 text-2xl font-bold tracking-tight">Sign in to your account</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter your credentials to access the member dashboard.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username">Username / Member ID</Label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    autoComplete="username"
                    placeholder="Enter your member ID"
                    className="h-11 pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button
                    type="button"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPwd ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="h-11 px-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPwd ? "Hide password" : "Show password"}
                  >
                    {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-border accent-primary"
                />
                Keep me signed in on this device
              </label>

              <Button type="submit" variant="hero" className="group h-11 w-full text-sm font-semibold">
                Sign In
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                Secure SFM Portal Access
                <span className="h-px flex-1 bg-border" />
              </div>

              <div className="rounded-xl border border-border/60 bg-secondary/40 p-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    Your connection is encrypted. For account access issues,
                    {" "}
                    <Link to="/contact" className="font-medium text-primary hover:underline">contact support</Link>.
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
