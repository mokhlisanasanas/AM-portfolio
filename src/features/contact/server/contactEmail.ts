import { Resend } from "resend";
import type { ContactFormPayload } from "../data/contactFormSchema";

interface ContactEmailResult {
  readonly ok: boolean;
  readonly reason?: "provider-not-configured" | "send-failed";
  readonly message?: string;
}

const resendFromEmail = "Portfolio Contact <onboarding@resend.dev>";

function getServerEnvValue(name: "RESEND_API_KEY" | "CONTACT_TO_EMAIL") {
  return process.env[name]?.trim();
}

function normalizeSubjectValue(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function formatContactMessage(payload: ContactFormPayload) {
  return [
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

export async function sendContactEmail(
  payload: ContactFormPayload,
): Promise<ContactEmailResult> {
  const apiKey = getServerEnvValue("RESEND_API_KEY");
  const toEmail = getServerEnvValue("CONTACT_TO_EMAIL");

  if (!apiKey || !toEmail) {
    return {
      ok: false,
      reason: "provider-not-configured",
      message: "Resend email delivery is not configured.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: resendFromEmail,
      to: [toEmail],
      subject: `Portfolio contact from ${normalizeSubjectValue(payload.fullName)}`,
      text: formatContactMessage(payload),
      replyTo: payload.email,
    });

    if (error) {
      return {
        ok: false,
        reason: "send-failed",
        message: error.message,
      };
    }

    return {
      ok: true,
    };
  } catch {
    return {
      ok: false,
      reason: "send-failed",
    };
  }
}
