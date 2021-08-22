import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Image, Form, Button, FormControl } from 'react-bootstrap';
import icon from '../assets/icon.png';
import { FaSearchLocation } from 'react-icons/all';
import { useLocation } from 'react-router-dom'

export default function Header (props) {
  const location = useLocation();
  console.log(location.pathname);
  return (

    <React.Fragment>
      {location.pathname !== '/signup' && location.pathname !== '/forgot' && location.pathname !== '/login'
        ? (
        <Navbar collapseOnSelect expand="lg" bg="white" style={styleCoba.parentAll} variant="light">
        <Container>
        <Navbar.Brand style={styleCoba.parentIcon} href="#"><Image className="pe-3" src={icon} />Ticky</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="position-relative d-flex justify-content-between align-items-center d-md-flex justify-content-md-between align-items-md-center ms-auto  mt-3 mt-md-0 pe-md-4">
            <Button variant="outline-success" style={styleCoba.searchIcon}><FaSearchLocation /> </Button>
              <FormControl
                type="search"
                placeholder="Where you want to go?"
                className="mr-2"
                aria-label="Search"
                style={styleCoba.searchInput}
              />
          </Form>
          <Nav className="me-auto ">
            <Nav.Link style={styleCoba.textMenu} className="pe-md-4  mt-3 mt-md-0" href="#features">Find Ticket</Nav.Link>
            <Nav.Link style={styleCoba.textMenu} className="pe-md-4  mt-3 mt-md-0" href="#pricing">My Booking</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link style={styleCoba.btnRight} className=" mt-3 mt-md-0" href="#deets">Sign Up</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
          )
        : (
        <div />
          )}

    </React.Fragment>

  )
}

const styleCoba = {
  parentAll: {
    padding: '2.5em 0em'
  },
  parentIcon: {
    color: '#414141',
    fontWeight: 'bold'
  },
  searchIcon: {
    margin: '0',
    backgroundColor: 'transparent',
    border: '0',
    position: 'absolute',
    boxShadow: 'none',
    left: '0',
    color: '#414141'

  },
  searchInput: {
    padding: '10px 40px',
    borderRadius: '10px',
    backgroundColor: '#F5F5F5',
    border: '0',
    boxShadow: '0 4px 8px 0 rgba(161, 161, 161, 0.5)'
  },
  textMenu: {
    color: '#414141',
    fontWeight: '600'
  },
  btnRight: {
    backgroundColor: '#7ECFC0',
    color: 'white',
    borderRadius: '10px',
    padding: '10px 40px',
    fontWeight: '600'
  }
}
