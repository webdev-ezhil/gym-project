import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary"bg="dark" data-bs-theme="dark">
    <Container>
       <Navbar.Brand href="/">STG</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
         
           <Nav.Link href="/Workout">WORKOUT</Nav.Link>
           <Nav.Link href="/diet">DIET</Nav.Link>
           <Nav.Link href="/Contact">Contact</Nav.Link>
           <Nav.Link eventKey={2} href="/About">
             ABOUT AS
           </Nav.Link>
           </Nav>
        </Navbar.Collapse>
       </Container>
   </Navbar>
    
    

    
  );
}

export default MainNavbar;
