import { SiInstagram } from "react-icons/si";
import { cn } from "../lib/cn";

/** Official Instagram mark (Simple Icons), tinted to match the nav/footer. */
export default function InstagramIcon({ size = 16, className = "" }) {
  return (
    <SiInstagram
      size={size}
      className={cn("shrink-0 text-gold-400", className)}
      aria-hidden
    />
  );
}
