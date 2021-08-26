import React, { Component } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { LeftBg } from '../components/LeftBg'
import icon from '../assets/icon.png';

export default class Forgot extends Component {
  render () {
    return (
      <>
      <Row className="g-0 parentHome">
        <LeftBg />
        <Col >
          <div className="columnRight">
          <Row className="g-0 mt-5">
            <Col md="auto" xs="auto">
              <Image src={icon} style={styleCoba.icon} />
            </Col>
            <Col md="auto" xs="auto">
              <h1 style={styleCoba.textIcon}>Ticky</h1>
            </Col>
          </Row>
          <h1 style={styleCoba.label}>Forgot Password</h1>

          <Form>

          <Form.Group className="mb-3" controlId="email">
              <Form.Control style={styleCoba.form} type="email" placeholder="Enter email" />
            </Form.Group>

            <div style={styleCoba.btnParen}>
              <Button style={styleCoba.btnSubmit} variant="primary" type="submit">Send</Button>
            </div>
            <h3 style={styleCoba.textBtm}>You’ll get message soon on your email</h3>

          </Form>

          </div>

        </Col>
      </Row>
      </>
    )
  }
}

const styleCoba = {

  icon: {
    width: '50px',
    marginRight: '10px'
  },
  textIcon: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#414141'
  },
  label: {
    marginTop: '100px',
    marginBottom: '60px',
    fontWeight: '700',
    color: '#7ECFC0'
  },
  form: {
    border: '0',
    borderBottom: '2px solid #7ECFC0',
    borderRadius: '0',
    padding: '15px',
    boxShadow: 'none'
  },
  btnParen: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    paddingBottom: '20px'
  },
  btnSubmit: {
    width: '100%',
    backgroundColor: '#7ECFC0',
    padding: '15px 0px',
    fontWeight: '700',
    border: '0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(126, 207, 192, 0.5)',
    marginTop: '25px'
  },

  textBtm: {
    fontSize: '15px',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#414141'
  }

}
