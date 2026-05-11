import { useContext } from "react";
import { SiteToastContext } from "../context/SiteToastContext.jsx";

export function useSiteToast() {
  const ctx = useContext(SiteToastContext);
  if (!ctx) {
    throw new Error("useSiteToast must be used within SiteToastProvider");
  }
  return ctx;
}
