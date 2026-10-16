import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-500/10" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Badge variant="default">● {profile.availability}</Badge>
          </div>
          <p className="mb-3 font-mono text-sm text-amber-600 dark:text-amber-400">Hello, I'm</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200">
            {profile.role} <span className="text-slate-400">•</span>{" "}
            <span className="text-amber-600 dark:text-amber-400">{profile.tagline}</span>
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">{profile.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.openTo.map((r) => (
              <Badge key={r} variant="outline">
                {r}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="lg">
                View projects <ArrowRight />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline">
                <Mail /> Contact me
              </Button>
            </a>
            <a href="./Arumuga_Gomathi_Master_Resume.docx" download>
              <Button size="lg" variant="secondary">
                <Download /> Resume
              </Button>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-amber-600">
              <Linkedin className="h-4 w-4" /> {profile.linkedinLabel}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-400">ticketly — live architecture</p>
          <div className="space-y-2.5 font-mono text-[13px] leading-relaxed">
            {[
              ["User", "CloudFront + React"],
              ["Auth", "Cognito → JWT → Authoriser"],
              ["API", "API Gateway → Lambda ×9"],
              ["Flow", "EventBridge + SQS (events)"],
              ["Order", "Step Functions orchestration"],
              ["Data", "DynamoDB + conditional writes"],
              ["Ops", "CloudWatch logs / metrics"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3 rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/70">
                <span className="w-12 shrink-0 font-semibold text-amber-600 dark:text-amber-400">{k}</span>
                <span className="text-slate-700 dark:text-slate-300">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              ["9", "microservices"],
              ["99%", "CNN accuracy"],
              ["0", "data loss (DMS)"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <div className="text-xl font-extrabold text-slate-900 dark:text-white">{n}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
