import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

type ButtonVariant = "primary" | "secondary" | "green" | "outline";
type IconName = "whatsapp";

const icons: Record<IconName, ReactNode> = {
  whatsapp: <FaWhatsapp className="w-4 h-4" />,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  iconLeft?: IconName;
  iconRight?: IconName;
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
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold font-urbanist transition-colors cursor-pointer flex items-center gap-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {iconLeft && icons[iconLeft]}
      {children}
      {iconRight && icons[iconRight]}
    </button>
  );
}
