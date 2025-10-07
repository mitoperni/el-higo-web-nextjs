import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getAbsoluteUrl, getLocalizedUrl } from '@/config/site';
import Hero from '../components/features/Hero';
import Reviews from '../components/features/Reviews/Reviews';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('home.title'),
    description: t('home.description'),
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      url: getLocalizedUrl(locale),
      type: 'website',
      images: [
        {
          url: getAbsoluteUrl('/og-image.jpg'),
          width: 1200,
          height: 630,
          alt: t('home.title'),
        },
      ],
    },
    alternates: {
      canonical: getLocalizedUrl(locale),
      languages: {
        'es': getLocalizedUrl('es'),
        'en': getLocalizedUrl('en'),
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reviews />
    </>
  );
}
