'use client';
import { useTranslations } from 'next-intl';
import LanguageLink from '../ui/LanguageLink';
import Icons from '../ui/Icons';

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-dark-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-display font-bold text-terracotta mb-4">{t('footer.brand')}</h3>
            <p className="text-cream mb-4 font-body leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/elhigogranada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit El Higo on Facebook"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <Icons.Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/elhigogranada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit El Higo on Instagram"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-2 rounded-full transition-colors duration-300"
              >
                <Icons.Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2 font-body">
              <li>
                <LanguageLink
                  to="/carta"
                  className="text-cream hover:text-terracotta transition-colors duration-300"
                >
                  {t('navbar.menu')}
                </LanguageLink>
              </li>
              <li>
                <LanguageLink
                  to="/el-patio"
                  className="text-cream hover:text-terracotta transition-colors duration-300"
                >
                  {t('navbar.thePatio')}
                </LanguageLink>
              </li>
              <li>
                <LanguageLink
                  to="/como-llegar"
                  className="text-cream hover:text-terracotta transition-colors duration-300"
                >
                  {t('navbar.howToFindUs')}
                </LanguageLink>
              </li>
              <li>
                <LanguageLink
                  to="/reservas"
                  className="text-cream hover:text-terracotta transition-colors duration-300"
                >
                  {t('navbar.reservations')}
                </LanguageLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">{t('footer.contactSection')}</h4>
            <div className="space-y-2 text-cream font-body">
              <p className="flex items-center">
                <Icons.Location className="w-4 h-4 mr-2 text-terracotta" />
                <span className="text-sm">
                  {t('contact.address')}, {t('contact.city')}
                </span>
              </p>
              <p className="flex items-center">
                <Icons.Phone className="w-4 h-4 mr-2 text-terracotta" />
                <a href="tel:+34858984102" className="hover:text-terracotta transition-colors text-sm">
                  {t('contact.phone')}
                </a>
              </p>
              <p className="flex items-center">
                <Icons.WhatsApp className="w-4 h-4 mr-2 text-terracotta" />
                <a href={`https://wa.me/34858984102`} className="hover:text-terracotta transition-colors text-sm">
                  {t('footer.whatsapp')}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">{t('contact.hours')}</h4>
            <div className="text-cream space-y-1 font-body">
              <p className="font-medium text-sm">{t('footer.hours')}</p>
              <p className="text-cream font-semibold mt-2 text-sm">{t('contact.closed')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;