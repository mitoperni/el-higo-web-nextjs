'use client';

import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (locale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
      window.location.reload();
    });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('es')}
        disabled={isPending}
        className="px-3 py-1 rounded hover:bg-gray-100"
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        disabled={isPending}
        className="px-3 py-1 rounded hover:bg-gray-100"
      >
        EN
      </button>
    </div>
  );
}
