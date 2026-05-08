import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronsLeftRight,
  Sparkles,
  Volume2,
  VolumeX,
  Maximize2,
  Play,
} from "lucide-react";

import bathroomBefore from "../assets/images/Bathroom_Before_After/video_2.mp4";
import bathroomAfter from "../assets/images/Bathroom_Before_After/video_1.mp4";
import exteriorVideo from "../assets/images/Exterior_Bay_Window_Trim/video.mp4";

export default function BeforeAfterShowcase() {
  return (
    <section
      id="transformations"
      className="relative scroll-mt-24 md:scroll-mt-28 overflow-hidden text-white py-16 sm:py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #08080b 0%, #131319 50%, #08080b 100%)",
      }}
      aria-label="Before and after transformations"
    >
      {/* Decorative halos */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gold-400/12 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
      />
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />

      <div className="container-page relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 ring-1 ring-gold-400/30 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold-300 font-semibold">
            <Sparkles size={12} aria-hidden /> Real Transformations
          </span>
          <h2 className="mt-4 text-white font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
            The story of every{" "}
            <span className="italic text-gold-400">finished detail</span>.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
            Where dated becomes timeless. A glimpse into the work captured on
            site, shaped by decades of craft, finished to last generations.
          </p>
          <span
            aria-hidden
            className="mx-auto mt-6 block h-px w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />
        </motion.div>

        {/* Bathroom: text + comparison slider */}
        <div className="mt-12 sm:mt-14 md:mt-20 grid gap-8 md:gap-12 lg:gap-16 items-center md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
              Bathroom · Full Remodel
            </span>
            <h3 className="mt-2 font-display text-white text-2xl sm:text-3xl md:text-4xl leading-tight">
              A tired room, reimagined as a{" "}
              <span className="italic text-gold-400">private retreat</span>.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed max-w-md">
              Fresh tile, a custom vanity, and finishes chosen to feel timeless
              ten years from now — proof that a small space can change how a
              whole house feels.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              {[
                "Floor-to-ceiling tile work",
                "Custom vanity & lighting",
                "Modern fixtures & plumbing",
                "Premium finishes throughout",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2"
          >
            <BeforeAfterCompare before={bathroomBefore} after={bathroomAfter} />
          </motion.div>
        </div>

        {/* Exterior showcase: video + text */}
        <div className="mt-16 sm:mt-20 md:mt-28 grid gap-8 md:gap-12 lg:gap-16 items-center md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <CinematicVideo src={exteriorVideo} title="Exterior bay window trim build" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
              Exterior · Carpentry
            </span>
            <h3 className="mt-2 text-white font-display text-2xl sm:text-3xl md:text-4xl leading-tight">
              Bay window trim,{" "}
              <span className="italic text-gold-400">handcrafted on site</span>.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed max-w-md">
              Precise miters, weather-tight joinery, and the kind of detailing
              you only notice when it's missing — a quiet kind of craft that
              ages well.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              {[
                "Custom mitered corners",
                "Weather-resistant carpentry",
                "Premium exterior trim profiles",
                "Built to last decades",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────── */
/* Interactive Before/After comparison slider with two videos      */
/* ────────────────────────────────────────────────────────────── */

function BeforeAfterCompare({ before, after }) {
  const [pos, setPos] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef(null);
  const beforeVidRef = useRef(null);
  const afterVidRef = useRef(null);
  const draggingRef = useRef(false);

  // Pause videos when off-screen for perf
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const action = entry.isIntersecting ? "play" : "pause";
        [beforeVidRef.current, afterVidRef.current].forEach((v) => {
          if (!v) return;
          if (action === "play") v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const updateFromX = (clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  };

  const startDrag = (e) => {
    draggingRef.current = true;
    setHasInteracted(true);
    updateFromX(e.clientX);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (!draggingRef.current) return;
    updateFromX(e.clientX);
  };
  const stopDrag = () => {
    draggingRef.current = false;
  };

  // Keyboard support on the handle
  const onKey = (e) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    setHasInteracted(true);
    e.preventDefault();
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onPointerDown={startDrag}
        onPointerMove={onMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        className="relative w-full max-w-md mx-auto aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/50 select-none cursor-ew-resize touch-none bg-ink-900"
        style={{ touchAction: "none" }}
      >
        {/* AFTER (bottom layer) */}
        <video
          ref={afterVidRef}
          src={after}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {/* BEFORE (top layer, clipped from the right) */}
        <video
          ref={beforeVidRef}
          src={before}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        {/* Subtle vignette for legibility of badges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"
        />

        {/* BEFORE / AFTER badges */}
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 rounded-full bg-ink-900/85 backdrop-blur-md text-gold-300 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] font-bold px-2.5 py-1 ring-1 ring-white/15">
          Before
        </span>
        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 inline-flex items-center gap-1.5 rounded-full bg-gold-500 text-ink-900 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] font-bold px-2.5 py-1 shadow-lg shadow-gold-500/30">
          After
        </span>

        {/* Divider line */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none"
          style={{
            left: `${pos}%`,
            transform: "translateX(-50%)",
            boxShadow:
              "0 0 12px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,164,74,0.5)",
          }}
        />

        {/* Draggable handle */}
        <button
          type="button"
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          role="slider"
          tabIndex={0}
          onKeyDown={onKey}
          className={`absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white text-ink-900 ring-4 ring-gold-500 shadow-2xl shadow-black/50 flex items-center justify-center cursor-ew-resize focus:outline-none focus:ring-gold-300 ${
            hasInteracted ? "" : "animate-pulse-handle"
          }`}
          style={{ left: `${pos}%` }}
        >
          <ChevronsLeftRight
            size={20}
            aria-hidden
            className="sm:hidden text-ink-900"
          />
          <ChevronsLeftRight
            size={22}
            aria-hidden
            className="hidden sm:block text-ink-900"
          />
        </button>

      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/* Cinematic single-video showcase with click-to-unmute & overlay */
/* ────────────────────────────────────────────────────────────── */

function CinematicVideo({ src, title }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  // Pause when off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const v = ref.current;
        if (!v) return;
        if (entry.isIntersecting) {
          v.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const enterFullscreen = (e) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    const req =
      v.requestFullscreen ||
      v.webkitRequestFullscreen ||
      v.msRequestFullscreen;
    req?.call(v);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full flex justify-center rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/50 bg-ink-900 group"
    >
      <video
        ref={ref}
        src={src}
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="metadata"
        onClick={togglePlay}
        title={title}
        className="block max-w-full w-auto h-auto max-h-[min(90svh,1080px)] cursor-pointer"
      />

      {/* Top gradient for controls visibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/55 to-transparent"
      />
      {/* Bottom gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent"
      />

      {/* Top-left badge */}
      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 rounded-full bg-ink-900/85 backdrop-blur-md text-gold-300 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] font-bold px-2.5 py-1 ring-1 ring-white/15">
        On-Site Reel
      </span>

      {/* Controls cluster */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2 z-10">
        <button
          type="button"
          aria-label={muted ? "Unmute" : "Mute"}
          onClick={toggleMute}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/70 backdrop-blur-md text-white/90 ring-1 ring-white/15 hover:bg-ink-900/90 hover:text-gold-300 transition-all cursor-pointer"
        >
          {muted ? <VolumeX size={14} aria-hidden /> : <Volume2 size={14} aria-hidden />}
        </button>
        <button
          type="button"
          aria-label="Fullscreen"
          onClick={enterFullscreen}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/70 backdrop-blur-md text-white/90 ring-1 ring-white/15 hover:bg-ink-900/90 hover:text-gold-300 transition-all cursor-pointer"
        >
          <Maximize2 size={14} aria-hidden />
        </button>
      </div>

      {/* Center play button when paused */}
      {!playing && (
        <button
          type="button"
          aria-label="Play video"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-ink-900 ring-4 ring-white/30 shadow-2xl transition-transform group-hover:scale-105">
            <Play size={22} className="ml-1" aria-hidden fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}
