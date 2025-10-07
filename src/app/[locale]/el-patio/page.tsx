import { Metadata } from "next";
import ThePatio from "../../components/features/ThePatio";
import { getTranslations } from "next-intl/server";
import { getAbsoluteUrl, getLocalizedUrl } from '@/config/site';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("patio.title"),
    description: t("patio.description"),
    openGraph: {
      title: t("patio.title"),
      description: t("patio.description"),
      url: getLocalizedUrl(locale, '/el-patio'),
      type: 'website',
      images: [
        {
          url: getAbsoluteUrl('/og-image-patio.jpg'),
          width: 1200,
          height: 630,
          alt: t("patio.title"),
        },
      ],
    },
    alternates: {
      canonical: getLocalizedUrl(locale, '/el-patio'),
      languages: {
        'es': getLocalizedUrl('es', '/el-patio'),
        'en': getLocalizedUrl('en', '/el-patio'),
      },
    },
  };
}

export default function ThePatioPage() {
  return <ThePatio />;
}
