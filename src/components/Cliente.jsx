import { useNavigate } from "react-router-dom";

export const Cliente = ({ cliente, handleDelete }) => {
   const navigate = useNavigate();
   const { nombre, empresa, telefono, email, notas, id } = cliente;
   return (
      <tr className='hover:bg-slate-100 rounded-xl'>
         <td className='p-3 text-center capitalize'>{nombre}</td>
         <td className='p-3 text-center'>
            <p>
               <span className='text-gray-700 uppercase font-bold'>
                  Email:{" "}
               </span>
               {email}
            </p>
            <p>
               <span className='text-gray-700 uppercase font-bold'>Tel: </span>
               {telefono}
            </p>
         </td>
         <td className='p-3 text-center capitalize'>{empresa}</td>
         <td className='p-3'>
            <div className='md:flex md:justify-around md:flex-row w-full'>
               <button
                  onClick={() => navigate(`/clientes/${id}`)}
                  type='button'
                  className='text-slate-500 border-slate-400 shadow-md text-xl md:mx-2 my-2 px-2 py-1 text-center rounded-md border-2 hover:text-slate-500 hover:border-slate-300 hover:shadow-md hover:shadow-slate-400 w-full'>
                  Ver
               </button>
               <button
                  onClick={() => navigate(`/clientes/editar/${id}`)}
                  type='button'
                  className='text-slate-500 border-sky-300 shadow-md text-xl md:mx-2 my-2 px-2 py-1 text-center rounded-md border-2 hover:text-sky-500 hover:border-sky-300 hover:shadow-md hover:shadow-sky-400 focus:text-sky-500 focus:border-sky-300 focus:shadow-md focus:shadow-sky-400 focus:bg-slate-300 w-full'>
                  Editar
               </button>
               <button
                  onClick={() => handleDelete(id)}
                  type='button'
                  className='text-slate-500 border-red-300 shadow-md text-xl md:mx-2 my-2 px-2 py-1 text-center rounded-md border-2 hover:text-red-600 hover:border-red-300 hover:shadow-md hover:shadow-red-400 focus:text-red-600 focus:border-red-300 focus:shadow-md focus:shadow-red-400 focus:bg-slate-300 w-full'>
                  Eliminar
               </button>
            </div>
         </td>
      </tr>
   );
};
