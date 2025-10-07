// Configuración del sitio - todas las URLs y datos vienen de variables de entorno

export const siteConfig = {
  // URL base del sitio
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',

  // Información del negocio
  business: {
    name: 'El Higo',
    phone: process.env.NEXT_PUBLIC_PHONE || '+34858984102',
    whatsapp: process.env.NEXT_PUBLIC_PHONE || '+34858984102',
    address: {
      street: process.env.NEXT_PUBLIC_ADDRESS_STREET || 'Calle Panaderos, 17',
      city: process.env.NEXT_PUBLIC_ADDRESS_CITY || 'Granada',
      region: process.env.NEXT_PUBLIC_ADDRESS_REGION || 'Andalucía',
      postalCode: process.env.NEXT_PUBLIC_ADDRESS_POSTAL_CODE || '18010',
      country: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || 'ES',
    },
    geo: {
      latitude: parseFloat(process.env.NEXT_PUBLIC_LATITUDE || '37.1831339'),
      longitude: parseFloat(process.env.NEXT_PUBLIC_LONGITUDE || '-3.5926795'),
    },
    openingHours: {
      opens: '13:00',
      closes: '23:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
    cuisine: ['Mediterranean', 'Vegetarian', 'Vegan', 'Spanish'],
    priceRange: '€€',
    rating: {
      value: process.env.NEXT_PUBLIC_RATING_VALUE || '4.8',
      count: process.env.NEXT_PUBLIC_RATING_COUNT || '150',
    },
  },

  // Verificaciones
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
} as const;

// Helper para construir URLs completas
export function getAbsoluteUrl(path: string = ''): string {
  // Asegurarse de que path comience con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.baseUrl}${normalizedPath}`;
}

// Helper para construir URLs localizadas
export function getLocalizedUrl(locale: string, path: string = ''): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return getAbsoluteUrl(`/${locale}${normalizedPath}`);
}
