import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export type ButtonProps = ButtonBaseProps &
  (({ href?: undefined } & ComponentPropsWithoutRef<"button">) | ({ href: string } & Omit<ComponentPropsWithoutRef<"a">, "href">));
