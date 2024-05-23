// import { Button } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { ListaItems } from "../components/Lista";

export const Inicio = () => {
  const listaMenu = {
    items: [
      "Platos Principales",
      "Bebidad refresactantes",
      "Postres exquisitos",
      "Y mucho mas...",
    ],
  };
  const listServicios = {
    items: [
      "Catering para bodas",
      "Catering para eventos corporativos",
      "Catering para fiestas privadas",
      "Servicio de chef a domicililo",
      "Y mucho mas...",
    ],
  };
  return (
    <main className="flex w-full flex-1 flex-col gap-10">
      <section className="w-full">
        <h2 className="text-xl font-bold">Bienvenido a Venecia catering</h2>
        <p>
          Somos un restaurante especializado en catering para eventos. Ofrecemos
          una amplia variedad de opciones culinarias para hacer de tu evento una
          experiencia inolvidable.
        </p>
      </section>

      <section className=" flex w-full flex-col items-center">
        <h2 className="self-start text-xl font-bold">Nuestro menú</h2>
        <p className="self-start">
          Explora nuestro delicioso menú, que incluye platos para todos los
          gustos y ocaciones.
        </p>
        <ListaItems lista={listaMenu} />
        <Button color="success" variant="bordered" size="lg" radius="sm">
          Ver Menú
        </Button>
      </section>

      <section className=" flex w-full flex-col items-center">
        <h2 className="self-start text-xl font-bold">Nuestros Servicios</h2>
        <p className="self-start">
          Ofrecemos una variedad de servicios para adaptarnos a las necesidades
          específicas de tu evento:
        </p>
        <ListaItems lista={listServicios} />
        <Button color="success" variant="bordered" size="lg" radius="sm">
          Ver Servicios
        </Button>
      </section>

      <section className=" flex w-full flex-col items-center">
        <h2 className="self-start text-xl font-bold">Galería de Eventos</h2>
        <p className="self-start pb-8">
          Visita nuestra galería para ver imágenes de eventos pasados y obtener
          inspiración para tu próximo evento
        </p>
        <Button color="success" variant="bordered" size="lg" radius="sm">
          Ver Servicios
        </Button>
      </section>
    </main>
  );
};
