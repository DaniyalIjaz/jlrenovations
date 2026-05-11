import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Images, Sparkles } from "lucide-react";
import { company } from "../content/site";
import { heroImages } from "../content/media";
import QuoteModal from "./QuoteModal";

const FADE_DURATION = 1100; // ms cross-fade between bg images
const AUTO_INTERVAL = 2000; // ms

const HERO_CONTENT = {
  headline: "Where Craftsmanship",
  subheadline: "Meets Timeless Design",
  description:
    "JL Renovations brings Old World attention to detail to every project from bespoke decks and fine carpentry to full home transformations built to last generations.",
};

export default function HeroCarousel() {
  const bgs = heroImages.length ? heroImages : [null];
  const [active, setActive] = useState(0);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  // Autoplay background-only cycle (pauses on hover/focus and when off-screen)
  useEffect(() => {
    if (bgs.length <= 1) return;

    const start = () => {
      stop();
      intervalRef.current = setInterval(() => {
        setActive((i) => (i + 1) % bgs.length);
      }, AUTO_INTERVAL);
    };
    const stop = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    start();

    const root = sectionRef.current;
    if (!root) return () => stop();

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);

    return () => {
      stop();
      root.removeEventListener("mouseenter", stop);
      root.removeEventListener("mouseleave", start);
      root.removeEventListener("focusin", stop);
      root.removeEventListener("focusout", start);
    };
  }, [bgs.length]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate overflow-hidden text-white min-h-[100svh] flex items-center"
      aria-label="Hero"
    >
      {/* Background layer: cross-fading images (the only thing that changes) */}
      <div className="absolute inset-0 -z-10">
        {bgs.map((src, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: i === active ? 1 : 0,
              transitionDuration: `${FADE_DURATION}ms`,
              backgroundImage: src ? `url(${src})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scale(1.05)",
            }}
          />
        ))}
        {/* Overlay gradient for legibility (lighter so photos read brighter) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/38 to-black/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/38 via-black/10 to-transparent" />
      </div>

      {/* Preload the first hero image for fast LCP */}
      {bgs[0] && <link rel="preload" as="image" href={bgs[0]} />}

      <div className="container-page relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-28 w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] text-gold-300 font-semibold"
          >
            <span className="inline-block h-px w-6 sm:w-8 bg-gold-400" />
            <span className="whitespace-normal">
              {company.ownership} · {company.established}
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 sm:mt-6 text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            <span className="block text-white">{HERO_CONTENT.headline}</span>
            <span className="block mt-2 sm:mt-3 text-gold-400 italic font-medium text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              {HERO_CONTENT.subheadline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3"
          >
     
            <a
              href="#transformations"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white/10 px-5 py-3 ring-1 ring-white/15 hover:ring-gold-400/70 hover:bg-white/15 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 group-hover:text-white transition-colors">
                See Real Transformations
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 transition-all duration-300 group-hover:bg-gold-500 group-hover:ring-gold-400">
                <Sparkles
                  size={18}
                  aria-hidden
                  className="text-gold-300 group-hover:text-ink-900 transition-colors"
                />
              </span>
            </a>
            <a
              href="#gallery"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-black/35 px-5 py-3 ring-1 ring-white/20 hover:ring-gold-400/70 hover:bg-black/45 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 group-hover:text-white transition-colors">
                See Our Work
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 transition-all duration-300 group-hover:bg-gold-500 group-hover:ring-gold-400">
                <Images
                  size={18}
                  aria-hidden
                  className="text-gold-300 group-hover:text-ink-900 transition-colors"
                />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="group inline-flex items-center justify-center gap-3 rounded-full btn btn-primary px-5 py-3 w-full sm:w-auto"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                Get a quote
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/25 bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                <ClipboardList
                  size={18}
                  aria-hidden
                  className="text-white"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none">
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/60 to-transparent" />
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </section>
  );
}
