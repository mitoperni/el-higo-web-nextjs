'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LanguageLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const LanguageLink = ({ to, children, className, onClick, ...props }: LanguageLinkProps) => {
  return (
    <Link
      href={to}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LanguageLink;