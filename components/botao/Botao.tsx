import React from "react";
import { twMerge } from "tailwind-merge";

type BotaoProps = {
  theme?: "primary";
  size?: "sm" | "md" | "lg" | "xl" | "auto" | "full";
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
};

export default function Botao({
  theme = "primary",
  size = "auto",
  children,
  className,
  icon,
}: BotaoProps) {
  const basicStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-sm text-sm cursor-pointer hover:scale-102 transition active:scale-[0.97] active:translate-y-[1px]";

  const themeStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  };

  const sizeStyles = {
    sm: "w-20",
    md: "w-32",
    lg: "w-48",
    xl: "w-64",
    auto: "w-auto",
    full: "w-full",
  };

  const defaultIconClassName = "shrink-0 size-6 stroke-primary-foreground mr-2";

  const Icon =
    icon &&
    React.cloneElement(icon, {
      className: twMerge(defaultIconClassName, icon.props.className),
      "aria-hidden": true,
    });
  return (
    <button
      className={twMerge(
        basicStyles,
        themeStyles[theme],
        sizeStyles[size],
        className,
      )}
    >
      {Icon}
      {children}
    </button>
  );
}
