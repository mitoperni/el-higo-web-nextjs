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
          src="/hero-optimized.avif"
          alt="El Higo Restaurant - Albaicín Granada"
          fill
          priority
          fetchPriority="high"
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-center"
          style={{
            filter:
              "sepia(30%) saturate(120%) hue-rotate(10deg) brightness(0.9) contrast(1.1)",
          }}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyYzFhMGUiLz48L3N2Zz4="
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-red-900/20 z-[1]"></div>
      <div className="absolute inset-0 bg-black/30 z-[2]"></div>

      <div className="relative z-[10] text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl font-Bodoni mb-8 text-cream max-w-2xl mx-auto leading-relaxed font-body">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`https://wa.me/34858984102?text=${encodeURIComponent(
              t("reservations.note")
            )}`}
            className="border-1 border-terracotta bg-terracotta text-cream hover:bg-cream hover:text-terracotta font-body font-bold py-4 px-8 rounded-lg transition-all duration-150 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label={t("hero.cta")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hero.cta")}
          </a>
          <LanguageLink
            to="/carta"
            className="border-1 border-white text-white hover:bg-cream hover:text-green-leaf font-body font-bold py-4 px-8 rounded-lg transition-all duration-150 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t("navbar.menu")}
          </LanguageLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;