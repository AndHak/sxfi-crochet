import { InstagramIcon } from "lucide-react"
import { Icon } from "@iconify/react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2025 - Sxfi Crochet. Todos los derechos reservados.</p>
        </div>
        <div className="flex items-center gap-6 flex-col mt-2">
          <a
            href="https://www.instagram.com/sxficrochet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-300 transition-colors"
            aria-label="Visita nuestro Instagram"
          >
            <InstagramIcon className="w-6 h-6" />
            Instagram
          </a>
          <a href="https://www.tiktok.com/sxfi.crochet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors"
          aria-label="Visita nuestro TikTok">
            <Icon icon="streamline-flex:tiktok" width="24" height="24"></Icon>
            TikTok
          </a>
        </div>
      </div>
    </footer>
  )
}
