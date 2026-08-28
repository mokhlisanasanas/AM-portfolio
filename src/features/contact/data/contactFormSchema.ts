import { z } from "zod";

export interface ContactFormErrorMessages {
  readonly fullName: string;
  readonly fullNameMax: string;
  readonly email: string;
  readonly emailMax: string;
  readonly message: string;
  readonly messageMax: string;
}

const defaultContactFormErrorMessages: ContactFormErrorMessages = {
  fullName: "Enter your full name.",
  fullNameMax: "Full name is too long.",
  email: "Enter a valid email address.",
  emailMax: "Email address is too long.",
  message: "Message must be at least 20 characters.",
  messageMax: "Message is too long.",
};

export function createContactFormSchema(
  messages: ContactFormErrorMessages = defaultContactFormErrorMessages,
) {
  return z.object({
    fullName: z
      .string()
      .trim()
      .min(2, messages.fullName)
      .max(120, messages.fullNameMax),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email(messages.email)
      .max(254, messages.emailMax),
    message: z
      .string()
      .trim()
      .min(20, messages.message)
      .max(5000, messages.messageMax),
    company: z.string().max(0).optional(),
  });
}

export const contactFormSchema = createContactFormSchema();

export type ContactFormValues = z.input<typeof contactFormSchema>;
export type ContactFormPayload = z.output<typeof contactFormSchema>;
