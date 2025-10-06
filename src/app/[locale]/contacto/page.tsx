import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
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
  };
}

export default function ContactPage() {
  return <Contact />;
}
