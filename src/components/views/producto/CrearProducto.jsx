import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearReceta } from "../../helpers/queries";



const CrearProducto = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (recetaNueva) => {
    console.log(recetaNueva);
    //Pedir a la api crear receta. Si la respuesta es 201 entonces creo el receta, de lo contrario, mensaje de error
    crearReceta(recetaNueva).then((respuesta)=>{
      if(respuesta && respuesta.status === 201){
        Swal.fire('receta creado', `El receta ${recetaNuevo.nombreReceta} fue creado correctamente`, 'success');
        reset();
      }else{
        Swal.fire('Oops! Ocurrio un error', `El receta ${recetaNueva.nombreReceta} no fue creado correctamente, intente nuevamente mas tarde`, 'error');
      }
    })
  }
  
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form >
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Sushi"
          />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Ingredientes</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Huevo, Lechuga"
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Preparacion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Poner sal al agua hirviendo"
          />
       
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
      
          />
      
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
          >
            <option value="">Seleccione una opcion</option>
            <option value="Comida Italiana">Comida Italiana</option>
            <option value="Comida Americana">Comida Americana</option>
            <option value="Comida Mexicana">Comida Mexicana</option>
            <option value="Comida Oriental">Comida Oriental</option>
          </Form.Select>
       
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
