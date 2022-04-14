import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Formulario } from "../components/Formulario";

export const EditarCliente = () => {
   const [cliente, setCliente] = useState({});
   const [cargando, setCargando] = useState(false);
   // const { nombre, empresa, telefono, notas, email } = cliente;
   const { id } = useParams();

   useEffect(() => {
      setCargando(!cargando);
      const obtenerClientesAPI = async () => {
         try {
            const url = `http://localhost:4000/clientes/${id}`;
            const resp = await fetch(url);
            const result = await resp.json();
            setCliente(result);
         } catch (error) {
            console.log(error);
         }
         setCargando(false);
      };
      obtenerClientesAPI();
   }, []);

   return (
      <>
         {cliente?.nombre ? (
            <>
               <h1 className='font-black text-4xl text-sky-700 capitalize text-center'>
                  editar cliente
               </h1>
               <p className='mt-3 text-2xl text-center'>
                  Utiliza este formulario para editar los datos de un cliente
               </p>
               <Formulario cliente={cliente} cargando={cargando} />
            </>
         ) : (
            <p className='font-black text-4xl text-red-700 capitalize text-center'>
               Id de cliente no valido!
            </p>
         )}
      </>
   );
};
