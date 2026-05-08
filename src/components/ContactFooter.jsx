import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { company } from "../content/site";
import logo from "../assets/logo.png";
import InstagramIcon from "./InstagramIcon";

export default function ContactFooter() {
  const waUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  return (
    <footer
      id="contact"
      className="bg-ink-950 text-white relative"
      style={{ background: "linear-gradient(180deg, #0a0a0d 0%, #050507 100%)" }}
    >
      {/* CTA card */}
      <div className="container-page -translate-y-10 sm:-translate-y-12 md:-translate-y-16">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gold-500 to-gold-600 text-ink-900 p-6 sm:p-8 md:p-12 shadow-2xl shadow-black/40">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 md:gap-10 justify-between">
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-ink-900/80">
                Ready to start?
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-4xl text-ink-900">
                Let's renovate your legacy.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-ink-900/80 max-w-xl">
                Free in-home estimates. Honest pricing. Old-world craftsmanship.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark justify-center w-full sm:w-auto"
              >
                Message on WhatsApp
                <ArrowRight size={16} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page pb-12">
        <div className="grid gap-10 md:grid-cols-12 pt-4">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={`${company.shortName} logo`}
                className="h-12 w-12 object-contain"
              />
              <div>
                <p className="font-display text-xl">{company.shortName}</p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold-400">
                  {company.subTagline}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-md">
              Family-owned renovation company built on passion, dedication, and
              a lifetime of hands-on experience. Based in {company.baseCity},
              proudly serving the surrounding communities.
            </p>
            <p className="mt-5 text-xs italic text-gold-300/90">
              "Renovate Your Legacy"
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${company.instagramHandle}`}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-gold-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_-4px_rgba(212,164,74,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,144,42,0.12) 100%)",
                }}
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-gold-300 transition-colors"
              >
                {company.instagramHandle}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-gold-400" aria-hidden />
                <span>{company.address}</span>
              </li>
              {company.phones.map((p) => (
                <li key={p.tel} className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 text-gold-400" aria-hidden />
                  <a href={`tel:${p.tel}`} className="hover:text-gold-300">
                    {p.value}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-gold-400" aria-hidden />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-gold-300 break-all"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
              Trust & Standards
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>{company.ownership}</li>
              <li>{company.established}</li>
              <li>Quality You Can Trust</li>
              <li>Free in-home estimates</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="hidden md:block">Architects of Your Dream Space</p>
        </div>
      </div>
    </footer>
  );
}
