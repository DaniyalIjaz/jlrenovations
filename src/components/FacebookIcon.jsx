import { SiFacebook } from "react-icons/si";
import { cn } from "../lib/cn";

/** Official Facebook mark (Simple Icons), tinted to match the nav/footer. */
export default function FacebookIcon({ size = 16, className = "" }) {
  return (
    <SiFacebook
      size={size}
      className={cn("shrink-0 text-gold-400", className)}
      aria-hidden
    />
  );
}
