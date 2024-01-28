import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
        <Container className='containerr'>
            <Navbar.Brand href="#" className='logo'>Air Muzic</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0 vvvv "
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link className='tap' href="#Home">Home</Nav.Link>
                <Nav.Link className='tap' href="#About">About</Nav.Link>
                <Nav.Link  className='tap' href="#Features">Features</Nav.Link>
                <Nav.Link className='tap' href="#Contact">Contact Us</Nav.Link>
                <Button variant="outline-success">Order Now</Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavScrollExample;
