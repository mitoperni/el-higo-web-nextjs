"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useLocale } from "next-intl";

interface LanguageLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const LanguageLink = ({
  to,
  children,
  className,
  onClick,
  ...props
}: LanguageLinkProps) => {
  const locale = useLocale(); // Ej: 'es' o 'en'

  const fullHref = to.startsWith(`/${locale}`) ? to : `/${locale}${to}`;

  return (
    <Link href={fullHref} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};

export default LanguageLink;
