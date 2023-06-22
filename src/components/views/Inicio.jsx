import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
const Inicio = () => {
  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://cdn.euroinnova.edu.es/img/subidasEditor/caracteristicas%20de%20un%20chef-1613765147.webp"
        alt="Chef cocina"
      />
      <Container>
        <h1 className="display-4 text-center">Grandiosas recetas</h1>
        <hr />
        <Row>
            <CardProducto></CardProducto>
            <CardProducto></CardProducto>
            <CardProducto></CardProducto>
            <CardProducto></CardProducto>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
