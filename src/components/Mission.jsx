import { motion } from "framer-motion";
import { Hammer, Users, Home, Sparkles } from "lucide-react";
import { mission } from "../content/site";

const ICONS = [Hammer, Users, Home];

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-8 sm:pb-12 lg:pb-16"
      style={{ background: "#fdfcf8" }}
    >
      {/* Layered decorative gold glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-gold-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-gold-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-gold-300/20 blur-3xl"
      />

      <div className="container-page relative">
        {/* Centered header with sparkle motif */}
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-gold-700 ring-1 ring-gold-200">
            <Sparkles size={12} aria-hidden className="text-gold-500" />
            Our Mission
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl">
            Renovations that{" "}
            <span className="italic text-gold-600">stand</span> the test of
            time.
          </h2>
          <div className="mt-5 flex justify-center">
            <span className="inline-block h-px w-14 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          </div>
          <p className="mt-5 text-sm sm:text-base text-ink-500 leading-relaxed">
            Three commitments guide every decision we make and every nail we
            drive — from the first walkthrough to the final coat of paint.
          </p>
        </header>

        {/* Mission pillars */}
        <div className="mt-12 sm:mt-16 grid gap-5 md:gap-6 md:grid-cols-3">
          {mission.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 sm:p-7 md:p-8 ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-1.5 hover:ring-transparent"
                style={{
                  // Box shadow grows + tints gold on hover
                  boxShadow:
                    "0 1px 2px rgba(15,15,18,0.05), 0 8px 24px -16px rgba(15,15,18,0.06)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 1px 2px rgba(15,15,18,0.05), 0 24px 48px -20px rgba(200,144,42,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 1px 2px rgba(15,15,18,0.05), 0 8px 24px -16px rgba(15,15,18,0.06)")
                }
              >
                {/* Top accent gradient */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 opacity-70"
                />

                {/* Icon tile with gradient on hover */}
                <span className="relative inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 text-gold-700 ring-1 ring-gold-200 transition-all duration-500 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white group-hover:ring-gold-500 group-hover:scale-110">
                  <Icon size={22} aria-hidden />
                </span>

                <div className="relative mt-5">
                  <span className="inline-block h-px w-10 bg-gradient-to-r from-gold-500 to-transparent" />
                </div>

                <h3 className="relative mt-3 text-lg sm:text-xl md:text-[1.6rem] leading-tight">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm sm:text-base text-ink-500 leading-relaxed">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
