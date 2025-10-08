import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAbsoluteUrl, getLocalizedUrl } from "@/config/site";
import Reservations from "../../components/features/Reservations";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("reservations.title"),
    description: t("reservations.description"),
    openGraph: {
      title: t("reservations.title"),
      description: t("reservations.description"),
      url: getLocalizedUrl(locale, "/reservas"),
      type: "website",
      images: [
        {
          url: getAbsoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: t("reservations.title"),
        },
      ],
    },
    alternates: {
      canonical: getLocalizedUrl(locale, "/reservas"),
      languages: {
        es: getLocalizedUrl("es", "/reservas"),
        en: getLocalizedUrl("en", "/reservas"),
      },
    },
  };
}

export default function ReservationsPage() {
  return (
    <div className="pt-16">
      <Reservations />
    </div>
  );
}
