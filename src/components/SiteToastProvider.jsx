import { useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react";
import { SiteToastContext } from "../context/SiteToastContext.jsx";

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `site-toast-${idCounter}`;
}

function toastAccent(variant) {
  if (variant === "success") {
    return "from-gold-400/90 via-gold-500 to-gold-600/80";
  }
  if (variant === "error") {
    return "from-rose-400/80 via-rose-500/70 to-gold-600/40";
  }
  return "from-gold-300/80 via-gold-500/70 to-gold-700/50";
}

function ToastCard({ toast, onDismiss }) {
  const { id, variant, message } = toast;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      role={variant === "error" ? "alert" : "status"}
      aria-live={variant === "error" ? "assertive" : "polite"}
      className="pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-ink-900 text-left text-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)] ring-1 ring-gold-500/15"
      style={{
        background:
          "linear-gradient(165deg, rgba(31,31,36,0.98) 0%, rgba(10,10,13,0.99) 100%)",
      }}
    >
      <div
        className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${toastAccent(variant)}`}
        aria-hidden
      />
      <div className="flex gap-3 p-3.5 pl-4 pt-4">
        <span className="mt-0.5 shrink-0 text-gold-400" aria-hidden>
          {variant === "loading" && (
            <Loader2 className="size-5 animate-spin text-gold-400" />
          )}
          {variant === "success" && (
            <CheckCircle2 className="size-5 text-gold-400" strokeWidth={2} />
          )}
          {variant === "error" && (
            <AlertCircle className="size-5 text-rose-300/95" strokeWidth={2} />
          )}
        </span>
        <p className="min-w-0 flex-1 pt-0.5 text-sm leading-snug text-white/92 text-pretty">
          {message}
        </p>
        {variant !== "loading" && (
          <button
            type="button"
            onClick={() => onDismiss(id)}
            className="-m-1 shrink-0 rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Dismiss notification"
          >
            <X className="size-4" aria-hidden />
          </button>
        )}
      </div>
    </motion.div>
  );
}

function ToastViewport({ toasts, onDismiss }) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex flex-col items-center gap-2 px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-4 sm:pb-5"
      aria-label="Notifications"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((t) => (
          <ToastCard key={t.id} toast={t} onDismiss={onDismiss} />
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}

export function SiteToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    /** @param {{ variant: 'loading' | 'success' | 'error'; message: string; duration?: number }} opts - duration 0 = until dismissed */
    ({ variant, message, duration = 4800 }) => {
      const id = nextId();
      setToasts((prev) => [...prev, { id, variant, message }]);
      if (duration > 0) {
        window.setTimeout(() => dismissToast(id), duration);
      }
      return id;
    },
    [dismissToast]
  );

  const value = useMemo(
    () => ({ showToast, dismissToast }),
    [showToast, dismissToast]
  );

  return (
    <SiteToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismissToast} />
    </SiteToastContext.Provider>
  );
}
