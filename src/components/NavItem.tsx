import Link from "next/link";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavItem({ href, children, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative font-urbanist text-sm font-semibold text-secondary transition-colors hover:text-main"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-main transition-all duration-300 ease-out group-hover:w-full"></span>
    </Link>
  );
}
