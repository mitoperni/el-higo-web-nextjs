import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Reservations from '../../components/features/Reservations';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('reservations.title'),
    description: t('reservations.description'),
  };
}

export default function ReservationsPage() {
  return <Reservations />;
}
