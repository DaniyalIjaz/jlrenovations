import { motion } from "framer-motion";
import {
  Wrench,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { services } from "../content/site";
import { serviceImages } from "../content/media";

const TAGLINES = {
  kitchen: "Kitchens",
  bathroom: "Bathrooms",
  painting: "Painting",
};

export default function Services() {
  return (
    <section
      id="services"
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

      {/* Gold halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 h-[30rem] w-[30rem] rounded-full bg-gold-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-gold-400/10 blur-3xl"
      />

      <div className="container-page relative">
        <header className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ring-1 ring-white/10">
            <Wrench size={12} aria-hidden className="text-gold-400" />
            Our Services
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl text-white leading-tight">
            Find the service you need{" "}
            <span className="italic text-gold-400">fast</span>.
          </h2>
          <div className="mt-5 flex">
            <span className="inline-block h-px w-14 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          </div>
          <p className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed">
            Kitchen remodeling, bathroom remodeling, and painting — presented
            clearly so homeowners can choose quickly and move forward with
            confidence.
          </p>
        </header>

        <div className="mt-10 sm:mt-14 grid gap-6 lg:gap-7 md:grid-cols-2 lg:grid-cols-3 perspective-[1800px]">
          {services.map((s, idx) => {
            const img = serviceImages[s.id];
            const tag = TAGLINES[s.id] || "Service";
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 60, rotateX: 18, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.9,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover="hovered"
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black/60 ring-1 ring-white/10 shadow-2xl shadow-black/35 transform-gpu"
              >
                {/* Top hairline */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
                />

                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[9/16] xl:aspect-[2/3]">
                  {/* Visual */}
                  <motion.div
                    aria-hidden
                    className="absolute inset-0"
                    variants={{
                      hovered: { scale: 1.08, filter: "grayscale(0%) brightness(0.85)" },
                    }}
                    initial={{ filter: "grayscale(100%) brightness(0.55)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      backgroundImage: img ? `url(${img})` : undefined,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      willChange: "transform, filter",
                    }}
                  />

                  {/* Glass gradient overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/10"
                  />

                  {/* Data panel */}
                  <div className="absolute inset-0 flex flex-col justify-start p-5 sm:p-6 md:p-7">
                    <motion.div
                      variants={{ hovered: { y: 0, opacity: 1 } }}
                      initial={{ y: 18, opacity: 0.92 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-gold-300 font-semibold">
                        <span className="inline-block h-px w-6 bg-gold-400/80" />
                        {tag}
                      </span>

                      <h3 className="mt-2 font-display text-2xl sm:text-3xl leading-[1.05] text-white">
                        {s.title}
                      </h3>

                      <p className="mt-3 text-sm text-white/75 leading-relaxed max-w-[32ch]">
                        {s.short}
                      </p>

                      <div className="mt-5 rounded-xl bg-black/35 ring-1 ring-white/10 p-4 backdrop-blur-sm">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-gold-300/90 font-semibold">
                          Included
                        </p>
                        <ul className="mt-3 grid grid-cols-1 gap-y-1.5">
                          {s.items.map((it) => (
                            <li
                              key={it}
                              className="flex items-start gap-2 text-[12.5px] text-white/80 leading-snug"
                            >
                              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 ring-1 ring-gold-400/30 shrink-0">
                                <Check size={12} className="text-gold-300" aria-hidden />
                              </span>
                              <span className="whitespace-normal">{it}</span>
                            </li>
                          ))}
                        </ul>
                 
                     
                      </div>

                      {/* <div className="mt-5 flex items-center gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
                          View work
                        </span>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 transition-all duration-300 group-hover:bg-gold-500 group-hover:ring-gold-400">
                          <ArrowUpRight
                            size={18}
                            aria-hidden
                            className="text-gold-300 group-hover:text-ink-900 transition-colors"
                          />
                        </span>
                      </div> */}
                    </motion.div>
                  </div>
                </div>

                {/* Click target (single-page anchor) */}
                <a
                  href="#gallery"
                  className="absolute inset-0"
                  aria-label={`View ${s.title} work`}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href="#gallery"
            className="group inline-flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 ring-1 ring-white/10 hover:ring-gold-400/60 hover:bg-white/10 transition-all cursor-pointer"
            aria-label="View our work"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 group-hover:text-white transition-colors">
              View Our Work
            </span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 transition-all duration-300 group-hover:bg-gold-500 group-hover:ring-gold-400">
              <ArrowUpRight
                size={18}
                aria-hidden
                className="text-gold-300 group-hover:text-ink-900 transition-colors"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
