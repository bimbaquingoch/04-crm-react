import { Formulario } from "../components/Formulario";

export const NuevoCliente = () => {
   return (
      <>
         <h1 className='font-black text-4xl text-sky-700 capitalize text-center'>
            nuevo cliente
         </h1>
         <p className='mt-3 text-2xl text-center'>
            Llena los siguientes campos para registrar un nuevo cliente
         </p>
         <Formulario />
      </>
   );
};
