import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal, SectionHeading } from "@/components/section";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <SectionHeading kicker="Experience" title="Where I've worked" />
      </Reveal>
      <div className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200 sm:before:left-[19px] dark:before:bg-slate-800">
        {experience.map((e, i) => (
          <Reveal key={e.org} delay={0.05 * i}>
            <div className="relative pl-10 sm:pl-14">
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-amber-400 sm:h-10 sm:w-10 dark:bg-amber-500 dark:text-slate-950">
                <Briefcase className="h-4 w-4" />
              </span>
              <Card>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {e.role} <span className="font-medium text-slate-500">— {e.org}</span>
                    </h3>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{e.period}</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {e.bullets.map((b) => (
                      <li key={b.slice(0, 32)}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
