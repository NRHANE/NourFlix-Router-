
import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

function Navigation({setText, setRating}) {
  return (
    <div>
     <Navbar bg="dark" expand="lg" variant="dark" >
  <Container fluid>
    <Link style={{textDecoration:"none"}} to ="/"><Navbar.Brand  href="#">MovieApp</Navbar.Brand></Link>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        <Link style={{textDecoration:"none"}}to ="/"><Nav.Link href="#action1">Movies</Nav.Link></Link>
        <Link style={{textDecoration:"none"}} to="/contact"><Nav.Link href="#action2">Contact</Nav.Link></Link>
        <Link  style={{textDecoration:"none"}}to ="/about"><Nav.Link href="#action3">About</Nav.Link></Link>
       
      </Nav>
      
      <span style={{marginRight:"20px"}}>
      <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    onChange={(newRating)=>setRating(newRating)}
  />
  </span>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search movie"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setText(e.target.value)}
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> 
    </div>
    )
}

export default Navigation
