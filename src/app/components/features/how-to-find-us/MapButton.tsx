'use client';

import Icons from '../../ui/Icons';

interface MapButtonProps {
  takeMeThereText: string;
}

export default function MapButton({ takeMeThereText }: MapButtonProps) {
  const handleOpenMaps = () => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // Para iOS: usar protocolo maps para abrir app nativa de Apple Maps
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = "maps:?q=El+Higo&ll=37.1831339,-3.5926795";
      } else {
        // Para Android: usar protocolo geo
        window.location.href = "geo:37.1831339,-3.5926795?q=El+Higo";
      }
    } else {
      // Para escritorio: abrir Google Maps en nueva pestaña
      window.open(
        "https://www.google.com/maps/place/El+Higo/@37.1831339,-3.5952544,17z/data=!3m1!4b1!4m6!3m5!1s0xd71fcc66cb5daeb:0xb4bb89f0659d068a!8m2!3d37.1831339!4d-3.5926795!16s%2Fg%2F11bwh5cmx7?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D",
        "_blank"
      );
    }
  };

  return (
    <div className="mt-6 text-center">
      <button
        onClick={handleOpenMaps}
        className="inline-flex items-center bg-terracotta text-white px-6 py-3 rounded-lg font-body font-semibold hover:bg-green-leaf transition-colors duration-300"
      >
        <Icons.ExternalLink className="w-5 h-5 mr-2" />
        {takeMeThereText}
      </button>
    </div>
  );
}
