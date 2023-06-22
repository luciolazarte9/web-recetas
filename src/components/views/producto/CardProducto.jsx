import { Col, Card, Button } from "react-bootstrap";

const CardProducto = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card className="rounded-0 cards-disenio border-0">
        <Card.Img className="rounded-0"
          variant="top"
          src="https://i.blogs.es/8819e1/carbonara-rec/1366_2000.jpg"
        />
        <Card.Body>
          <Card.Title>Pasta a la carbonara</Card.Title>
          <Card.Text>Una receta simple y sencilla pero espectacular.</Card.Text>
          <Button variant="primary">Ver receta</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
