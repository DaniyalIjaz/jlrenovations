import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { company } from "../content/site";
import InstagramIcon from "./InstagramIcon";

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

const panel = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 26, mass: 0.9 },
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.97,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.05, duration: 0.35, ease: "easeOut" },
  }),
};

export default function ContactModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  const waUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="contact-modal-root"
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          aria-modal="true"
          role="dialog"
          aria-labelledby="contact-modal-title"
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close contact dialog"
            onClick={onClose}
            variants={backdrop}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-default"
            style={{ WebkitBackdropFilter: "blur(12px)" }}
          />

          {/* Panel */}
          <motion.div
            variants={panel}
            initial="hidden"
            animate="show"
            exit="exit"
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl bg-ink-900 text-white shadow-2xl shadow-black/50 ring-1 ring-white/10"
            style={{
              background:
                "radial-gradient(120% 80% at 100% 0%, rgba(212,164,74,0.18) 0%, rgba(20,20,24,0) 55%), linear-gradient(180deg, #0f0f12 0%, #0a0a0d 100%)",
            }}
          >
            {/* Top gold hairline */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
            />

            {/* Soft halos */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-gold-400/15 blur-3xl"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
            />

            {/* Close */}
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-all hover:rotate-90 duration-300 cursor-pointer"
            >
              <X size={16} aria-hidden />
            </button>

            <div className="relative p-6 sm:p-8 md:p-10">
              {/* Header */}
              <motion.div custom={0} variants={item} initial="hidden" animate="show">
                <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold-300 font-semibold">
                  <span className="inline-block h-px w-6 bg-gold-400" />
                  Contact
                </span>
                <h2
                  id="contact-modal-title"
                  className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-white"
                >
                  Let's talk about your{" "}
                  <span className="italic text-gold-400">project</span>
                </h2>
                <p className="mt-2 text-sm sm:text-base text-white/70 max-w-xl">
                  Family-owned, no pressure, free in-home estimates. Reach out
                  the way that's easiest for you. We typically respond within
                  the hour.
                </p>
              </motion.div>

              {/* Contact rows */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <ContactRow
                  i={1}
                  icon={MapPin}
                  label="Visit / Mail"
                  value={company.address}
                />
                <ContactRow
                  i={2}
                  icon={Mail}
                  label="Email"
                  value={company.email}
                  href={`mailto:${company.email}`}
                />
                {company.phones.map((p, idx) => (
                  <ContactRow
                    key={p.tel}
                    i={3 + idx}
                    icon={Phone}
                    label={idx === 0 ? "Office" : "Mobile / WhatsApp"}
                    value={p.value}
                    href={`tel:${p.tel}`}
                  />
                ))}
                <ContactRow
                  i={5}
                  icon={Clock}
                  label="Hours"
                  value="Mon – Sat · 8:00 AM – 6:00 PM"
                />
                <motion.a
                  custom={6}
                  variants={item}
                  initial="hidden"
                  animate="show"
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-gold-400/60 hover:bg-white/[0.05] transition-all p-3.5"
                >
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-white/10 shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,144,42,0.12) 100%)",
                    }}
                  >
                    <InstagramIcon size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-gold-300/80 font-semibold">
                      Instagram
                    </span>
                    <span className="block text-sm text-white/90 truncate">
                      {company.instagramHandle}
                    </span>
                  </span>
                  <ArrowRight
                    size={14}
                    aria-hidden
                    className="text-white/30 group-hover:text-gold-300 group-hover:translate-x-1 transition-all"
                  />
                </motion.a>
              </div>

              {/* CTAs */}
              <motion.div
                custom={7}
                variants={item}
                initial="hidden"
                animate="show"
                className="mt-6 sm:mt-8"
              >
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn justify-center !bg-[#25D366] !text-white hover:!bg-[#1ebe5a] w-full"
                >
                  <MessageCircle size={16} aria-hidden />
                  Message on WhatsApp
                </a>
              </motion.div>

              <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-white/40">
                Serving {company.baseCity} & surrounding communities
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function ContactRow({ i, icon: Icon, label, value, href }) {
  const Wrapper = href ? motion.a : motion.div;
  const wrapperProps = href
    ? { href, ...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
    : {};

  return (
    <Wrapper
      custom={i}
      variants={item}
      initial="hidden"
      animate="show"
      {...wrapperProps}
      className={`group flex items-center gap-3 rounded-xl bg-white/[0.03] ring-1 ring-white/10 ${
        href
          ? "hover:ring-gold-400/60 hover:bg-white/[0.05] transition-all"
          : ""
      } p-3.5`}
    >
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gold-300 shrink-0 ring-1 ring-gold-400/25"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,210,127,0.12) 0%, rgba(168,128,31,0.18) 100%)",
        }}
      >
        <Icon size={16} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[10px] uppercase tracking-[0.22em] text-gold-300/80 font-semibold">
          {label}
        </span>
        <span
          className={`block text-sm text-white/90 ${
            href ? "group-hover:text-white transition-colors" : ""
          } break-words`}
        >
          {value}
        </span>
      </span>
      {href && (
        <ArrowRight
          size={14}
          aria-hidden
          className="text-white/30 group-hover:text-gold-300 group-hover:translate-x-1 transition-all shrink-0"
        />
      )}
    </Wrapper>
  );
}
