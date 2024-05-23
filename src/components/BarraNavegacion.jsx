/* eslint-disable react/prop-types */
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const BarraNavegacion = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          base: "bg-[#72B01D]",
        }}
        shouldHideOnScroll
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="pr-3 sm:hidden" justify="center">
          <NavbarBrand>
            <h2 className="font-bold text-white">VENECIA CATERING</h2>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="end">
          <NavbarBrand>
            <h2 className="text-2xl font-bold text-white">VENECIA CATERING</h2>
          </NavbarBrand>

          <NavbarItem>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "border-b-2 pb-[0.1rem] font-bold text-white" : "menu__link font-semibold text-white/80"}`
              }
            >
              Inicio
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="/galeria"
              className={({ isActive }) =>
                `${isActive ? "border-b-2 pb-[0.1rem] font-bold text-white" : "menu__link font-semibold text-white/80"}`
              }
            >
              Galería
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="/acerca-de"
              className={({ isActive }) =>
                `${isActive ? "border-b-2 pb-[0.1rem] font-bold text-white" : "menu__link font-semibold text-white/80"}`
              }
            >
              Acerca de
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `${isActive ? "border-b-2 pb-[0.1rem] font-bold text-white" : "menu__link font-semibold text-white/80"}`
              }
            >
              Contacto
            </NavLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <NavbarContent
              className="flex-col items-start gap-4 pt-4 text-center"
              justify="center"
            >
              <NavbarItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-4xl ${isActive ? "border-b-2 pb-[0.1rem] font-bold" : "menu__link font-semibold text-black/80"}`
                  }
                >
                  Inicio
                </NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink
                  to="/galeria"
                  className={({ isActive }) =>
                    `text-4xl ${isActive ? "border-b-2 pb-[0.1rem] font-bold" : "menu__link font-semibold text-black/80"}`
                  }
                >
                  Galería
                </NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink
                  to="/acerca-de"
                  className={({ isActive }) =>
                    `text-4xl ${isActive ? "border-b-2 pb-[0.1rem] font-bold" : "menu__link font-semibold text-black/80"}`
                  }
                >
                  Acerca de
                </NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink
                  to="/contacto"
                  className={({ isActive }) =>
                    `text-4xl ${isActive ? "border-b-2 pb-[0.1rem] font-bold" : "menu__link font-semibold text-black/80"}`
                  }
                >
                  Contacto
                </NavLink>
              </NavbarItem>
            </NavbarContent>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
