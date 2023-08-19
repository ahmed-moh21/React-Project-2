import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import{Navbar,Nav} from "react-bootstrap";

const NavBar = () => {
    
    return(
            <div className="Navbar-sec">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"> <Logo /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="con-lin">
                    <Nav className=" link-head">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    </div>
                </Navbar.Collapse>
                </Navbar> 
            </div>
    );
}

export default NavBar;