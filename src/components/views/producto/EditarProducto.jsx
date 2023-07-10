import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { editarReceta, obtenerUnaReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    obtenerUnaReceta(id).then((respuesta) => {
      console.log(respuesta);
      setValue('nombre', respuesta.nombre);
      setValue('ingredientes', respuesta.ingredientes);
      setValue('preparacion', respuesta.preparacion);
      setValue('categoria', respuesta.categoria);
      setValue('imagen', respuesta.imagen);
    });
  }, []);

  const onSubmit = (recetaNueva) => {
    console.log(recetaNueva);
    //Llamar a la peticion para editar un producto
    editarReceta(recetaNueva, id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto actualizado",
          `La receta: ${recetaNueva.nombre} fue actualizada correctamente`,
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un error",
          `La receta: ${recetaNueva.nombre} no fue actualizada, intente esta operacion en breve`,
          "error"
        );
      }
    });
  };


  return (
    <section className="container mainSection">
    <h1 className="display-4 mt-5">Nueva receta</h1>
    <hr />
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formNombreProdcuto">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Sushi"
          {...register("nombre", {
            required: "El nombre de la receta es obligatoria",
            minLength: {
              value: 2,
              message: "La cantidad minima de caracteres es de 2 digitos",
            },
            maxLength: {
              value: 100,
              message: "La cantidad minima de caracteres es de 2 digitos",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.nombre?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Ingredientes</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Huevo, Lechuga"
          {...register("ingredientes", {
            required: "Los ingredientes son obligatorios",
            minLength: {
              value: 2,
              message: "La cantidad minima de caracteres es de 2 digitos",
            },
            maxLength: {
              value: 100,
              message: "La cantidad minima de caracteres es de 2 digitos",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.ingredientes?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Preparacion</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Poner sal al agua hirviendo"
          {...register("preparacion", {
            required: "Detallar la preparacion es obligatorio",
            minLength: {
              value: 2,
              message: "La cantidad minima de caracteres es de 2 digitos",
            },
            maxLength: {
              value: 100,
              message: "La cantidad minima de caracteres es de 2 digitos",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.preparacion?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formImagen">
        <Form.Label>Imagen URL*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
          {...register("imagen", {
            required: "La imagen es obligatoria",
          })}
        />
        <Form.Text className="text-danger">
          {errors.imagen?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Categoria*</Form.Label>
        <Form.Select
          {...register("categoria", {
            required: "Por favor seleccione una categoria",
          })}
        >
          <option value="">Seleccione una opcion</option>
          <option value="Comida Italiana">Comida Italiana</option>
          <option value="Comida Americana">Comida Americana</option>
          <option value="Comida Mexicana">Comida Mexicana</option>
          <option value="Comida Oriental">Comida Oriental</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.categoria?.message}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  </section>
  );
};

export default EditarReceta;
