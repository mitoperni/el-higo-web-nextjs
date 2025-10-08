'use client'
import { useEffect, useState } from "react";
import Icons from "../ui/Icons";
import ImageModal from "../ui/ImageModal";
import Spinner from "../ui/Spinner";
import { useTranslations } from "next-intl";

const ThePatio = () => {
  const t = useTranslations();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const patioImages = [
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/10/b0/7b/chill-out.jpg?w=1800&h=1000&s=1",
      alt: "El Higo Patio 1",
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/17/b0/94/el-higo.jpg?w=1800&h=1000&s=1",
      alt: "El Higo Patio 2",
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/17/b0/87/el-higo.jpg?w=1800&h=1000&s=1",
      alt: "El Higo Patio 3",
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/17/b0/78/el-higo.jpg?w=1200&h=700&s=1",
      alt: "El Higo Patio 4",
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/1e/cc/78/la-higuera.jpg?w=1400&h=-1&s=1",
      alt: "El Higo Patio 5",
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/da/55/69/patio.jpg?w=1800&h=-1&s=1",
      alt: "El Higo Patio 6",
    },
  ];

  useEffect(() => {
    let loadedCount = 0;

    patioImages.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === patioImages.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === patioImages.length) {
          setImagesLoaded(true);
        }
      };
      img.src = image.src;
    });
  }, []);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navigateImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <Spinner size="large" className="text-terracotta" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="pt-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t("thePatio.title")}
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text font-Bodoni max-w-2xl mx-auto font-body">
            {t("thePatio.description")}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patioImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icons.SearchPlus className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-terracotta font-display font-bold mb-6">
            {t("hero.cta")}
          </h2>
          <a
            href={`https://wa.me/34858984102?text=${encodeURIComponent(
              t("reservations.note")
            )}`}
            className="inline-block bg-green-leaf hover:bg-terracotta text-white px-8 py-3 rounded-lg font-body font-semibold transition-colors duration-300"
          >
            {t("reservations.whatsapp")}
          </a>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        imageSrc={
          patioImages[currentImageIndex] && patioImages[currentImageIndex].src
        }
        imageAlt={
          patioImages[currentImageIndex] && patioImages[currentImageIndex].alt
        }
        images={patioImages.map((image) => image.src)}
        currentIndex={currentImageIndex}
        onNavigate={navigateImage}
      />
    </div>
  );
};

export default ThePatio;