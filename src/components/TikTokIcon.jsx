import { SiTiktok } from "react-icons/si";
import { cn } from "../lib/cn";

/** Official TikTok mark (Simple Icons), tinted to match the nav/footer. */
export default function TikTokIcon({ size = 16, className = "" }) {
  return (
    <SiTiktok
      size={size}
      className={cn("shrink-0 text-gold-400", className)}
      aria-hidden
    />
  );
}
