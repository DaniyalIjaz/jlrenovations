import emailjs from "@emailjs/browser";

const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "").trim();
const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "").trim();
const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "").trim();

let initialized = false;

function ensureInit() {
  if (initialized || !publicKey) return;
  emailjs.init({ publicKey });
  initialized = true;
}

export function isEmailJsConfigured() {
  return Boolean(publicKey && serviceId && templateId);
}

/**
 * Sends the quote form via EmailJS. Configure the EmailJS template to deliver
 * to your inbox (e.g. jlrenovations689@gmail.com). Template variables should
 * include at least: {{from_name}}, {{from_email}}, {{phone}}, {{message}}.
 *
 * @param {{ name: string; phone: string; email: string; details: string; recipientEmail: string }} payload
 */
export async function sendQuoteRequest(payload) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "Missing EmailJS environment variables. Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to your .env file."
    );
  }

  ensureInit();

  const { name, phone, email, details, recipientEmail } = payload;

  return emailjs.send(
    serviceId,
    templateId,
    {
      from_name: name,
      from_email: email || "—",
      phone,
      message: details,
      reply_to: email || recipientEmail,
      to_email: recipientEmail,
      subject: `Quote request — ${name}`,
    },
    { publicKey }
  );
}
