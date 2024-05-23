import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";

export const Galeria = () => {
  const [expandedImageIndex, setExpandedImageIndex] = useState(null);

  const imagenes = [
    { src: "bebida1.jpg", alt: "Bebida 1" },
    { src: "bebida2.jpg", alt: "Bebida 2" },
    { src: "bebida3.jpg", alt: "Bebida 3" },
    { src: "bebida4.jpg", alt: "Bebida 4" },
    { src: "platillo1.webp", alt: "Platillo 1" },
    { src: "platillo2.jpg", alt: "Platillo 2" },
    { src: "platillo3.jpg", alt: "Platillo 3" },
    { src: "platillo4.jpg", alt: "Platillo 4" },
    { src: "bebida1.jpg", alt: "Platillo 4" },
  ];

  const toggleExpandImage = (index) => {
    setExpandedImageIndex(expandedImageIndex === index ? null : index);
  };

  return (
    <main className="w-full">
      <h2 className="pb-8 text-center text-4xl font-bold">Galería</h2>
      <section className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-3">
        {imagenes.map((imagen, index) => (
          <MagicCard
            key={index}
            isCardExpanded={expandedImageIndex === index}
            onBackgroundFadeClick={() => setExpandedImageIndex(null)}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div
              className={`!flex cursor-pointer items-center !justify-center
                ${expandedImageIndex === index ? "size-60 md:size-96" : "size-60"}`}
              onClick={() => toggleExpandImage(index)}
            >
              <img
                src={`/proyecto-venenciaCatering/assets/img/${imagen.src}`}
                alt={imagen.alt}
                className={`object-cover 
                  ${expandedImageIndex === index ? "size-60 md:size-96" : "size-60"}`}
              />
            </div>
          </MagicCard>
        ))}
      </section>
    </main>
  );
};
