import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "../content/site";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          key="wa"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with JL Renovations on WhatsApp"
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
          className="group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] inline-flex items-center gap-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white px-4 py-3 md:px-5 md:py-3.5 shadow-[0_18px_40px_-15px_rgba(37,211,102,0.55)] ring-1 ring-white/20 transition-colors"
        >
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-75"
            />
            <WhatsAppIcon />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-[0.22em] opacity-80">
              Chat with us
            </span>
            <span className="text-sm font-semibold">WhatsApp</span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="22"
      height="22"
      aria-hidden
      className="relative drop-shadow-sm"
      fill="currentColor"
    >
      <path d="M19.11 17.27c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.13.18 1.94 2.97 4.71 4.16.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.13-.25-.2-.52-.34zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.16 1.6 5.97L4 28l6.18-1.61A11.93 11.93 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 22c-1.86 0-3.69-.5-5.28-1.45l-.38-.22-3.66.96.98-3.57-.25-.37A9.99 9.99 0 0 1 6 16c0-5.51 4.49-10 10-10s10 4.49 10 10-4.49 10-10 10z" />
    </svg>
  );
}
