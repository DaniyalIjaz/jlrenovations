import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  MessageSquare,
  Clock,
  Star,
} from "lucide-react";
import { differentiators } from "../content/site";

const ICONS = [HeartHandshake, ShieldCheck, MessageSquare, Clock];

export default function Differentiators() {
  return (
    <section
      className="section relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0d 0%, #131318 55%, #0a0a0d 100%)",
      }}
    >
      {/* Blueprint grid overlay (subtle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,144,42,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(200,144,42,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Decorative gold halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-28 h-[30rem] w-[30rem] rounded-full bg-gold-500/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[30rem] w-[30rem] rounded-full bg-gold-400/10 blur-3xl"
      />

      <div className="container-page relative">
        <header className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ring-1 ring-white/10">
            <Star size={12} aria-hidden className="text-gold-400" />
            What Makes Us Different
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl text-white leading-tight">
            The standards behind{" "}
            <span className="italic text-gold-400">every</span> finish.
          </h2>
          <div className="mt-5 flex">
            <span className="inline-block h-px w-14 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          </div>
          <p className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed">
            You’ll feel the difference in the details — clear communication,
            clean work sites, and craftsmanship that holds up long after the
            final walkthrough.
          </p>
        </header>

        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.article
                key={d.title}
                initial={{ opacity: 0, y: 34, rotateX: 14, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.85,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-sm ring-1 ring-white/10 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:ring-gold-400/40 hover:bg-white/[0.05] shadow-2xl shadow-black/35 transform-gpu"
              >
                {/* Top hairline */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
                />

                <span className="relative inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/15 to-white/5 text-gold-300 ring-1 ring-gold-400/25 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-ink-900 group-hover:ring-gold-300 group-hover:scale-110">
                  <Icon size={22} aria-hidden />
                </span>

                <div className="relative mt-5">
                  <span className="inline-block h-px w-10 bg-gradient-to-r from-gold-400 to-transparent" />
                </div>

                <h3 className="relative mt-3 text-lg sm:text-xl text-white">
                  {d.title}
                </h3>
                <p className="relative mt-3 text-sm text-white/70 leading-relaxed">
                  {d.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
