import React, { Component } from 'react'
import { Image, InputGroup, FormControl, Form, DropdownButton, Dropdown, Button, Row, FloatingLabel, Col } from 'react-bootstrap'
import profilePic from '../assets/imgProfile.png'
import cardAtm from '../assets/cardAtm.png'
import { BsStarFill, BsGearFill, FiLogOut, FaUserCircle, FaPlaneDeparture, BiChevronDown, BiChevronRight } from 'react-icons/all'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import { getUser } from '../redux/action/user'

class Profile extends Component {
  render () {
    return (
      <div style={styleCoba.warpAll} className="overflow-hidden">
        <div className="d-flex flex-row justify-content-center py-5 mx-md-5 gap-md-4">
          <div style={styleCoba.parentLeft} className="d-flex">
            <Image className="rounded-circle" src={profilePic} />
            <input type="file" className="d-none" id="file-upload"/>
              <label style={styleCoba.btnLeft} htmlFor="file-upload" >Select Photo</label>
            <h5 className="fw-bold py-2">Mike Kowalski</h5>
            <p>Medan, Indonesia</p>
            <div className="d-flex flex-row justify-content-between w-100 pt-4">
              <p className="fw-bold">Cards</p>
              <p className="fw-bold" style={{ color: '#7ECFC0' }}>+ Add</p>
            </div>
            <Image src={cardAtm} />
            <div className="d-flex flex-column align-self-start gap-4">
              <div className="d-flex flex-row align-items-center gap-4">
                <FaUserCircle size={20} color="#7ECFC0" />
                <p className="fw-bold" style={{ color: '#7ECFC0' }}>Profile</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-4">
                <BsStarFill size={20} />
                <p className="fw-bold">My Review</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-4">
                <BsGearFill size={20} />
                <p className="fw-bold">Settings</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-4">
                <FiLogOut size={20} className="text-danger" />
                <p className="fw-bold text-danger">Logout</p>
              </div>
            </div>
          </div>
          <div className="d-md-flex d-none flex-grow-1 flex-column">
            <div style={{ borderRadius: '15px', padding: '1em' }} className="bg-white d-flex flex-column">
              <div className="d-flex flex-column gap-2">
                <p style={{ color: '#7ECFC0', letterSpacing: '3px', fontSize: '13px' }}>PROFILE</p>
                <h5 className="fw-bold">Profile</h5>
              </div>
              <Form className="mt-4">
                <Row className="mb-2">
                  <Form.Group as={Col} controlId="formLeftLabel">
                    <div className="fw-bold">Contact</div>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formRightLabel">
                    <div className="fw-bold">Biodata</div>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>Email</Form.Label>
                    <Form.Control style={styleCoba.input} type="email" placeholder="Example@gmail.com" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>Username</Form.Label>
                    <Form.Control style={styleCoba.input} type="text" placeholder="My UserName" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>Phone Number</Form.Label>
                    <Form.Control style={styleCoba.input} type="number" placeholder="08123123123" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>City</Form.Label>
                    <Form.Select style={styleCoba.input} defaultValue="Medan">
                      <option>Medan</option>
                      <option>Jambi</option>
                      <option>Bandung</option>
                      <option>Jakarta</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <div className="float-end d-flex flex-row align-items-center">
                      <h6 style={{ color: '#7ECFC0' }}>Account Settings</h6>
                      <BiChevronRight color="#7ECFC0" className="pt-1" size={30} />
                    </div>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>Address</Form.Label>
                    <Form.Control style={styleCoba.input} type="text" placeholder="Medan, Indonesia" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPostCode">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>Post Code</Form.Label>
                    <Form.Control style={styleCoba.input} type="number" placeholder="36139" />
                  </Form.Group>
                </Row>

                <Button className="float-end" style={styleCoba.btnRight} type="submit">
                  Save
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const styleCoba = {
  warpAll: {
    backgroundColor: '#F5F6FA'
  },
  parentLeft: {
    backgroundColor: 'white',
    width: '325px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2em',
    borderRadius: '15px'
  },
  btnLeft: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: '#7ECFC0',
    fontWeight: 'bold',
    borderColor: '#7ECFC0',
    borderRadius: '10px',
    margin: '15px 0px',
    padding: '10px 15px',
    border: 'solid 2px'
  },
  input: {
    borderTop: '0',
    borderRight: '0',
    borderLeft: '0',
    borderBottomColor: '#7ECFC0',
    borderRadius: '0',
    boxShadow: 'none',
    fontWeight: '600'

  },
  btnRight: {
    border: '0',
    boxShadow: '0 4px 8px 0 rgba(126, 207, 192, 0.5)',
    backgroundColor: '#7ECFC0',
    padding: '8px 40px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '8px',
    margin: '1em 0em'
  }

}
