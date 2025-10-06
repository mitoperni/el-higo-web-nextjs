'use client';
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LanguageLink from "../ui/LanguageLink";
import Icons from "../ui/Icons";

const Navbar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('es');
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLanguageDropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    {
      code: 'es',
      name: t('languageSelector.spanish.name'),
      flag: '🇪🇸',
      nativeName: t('languageSelector.spanish.name'),
      description: t('languageSelector.spanish.description')
    },
    {
      code: 'en',
      name: t('languageSelector.english.name'),
      flag: '🇺🇸',
      nativeName: t('languageSelector.english.name'),
      description: t('languageSelector.english.description')
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  const toggleLanguage = (langCode: string) => {
    document.cookie = `NEXT_LOCALE=${langCode}; path=/; max-age=31536000`;
    setCurrentLang(langCode);
    setIsLanguageOpen(false);
    setIsMobileLanguageOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      if (mobileLanguageDropdownRef.current && !mobileLanguageDropdownRef.current.contains(event.target as Node)) {
        setIsMobileLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getCurrentBasePath = () => {
    return pathname || "/";
  };

  return (
    <nav className="bg-cream shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <LanguageLink
              to="/"
              className="text-2xl font-display font-bold text-terracotta hover:text-green-leaf transition-colors"
            >
              El Higo
            </LanguageLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <LanguageLink
                to="/carta"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/carta"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.menu")}
              </LanguageLink>
              <LanguageLink
                to="/el-patio"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/el-patio"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.thePatio")}
              </LanguageLink>
              <LanguageLink
                to="/como-llegar"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/como-llegar"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.howToFindUs")}
              </LanguageLink>
              <LanguageLink
                to="/reservas"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/reservas"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.reservations")}
              </LanguageLink>
              <LanguageLink
                to="/contacto"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/contacto"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.contact")}
              </LanguageLink>
            </div>
          </div>

          <div
            className="hidden md:flex items-center relative"
            ref={languageDropdownRef}
          >
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-3 bg-gradient-to-r from-white to-cream border-2 border-terracotta/30 text-terracotta hover:border-terracotta hover:shadow-lg px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group backdrop-blur-sm"
              aria-label={t("languageSelector.ariaLabel")}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg transform group-hover:scale-110 transition-transform duration-200">
                  {currentLanguage && currentLanguage.flag}
                </span>
                <span className="font-semibold">
                  {currentLanguage && currentLanguage.nativeName}
                </span>
              </div>
              <Icons.ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-terracotta/20 overflow-hidden z-50 transform transition-all duration-200 origin-top-right animate-in fade-in slide-in-from-top-2">
                <div className="p-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => toggleLanguage(language.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                        language.code === currentLang
                          ? "bg-terracotta/10 text-terracotta border border-terracotta/20"
                          : "hover:bg-terracotta/5 text-dark-text hover:text-terracotta"
                      }`}
                      title={language.description}
                    >
                      <span className="text-xl transform group-hover:scale-110 transition-transform duration-200">
                        {language.flag}
                      </span>
                      <div className="flex-1">
                        <div className="font-semibold">
                          {language.nativeName}
                        </div>
                        <div className="text-xs opacity-70">
                          {language.description}
                        </div>
                      </div>
                      {language.code === currentLang && (
                        <Icons.Check className="w-4 h-4 text-terracotta" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-text hover:text-terracotta hover:bg-terracotta/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-terracotta"
            >
              <Icons.Menu
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
              />
              <Icons.Close
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
              />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream shadow-lg">
            <LanguageLink
              to="/carta"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/carta"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.menu")}
            </LanguageLink>
            <LanguageLink
              to="/el-patio"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/el-patio"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.thePatio")}
            </LanguageLink>
            <LanguageLink
              to="/como-llegar"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/como-llegar"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.howToFindUs")}
            </LanguageLink>
            <LanguageLink
              to="/reservas"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/reservas"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.reservations")}
            </LanguageLink>
            <LanguageLink
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/contacto"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.contact")}
            </LanguageLink>
            <div className="relative" ref={mobileLanguageDropdownRef}>
              <button
                onClick={() => setIsMobileLanguageOpen(!isMobileLanguageOpen)}
                className="w-full flex items-center gap-3 px-4 py-2 mt-2 rounded-xl text-left transition-all duration-200 group bg-white border border-terracotta/20 text-terracotta focus:bg-terracotta/10 focus:border-terracotta/20 focus:text-terracotta"
                aria-label={t("languageSelector.ariaLabel")}
              >
                <span className="text-xl transform group-hover:scale-110 transition-transform duration-200">
                  {currentLanguage && currentLanguage.flag}
                </span>
                <div className="flex-1">
                  <div className="font-semibold">
                    {currentLanguage && currentLanguage.nativeName}
                  </div>
                </div>
                <Icons.ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileLanguageOpen && (
                <div className="absolute top-full left-0 right-0 mt-0.2 bg-white rounded-xl shadow-2xl border border-terracotta/20 overflow-hidden z-50 transform transition-all duration-200 origin-top animate-in fade-in slide-in-from-top-2">
                  <div className="p-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          toggleLanguage(language.code);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all duration-200 group ${
                          language.code === currentLang
                            ? "bg-terracotta/10 text-terracotta border border-terracotta/20"
                            : "hover:bg-terracotta/5 text-dark-text hover:text-terracotta"
                        }`}
                        title={language.description}
                      >
                        <span className="text-xl transform group-hover:scale-110 transition-transform duration-200">
                          {language.flag}
                        </span>
                        <div className="flex-1">
                          <div className="font-semibold">
                            {language.nativeName}
                          </div>
                          <div className="text-xs opacity-70">
                            {language.code === currentLang
                              ? ''
                              : language.description}
                          </div>
                        </div>
                        {language.code === currentLang && (
                          <Icons.Check className="w-4 h-4 text-terracotta" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
