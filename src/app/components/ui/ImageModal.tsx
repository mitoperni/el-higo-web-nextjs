'use client';
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import Icons from './Icons';
import Spinner from './Spinner';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  images?: string[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt, images = [], currentIndex = 0, onNavigate }: ImageModalProps) => {
  const t = useTranslations();
  const [imageLoading, setImageLoading] = useState(true);
  useEffect(() => {
    if (isOpen) {
      setImageLoading(true);
    }
  }, [isOpen, imageSrc]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && currentIndex > 0 && onNavigate) {
        onNavigate(currentIndex - 1);
      } else if (event.key === "ArrowRight" && currentIndex < images.length - 1 && onNavigate) {
        onNavigate(currentIndex + 1);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, currentIndex, images.length, onNavigate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 animate-in fade-in duration-300">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-terracotta transition-colors z-10"
        aria-label={t("imageModal.closeButton")}
      >
        <Icons.Close className="w-8 h-8" />
      </button>

      {/* Navigation arrows */}
      {images && images.length > 1 && (
        <>
          {currentIndex > 0 && onNavigate && (
            <button
              onClick={() => onNavigate(currentIndex - 1)}
              className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-terracotta transition-colors z-10"
              aria-label={t("imageModal.previousButton")}
            >
              <Icons.ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {currentIndex < images.length - 1 && onNavigate && (
            <button
              onClick={() => onNavigate(currentIndex + 1)}
              className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-terracotta transition-colors z-10"
              aria-label={t("imageModal.nextButton")}
            >
              <Icons.ChevronRight className="w-10 h-10" />
            </button>
          )}
        </>
      )}

      <div className="relative max-w-4xl max-h-full mx-4 animate-in zoom-in-95 duration-300">
        {imageLoading && (
          <div className="min-h-96 flex items-center justify-center">
            <Spinner size="large" className="text-white" />
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`max-w-full md:max-w-screen-md max-h-screen object-contain ${
            imageLoading ? "hidden" : ""
          }`}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />

        {images && images.length > 1 && !imageLoading && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-5 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default ImageModal;