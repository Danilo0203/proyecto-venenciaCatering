import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast.success(`Gracias por tu mensaje, ${data.nombre}!`);
    reset();
  };
  console.log(errors);
  return (
    <main className="w-full">
      <section className="text-lg">
        <h2 className="pb-4 text-4xl font-bold">Contacto</h2>
        <p>¡Ponte en contacto con nosotros!</p>
        <h2 className="py-4 text-2xl font-bold">Envíanos un mensaje</h2>
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-6"
      >
        <Input
          label="Nombre"
          variant="underlined"
          classNames={{
            label: "text-xl font-bold pb-1",
            input: "text-lg font-semibold ",
            base: "pt-1",
          }}
          isInvalid={!!errors.nombre}
          errorMessage={errors.nombre?.message}
          {...register("nombre", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            validate: (value) => {
              // El nombre no puede ser menor a 3 caracteres y no puede contener números
              if (value.length < 3) {
                return "El nombre no puede ser menor a 3 caracteres";
              }
              if (/\d/.test(value)) {
                return "El nombre no puede contener números";
              }
              return true;
            },
          })}
        />
        <Input
          label="Correo electrónico"
          variant="underlined"
          classNames={{
            label: "text-xl font-bold pb-1",
            input: "text-lg font-semibold ",
            base: "pt-1",
          }}
          isInvalid={!!errors.correo}
          errorMessage={errors.correo?.message}
          {...register("correo", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Correo electrónico inválido",
            },
          })}
        />
        <Textarea
          label="Mensaje"
          variant="underlined"
          placeholder="Descripción del mensaje..."
          disableAnimation
          disableAutosize
          classNames={{
            input: "resize-y min-h-[4rem] text-lg font-semibold",
            label: "text-xl font-bold pb-1",
          }}
          isInvalid={!!errors.mensaje}
          errorMessage={errors.mensaje?.message}
          {...register("mensaje", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          })}
        />

        <Button
          variant="shadow"
          color="primary"
          radius="sm"
          type="submit"
          className="mt-8"
        >
          Enviar
        </Button>
      </form>
    </main>
  );
};
