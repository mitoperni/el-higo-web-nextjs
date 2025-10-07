import { siteConfig, getAbsoluteUrl, getLocalizedUrl } from '@/config/site';

export default function StructuredData({ locale }: { locale: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteConfig.business.name,
    "image": [
      getAbsoluteUrl('/og-image.jpg'),
      getAbsoluteUrl('/og-image-menu.jpg'),
      getAbsoluteUrl('/og-image-patio.jpg')
    ],
    "@id": siteConfig.baseUrl,
    "url": siteConfig.baseUrl,
    "telephone": siteConfig.business.phone,
    "priceRange": siteConfig.business.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.business.address.street,
      "addressLocality": siteConfig.business.address.city,
      "addressRegion": siteConfig.business.address.region,
      "postalCode": siteConfig.business.address.postalCode,
      "addressCountry": siteConfig.business.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.business.geo.latitude,
      "longitude": siteConfig.business.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": siteConfig.business.openingHours.days,
        "opens": siteConfig.business.openingHours.opens,
        "closes": siteConfig.business.openingHours.closes
      }
    ],
    "servesCuisine": siteConfig.business.cuisine,
    "menu": getLocalizedUrl(locale, '/carta'),
    "acceptsReservations": "True",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.business.rating.value,
      "reviewCount": siteConfig.business.rating.count
    },
    "description": locale === 'es'
      ? "Un rincón escondido en el Albaicín de Granada. Descubre sabores auténticos en un ambiente único."
      : "A hidden corner in Granada's Albaicín. Discover authentic flavors in a unique atmosphere.",
    "hasMenu": {
      "@type": "Menu",
      "name": locale === 'es' ? "Nuestra Carta" : "Our Menu",
      "description": locale === 'es'
        ? "Descubre nuestra carta mediterránea con opciones vegetarianas y veganas."
        : "Discover our Mediterranean menu with vegetarian and vegan options.",
      "url": getLocalizedUrl(locale, '/carta')
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://wa.me/${siteConfig.business.whatsapp.replace('+', '')}`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": locale === 'es' ? "Reserva en El Higo" : "Reservation at El Higo"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
