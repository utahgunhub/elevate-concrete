import type { MouseEvent, ReactNode } from "react";
import { navigate } from "@/lib/navigate";

interface NavLinkProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
  onClick?: () => void;
}

/** Internal client-side navigation link — no full page reload. */
export function NavLink({ href, className, style, children, onClick }: NavLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let browser handle
    e.preventDefault();
    navigate(href);
    onClick?.();
  }

  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
}
