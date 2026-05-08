import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { team } from "../content/site";
import imgJulian from "../assets/images/Team/Julian.jpeg";
import imgMaria from "../assets/images/Team/Maria.jpeg";

const portraits = [imgJulian, imgMaria];

export default function Team() {
  return (
    <section
      id="team"
      className="relative scroll-mt-24 md:scroll-mt-28 overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 bg-ivory-50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold-200/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-16 h-80 w-80 rounded-full bg-gold-100/50 blur-3xl"
      />
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent"
      />

      <div className="container-page relative">
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-gold-700 ring-1 ring-gold-200">
            <Users size={12} aria-hidden className="text-gold-500" />
            Our Team
          </span>
          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-5xl text-ink-800 leading-tight">
            The people behind{" "}
            <span className="italic text-gold-600">every project</span>.
          </h2>
          <div className="mt-5 flex justify-center">
            <span className="inline-block h-px w-14 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          </div>
          <p className="mt-5 text-sm sm:text-base text-ink-500 leading-relaxed">
            Family-owned means a real relationship — meet the leadership that
            keeps quality, communication, and care at the center of everything
            we build.
          </p>
        </header>

        <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden flex flex-col sm:flex-row gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 ring-1 ring-gold-200/70 shadow-sm shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:ring-gold-300/90 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Gold blade accent + subtle wash */}
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-300 opacity-80"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-gold-200/35 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative shrink-0 mx-auto sm:mx-0 w-full max-w-[220px] sm:max-w-[200px] md:max-w-[240px]">
                <div
                  aria-hidden
                  className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(200,144,42,0.25) 0%, transparent 55%)",
                  }}
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-100 ring-2 ring-gold-400/25 shadow-lg shadow-black/10">
                  <img
                    src={portraits[i]}
                    alt={`${member.name}, ${member.role}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35"
                  />
                </div>
              </div>
              <div className="min-w-0 flex flex-col justify-center text-center sm:text-left">
                <h3 className="font-display text-xl sm:text-2xl text-ink-900 leading-snug">
                  {member.name}
                </h3>
                <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center rounded-full bg-gold-50 px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700 ring-1 ring-gold-200">
                    {member.role}
                  </span>
                  <span className="hidden sm:inline-flex h-5 w-px bg-ink-200" aria-hidden />
                  <span className="text-xs text-ink-500">{i === 0 ? "35+ years experience" : "Operations & client care"}</span>
                </div>
                <p className="mt-4 text-sm sm:text-base text-ink-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
