
import { Button } from "./ui/button"
import { Icon } from '@iconify/react';

export function WhatsAppStickyButton() {
  const whatsappLink =
    "https://wa.me/3128758461?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20productos%20crochet."

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button
          size="icon"
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-transform transform hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <Icon icon="logos:whatsapp-icon" className="h-full w-full text-white" />
          <span className="sr-only">Contactar por WhatsApp</span>
        </Button>
      </a>
    </div>
  )
}
