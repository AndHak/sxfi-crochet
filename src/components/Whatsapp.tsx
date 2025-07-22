import { Icon } from "@iconify/react";

export function WhatsAppStickyButton() {
  const whatsappLink =
    "https://wa.me/3128758461?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20productos%20crochet.";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full hover:bg-green-600 transition-transform transform hover:scale-110 shadow-lg"
        aria-label="Contactar por WhatsApp"
      >
        <Icon icon="mdi:whatsapp" className="text-white p-2" width={48} height={48}/>
        <span className="sr-only">Contactar por WhatsApp</span>
      </a>
    </div>
  );
}
