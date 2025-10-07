import { Metadata } from "next";
import ThePatio from "../../components/features/ThePatio";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("patio.title"),
    description: t("patio.description"),
  };
}

export default function ThePatioPage() {
  return <ThePatio />;
}
