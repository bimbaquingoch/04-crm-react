import { Outlet, Link, useLocation } from "react-router-dom";

export const Layout = () => {
   const location = useLocation();
   const { pathname } = location;
   // const urlActual = location.pathname;

   const estiloNav = "text-sky-300 border-sky-300 shadow-md shadow-sky-400";

   return (
      <div className='md:flex md:min-h-screen'>
         <div className='md:w-1/6 bg-cyan-700 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'>
               CRM - Clientes
            </h2>
            <div className='md:flex justify-center w-full '>
               <nav className='flex justify-around md:flex-col mt-3 md:mt-10 md:max-w-fit'>
                  <Link
                     className={`${
                        pathname === "/clientes" ? estiloNav : " text-white"
                     } text-2xl px-2 py-3 mt-2 hover:text-sky-300 hover:border-sky-300 hover:shadow-md hover:shadow-sky-400 text-center rounded-md border-2 `}
                     to='/clientes'>
                     Clientes
                  </Link>
                  <Link
                     className={`${
                        pathname === "/clientes/nuevo"
                           ? "text-sky-300 border-sky-300 shadow-md shadow-sky-400"
                           : " text-white"
                     } text-2xl px-2 py-3 mt-2 hover:text-sky-300 hover:border-sky-300 hover:shadow-md hover:shadow-sky-400  text-center rounded-md border-2 `}
                     to='/clientes/nuevo'>
                     Nuevo cliente
                  </Link>
               </nav>
            </div>
         </div>
         <div className='w-full md:w-5/6 p-10 md:h-screen overflow-y-scroll'>
            <Outlet />
         </div>
      </div>
   );
};
