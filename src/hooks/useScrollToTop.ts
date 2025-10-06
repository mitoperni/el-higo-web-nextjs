'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useScrollToTop = (): void => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
};

export default useScrollToTop;