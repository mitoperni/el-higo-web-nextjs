'use client';
import { useTranslations } from 'next-intl';
import Icons from '../ui/Icons';

const Reservations = () => {
  const t = useTranslations();
  const whatsappMessage = encodeURIComponent(t('reservations.whatsappMessage'));

  const theForkMessage = t('reservations.comingSoon');

  return (
    <section id="reservations" className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t('reservations.title')}
          </h1>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text max-w-2xl mx-auto font-body">
            {t('reservations.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header Info */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-terracotta text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icons.Clock className="w-8 h-8" />
                </div>
                <h3 className="font-display font-semibold text-dark-text mb-2">{t('contact.hours')}</h3>
                <p className="font-body text-dark-text text-sm">{t('contact.hoursDetail')}</p>
                <p className="font-body text-terracotta text-sm mt-1">{t('contact.closed')}</p>
              </div>

              <div className="text-center">
                <div className="bg-green-leaf text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icons.Phone className="w-8 h-8" />
                </div>
                <h3 className="font-display font-semibold text-dark-text mb-2">{t('contact.phoneLabel')}</h3>
                <p className="font-body text-dark-text">{t('contact.phone')}</p>
              </div>

              <div className="text-center">
                <div className="bg-terracotta text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icons.Location className="w-8 h-8" />
                </div>
                <h3 className="font-display font-semibold text-dark-text mb-2">{t('contact.locationLabel')}</h3>
                <p className="font-body text-dark-text text-sm">{t('contact.address')}</p>
                <p className="font-body text-dark-text text-sm">{t('contact.city')}</p>
              </div>
            </div>
          </div>

          {/* Reservation Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp Reservation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-leaf text-white p-6">
                <div className="flex items-center">
                  <Icons.WhatsApp className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-display font-bold">{t('reservations.whatsappTitle')}</h3>
                </div>
                <p className="font-body mt-2 opacity-90">{t('reservations.whatsapp')}</p>
              </div>
              <div className="p-6">
                <p className="font-body text-dark-text mb-4">{t('reservations.note')}</p>
                <a
                  href={`https://wa.me/34858984102?text=${whatsappMessage}`}
                  className="w-full bg-green-leaf hover:bg-terracotta text-white font-body font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Icons.WhatsApp className="w-5 h-5 mr-2" />
                  {t('reservations.whatsapp')}
                </a>
              </div>
            </div>

            {/* TheFork Reservation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-terracotta text-white p-6">
                <div className="flex items-center">
                  <Icons.Restaurant className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-display font-bold">{t('reservations.theforkTitle')}</h3>
                </div>
                <p className="font-body mt-2 opacity-90">{t('reservations.thefork')}</p>
              </div>
              <div className="p-6">
                <p className="font-body text-dark-text mb-4">{theForkMessage}</p>
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 font-body font-bold py-3 px-6 rounded-lg cursor-not-allowed flex items-center justify-center"
                >
                  <Icons.Restaurant className="w-5 h-5 mr-2" />
                  {t('reservations.thefork')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;