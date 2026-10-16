import { Cloud, Database, GitBranch, Layout, Server, Terminal } from "lucide-react";
import { profile, skillGroups } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal, SectionHeading } from "@/components/section";

const icons: Record<string, typeof Cloud> = { Cloud, Server, Layout, Database, Terminal, GitBranch };

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <SectionHeading kicker="About" title="Engineer for cloud operations & product delivery" />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Professional summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-300">
              <p>{profile.summary}</p>
              <p>
                Proficient in Linux system administration, Git-based version control, and AI-assisted development. Comfortable
                triaging incidents with CloudWatch logs and metrics, tightening IAM least-privilege policies, and documenting
                runbooks so on-call stays calm.
              </p>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="h-full border-amber-200 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/5">
            <CardHeader>
              <CardTitle>At a glance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {[
                ["Location", profile.location],
                ["Email", profile.email],
                ["Phone", profile.phone],
                ["Status", profile.availability],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{k}</span>
                  <span className="font-medium text-slate-800 break-words dark:text-slate-100">{v}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-16 sm:py-20 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Skills" title="Technical toolkit" desc="The services, languages, and operational tools I use to ship and support production workloads." />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon] ?? Cloud;
            return (
              <Reveal key={g.title} delay={0.05 * i}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-amber-400 dark:bg-amber-500 dark:text-slate-950">
                        <Icon className="h-4 w-4" />
                      </span>
                      {g.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {g.skills.map((s) => (
                        <Badge key={s} variant="secondary">
                          {s}
                        </Badge>
                      ))}
                    </div>
                    {g.highlight && (
                      <p className="mt-3 text-xs font-semibold text-amber-600 dark:text-amber-400">★ {g.highlight}</p>
                    )}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
