import { useEffect, useState } from "react";
import { Cliente } from "../components/Cliente";

export const Inicio = () => {
   const [clientes, setClientes] = useState([]);

   useEffect(() => {
      const obtenerClientesAPI = async () => {
         try {
            const url = "http://localhost:4000/clientes/";
            const resp = await fetch(url);
            const result = await resp.json();
            setClientes(result);
         } catch (error) {}
      };
      obtenerClientesAPI();
   }, []);
   return (
      <div>
         <h1 className='font-black text-4xl text-sky-700 capitalize text-center'>
            clientes
         </h1>
         <p className='mt-3 text-2xl text-center'>Administra tus clientes</p>
         <table className='w-full mt-5 table-auto shadow-xl bg-slate-200 mx-auto rounded-lg p-5 md:w-4/5'>
            <thead className='bg-cyan-700 text-white text-2xl'>
               <tr>
                  <th className='p-2'>Nombre</th>
                  <th className='p-2'>Contacto</th>
                  <th className='p-2'>Empresa</th>
                  <th className='p-2'>Acciones</th>
               </tr>
            </thead>
            <tbody>
               {clientes.map((cliente) => (
                  <Cliente cliente={cliente} key={cliente.id} />
               ))}
            </tbody>
         </table>
      </div>
   );
};
