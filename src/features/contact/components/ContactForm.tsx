"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import {
  createContactFormSchema,
  type ContactFormValues,
} from "../data/contactFormSchema";
import { Button } from "@/shared/components/ui";
import { MotionButton } from "@/shared/motion";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface ContactApiResponse {
  readonly message?: string;
  readonly fieldErrors?: Record<string, string>;
}

const fieldClassName = [
  "focus-ring min-h-12 w-full rounded-[var(--shape-radius-default)]",
  "border border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)]",
  "px-4 py-3 text-[length:var(--typography-size-body)] text-[var(--color-text-primary)]",
  "placeholder:text-[var(--color-text-muted)]",
  "hover:border-[var(--color-border)]",
].join(" ");

const errorClassName =
  "text-[length:var(--typography-size-body-sm)] text-[var(--color-danger)]";

async function parseContactResponse(response: Response) {
  const data: unknown = await response.json().catch(() => ({}));

  if (typeof data !== "object" || data === null) {
    return {};
  }

  return data as ContactApiResponse;
}

export function ContactForm() {
  const t = useTranslations("Contact.form");
  function getFieldErrorMessage(name: "fullName" | "email" | "message") {
    if (name === "fullName") {
      return t("errors.fullName");
    }

    if (name === "email") {
      return t("errors.email");
    }

    return t("errors.message");
  }

  const contactFormSchema = useMemo(
    () =>
      createContactFormSchema({
        fullName: t("errors.fullName"),
        fullNameMax: t("errors.fullNameMax"),
        email: t("errors.email"),
        emailMax: t("errors.emailMax"),
        message: t("errors.message"),
        messageMax: t("errors.messageMax"),
      }),
    [t],
  );
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      company: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    setFormMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
      }),
    });
    const data = await parseContactResponse(response);

    if (!response.ok) {
      Object.entries(data.fieldErrors ?? {}).forEach(([name]) => {
        if (name === "fullName" || name === "email" || name === "message") {
          setError(name, { message: getFieldErrorMessage(name) });
        }
      });

      setStatus("error");
      setFormMessage(t("error"));

      return;
    }

    setStatus("success");
    setFormMessage(t("success"));
    reset();
  }

  const buttonLabel =
    status === "submitting"
      ? t("sending")
      : status === "success"
        ? t("sent")
        : status === "error"
          ? t("tryAgain")
          : t("send");

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("company")}
      />
      <div className="space-y-2">
        <label
          htmlFor="contact-full-name"
          className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-primary)]"
        >
          {t("fullName")}
        </label>
        <input
          id="contact-full-name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.fullName ? "true" : "false"}
          aria-describedby={
            errors.fullName ? "contact-full-name-error" : undefined
          }
          className={fieldClassName}
          {...register("fullName")}
        />
        {errors.fullName?.message ? (
          <p id="contact-full-name-error" className={errorClassName}>
            {errors.fullName.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-primary)]"
        >
          {t("email")}
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={fieldClassName}
          {...register("email")}
        />
        {errors.email?.message ? (
          <p id="contact-email-error" className={errorClassName}>
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-primary)]"
        >
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          rows={6}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className={[fieldClassName, "resize-y"].join(" ")}
          {...register("message")}
        />
        {errors.message?.message ? (
          <p id="contact-message-error" className={errorClassName}>
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-3">
        <MotionButton disabled={isSubmitting} className="w-full sm:w-auto">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {buttonLabel}
          </Button>
        </MotionButton>
        {formMessage ? (
          <p
            role="status"
            aria-live="polite"
            className="text-[length:var(--typography-size-body-sm)] text-[var(--color-text-secondary)]"
          >
            {formMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
