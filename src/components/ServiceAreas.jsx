import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";
import { company, serviceAreas } from "../content/site";

export default function ServiceAreas() {
  return (
    <section
      id="areas"
      className="section relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0d 0%, #131318 50%, #0a0a0d 100%)",
      }}
    >
      {/* Decorative gold halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-gold-500/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-gold-300/8 blur-3xl"
      />

      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-page relative">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ring-1 ring-gold-500/30">
              <Compass size={12} aria-hidden className="text-gold-400" />
              Where We Work
            </span>
            <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl text-white">
              Proudly serving{" "}
              <span className="italic text-gold-400">New Jersey</span>{" "}
              homeowners.
            </h2>
            <div className="mt-5">
              <span className="inline-block h-px w-14 bg-gradient-to-r from-gold-500 via-gold-400 to-transparent" />
            </div>
            <p className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed">
              Based in {company.baseCity}, we bring the same care and attention
              to detail to every home we work on across the surrounding
              communities.
            </p>

            {/* Headquarters card */}
            <div
              className="mt-8 relative overflow-hidden rounded-2xl ring-1 ring-white/10 px-5 py-4 max-w-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(200,144,42,0.06) 100%)",
              }}
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-gold-400 via-gold-500 to-gold-400"
              />
              <div className="flex items-start gap-3 pl-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 text-ink-900 ring-1 ring-gold-300/40 shrink-0">
                  <MapPin size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-[11px] text-gold-300 uppercase tracking-[0.22em] font-semibold">
                    Headquarters
                  </p>
                  <p className="mt-1 font-display text-base sm:text-lg text-white">
                    {company.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Stat row */}
            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              <StatBox value="33+" label="Towns Served" />
              <StatBox value="1 hr" label="Avg. Response" />
            </div>
          </div>

          {/* Town list */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl ring-1 ring-white/10 p-5 sm:p-6 lg:p-7 bg-white/[0.03] backdrop-blur-sm">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-3">
                {serviceAreas.map((area, idx) => (
                  <motion.li
                    key={area}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(idx * 0.015, 0.4),
                    }}
                    className="group flex items-center gap-2 text-white/85 text-sm hover:text-gold-300 transition-colors cursor-default"
                  >
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gold-500/70 shrink-0 transition-all duration-300 group-hover:bg-gold-400 group-hover:scale-150" />
                    <span>{area}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/45 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-gold-500" />
              Don't see your town? Reach out — we frequently take projects in
              nearby areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="relative rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3.5">
      <span
        aria-hidden
        className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
      />
      <p
        className="font-display text-2xl sm:text-3xl"
        style={{
          background:
            "linear-gradient(135deg, #e0bb66 0%, #c8902a 50%, #f5ead0 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {value}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/55">
        {label}
      </p>
    </div>
  );
}
