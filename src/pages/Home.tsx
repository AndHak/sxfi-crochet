import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { WhatsAppStickyButton } from "../components/Whatsapp";
import { CrochetCarrusel } from "../components/CrochetCarrusel";

export default function Home() {
    const carousel1Images = [
        {
            src: "ramo1.jpg",
            alt: "",
        },
        { src: "ramo2.jpg", alt: "" },
        { src: "ramo3.jpg", alt: "" },
        { src: "ramo4.jpg", alt: "" },
        { src: "ramo5.jpg", alt: "" },
        { src: "ramo6.jpg", alt: "" },
        { src: "ramo7.jpg", alt: "" },
        { src: "ramo8.jpg", alt: "" },
        { src: "ramo9.jpg", alt: "" },
        { src: "ramo10.jpg", alt: "" },
        { src: "ramo11.jpg", alt: "" },
        { src: "ramo12.jpg", alt: "" },
        { src: "ramo13.jpg", alt: "" },
        { src: "ramo14.jpg", alt: "" },
        { src: "ramo15.jpg", alt: "" },
        { src: "ramo16.jpg", alt: "" },
    ];

    const carousel2Images = [
      {src: "toy1.jpg", alt: ""},
      {src: "florcita.jpg", alt: ""},
      {src: "llaveros.jpg", alt: ""},
    ]

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden justify-center">
            <Navbar />
            <main className="flex-1 py-8 px-4 md:px-6 lg:px-8 space-y-12">
                <section className="container mx-auto text-center bg-stone-200 rounded-2xl shadow-lg p-6 max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4 text-pink-900">
                        Información de Tienda
                    </h2>
                    <ul className="text-lg space-y-2 text-gray-800">
                        <li>
                            🛍️ <strong>Tienda en línea</strong>
                        </li>
                        <li>
                            🚚 <strong>Envíos a nivel nacional</strong> 🌎
                        </li>
                        <li>
                            🎨 <strong>Pedidos personalizados</strong>
                        </li>
                        <li>
                            💳 <strong>Pagos:</strong> Efectivo o transferencia
                        </li>

                        <li>
                            📍 <strong>Ubicación:</strong> Pasto
                        </li>
                    </ul>
                </section>

                <section className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Nuestras Últimas Creaciones
                    </h2>
                    <h3 className="text-xl font-semibold text-center py-2">
                        Nuestros ramos
                    </h3>
                    <CrochetCarrusel images={carousel1Images} />
                </section>

                <section className="container mx-auto">
                    <h3 className="text-xl font-semibold text-center py-2">
                        Nuestros Muñequitos
                    </h3>
                    <CrochetCarrusel images={carousel2Images} />
                </section>

            </main>
            <WhatsAppStickyButton />
            <Footer />
        </div>
    );
}
