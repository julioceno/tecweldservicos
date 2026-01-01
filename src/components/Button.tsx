import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "green" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[var(--main)] hover:bg-[#c9171d] text-white",
  secondary: "bg-[var(--secondary)] hover:bg-[#162440] text-white",
  green: "bg-[var(--green)] hover:bg-[#1ca34d] text-white",
  outline: "bg-transparent border-2 border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold font-urbanist transition-colors cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
