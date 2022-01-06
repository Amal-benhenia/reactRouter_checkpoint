import React from 'react'
import {Navbar,Nav } from 'react-bootstrap';

export default function Navbarr(){
    return (
        
            <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">Ciné</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Movies</Nav.Link>
      <Nav.Link href="#features">Series</Nav.Link>
      <Nav.Link href="#pricing">Documentaries</Nav.Link>
    </Nav>
    
  </Navbar>
        
    )
}