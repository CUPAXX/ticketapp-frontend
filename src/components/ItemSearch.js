/* eslint-disable react/jsx-key */
import { Wifi } from '@material-ui/icons';
import React from 'react'
import { Container, Row, Col, Image, Form, Button, Carousel, Accordion } from 'react-bootstrap';
import { BiChevronDown } from 'react-icons/bi';
import { FaHamburger, FaLuggageCart, FaPlaneDeparture } from 'react-icons/fa';
import airlineIcon from '../assets/airlineIcon.png'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ItemSearch ({ img, airline, codeDeparture, timeDep, codeArrival, timeArr, price, facilities, ticketDetail }) {
  const history = useHistory();

  const handleGoToDetail = () => {
    history.push('/detail', ticketDetail);
  }

  return (
    <div className="mb-4" style={styleCoba.componentRight}>
      <div className="d-flex flex-row align-items-center">
        <Image className="d-md-block d-none" src={img} style={{ marginRight: '25px', width: '100px', height: '70px', objectFit: 'cover' }}/>
        <h6>{airline}</h6>
      </div>
      <div className=" d-flex flex-row align-items-center justify-content-between d-md-flex flex-md-row justify-content-md-between align-items-md-center mt-4">
        <div className="d-flex flex-row gap-md-3 gap-2">
          <div className="d-flex flex-column align-items-center">
            <h4>{codeDeparture}</h4>
            <p>{timeDep}</p>
          </div>
          <FaPlaneDeparture size={30} style={{ paddingTop: '10px' }}/>
          <div className="d-flex flex-column align-items-center">
            <h4>{codeArrival}</h4>
            <p>{timeArr}</p>
          </div>
        </div>
        <div className="d-md-flex d-none flex-column align-items-center">
          <h5>3 hours 11 minutes</h5>
          <p>(1 transit)</p>
        </div>
        <div className="d-md-flex d-none flex-row align-items-center gap-2">
          {facilities}
        </div>
        <div>
          <h5><span style={{ color: '#7ECFC0' }}>$ {price}</span> /pax</h5>
        </div>
        <div className="d-md-block d-none">
          <Button onClick={() => handleGoToDetail()} style={styleCoba.btn} >Select</Button>
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
