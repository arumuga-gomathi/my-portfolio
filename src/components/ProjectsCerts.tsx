import { Award, GraduationCap, Star } from "lucide-react";
import { certifications, education, projects } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal, SectionHeading } from "@/components/section";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-16 sm:py-20 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="Projects"
            title="Things I've built"
            desc="Ticketly is the flagship — designed and deployed solo, end to end. The rest show migration, delivery, and ML fundamentals."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i} className={p.featured ? "lg:col-span-2" : ""}>
              <Card className={p.featured ? "border-amber-300 dark:border-amber-500/40" : "h-full"}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    {p.featured && (
                      <Badge variant="default">
                        <Star className="mr-1 h-3 w-3" /> Featured
                      </Badge>
                    )}
                    <CardDescription>{p.subtitle}</CardDescription>
                  </div>
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <SectionHeading kicker="Credentials" title="Certifications & education" />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={0.04 * i}>
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  <Award className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{c.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-amber-600 dark:text-amber-400" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-bold text-slate-900 dark:text-white">{education.degree}</p>
              <p className="text-slate-600 dark:text-slate-300">{education.school}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge variant="outline">{education.period}</Badge>
                <Badge variant="default">{education.cgpa}</Badge>
              </div>
              <p className="pt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Final-year research in CNN-based image classification fed directly into the citrus classifier project (99%
                accuracy) — a foundation I now apply to the AWS AI & ML Scholars track.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
