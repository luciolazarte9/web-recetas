import { Button } from "react-bootstrap";


const ItemProducto = () => {
   return (
    <tr>
      {/* <td>{props.producto._id}</td> */}
      <td>1</td>
      <td>Pasta a la carbonara</td>
      <td>ingredientes</td>
      <td>url</td>
      <td>Comida italiana</td>
      <td>
        <Button className="btn btn-warning">Editar</Button>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
