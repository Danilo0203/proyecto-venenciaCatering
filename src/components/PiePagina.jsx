// eslint-disable-next-line react/prop-types
import { Divider } from "@nextui-org/react";
import logo from "/assets/img/logo-footer.jpeg";
import { NavLink } from "react-router-dom";
export const PiePagina = () => {
  return (
    <footer className="bg-[#454955] px-10 pt-6 text-white">
      <section className="flex flex-col items-center justify-between gap-4 pb-6 md:flex-row md:items-start">
        <section className="flex-1">
          <img src={logo} alt="Logo de venecia" />
        </section>
        <div className="flex w-full items-center justify-center md:flex-[2]">
          <section className="flex flex-1 flex-col gap-2 text-center md:block md:text-start">
            <h2 className="font-bold">Contacto</h2>
            <ul className="flex flex-col gap-3">
              <li>Direccion:</li>
              <li>Telefono:</li>
              <li>Email:</li>
            </ul>
          </section>
          <section className="flex-1 text-center md:text-start">
            <h2 className="font-bold">Enlaces</h2>
            <ul className="flex flex-col gap-1">
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/galeria">Galeria</NavLink>
              </li>
              <li>
                <NavLink to="/acerca-de">Acerca de</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold">Siguenos en redes sociales</h2>
        <ul className="flex flex-col gap-1 pt-3">
          <li>
            <a href="#"> Facebook</a>
          </li>
          <li>
            <a href="#"> Instagram</a>
          </li>
          <li>
            <a href="#"> Twitter</a>
          </li>
        </ul>
      </section>
      <Divider className="my-4 bg-white" />
      <section>
        <p className="py-3 text-center">
          © 2021 Venecia Catering. Todos los derechos reservados.
        </p>
      </section>
    </footer>
  );
};
