import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import AppWrapper from '../components/AppWrapper';
import StructuredData from '../components/seo/StructuredData';
import { siteConfig, getAbsoluteUrl, getLocalizedUrl } from '@/config/site';
import { Metadata } from 'next';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: {
      default: t('home.title'),
      template: '%s | El Higo',
    },
    description: t('home.description'),
    keywords: [
      'restaurante Granada',
      'Albaicín',
      'cocina mediterránea',
      'restaurante vegetariano',
      'tapas Granada',
      'patio secreto',
      'hummus casero',
      'berenjenas',
      'comida vegana',
      'terraza Albaicín'
    ],
    authors: [{ name: siteConfig.business.name }],
    creator: siteConfig.business.name,
    publisher: siteConfig.business.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      url: getLocalizedUrl(locale),
      siteName: siteConfig.business.name,
      title: t('home.title'),
      description: t('home.description'),
      images: [
        {
          url: getAbsoluteUrl('/og-image.jpg'),
          width: 1200,
          height: 630,
          alt: 'El Higo - Restaurante en el Albaicín',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
      images: [getAbsoluteUrl('/og-image.jpg')],
    },
    alternates: {
      canonical: getLocalizedUrl(locale),
      languages: {
        'es': getLocalizedUrl('es'),
        'en': getLocalizedUrl('en'),
      },
    },
    verification: {
      google: siteConfig.verification.google,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <AppWrapper>
            {children}
          </AppWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
