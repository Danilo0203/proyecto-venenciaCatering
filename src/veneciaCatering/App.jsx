import { Outlet } from "react-router-dom";
import { BarraNavegacion } from "../components/BarraNavegacion";
import { PiePagina } from "../components/PiePagina";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <>
      <Toaster richColors />
      <main className="flex min-h-dvh flex-1 flex-col items-center">
        <BarraNavegacion />
        <div className="flex w-10/12 flex-1 items-center justify-center py-8 md:w-2/3">
          <Outlet />
        </div>
      </main>
      <PiePagina />
    </>
  );
};
