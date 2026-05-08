import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { ceoMessage, company } from "../content/site";
import { julianImage } from "../content/media";

export default function CeoMessage() {
  return (
    <section
      id="about"
      className="section bg-ink-900 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0d 0%, #131318 50%, #0a0a0d 100%)",
      }}
    >
      {/* Decorative gold halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gold-500/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-gold-400/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold-400/10 blur-3xl"
      />

      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-page relative">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-sm">
              {/* Outer gold gradient border (animated subtle pulse) */}
              <div
                aria-hidden
                className="absolute -inset-3 sm:-inset-4 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200,144,42,0.5) 0%, rgba(200,144,42,0.1) 50%, rgba(200,144,42,0.5) 100%)",
                  padding: "1px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              {/* Decorative gold corner brackets */}
              <span
                aria-hidden
                className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-gold-400 rounded-tl-lg"
              />
              <span
                aria-hidden
                className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-gold-400 rounded-br-lg"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-700 ring-1 ring-white/10 shadow-2xl shadow-black/50">
                {julianImage ? (
                  <img
                    src={julianImage}
                    alt={`${ceoMessage.name}, ${ceoMessage.role}`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center text-ink-400">
                    <User size={48} aria-hidden />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gold-400 font-semibold">
                    {ceoMessage.role}
                  </p>
                  <p className="mt-1 font-display text-lg sm:text-xl text-white">
                    {ceoMessage.name}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ring-1 ring-gold-500/30">
              <Quote size={12} aria-hidden className="text-gold-400" />
              A Word From Our Founder
            </span>
            <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl text-white">
              Building homes the way{" "}
              <span className="text-gold-400 italic">family</span> should.
            </h2>
            <div className="mt-5">
              <span className="inline-block h-px w-14 bg-gradient-to-r from-gold-500 via-gold-400 to-transparent" />
            </div>

            <div className="relative mt-7 sm:mt-8 pl-7 sm:pl-9">
              <Quote
                size={32}
                aria-hidden
                className="absolute -left-1 -top-1 text-gold-500 sm:w-10 sm:h-10"
                strokeWidth={1.5}
              />
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/85">
                {ceoMessage.message}
              </p>
              <p className="mt-5 sm:mt-6 font-display italic text-xl sm:text-2xl text-gold-300">
                {ceoMessage.signature}
              </p>
            </div>

            <dl className="mt-9 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-5 max-w-lg">
              <Stat number="35+" label="Years Experience" />
              <Stat number="1000+" label="Projects Completed" />
              <Stat number="100%" label="Family-Owned" />
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 via-gold-400/40 to-transparent" />
      <div className="pl-3 sm:pl-4">
        <dt
          className="font-display text-2xl sm:text-3xl md:text-4xl"
          style={{
            background:
              "linear-gradient(135deg, #e0bb66 0%, #c8902a 50%, #f5ead0 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {number}
        </dt>
        <dd className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/60 leading-tight">
          {label}
        </dd>
      </div>
    </div>
  );
}
