import React, { Component } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { LeftBg } from '../components/LeftBg'
import icon from '../assets/icon.png';
import { Link } from 'react-router-dom'
import { FcGoogle, FaFacebook } from 'react-icons/all';
import { connect } from 'react-redux';
import { authLogin } from '../redux/action/auth'
import Swal from 'sweetalert2'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onLogin = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    await this.props.authLogin(email, password).then(() => {
      if (this.props.auth.errMsg === '') {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Worng username Or password',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  componentDidUpdate () {
    const { token } = this.props.auth;
    if (token !== null) {
      this.props.history.push('/');
    }
  }

  render () {
    console.log(this.state)
    return (
    <Row className="g-0">
        <LeftBg />
        <Col >
          <div className="columnRight" style={styleCoba.columnRight}>
          <Row className="g-0 mt-5">
            <Col md="auto" xs="auto">
              <Image src={icon} style={styleCoba.icon} />
            </Col>
            <Col md="auto" xs="auto">
              <h1 style={styleCoba.textIcon}>Ticky</h1>
            </Col>
          </Row>
          <h1 className="mt-5 mb-2" style={styleCoba.label}>Login</h1>

          <Form onSubmit={this.onLogin}>

          <Form.Group className="mb-3" controlId="email">
              <Form.Control onChange={e => this.setState({ email: e.target.value })} style={styleCoba.form} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <div className="position-relative d-flex justify-content-between align-items-center d-md-flex justify-content-md-between align-items-md-center">
                <Form.Control onChange={e => this.setState({ password: e.target.value })} style={styleCoba.form} type="password" placeholder="Password" />
                <Button style={styleCoba.iconBtn}><i className="fa fa-eye" style={styleCoba.iconPw} /></Button>
              </div>
            </Form.Group>

            <div style={styleCoba.btnParen}>
              <Button style={styleCoba.btnSubmit} variant="primary" type="submit">Sign Up</Button>
            </div>

            <h3 style={styleCoba.textBtm}>Did you forgot your password?</h3>
            <Link to="/forgot" style={styleCoba.parentReset}><h3 style={styleCoba.textReset}>Tap here for reset</h3></Link>

          </Form>
          <div style={styleCoba.line}><h3 style={styleCoba.textBtm}>or sign in with</h3></div>
            <div style={styleCoba.btnParen}>
              <Button style={styleCoba.btnSignIn} variant="primary" type="button"><FcGoogle/></Button>
              <Button style={styleCoba.btnSignIn} variant="primary" type="button"><FaFacebook/></Button>
            </div>
          </div>

        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { authLogin }

export default connect(mapStateToProps, mapDispatchToProps)(Login)

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
    marginBottom: '20px',
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
  iconPw: {
    color: '#7ECFC0',
    fontSize: '20px'
  },
  iconBtn: {
    margin: '0',
    backgroundColor: 'transparent',
    border: '0',
    position: 'absolute',
    boxShadow: 'none',
    right: '0'
  },
  line: {
    borderTop: '2px solid #7ECFC0',
    paddingTop: '10px'
  },
  textBtm: {
    fontSize: '15px',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#414141'
  },
  btnSignIn: {
    backgroundColor: 'transparent',
    padding: '10px 50px',
    border: '2px solid #7ECFC0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(126, 207, 192, 0.5)',
    marginTop: '20px',
    color: '#4175DF',
    margin: '10px 20px',
    fontSize: '25px'
  },
  parentReset: {
    color: '#7ECFC0'
  },
  textReset: {
    fontSize: '15px',
    textAlign: 'center',
    marginBottom: '75px'
  }
}
