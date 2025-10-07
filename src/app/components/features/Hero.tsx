'use client';
import { useTranslations } from 'next-intl';
import LanguageLink from '../ui/LanguageLink';
import Image from 'next/image';

const Hero = () => {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG_1941.PNG"
          alt="El Higo Restaurant - Albaicín Granada"
          fill
          priority
          quality={75}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'sepia(30%) saturate(120%) hue-rotate(10deg) brightness(0.9) contrast(1.1)',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-red-900/20 z-[1]"></div>
      <div className="absolute inset-0 bg-black/30 z-[2]"></div>

      <div className="relative z-[10] text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cream max-w-2xl mx-auto leading-relaxed font-body">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`https://wa.me/34858984102?text=${encodeURIComponent(
              t('reservations.note')
            )}`}
            className="bg-terracotta hover:bg-cream text-cream hover:text-terracotta font-body font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('hero.cta')}
          </a>
          <LanguageLink
            to="/carta"
            className="border-2 border-cream text-cream hover:bg-cream hover:text-terracotta font-body font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('navbar.menu')}
          </LanguageLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;