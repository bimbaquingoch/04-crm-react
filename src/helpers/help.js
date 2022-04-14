import * as Yup from "yup";

// esquema de los campos
// aqui se  validan todos los campos del formulario
export const nuevoClienteSchema = Yup.object().shape( {
    nombre: Yup.string()
        .min( 3, "El nombre es muy corto" )
        .max( 20, "El nombre es muy largo" )
        .required( "El nombre del cliente es obligatorio" ),
    empresa: Yup.string().required( "El nombre de la empresa es obligatorio" ),

    email: Yup.string()
        .email( "El email no es valido" )
        .required( "El email es obligatorio" ),

    telefono: Yup.number()
        .positive( "Numero no valido" )
        .integer( "Numero no valido" )
        .typeError( "Numero no valido" ),
} );