import { Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "../../helpers/queries";
import { Link } from "react-router-dom";



const CardProducto = () => {

    const [recetas, setRecetas] = useState([]);


  useEffect(() => {
    obtenerRecetas().then((respuesta) => {
      setRecetas(respuesta);
    });
  }, []);

  return (
    <>
    {recetas?.map((receta)=>(
      <Col md={4} ld={3} className="mb-3" key={receta.id}>
        <Card className="rounded-0 cards-disenio border-0">
          <Card.Img className="rounded-0"
            variant="top"
            src={receta.imagen}
          />
          <Card.Body>
            <Card.Title>{receta.nombre}</Card.Title>
            <Card.Text>{receta.categoria}</Card.Text>
            <Link className="btn btn-primary" variant="primary" to={"/detalle/"+receta.id}>Ver receta</Link>
          </Card.Body>
        </Card>
      </Col>
    ))} </>
      
  );
};

export default CardProducto;
