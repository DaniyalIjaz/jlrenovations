import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Heart,
  Clock,
  MessageSquare,
  Gem,
} from "lucide-react";
import { values } from "../content/site";

const ICONS_BY_LETTER = {
  Q: Award,
  I: ShieldCheck,
  F: Heart,
  T: Clock,
  C: MessageSquare,
};

export default function Values() {
  return (
    <section
      id="values"
      className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-28"
      style={{ background: "#fdfcf8" }}
    >
      {/* Decorative gold halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-gold-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/3 h-80 w-80 rounded-full bg-gold-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-gold-300/30 blur-3xl"
      />

      <div className="container-page relative">
        {/* Centered header */}
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-gold-700 ring-1 ring-gold-200">
            <Gem size={12} aria-hidden className="text-gold-500" />
            Our Values
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl">
            Five principles in{" "}
            <span className="italic text-gold-600">every</span> nail we drive.
          </h2>
          <div className="mt-5 flex justify-center">
            <span className="inline-block h-px w-14 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          </div>
          <p className="mt-5 text-sm sm:text-base text-ink-500 leading-relaxed">
            These aren't slogans on a website — they're the standards every
            member of our team is held to on every job, every day.
          </p>
        </header>

        {/* Values grid: 1 col mobile, 2 col sm, 3 col lg with last row centered */}
        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {values.map((v, idx) => {
            const Icon = ICONS_BY_LETTER[v.letter] || Award;
            // 5 items in 6-col grid: top row 3 (Q I F), bottom row 2 centered (T C)
            const lgPlacement =
              idx < 3
                ? "lg:col-span-2"
                : idx === 3
                ? "lg:col-span-2 lg:col-start-2"
                : "lg:col-span-2";
            return (
              <motion.article
                key={v.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className={[
                  "group relative overflow-hidden rounded-2xl bg-white",
                  "p-6 sm:p-7 ring-1 ring-ink-100",
                  "transition-all duration-500 hover:-translate-y-1.5",
                  lgPlacement,
                ].join(" ")}
                style={{
                  boxShadow:
                    "0 1px 2px rgba(15,15,18,0.04), 0 8px 24px -16px rgba(15,15,18,0.05)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 1px 2px rgba(15,15,18,0.04), 0 28px 48px -20px rgba(200,144,42,0.4)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 1px 2px rgba(15,15,18,0.04), 0 8px 24px -16px rgba(15,15,18,0.05)")
                }
              >
                {/* Side accent bar that grows on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative flex items-center gap-3.5">
                  <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-50 to-gold-100 text-gold-700 ring-1 ring-gold-200 transition-all duration-500 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white group-hover:ring-gold-500 group-hover:scale-110">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="text-lg sm:text-xl">{v.title}</h3>
                </div>

                <p className="relative mt-4 text-sm sm:text-base text-ink-500 leading-relaxed">
                  {v.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
