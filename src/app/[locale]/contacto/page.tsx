import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getAbsoluteUrl, getLocalizedUrl } from '@/config/site';
import Contact from '../../components/features/Contact';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('contact.title'),
    description: t('contact.description'),
    openGraph: {
      title: t('contact.title'),
      description: t('contact.description'),
      url: getLocalizedUrl(locale, '/contacto'),
      type: 'website',
      images: [
        {
          url: getAbsoluteUrl('/og-image.jpg'),
          width: 1200,
          height: 630,
          alt: t('contact.title'),
        },
      ],
    },
    alternates: {
      canonical: getLocalizedUrl(locale, '/contacto'),
      languages: {
        'es': getLocalizedUrl('es', '/contacto'),
        'en': getLocalizedUrl('en', '/contacto'),
      },
    },
  };
}

export default function ContactPage() {
  return <Contact />;
}
