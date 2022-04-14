import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export const VerCliente = () => {
   const [cliente, setCliente] = useState({});
   const [cargando, setCargando] = useState(false);
   const { nombre, empresa, telefono, notas, email } = cliente;
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

   return Object.keys(cliente).length === 0 ? (
      <Spinner />
   ) : (
      <>
         <h1 className='font-black text-4xl text-sky-700 capitalize'>
            Ver Cliente: {nombre}
         </h1>
         <p className='mt-3 text-2xl mb-5'>Informacion del cliente</p>

         <div className='max-w-sm rounded-xl shadow-xl border-2 bg-slate-400'>
            <div className='px-6 py-3'>
               <div className='flex flex-col  pb-1'>
                  <h5 className='font-bold text-xl mb-1 text-center capitalize'>
                     {nombre}
                  </h5>
                  <span className='text-sm text-sky-400 mb-5 text-center dark:text-slate-200'>
                     Cliente
                  </span>
                  <h5 className='font-bold text-xl mb-2 capitalize'>
                     {empresa}
                  </h5>
                  <span className='text-sm text-gray-500 dark:text-slate-200'>
                     Empresa
                  </span>
               </div>
            </div>
            <hr />
            <div className='px-6 pb-2'>
               {notas && (
                  <>
                     <h5 className='font-bold text-xl mb-2 capitalize text-slate-800 mt-3'>
                        Notas
                     </h5>
                     <p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-slate-700'>
                        {notas}
                     </p>
                  </>
               )}

               <h5 className='font-bold text-xl mb-2 capitalize text-slate-100'>
                  Contacto
               </h5>
               <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5'>
                  {email}
               </span>
               {telefono && (
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5'>
                     {telefono}
                  </span>
               )}
            </div>
         </div>
      </>
   );
};
