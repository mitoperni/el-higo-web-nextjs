import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/carta': {
      es: '/carta',
      en: '/menu',
    },
    '/el-patio': {
      es: '/el-patio',
      en: '/the-patio',
    },
    '/como-llegar': {
      es: '/como-llegar',
      en: '/how-to-find-us',
    },
    '/reservas': {
      es: '/reservas',
      en: '/reservations',
    },
    '/contacto': {
      es: '/contacto',
      en: '/contact',
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
