import { Outlet } from "react-router-dom";

export const Layout = () => {
   return (
      <div>
         <h1>Desde Layout</h1>
         <Outlet />
      </div>
   );
};
