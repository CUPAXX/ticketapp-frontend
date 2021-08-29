import { Wifi } from '@material-ui/icons';
import React from 'react'
import { Container, Row, Col, Image, Form, Button, Carousel, Accordion } from 'react-bootstrap';
import { BiChevronDown } from 'react-icons/bi';
import { FaHamburger, FaLuggageCart, FaPlaneDeparture } from 'react-icons/fa';
import airlineIcon from '../assets/airlineIcon.png'
import { Link } from 'react-router-dom'

export default function ItemSearch () {
  return (
    <div className="mb-4" style={styleCoba.componentRight}>
      <div className="d-flex flex-row align-items-center">
        <Image className="d-md-block d-none" src={airlineIcon} style={{ marginRight: '25px' }}/>
        <h6>Garuda Indonesia</h6>
      </div>
      <div className=" d-flex flex-row align-items-center justify-content-between d-md-flex flex-md-row justify-content-md-between align-items-md-center mt-4">
        <div className="d-flex flex-row gap-md-3 gap-2">
          <div className="d-flex flex-column align-items-center">
            <h4>IDN</h4>
            <p>12:33</p>
          </div>
          <FaPlaneDeparture size={30} style={{ paddingTop: '10px' }}/>
          <div className="d-flex flex-column align-items-center">
            <h4>JPN</h4>
            <p>12:33</p>
          </div>
        </div>
        <div className="d-md-flex d-none flex-column align-items-center">
          <h5>3 hours 11 minutes</h5>
          <p>(1 transit)</p>
        </div>
        <div className="d-md-flex d-none flex-row align-items-center gap-2">
          <FaLuggageCart size={20} />
          <FaHamburger size={20} />
          <Wifi size={20} />
        </div>
        <div>
          <h5><span style={{ color: '#7ECFC0' }}>$ 214,00</span> /pax</h5>
        </div>
        <div className="d-md-block d-none">
          <Link to="/detail"><Button style={styleCoba.btn} >Select</Button></Link>
        </div>
      </div>
      <div style={{ color: '#7ECFC0' }} className="d-flex flex-row align-items-center">
        <h6 className="fw-bold">View Details</h6>
        <BiChevronDown size={30} />
      </div>
    </div>
  )
}

const styleCoba = {
  componentRight: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    borderRadius: '15px'
  },
  btn: {
    border: '0',
    boxShadow: 'none',
    backgroundColor: '#7ECFC0',
    fontWeight: 'bold',
    padding: '10px 35px'

  }
}
