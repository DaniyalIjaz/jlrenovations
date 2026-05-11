import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  LayoutGrid,
} from "lucide-react";
import { galleryCategories } from "../content/media";

const ALL = { id: "__all__", label: "All Work" };
const PAGE_SIZE = 12; // multiples of 2/3/4 — packs cleanly on every breakpoint

export default function Gallery() {
  const [activeCat, setActiveCat] = useState(ALL.id);
  const [pageCount, setPageCount] = useState(1);
  const [lightbox, setLightbox] = useState(null); // { images, index }

  const flatAll = useMemo(
    () =>
      galleryCategories.flatMap((c) =>
        c.images.map((src) => ({ src, label: c.label }))
      ),
    []
  );

  const fullList = useMemo(() => {
    if (activeCat === ALL.id) return flatAll;
    const cat = galleryCategories.find((c) => c.id === activeCat);
    return cat ? cat.images.map((src) => ({ src, label: cat.label })) : [];
  }, [activeCat, flatAll]);

  const visibleCount = Math.min(pageCount * PAGE_SIZE, fullList.length);
  const visible = useMemo(
    () => fullList.slice(0, visibleCount),
    [fullList, visibleCount]
  );
  const hasMore = visibleCount < fullList.length;
  const allShown = !hasMore && fullList.length > PAGE_SIZE;

  const selectCategory = (id) => {
    setActiveCat(id);
    setPageCount(1);
  };

  const openLightbox = (i) => setLightbox({ images: visible, index: i });
  const closeLightbox = () => setLightbox(null);
  const next = () =>
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb
    );
  const prev = () =>
    setLightbox((lb) =>
      lb
        ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }
        : lb
    );

  // Keyboard controls for lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="section bg-ivory-100">
      <div className="container-page">
        <header className="max-w-2xl">
          <span className="eyebrow">Our Work</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl">
            Real projects.{" "}
            <span className="italic text-gold-600">Real</span> craftsmanship.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-ink-500 leading-relaxed">
            A glimpse into the homes and spaces we've recently transformed
            across New Jersey. Tap any image to view it full size.
          </p>
        </header>

        {/* Visual category chips with thumbnail previews */}
        <ThumbnailChipBar
          activeCat={activeCat}
          onChange={selectCategory}
          allLabel={ALL.label}
          allId={ALL.id}
        />

        {/* Uniform tile grid wrapped in a fade container */}
        <div className="relative mt-8 sm:mt-10">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            <AnimatePresence initial={false}>
              {visible.map((img, i) => (
                <motion.button
                  key={img.src}
                  type="button"
                  onClick={() => openLightbox(i)}
                  layout
                  initial={{ opacity: 0, y: 14, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{
                    duration: 0.35,
                    delay: i < PAGE_SIZE ? Math.min(i * 0.025, 0.2) : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-200 cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={`${img.label} — JL Renovations project`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute left-3 bottom-3 right-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 truncate">
                    {img.label}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom fade teaser — only when more photos exist */}
          {hasMore && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-44 lg:h-48 bg-gradient-to-t from-ivory-100 via-ivory-100/95 to-transparent"
            />
          )}
        </div>

        {/* Show more / less */}
        {(hasMore || allShown) && (
          <div className="relative -mt-6 sm:-mt-10 flex justify-center">
            {hasMore ? (
              <button
                type="button"
                onClick={() => setPageCount((p) => p + 1)}
                className="group inline-flex items-center gap-3 rounded-full bg-ink-900/90 px-5 py-3 ring-1 ring-white/10 hover:ring-gold-400/60 hover:bg-ink-900 transition-all cursor-pointer shadow-xl shadow-black/20"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 group-hover:text-white transition-colors">
                  Show More
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 transition-all duration-300 group-hover:bg-gold-500 group-hover:ring-gold-400">
                  <Plus
                    size={18}
                    aria-hidden
                    className="text-gold-300 group-hover:text-ink-900 transition-colors"
                  />
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setPageCount(1);
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-ink-900/90 px-5 py-3 ring-1 ring-white/10 hover:ring-gold-400/60 hover:bg-ink-900 transition-all cursor-pointer"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 group-hover:text-white transition-colors">
                  Show Less
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 transition-all duration-300 group-hover:bg-gold-500 group-hover:ring-gold-400">
                  <Minus
                    size={18}
                    aria-hidden
                    className="text-gold-300 group-hover:text-ink-900 transition-colors"
                  />
                </span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 sm:left-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 sm:right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            <motion.img
              key={lightbox.images[lightbox.index].src}
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].label}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-5 inset-x-0 text-center text-white/80 text-xs uppercase tracking-[0.22em]">
              {lightbox.images[lightbox.index].label} ·{" "}
              {lightbox.index + 1}/{lightbox.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* -----------------------------------------------------------------
   ThumbnailChipBar — visual filter pills, each with a real preview
   thumbnail of that category. Wraps onto multiple lines (no scroll).
   ----------------------------------------------------------------- */
function ThumbnailChipBar({ activeCat, onChange, allLabel, allId }) {
  return (
    <div className="mt-7 sm:mt-10 flex flex-wrap gap-1.5 sm:gap-2.5">
      <ThumbnailChip
        active={activeCat === allId}
        onClick={() => onChange(allId)}
        label={allLabel}
        icon
      />
      {galleryCategories.map((c) => (
        <ThumbnailChip
          key={c.id}
          active={activeCat === c.id}
          onClick={() => onChange(c.id)}
          label={c.label}
          thumb={c.images[0]}
        />
      ))}
    </div>
  );
}

function ThumbnailChip({ active, onClick, label, thumb, icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "group cursor-pointer inline-flex items-center",
        // Mobile: clean text-only pill, symmetric padding, generous tap target
        "px-3.5 py-2 gap-0",
        // Desktop: leading thumbnail + label
        "sm:pl-1.5 sm:pr-4 sm:py-1.5 sm:gap-2.5",
        "rounded-full text-[12px] sm:text-[13px] font-semibold transition-all duration-200",
        active
          ? "bg-ink-900 text-white ring-1 sm:ring-2 ring-gold-500 shadow-sm sm:shadow-md shadow-black/20"
          : "bg-white text-ink-600 ring-1 ring-ink-200 hover:ring-gold-400 hover:text-ink-800 sm:hover:-translate-y-0.5",
      ].join(" ")}
    >
      {/* Thumbnail circle — only visible from sm and up */}
      <span
        className={[
          "hidden sm:inline-flex relative h-8 w-8 items-center justify-center rounded-full overflow-hidden shrink-0",
          icon
            ? active
              ? "bg-gold-500 text-ink-900"
              : "bg-gold-50 text-gold-700 ring-1 ring-gold-200"
            : "bg-ink-100",
        ].join(" ")}
      >
        {icon ? (
          <LayoutGrid size={14} aria-hidden />
        ) : (
          thumb && (
            <img
              src={thumb}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )
        )}
      </span>
      <span>{label}</span>
    </button>
  );
}
