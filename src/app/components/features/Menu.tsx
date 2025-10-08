"use client";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Spinner from "../ui/Spinner";
import { getMenuData, getAllMenuImages } from "../../../data/menuData";
import "./Menu.css";

interface MenuProps {
  onImagesLoad?: (loaded: boolean) => void;
}

const Menu = ({ onImagesLoad }: MenuProps) => {
  const t = useTranslations();
  const locale = useLocale();
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    if (onImagesLoad) {
      const allImages = getAllMenuImages();
      let loadedCount = 0;

      allImages.forEach((imageSrc) => {
        const img = document.createElement("img");
        img.onload = () => {
          loadedCount++;
          if (loadedCount === allImages.length) {
            onImagesLoad(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === allImages.length) {
            onImagesLoad(true);
          }
        };
        img.src = imageSrc;
      });
    }
  }, [onImagesLoad]);

  const menuCategories = getMenuData(t, locale);

  const handleImageLoad = (categoryId: string, index: number) => {
    const key = `${categoryId}-${index}`;
    setLoadingImages((prev) => ({ ...prev, [key]: false }));
  };

  const handleImageLoadStart = (categoryId: string, index: number) => {
    const key = `${categoryId}-${index}`;
    setLoadingImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section id="menu" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t("title", { ns: "menu" })}
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text font-Bodoni max-w-2xl mx-auto font-body">
            {t("subtitle", { ns: "menu" })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-display font-bold text-dark-text mb-6 text-center border-b-2 border-terracotta pb-4">
                  {category.name}
                </h2>
                <div className="space-y-6">
                  {Array.isArray(category.items) &&
                    category.items.map((item, index) => (
                      <div key={index} className="group">
                        <div className="relative overflow-hidden rounded-lg mb-3 h-48">
                          {loadingImages[`${category.id}-${index}`] ? (
                            <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg">
                              <Spinner
                                size="medium"
                                className="text-terracotta"
                              />
                            </div>
                          ) : (
                            <Image
                              src={category.images[index] || category.images[0]}
                              alt={item.name}
                              width={400}
                              height={192}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              onLoadStart={() =>
                                handleImageLoadStart(category.id, index)
                              }
                              onLoad={() => handleImageLoad(category.id, index)}
                              onError={() =>
                                handleImageLoad(category.id, index)
                              }
                              loading="lazy"
                            />
                          )}
                        </div>
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className="font-body font-semibold text-dark-text text-lg leading-tight">
                            {item.name}
                          </h3>
                          {item.price && (
                            <span className="mr-4 text-terracotta font-bold price">
                              {item.price}
                            </span>
                          )}
                        </div>
                        <p className="font-body text-dark-text text-sm leading-relaxed opacity-75 mb-2">
                          {item.description}
                        </p>
                        {item.options && (
                          <p className="font-body text-terracotta text-xs leading-relaxed">
                            {item.options}
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl mx-auto">
            <p className="text-dark-text mb-4 font-body text-sm">
              {t("allergens", { ns: "menu" })}
            </p>
            <p className="text-green-leaf font-body text-sm font-semibold">
              {t("note", { ns: "menu" })}
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <p className="text-dark-text mb-4 font-body text-sm">
              {t("allergens", { ns: "menu" })}
            </p>
            <p className="text-green-leaf mb-6 font-body text-sm font-semibold">
              {t("note", { ns: "menu" })}
            </p>
            <h3 className="text-2xl font-display font-bold text-dark-text mb-4">
              {t("hero.cta", { ns: "common" })}
            </h3>
            <p className="text-dark-text mb-6 font-body">
              {t("reservations.note", { ns: "common" })}
            </p>
            <a
              href={`https://wa.me/34858984102?text=${encodeURIComponent(
                t("reservations.note", { ns: "common" })
              )}`}
              className="inline-flex items-center  bg-green-leaf hover:bg-terracotta text-white font-body font-bold py-3 px-8 rounded-lg transition-colors duration-300 mr-4"
              aria-label={t("reservations.whatsapp", { ns: "common" })}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("reservations.whatsapp", { ns: "common" })}
            </a>
            <a
              href={`https://wa.me/34858984102?text=${encodeURIComponent(
                t("reservations.note", { ns: "common" })
              )}`}
              className="inline-flex items-center bg-terracotta hover:bg-green-leaf text-white font-body font-bold py-3 px-8 mt-4 md:mt-0 rounded-lg transition-colors duration-300"
              aria-label={t("reserve_button", { ns: "menu" })}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("reserve_button", { ns: "menu" })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
