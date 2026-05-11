import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/cn";
import logo from "../assets/logo.png";
import { company, navLinks } from "../content/site";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import TikTokIcon from "./TikTokIcon";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => {
    setOpen(false);
    setContactOpen(true);
  };
  const closeContact = () => setContactOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Full-screen blurred backdrop, rendered as a sibling of the header
          so its backdrop-filter applies cleanly to the page beneath. */}
      <AnimatePresence>
        {open && (
          <motion.button
            key="mobile-backdrop"
            type="button"
            aria-label="Close menu"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xl cursor-default"
            style={{ WebkitBackdropFilter: "blur(20px)" }}
          />
        )}
      </AnimatePresence>

      <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-ink-900/85 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/55 to-transparent"
      )}
    >
      {/* Subtle gold gradient line at the bottom of the nav when scrolled */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent transition-opacity duration-300",
          scrolled || open ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          className="flex items-center gap-2.5 md:gap-3 min-w-0"
          aria-label={`${company.shortName} home`}
          onClick={close}
        >
          <img
            src={logo}
            alt={`${company.shortName} logo`}
            className="h-8 w-8 md:h-11 md:w-11 object-contain drop-shadow shrink-0"
            loading="eager"
            decoding="async"
          />
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-display text-sm md:text-lg text-white tracking-wide">
              {company.shortName}
            </span>
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.22em] text-gold-300">
              {company.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative text-sm font-medium text-white/85 hover:text-white transition-colors py-2"
            >
              {l.label}
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on Instagram (${company.instagramHandle})`}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-gold-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_-4px_rgba(212,164,74,0.5)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,144,42,0.08) 100%)",
              }}
            >
              <InstagramIcon size={17} />
            </a>
            <a
              href={company.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on Facebook (${company.facebookHandle})`}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-gold-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_-4px_rgba(212,164,74,0.5)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,144,42,0.08) 100%)",
              }}
            >
              <FacebookIcon size={17} />
            </a>
            <a
              href={company.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on TikTok (${company.tiktokHandle})`}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-gold-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_-4px_rgba(212,164,74,0.5)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,144,42,0.08) 100%)",
              }}
            >
              <TikTokIcon size={17} />
            </a>
          </div>
          <span aria-hidden className="h-6 w-px bg-white/15" />
          <button
            type="button"
            onClick={openContact}
            className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full btn btn-primary px-5 py-2"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
              Contact Us
            </span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 transition-all duration-300 group-hover:bg-white/20">
              <Mail size={18} aria-hidden className="text-white" />
            </span>
          </button>
        </div>

        {/* Mobile: Contact + hamburger (social links live inside the menu) */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={openContact}
            className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full btn btn-primary px-4 py-4 sm:gap-3 sm:px-5 sm:py-3"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.22em]">
              Contact Us
            </span>

          </button>
          {/* Hamburger ↔ cross morph (pure CSS transforms — buttery smooth) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
              open
                ? "bg-gold-500 ring-1 ring-gold-300"
                : "bg-white/10 hover:bg-white/20"
            )}
          >
            <span
              aria-hidden
              className="relative block h-4 w-5"
              data-open={open}
            >
              <span
                className={cn(
                  "absolute left-0 right-0 h-[2px] rounded-full origin-center transition-[transform,top,background-color] duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]",
                  open ? "bg-ink-900" : "bg-white"
                )}
                style={{
                  top: open ? "calc(50% - 1px)" : "0px",
                  transform: open ? "rotate(45deg)" : "rotate(0deg)",
                }}
              />
              <span
                className={cn(
                  "absolute left-0 right-0 top-[calc(50%-1px)] h-[2px] rounded-full transition-[opacity,transform] duration-200 ease-out",
                  open ? "bg-ink-900" : "bg-white"
                )}
                style={{
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0.4)" : "scaleX(1)",
                }}
              />
              <span
                className={cn(
                  "absolute left-0 right-0 h-[2px] rounded-full origin-center transition-[transform,top,background-color] duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]",
                  open ? "bg-ink-900" : "bg-white"
                )}
                style={{
                  top: open ? "calc(50% - 1px)" : "calc(100% - 2px)",
                  transform: open ? "rotate(-45deg)" : "rotate(0deg)",
                }}
              />
            </span>
          </button>
        </div>

      </div>

      {/* Mobile menu panel (sits on top of the blurred backdrop) */}
      <AnimatePresence>
        {open && (
            <motion.nav
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden relative bg-ink-900/92 border-t border-white/10 shadow-2xl shadow-black/40"
            >
              {/* Gold accent line */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              />

              <div className="container-page py-6">
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
                  Menu
                </p>

                <ul className="mt-3 flex flex-col">
                  {navLinks.map((l, i) => (
                    <motion.li
                      key={l.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: 0.04 + i * 0.04,
                        ease: "easeOut",
                      }}
                    >
                      <a
                        href={`#${l.id}`}
                        onClick={close}
                        className="group flex items-center justify-between py-3.5 border-b border-white/10 text-base font-medium text-white/90 hover:text-gold-300 transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span
                            aria-hidden
                            className="text-[10px] font-mono text-gold-400/70 w-6"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {l.label}
                        </span>
                        <ArrowRight
                          size={16}
                          aria-hidden
                          className="text-white/30 group-hover:text-gold-300 group-hover:translate-x-1 transition-all"
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Social row */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.04 + navLinks.length * 0.04,
                  }}
                  className="mt-6 flex items-center gap-3"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold">
                    Follow Us
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-white/10 min-w-[1rem]" />
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <a
                      href={company.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      aria-label={`Instagram ${company.instagramHandle}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-gold-400 transition-all"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(200,144,42,0.12) 100%)",
                      }}
                    >
                      <InstagramIcon size={18} />
                    </a>
                    <a
                      href={company.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      aria-label={`Facebook ${company.facebookHandle}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-gold-400 transition-all"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(200,144,42,0.12) 100%)",
                      }}
                    >
                      <FacebookIcon size={18} />
                    </a>
                    <a
                      href={company.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      aria-label={`TikTok ${company.tiktokHandle}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-gold-400 transition-all"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(200,144,42,0.12) 100%)",
                      }}
                    >
                      <TikTokIcon size={18} />
                    </a>
                  </div>
                </motion.div>

                <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {company.address}
                </p>
              </div>
            </motion.nav>
        )}
      </AnimatePresence>
    </header>

    <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
