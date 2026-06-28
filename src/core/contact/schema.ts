import { z } from "zod";

/** Validačná schéma kontaktného formulára — zdieľaná klientom aj serverom. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Zadajte, prosím, vaše meno.")
    .max(80, "Meno je príliš dlhé."),
  email: z
    .string()
    .trim()
    .min(1, "Zadajte, prosím, váš e-mail.")
    .email("Zadajte platnú e-mailovú adresu."),
  company: z.string().trim().max(120, "Názov firmy je príliš dlhý.").optional(),
  service: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Napíšte nám aspoň pár viet (min. 10 znakov).")
    .max(3000, "Správa je príliš dlhá."),
  // GDPR súhlas so spracovaním
  consent: z
    .boolean()
    .refine((v) => v === true, "Pre odoslanie je potrebný súhlas."),
  // Honeypot proti spamu — musí ostať prázdny
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
