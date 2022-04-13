import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Alerta } from "./Alerta";

export const Formulario = () => {
   // esquema de los campos
   // aqui se  validan todos los campos del formulario
   const nuevoClienteSchema = Yup.object().shape({
      nombre: Yup.string()
         .min(3, "El nombre es muy corto")
         .max(20, "El nombre es muy largo")
         .required("El nombre del cliente es obligatorio"),
      empresa: Yup.string().required("El nombre de la empresa es obligatorio"),

      email: Yup.string()
         .email("El email no es valido")
         .required("El email es obligatorio"),

      telefono: Yup.number()
         .positive("Numero no valido")
         .integer("Numero no valido")
         .typeError("Numero no valido"),
   });

   const handleSubmit = (valores) => {
      console.log(valores);
   };
   return (
      <div className='bg-slate-200 mt-10 px-5 py-10 rounded-md shadow-xl w-full md:w-3/4 mx-auto'>
         <h1 className='text-gray-600 font-bold text-2xl uppercase text-center mb-5'>
            Agregar cliente
         </h1>
         <Formik
            initialValues={{
               nombre: "",
               empresa: "",
               email: "",
               telefono: "",
               notas: "",
            }}
            onSubmit={(values) => {
               handleSubmit(values);
            }}
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
                           value='Agregar cliente'
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
