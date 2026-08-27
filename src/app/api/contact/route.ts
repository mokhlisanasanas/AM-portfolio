import { NextResponse } from "next/server";
import { contactFormSchema } from "@/features/contact/data/contactFormSchema";
import { sendContactEmail } from "@/features/contact/server/contactEmail";

function isDevelopment() {
  return process.env.NODE_ENV === "development";
}

function getFieldErrors(error: unknown): Record<string, string> {
  const parsedError = contactFormSchema.safeParse(error);

  if (parsedError.success) {
    return {};
  }

  return Object.fromEntries(
    parsedError.error.issues.map((issue) => [
      issue.path.join("."),
      issue.message,
    ]),
  );
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsedPayload = contactFormSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return NextResponse.json(
      {
        message: "Please check the form fields.",
        fieldErrors: getFieldErrors(payload),
      },
      { status: 400 },
    );
  }

  const result = await sendContactEmail(parsedPayload.data);

  if (!result.ok) {
    return NextResponse.json(
      {
        message: isDevelopment()
          ? result.message ?? "Something went wrong. Please try again."
          : "Something went wrong. Please try again.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ message: "Message sent." });
}
