import { ArrowRight, Mail, MapPinned, Phone } from "lucide-react";
import { company } from "../content/site";
import logo from "../assets/logo.png";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import TikTokIcon from "./TikTokIcon";

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
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <span
                  className="mt-0.5 inline-flex  shrink-0 items-center justify-center text-gold-400 "
                  aria-hidden
                >
                  <MapPinned className="size-[18px]" strokeWidth={2.25} />
                </span>
                <span className="min-w-0 pt-1.5 leading-relaxed text-white/85">
                  {company.address}
                </span>
              </li>
              {company.phones.map((p) => (
                <li key={p.tel} className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" aria-hidden />
                  <span className="select-text text-white/85">{p.value}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" aria-hidden />
                <span className="select-text break-all text-white/85">
                  {company.email}
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
              Find us
            </h3>
            <div className="mt-4 w-full overflow-hidden rounded-lg ring-1 ring-white/10 bg-white/[0.02] h-32 sm:h-36">
              <iframe
                title={`Google Map — ${company.shortName}`}
                src={company.googleMapsEmbedSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={company.googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs text-white/55 hover:text-gold-300 transition-colors"
            >
              Open in Google Maps
              <ArrowRight size={14} aria-hidden />
            </a>
          </div>

          {/* Full-width row on desktop (spans all 12 columns) */}
          <div className="w-full border-t border-white/10 pt-10 md:col-span-12 md:col-start-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold-400 font-semibold">
              Follow Us
            </p>
            <div className="mt-4 flex flex-col gap-3 md:flex-row md:gap-3 md:items-stretch">
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${company.instagramHandle}`}
                className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-gold-400/60 hover:bg-white/[0.05] transition-all p-3.5"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-gold-400/25"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,144,42,0.12) 100%)",
                  }}
                >
                  <InstagramIcon size={17} />
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
                  className="text-white/30 group-hover:text-gold-300 group-hover:translate-x-1 transition-all shrink-0"
                />
              </a>

              <a
                href={company.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook ${company.facebookHandle}`}
                className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-gold-400/60 hover:bg-white/[0.05] transition-all p-3.5"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-gold-400/25"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,144,42,0.12) 100%)",
                  }}
                >
                  <FacebookIcon size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-gold-300/80 font-semibold">
                    Facebook
                  </span>
                  <span className="block text-sm text-white/90 truncate">
                    {company.facebookHandle}
                  </span>
                </span>
                <ArrowRight
                  size={14}
                  aria-hidden
                  className="text-white/30 group-hover:text-gold-300 group-hover:translate-x-1 transition-all shrink-0"
                />
              </a>

              <a
                href={company.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`TikTok ${company.tiktokHandle}`}
                className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-gold-400/60 hover:bg-white/[0.05] transition-all p-3.5"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-gold-400/25"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,144,42,0.12) 100%)",
                  }}
                >
                  <TikTokIcon size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-gold-300/80 font-semibold">
                    TikTok
                  </span>
                  <span className="block text-sm text-white/90 truncate">
                    {company.tiktokHandle}
                  </span>
                </span>
                <ArrowRight
                  size={14}
                  aria-hidden
                  className="text-white/30 group-hover:text-gold-300 group-hover:translate-x-1 transition-all shrink-0"
                />
              </a>
            </div>
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
