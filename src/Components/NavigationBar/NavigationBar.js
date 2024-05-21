import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <div className="container">
        <Navbar style={{backgroundColor:"#FFFFFF"}}>
          <Container style={{color:"#7BC0E3"}}>
            <Navbar.Brand href="#home" style={{}}>
              <div style={{marginLeft:'60px'}}>
              <img src="./logo1.png" alt="..." style={{width:'80%'}}></img>
              </div>
            </Navbar.Brand>
            <Nav className="me-auto"></Nav>
            <Nav.Link href="#home" as={Link} to="/" className="mx-3" style={{color:"black",fontWeight:'bold'}}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="mx-3">
              Services
            </Nav.Link>
            <Nav.Link href="#case" className="mx-3">
              Case
            </Nav.Link>
            <Nav.Link href="#dacode" className="mx-3">
              DaCode Specialists{" "}
            </Nav.Link>
            <Nav.Link href="#blog" as={Link} to="/blog" className="mx-3">
              Blog
            </Nav.Link>
            <button className="btn btn-primary mx-3 rounded-pill" style={{border:"none",color:'#FFFFFF',fontWeight:'bolder',backgroundColor:'#7BC0E3'}}>
              Request a quote
            </button>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavigationBar;
