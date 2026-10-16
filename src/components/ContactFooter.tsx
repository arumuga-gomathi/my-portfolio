import { useState } from "react";
import { Check, Copy, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/section";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-16 sm:py-20 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Contact" title="Let's talk" desc="Open to Cloud Support, Application Support, AWS Operations, and Software Engineering roles across India and remote. I reply fast." />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Card>
              <CardContent className="space-y-4 p-6">
                {[
                  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                  { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
                  { icon: MapPin, label: "Location", value: profile.location },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-amber-400 dark:bg-amber-500 dark:text-slate-950">
                      <r.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{r.label}</p>
                      {r.href ? (
                        <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="truncate font-medium text-slate-900 hover:text-amber-600 dark:text-white">
                          {r.value}
                        </a>
                      ) : (
                        <p className="font-medium text-slate-900 dark:text-white">{r.value}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button onClick={copyEmail} variant="outline" size="sm">
                    {copied ? <Check /> : <Copy />} {copied ? "Copied!" : "Copy email"}
                  </Button>
                  <a href={`mailto:${profile.email}?subject=Opportunity for ${encodeURIComponent(profile.name)}`}>
                    <Button size="sm">
                      <Send /> Email me
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <CardContent className="p-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget);
                    const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
                    const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
                    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
                  }}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
                      <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
                      <input name="email" type="email" required placeholder="you@company.com" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
                    <textarea name="message" required rows={5} placeholder="Hi Arumuga, we'd like to talk about…" className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
                  </label>
                  <Button type="submit" className="w-full sm:w-auto">
                    <Send /> Send message
                  </Button>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Opens your email client addressed to {profile.email}. No backend needed.</p>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:px-6 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {profile.name} • Built with React, Tailwind & shadcn-style UI
        </p>
        <a href="#top" className="font-medium hover:text-amber-600">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
