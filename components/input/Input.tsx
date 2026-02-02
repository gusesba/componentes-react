import React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  size?: "sm" | "md" | "lg" | "xl" | "auto" | "full";
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export default function Input({
  size = "auto",
  className,
  ...props
}: InputProps) {
  const inputBase =
    "w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-400" +
    " disabled:cursor-not-allowed disabled:opacity-60 border border-gray-300" +
    " rounded-sm focus:border-none focus:ring-2 focus:ring-primary shadow-sm";

  const sizeStyles = {
    sm: "w-20",
    md: "w-32",
    lg: "w-48",
    xl: "w-64",
    auto: "w-auto",
    full: "w-full",
  };

  return (
    <input
      className={twMerge(inputBase, sizeStyles[size], className)}
      {...props}
    />
  );
}
