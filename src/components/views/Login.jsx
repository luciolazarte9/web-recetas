import { Form, Button, Container, Card } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="mainSection">
      <Card className="align-items-center border-0">
        <Card className="my-5 col-lg-6 rounded-0 border-0 cards-disenio">
          <h5 className="text-center">Login</h5>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese un email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="dark" type="submit">
                Ingresar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Card>
    </Container>
  );
};

export default Login;
