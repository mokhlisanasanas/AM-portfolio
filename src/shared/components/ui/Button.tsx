import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  getActionClassName,
  type ActionSize,
  type ActionVariant,
} from "./actionStyles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly variant?: ActionVariant;
  readonly size?: ActionSize;
}

export function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        getActionClassName({ variant, size }),
        "disabled:cursor-not-allowed disabled:opacity-[var(--opacity-50)]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
