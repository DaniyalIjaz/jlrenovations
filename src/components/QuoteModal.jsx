import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send, X } from "lucide-react";
import { company } from "../content/site";
import {
  isEmailJsConfigured,
  sendQuoteRequest,
} from "../lib/sendQuoteRequest";
import { useSiteToast } from "../hooks/useSiteToast";

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

export default function QuoteModal({ open, onClose }) {
  const { showToast, dismissToast } = useSiteToast();
  const loadingToastIdRef = useRef(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const handleClose = useCallback(() => {
    if (loadingToastIdRef.current) {
      dismissToast(loadingToastIdRef.current);
      loadingToastIdRef.current = null;
    }
    setName("");
    setPhone("");
    setEmail("");
    setDetails("");
    setSubmitting(false);
    onClose();
  }, [dismissToast, onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, handleClose]);

  if (typeof document === "undefined") return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailJsConfigured()) {
      showToast({
        variant: "error",
        message:
          "This form is not connected yet. Add EmailJS keys to .env (see .env.example), then restart the dev server.",
        duration: 10000,
      });
      return;
    }

    const firstName = name.trim().split(/\s+/)[0] || "there";
    const loadingId = showToast({
      variant: "loading",
      message: "Sending your request…",
      duration: 0,
    });
    loadingToastIdRef.current = loadingId;

    setSubmitting(true);
    try {
      await sendQuoteRequest({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        details: details.trim(),
        recipientEmail: company.email,
      });
      dismissToast(loadingId);
      loadingToastIdRef.current = null;
      showToast({
        variant: "success",
        message: `Thanks, ${firstName}! We received your quote request and will get back to you soon.`,
        duration: 5500,
      });
      handleClose();
    } catch (err) {
      dismissToast(loadingId);
      loadingToastIdRef.current = null;
      const message =
        err &&
        typeof err === "object" &&
        "text" in err &&
        typeof err.text === "string" &&
        err.text.trim()
          ? err.text.trim()
          : err instanceof Error
            ? err.message
            : "Something went wrong. Please try again or call us.";
      showToast({ variant: "error", message, duration: 8000 });
    } finally {
      setSubmitting(false);
    }
  };

  const labelClass =
    "block text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-300/95 sm:text-xs sm:tracking-[0.16em]";
  const controlClass =
    "w-full min-w-0 max-w-full box-border rounded-xl border border-white/12 bg-white/[0.07] px-3 py-2.5 text-sm leading-snug text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] placeholder:text-white/40 outline-none transition-[border-color,box-shadow] focus:border-gold-400/45 focus:ring-2 focus:ring-gold-400/35 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-60";

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="quote-modal-root"
          className="fixed inset-0 z-[70] flex items-center justify-center p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] sm:p-5 md:p-6"
          aria-modal="true"
          role="dialog"
          aria-labelledby="quote-modal-title"
        >
          <motion.button
            type="button"
            aria-label="Close quote dialog"
            onClick={handleClose}
            variants={backdrop}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-default"
            style={{ WebkitBackdropFilter: "blur(12px)" }}
          />

          <motion.div
            variants={panel}
            initial="hidden"
            animate="show"
            exit="exit"
            className="relative z-10 box-border mx-auto flex w-full min-w-0 max-w-[min(36rem,calc(100dvw-1.5rem))] flex-col overflow-hidden rounded-2xl sm:max-w-xl sm:rounded-3xl bg-ink-900 text-white shadow-2xl shadow-black/50 ring-1 ring-white/10"
            style={{
              background:
                "radial-gradient(120% 80% at 100% 0%, rgba(212,164,74,0.18) 0%, rgba(20,20,24,0) 55%), linear-gradient(180deg, #0f0f12 0%, #0a0a0d 100%)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
            />

            <button
              type="button"
              aria-label="Close"
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-all hover:rotate-90 duration-300 cursor-pointer"
            >
              <X size={16} aria-hidden />
            </button>

            <div className="relative min-h-0 min-w-0 w-full max-h-[min(90dvh,calc(100dvh-env(safe-area-inset-top)-env(safe-area-inset-bottom)-2rem))] overflow-y-auto overscroll-contain px-4 pb-4 pt-5 sm:px-6 sm:pb-6 sm:pt-6 md:px-8 md:pb-8 md:pt-8">
              <header className="min-w-0 max-w-full pr-11 sm:pr-12">
                <span className="inline-flex max-w-full items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300 sm:text-[11px] sm:tracking-[0.26em]">
                  <span
                    className="inline-block h-px w-5 shrink-0 bg-gold-400 sm:w-6"
                    aria-hidden
                  />
                  Get a quote
                </span>
                <h2
                  id="quote-modal-title"
                  className="mt-3 max-w-full font-display text-2xl leading-[1.15] text-white sm:text-3xl sm:leading-tight"
                >
                  Tell us about your{" "}
                  <span className="italic text-gold-400">project</span>
                </h2>
                <p className="mt-2 max-w-full text-pretty text-sm leading-relaxed text-white/70">
                  Submit the form and we&apos;ll receive your details at{" "}
                  <span className="text-white/90">{company.email}</span>.
                </p>
              </header>

              <form
                onSubmit={handleSubmit}
                className="mt-6 grid min-w-0 max-w-full grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2"
              >
                <div className="flex min-w-0 max-w-full flex-col gap-2 sm:col-span-1">
                  <label htmlFor="quote-name" className={labelClass}>
                    Name <span className="text-gold-400">*</span>
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    disabled={submitting}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={controlClass}
                    placeholder="Your name"
                  />
                </div>
                <div className="flex min-w-0 max-w-full flex-col gap-2 sm:col-span-1">
                  <label htmlFor="quote-phone" className={labelClass}>
                    Phone <span className="text-gold-400">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    disabled={submitting}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={controlClass}
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div className="flex min-w-0 max-w-full flex-col gap-2 sm:col-span-2">
                  <label htmlFor="quote-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    disabled={submitting}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={controlClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="flex min-w-0 max-w-full flex-col gap-2 sm:col-span-2">
                  <label htmlFor="quote-details" className={labelClass}>
                    Project details <span className="text-gold-400">*</span>
                  </label>
                  <textarea
                    id="quote-details"
                    name="details"
                    required
                    rows={4}
                    disabled={submitting}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className={`${controlClass} min-h-[6.5rem] resize-y break-words`}
                    placeholder="What would you like done? Timeline, location, etc."
                  />
                </div>

                <div className="flex min-w-0 max-w-full flex-col-reverse gap-3 pt-1 sm:col-span-2 sm:flex-row sm:pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={submitting}
                    className="btn btn-ghost min-h-[3rem] w-full min-w-0 shrink-0 justify-center disabled:pointer-events-none disabled:opacity-50 sm:flex-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary min-h-[3rem] w-full min-w-0 shrink-0 justify-center disabled:pointer-events-none disabled:opacity-70 sm:flex-1"
                  >
                    {submitting ? (
                      <Loader2
                        size={18}
                        aria-hidden
                        className="shrink-0 animate-spin"
                      />
                    ) : (
                      <Send size={16} aria-hidden className="shrink-0" />
                    )}
                    {submitting ? "Sending…" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
