import * as Yup from "yup";

export const handleSubmit = async ( valores ) =>
{
    try
    {
        const url = "http://localhost:4000/clientes";
        // fetch realiza GET por defecto
        const respuesta = await fetch( url, {
            // En este caso le colocamos el metodo
            method: "POST",
            // a la URL le mandamos la informacion
            body: JSON.stringify( valores ),
            // Configuracion, le indicamos que el contenido
            // es application/json
            headers: {
                "Content-Type": "application/json",
            },
        } );

        const resultado = await respuesta.json();
        console.log( respuesta );
        console.log( resultado );
        return resultado;
    } catch ( error )
    {
        console.log( error );
    }
};

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