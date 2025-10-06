import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
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
