import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "LHhhab8fiZXeSNaGT";
const EMAILJS_SERVICE_ID = "service_4s5lsdc";
const EMAILJS_TEMPLATE_ID = "template_b5d1j6d";

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  details: string;
};

let initialized = false;

function ensureInitialized(): void {
  if (!initialized) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    initialized = true;
  }
}

export async function sendContactForm(data: ContactFormData): Promise<void> {
  ensureInitialized();

  await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    name: data.name,
    phone: data.phone,
    email: data.email || "Not provided",
    location: data.location,
    service: data.service,
    details: data.details || "Not provided",
    submitted_at: new Date().toLocaleString("en-US", {
      timeZone: "America/Denver",
      dateStyle: "full",
      timeStyle: "short",
    }),
  });
}
