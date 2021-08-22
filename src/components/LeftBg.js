import React from 'react'
import logoSign from '../assets/logoSign.png'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'

export const LeftBg = () => {
  return (
    <Col className="d-none d-md-flex justify-content-md-center align-items-md-center " style={styleCoba.columnLeft} >
    <div style={styleCoba.parenImage}>
      <Image src={logoSign} style={styleCoba.image} />
    </div>
  </Col >
  )
}

const styleCoba = {
  columnLeft: {
    backgroundColor: '#897853',
    height: 'auto'
  },
  parenImage: {
    width: '100%'
  },
  image: {
    width: '100%'
  }
}
