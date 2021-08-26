
import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown, Image, Form, Button, FormControl } from 'react-bootstrap';
import icon from '../assets/icon.png';
import { AiOutlineMail, BsBell, FaSearchLocation } from 'react-icons/all';
import { connect, useDispatch, useSelector } from 'react-redux'
import headerImg from '../assets/headerImg.png'
import { getUser } from '../redux/action/user'
import imgUser from '../assets/user.png'

import { useLocation, Link, useHistory } from 'react-router-dom'
import { getTickets } from '../redux/action/ticket'

const { REACT_APP_BACKEND_URL: URL } = process.env

function Header (props) {
  const [search, setSearch] = useState('')
  const location = useLocation();
  const history = useHistory()
  console.log(location.pathname);

  const { dataUser } = useSelector(state => state.user);

  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(token));
  }, [token]);

  const onSearch = (e) => {
    e.preventDefault()
    const form = {
      departure: '',
      destination: search,
      classTicket: ''
    }
    dispatch(getTickets(form))
    history.push('/search')
  }

  return (
    <React.Fragment>
      {location.pathname !== '/signup' && location.pathname !== '/forgot' && location.pathname !== '/login'
        ? (
        <Navbar collapseOnSelect expand="lg" bg="white" style={styleCoba.parentAll} variant="light">
        <Container>
        <Link style={styleCoba.parentIcon} to="/"><Image className="pe-3" src={icon}/>Ticky</Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form onSubmit={onSearch} className="position-relative d-flex justify-content-between align-items-center d-md-flex justify-content-md-between align-items-md-center ms-auto  mt-3 mt-md-0 pe-md-4">
            <Button type='submit' style={styleCoba.searchIcon}><FaSearchLocation /> </Button>
              <FormControl
                type="search"
                placeholder="Where you want to go?"
                className="mr-2"
                aria-label="Search"
                style={styleCoba.searchInput}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
          </Form>
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/search" style={styleCoba.textMenu} className="pe-md-4  mt-3 mt-md-0" >Find Ticket</Nav.Link>
            <Nav.Link as={Link} to="/mybooking" style={styleCoba.textMenu} className="pe-md-4  mt-3 mt-md-0">My Booking</Nav.Link>

          </Nav>
          {props.auth.token === null
            ? (
            <Nav>
              <Nav.Link style={styleCoba.btnRight} className=" mt-3 mt-md-0" as={Link} to="/signup">Sign Up</Nav.Link>

          </Nav>
              )
            : (
              <Nav className="d-flex flex-row align-items-center gap-5">
                <Link to="/chat">
                  <AiOutlineMail style={{ color: 'gray' }} size={24} />
                </Link>

                <Link to="/notification">
                  <BsBell style={{ color: 'gray' }} size={24} />
                </Link>

                <Link to="/profile">
                  {dataUser.picture !== null
                    ? <Image className="rounded-circle" style={{ width: '50px', height: '50px' }} src={`${URL}${dataUser.picture}`} />
                    : <Image className="rounded-circle" style={{ width: '50px', height: '50px' }} src={imgUser} />
                  }

                </Link>
              </Nav>
              )}

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

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
})

const mapDispatchToProps = { getUser }

export default connect(mapStateToProps, mapDispatchToProps)(Header)

const styleCoba = {
  parentAll: {
    padding: '2.5em 0em'
  },
  parentIcon: {
    color: '#414141',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  searchIcon: {
    margin: '0',
    backgroundColor: 'transparent',
    border: '0',
    position: 'absolute',
    boxShadow: 'none',
    left: '0',
    color: '#414141',
    padding: '0px 10px'
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
    fontWeight: '600',
    boxShadow: '0 4px 8px 0 rgba(126, 207, 192, 0.5)'
  }
}
