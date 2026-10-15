import type { ComponentProps, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export type ButtonProps = ButtonBaseProps &
  (({ href?: undefined } & ComponentProps<"button">) | ({ href: string } & Omit<ComponentProps<"a">, "href">));
