import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Headers() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Recipes">Recipes</Nav.Link>
            <Nav.Link href="/shopping-list">Shopping List</Nav.Link>
            <Nav.Link href="#">List Bill</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Headers;