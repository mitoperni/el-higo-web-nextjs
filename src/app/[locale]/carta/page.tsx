import { Metadata } from "next";
import Menu from "../../components/features/Menu";
import { getTranslations } from "next-intl/server";
import { getAbsoluteUrl, getLocalizedUrl } from "@/config/site";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("menu.title"),
    description: t("menu.description"),
    openGraph: {
      title: t("menu.title"),
      description: t("menu.description"),
      url: getLocalizedUrl(locale, "/carta"),
      type: "website",
      images: [
        {
          url: getAbsoluteUrl("/og-image-menu.jpg"),
          width: 1200,
          height: 630,
          alt: t("menu.title"),
        },
      ],
    },
    alternates: {
      canonical: getLocalizedUrl(locale, "/carta"),
      languages: {
        es: getLocalizedUrl("es", "/carta"),
        en: getLocalizedUrl("en", "/carta"),
      },
    },
  };
}

export default function MenuPage() {
  return (
    <div className="pt-16">
      <Menu />
    </div>
  );
}
