import { useTranslations } from "next-intl";
import Icons from "../../components/ui/Icons";
import MapButton from "../../components/features/how-to-find-us/MapButton";
import { getTranslations } from "next-intl/server";
import { getAbsoluteUrl, getLocalizedUrl } from '@/config/site';
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("howToFind.title"),
    description: t("howToFind.description"),
    openGraph: {
      title: t("howToFind.title"),
      description: t("howToFind.description"),
      url: getLocalizedUrl(locale, '/como-llegar'),
      type: 'website',
      images: [
        {
          url: getAbsoluteUrl('/og-image.jpg'),
          width: 1200,
          height: 630,
          alt: t("howToFind.title"),
        },
      ],
    },
    alternates: {
      canonical: getLocalizedUrl(locale, '/como-llegar'),
      languages: {
        'es': getLocalizedUrl('es', '/como-llegar'),
        'en': getLocalizedUrl('en', '/como-llegar'),
      },
    },
  };
}

export default function HowToFindUsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t("howToFindUs.title")}
          </h1>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text font-Bodoni max-w-2xl mx-auto font-body">
            {t("howToFindUs.subtitle")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Directions */}
            <div>
              <h2 className="text-3xl font-display font-bold text-dark-text mb-6">
                {t("contact.address")}
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Icons.Location className="w-6 h-6 text-terracotta mt-1 mr-3" />
                  <div>
                    <p className="font-body text-dark-text font-semibold">
                      {t("howToFindUs.address")}
                    </p>
                    <p className="font-body text-dark-text">
                      {t("howToFindUs.city")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icons.Phone className="w-6 h-6 text-terracotta mt-1 mr-3" />
                  <div>
                    <p className="font-body text-dark-text font-semibold">
                      {t("contact.phone")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-dark-text mb-4">
                  {t("howToFindUs.instructions")}
                </h3>
                <p className="font-body text-dark-text leading-relaxed">
                  {t("howToFindUs.directions")}
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.8856!2d-3.5926795!3d37.1831339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcc66cb5daeb%3A0xb4bb89f0659d068a!2sEl%20Higo!5e0!3m2!1sen!2sus!4v1726934400000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="El Higo Location"
                  className="w-full h-96"
                ></iframe>
              </div>

              <MapButton takeMeThereText={t("howToFindUs.takeMeThere")} />
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-dark-text text-center mb-12">
              {t("howToFindUs.gettingHereTips")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-terracotta text-white p-3 rounded-full mr-4">
                    <Icons.Map className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-dark-text">
                    {t("howToFindUs.walking.title")}
                  </h3>
                </div>
                <p className="font-body text-dark-text">
                  {t("howToFindUs.walking.description")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-leaf text-white p-3 rounded-full mr-4">
                    <Icons.Document className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-dark-text">
                    {t("howToFindUs.publicTransport.title")}
                  </h3>
                </div>
                <p className="font-body text-dark-text">
                  {t("howToFindUs.publicTransport.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
