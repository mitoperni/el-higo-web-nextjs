'use client';
import { useEffect } from "react";
import { useTranslations } from 'next-intl';
import Icons from './Icons';

interface MockupDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MockupDisclaimerModal = ({ isOpen, onClose }: MockupDisclaimerModalProps) => {
  const t = useTranslations();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 animate-in fade-in duration-300">
      <div className="bg-white rounded-lg max-w-md mx-4 p-6 animate-in zoom-in-95 duration-300 shadow-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center">
            <Icons.Info className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-display font-bold text-dark-text text-center mb-4">
          {t('disclaimer.title')}
        </h2>

        {/* Content */}
        <p className="text-dark-text font-body text-center mb-6 leading-relaxed">
          {t('disclaimer.message')}
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-terracotta hover:bg-green-leaf text-white px-6 py-2 rounded-lg font-body font-semibold transition-colors duration-300"
          >
            {t('disclaimer.understand')}
          </button>
        </div>
      </div>

      {/* Backdrop click to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default MockupDisclaimerModal;