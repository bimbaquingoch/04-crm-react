import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { LogIn } from "./layout/LogIn";
import { Inicio } from "./pages/Inicio";
import { LogInForm } from "./pages/LogInForm";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <BrowserRouter>
            <Routes>
               {/* grupo de rutas */}
               <Route path='/' element={<LogIn />}>
                  {/* rutas anidadas pertenecen al grupo de rutas */}
                  <Route index element={<LogInForm />} />
               </Route>
               <Route path='/clientes' element={<Layout />}>
                  <Route index element={<Inicio />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
