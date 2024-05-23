export const Galeria = () => {
  const imagenes = [
    {
      src: "bebida1.jpg",
      alt: "Bebida 1",
    },
    {
      src: "bebida2.jpg",
      alt: "Bebida 2",
    },
    {
      src: "bebida3.jpg",
      alt: "Bebida 3",
    },
    {
      src: "bebida4.jpg",
      alt: "Bebida 4",
    },
    {
      src: "platillo1.webp",
      alt: "Platillo 1",
    },
    {
      src: "platillo2.jpg",
      alt: "Platillo 2",
    },
    {
      src: "platillo3.jpg",
      alt: "Platillo 3",
    },
    {
      src: "platillo4.jpg",
      alt: "Platillo 4",
    },
    {
      src: "bebida1.jpg",
      alt: "Platillo 4",
    },
  ];
  return (
    <main className="w-full">
      <h2 className="pb-8 text-center text-4xl font-bold">Galería</h2>
      <section className="grid grid-cols-3 gap-4">
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={`/proyecto-venenciaCatering/assets/img/${imagen.src}`}
            alt={imagen.alt}
            className="h-32 w-full object-cover md:h-80"
          />
        ))}
      </section>
    </main>
  );
};
