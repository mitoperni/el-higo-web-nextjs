'use client';
import { useTranslations } from "next-intl";
import Icons from "../ui/Icons";

const Contact = () => {
  const t = useTranslations();

  return (
    <section id="contact" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t("contact.title")}
          </h1>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text max-w-2xl mx-auto font-body">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-dark-text mb-6">
                {t("contact.informationTitle")}
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icons.Location className="w-6 h-6 text-terracotta mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-dark-text">
                      {t("contact.addressLabel")}
                    </h3>
                    <p className="text-dark-text font-body">
                      {t("contact.address")}
                      <br />
                      {t("contact.city")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icons.Phone className="w-6 h-6 text-terracotta mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-dark-text">
                      {t("contact.phoneLabel")}
                    </h3>
                    <p className="text-dark-text font-body">
                      <a
                        href="tel:+34858984102"
                        className="hover:text-terracotta transition-colors"
                      >
                        {t("contact.phone")}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icons.WhatsApp className="w-6 h-6 text-terracotta mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-dark-text">
                      {t("contact.whatsappLabel")}
                    </h3>
                    <p className="text-dark-text font-body">
                      <a
                        href={`https://wa.me/34858984102`}
                        className="hover:text-terracotta transition-colors"
                      >
                        {t("contact.phone")}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icons.Clock className="w-6 h-6 text-terracotta mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-dark-text">
                      {t("contact.hours")}
                    </h3>
                    <div className="text-dark-text font-body">
                      <p>{t("contact.hoursDetail")}</p>
                      <p className="text-sm text-terracotta mt-1">
                        {t("contact.closed")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-dark-text mb-6">
                {t("contact.socialMedia")}
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/elhigogranada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300"
                >
                  <Icons.Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/elhigogranada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full transition-colors duration-300"
                >
                  <Icons.Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="my-auto">
            <div className="bg-cream text-dark-text rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-display font-bold mb-4">
                {t("contact.visitUsTitle")}
              </h3>
              <p className="font-body mb-6">{t("reservations.note")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/34858984102?text=${encodeURIComponent(
                    t("reservations.note")
                  )}`}
                  className="inline-flex items-center bg-green-leaf text-white hover:bg-white hover:text-green-leaf font-body font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <Icons.WhatsApp className="w-5 h-5 mr-2" />
                  {t("reservations.whatsapp")}
                </a>
                <a
                  href="tel:+34858984102"
                  className="inline-flex items-center bg-terracotta text-white hover:bg-white hover:text-terracotta font-body font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <Icons.Phone className="w-5 h-5 mr-2" />
                  {t("contact.call")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
