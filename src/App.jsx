import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { EditarCliente } from "./pages/EditarCliente";
import { Inicio } from "./pages/Inicio";
import { NuevoCliente } from "./pages/NuevoCliente";
import { VerCliente } from "./pages/VerCliente";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <BrowserRouter>
            <Routes>
               {/* grupo de rutas */}
               <Route path='/clientes' element={<Layout />}>
                  {/* rutas anidadas pertenecen al grupo de rutas */}
                  <Route index element={<Inicio />} />
                  <Route path='nuevo' element={<NuevoCliente />} />
                  <Route path='editar/:id' element={<EditarCliente />} />
                  <Route path=':id' element={<VerCliente />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
