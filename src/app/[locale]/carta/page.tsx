import { Metadata } from 'next';
import Menu from '../../components/features/Menu';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('menu.title'),
    description: t('menu.description'),
  };
}

export default function MenuPage() {
  return <Menu />;
}
