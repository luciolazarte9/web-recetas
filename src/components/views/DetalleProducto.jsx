import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/10273537/pexels-photo-10273537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Pasta a la carbonara</Card.Title>
              <hr />
              <Card.Text>
              La pasta a la carbonara es un plato clásico de la cocina italiana que se caracteriza por su sencillez y sabores ricos.
              <br/>
              <br/>
              <span className="text-danger fw-semibold ">Categoria:</span> Comida Italiana
              <br />
              <span className="text-danger fw-semibold ">Preparacion</span> description</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
