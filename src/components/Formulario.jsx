import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { nuevoClienteSchema } from "../helpers/help";
import { Alerta } from "./Alerta";
import { Spinner } from "./Spinner";

export const Formulario = ({ cliente, cargando }) => {
   const navigate = useNavigate();
   const initialState = {
      nombre: cliente?.nombre ?? "",
      empresa: cliente?.empresa ?? "",
      email: cliente?.email ?? "",
      telefono: cliente?.telefono ?? "",
      notas: cliente?.notas ?? "",
   };

   const handleSubmit = async (valores) => {
      try {
         let respuesta;
         if (cliente.id) {
            // Editando un registro
            const url = `http://localhost:4000/clientes/${cliente.id}`;
            respuesta = await fetch(url, {
               method: "PUT",
               body: JSON.stringify(valores),
               headers: {
                  "Content-Type": "application/json",
               },
            });
         } else {
            const url = "http://localhost:4000/clientes";
            // fetch realiza GET por defecto
            respuesta = await fetch(url, {
               // En este caso le colocamos el metodo
               method: "POST",
               // a la URL le mandamos la informacion
               body: JSON.stringify(valores),
               // Configuracion, le indicamos que el contenido
               // es application/json
               headers: {
                  "Content-Type": "application/json",
               },
            });
         }
         await respuesta.json();
         navigate("/clientes");
      } catch (error) {
         console.log(error);
      }
   };

   return cargando ? (
      <Spinner />
   ) : (
      <div className='bg-slate-200 mt-10 px-5 py-10 rounded-md shadow-xl w-full md:w-3/4 mx-auto'>
         <h1 className='text-gray-600 font-bold text-2xl uppercase text-center mb-5'>
            {cliente.nombre?.length > 0 ? "Editar cliente" : "Agregar Cliente"}
         </h1>
         <Formik
            initialValues={initialState}
            onSubmit={async (values, { resetForm }) => {
               await handleSubmit(values);
               resetForm();
            }}
            enableReinitialize={true}
            // el esquema de validacion, donde esta la validacion?
            validationSchema={nuevoClienteSchema}>
            {({ errors, touched }) => {
               return (
                  <Form>
                     <div className='mb-4'>
                        <label
                           className='text-gray-600 text-xl'
                           htmlFor='nombre'>
                           Nombre:
                        </label>
                        <Field
                           id='nombre'
                           type='text'
                           name='nombre'
                           className='mt-2 block w-full p-3 bg-gray-100 rounded-md'
                           placeholder='Nombre del cliente'
                        />

                        {errors.nombre && touched.nombre ? (
                           <Alerta>{errors.nombre}</Alerta>
                        ) : null}
                     </div>

                     <div className='mb-4'>
                        <label
                           className='text-gray-600 text-xl'
                           htmlFor='empresa'>
                           Empresa del cliente:
                        </label>
                        <Field
                           id='empresa'
                           type='text'
                           name='empresa'
                           className='mt-2 block w-full p-3 bg-gray-100 rounded-md'
                           placeholder='Empresa del cliente'
                        />
                        {errors.empresa && touched.empresa ? (
                           <Alerta>{errors.empresa}</Alerta>
                        ) : null}
                     </div>

                     <div className='mb-4'>
                        <label
                           className='text-gray-600 text-xl'
                           htmlFor='email'>
                           Email:
                        </label>
                        <Field
                           id='email'
                           type='email'
                           name='email'
                           className='mt-2 block w-full p-3 bg-gray-100 rounded-md'
                           placeholder='Email del cliente'
                        />
                        {errors.email && touched.email ? (
                           <Alerta>{errors.email}</Alerta>
                        ) : null}
                     </div>

                     <div className='mb-4'>
                        <label
                           className='text-gray-600 text-xl'
                           htmlFor='telefono'>
                           Telefono:
                        </label>
                        <Field
                           name='telefono'
                           id='telefono'
                           type='tel'
                           className='mt-2 block w-full p-3 bg-gray-100 rounded-md'
                           placeholder='Telefono del cliente'
                        />
                        {errors.telefono && touched.telefono ? (
                           <Alerta>{errors.telefono}</Alerta>
                        ) : null}
                     </div>

                     <div className='mb-4'>
                        <label
                           className='text-gray-600 text-xl'
                           htmlFor='notas'>
                           Notas:
                        </label>
                        <Field
                           as='textarea'
                           id='notas'
                           type='text'
                           name='notas'
                           className='mt-2 block w-full p-3 bg-gray-100 rounded-md h-40'
                           placeholder='Notas del cliente'
                        />
                     </div>

                     <div className='mt-5 w-full flex justify-center items-center'>
                        <input
                           type='submit'
                           value={
                              cliente.nombre?.length > 0
                                 ? "Editar cliente"
                                 : "Agregar Cliente"
                           }
                           className='w-full md:w-2/4 bg-sky-400 cursor-pointer p-3 rounded-md text-white uppercase font-bold shadow-lg text-lg'
                        />
                     </div>
                  </Form>
               );
            }}
         </Formik>
      </div>
   );
};

Formulario.defaultProps = {
   cliente: {},
   cargando: false,
};
