import React, { Component } from 'react'
import { Image, InputGroup, FormControl, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import { BsDot } from 'react-icons/bs'
import { FaPlaneDeparture, BiCheckCircle, DiVisualstudio, FiChevronDown, AiFillWarning, AiFillStar, FaHamburger, TiWiFi, ImManWoman } from 'react-icons/all'
import airlineIcon from '../assets/airlineIcon.png'

export default class FlightDetail extends Component {
  render () {
    return (
      <div style={styleCoba.warpAll}>
        <div className="parentDetail "/>
        <div style={styleCoba.parentAll} className="d-none d-md-flex flex-md-row gap-md-4 pb-md-5 mx-md-5">
          <div className="d-flex flex-column flex-grow-1 gap-3">
            <h5 style={{ color: 'white' }}>Contact Person Details</h5>
            <div className="parentLeftDetail">
              <Form.Label className="ps-2">Full Name</Form.Label>
                <InputGroup className="mb-3">
                <FormControl style={styleCoba.input} placeholder="Example Full Name" />
              </InputGroup>
              <Form.Label className="ps-2">Email</Form.Label>
                <InputGroup className="mb-3">
                <FormControl type="email" style={styleCoba.input} placeholder="example@gmail.com" />
              </InputGroup>
              <Form.Label className="ps-2">Phone Number</Form.Label>
              <div className="d-flex flex-row align-items-center">
                <Form.Select style={styleCoba.select}>
                  <option value="1">+62</option>
                  <option value="2">+21</option>
                  <option value="3">+99</option>
                </Form.Select>
                <InputGroup >
                  <FormControl style={styleCoba.input2} placeholder="0811123456" />
                </InputGroup>
              </div>
              <div className="d-flex flex-row align-items-center gap-3 p-3 mt-5" style={{ backgroundColor: 'rgba(242, 69, 69, 0.1)', borderRadius: '10px' }}>
                <AiFillWarning size={20} color="red"/>
                <p style={{ fontWeight: '600' }}>Make sure the customer data is correct.</p>
              </div>
            </div>

            <h5 className="mt-4">Passenger Details</h5>
            <div className="parentLeftDetail">
            <div className="d-flex flex-row align-items-center gap-3 p-3 mb-5 justify-content-between" style={{ backgroundColor: 'rgba(35, 149, 255, 0.1)', borderRadius: '10px' }}>
                <p style={{ fontWeight: '600' }}>Passenger : 1 Adult</p>
                <div className="d-flex flex-row align-items-center">
                  <p style={{ fontWeight: '600' }}>Same as contact person</p>
                  <div className="form-check form-switch ms-3 mt-1">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  </div>
                </div>
              </div>
            <Form.Label className="ps-2">Title</Form.Label>
              <div className="d-flex flex-row align-items-center mb-3">
                <Form.Select style={styleCoba.select2}>
                  <option value="1">Mr.</option>
                  <option value="2">Mrs.</option>
                  <option value="3">Ms.</option>
                </Form.Select>
              </div>
              <Form.Label className="ps-2">Full Name</Form.Label>
                <InputGroup className="mb-3">
                <FormControl style={styleCoba.input} placeholder="Example Full Name" />
              </InputGroup>
              <Form.Label className="ps-2">Nationallity</Form.Label>
              <div className="d-flex flex-row align-items-center">
                <Form.Select style={styleCoba.select2}>
                  <option value="1">Indonesia</option>
                  <option value="2">Konoha</option>
                  <option value="3">East Blue</option>
                </Form.Select>
              </div>
            </div>

            <h5 className="mt-4">Passenger Details</h5>
            <div className="parentLeftDetail">
              <div className="d-flex flex-row justify-content-between border-bottom pb-3">
                <div className="d-flex flex-row gap-3">
                  <Form.Check aria-label="option 1" />
                  <p>Travel Insurance</p>
                </div>
                  <p style={{ color: '#7ECFC0' }}>$ 2,00<span style={{ color: 'black' }}>/pax</span></p>
              </div>
              <div className="pt-3">
                Get travel compensation up to $ 10.000,00
              </div>
            </div>

          </div>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-row justify-content-between">
              <h5 style={{ color: 'white' }}>Flight Details</h5>
              <h5 style={{ color: 'white' }}>View Details</h5>
            </div>
            <div className="parentRightDetail d-flex flex-column ">
              <div className="d-flex flex-column w-75 gap-3">
                <div className="d-flex flex-row align-items-center">
                  <Image className="me-4" src={airlineIcon} />
                  <h6>Garuda Indonesia</h6>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <h4>Medan (IDN)</h4>
                  <FaPlaneDeparture />
                  <h4>Japan (JPN)</h4>
                </div>
                <div className="d-flex flex-row gap-2">
                  <h5>Sunday, 15 August 2020</h5>
                  <BsDot />
                  <h5>12:33 - 14:44</h5>
                </div>
                <div className="d-flex flex-column gap-2 pb-3">
                  <div className="d-flex flex-row align-items-center">
                    <BiCheckCircle color="#7ECFC0" />
                    <p>Refundable</p>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <BiCheckCircle color="#7ECFC0" />
                    <p>Can reschedule</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between pt-3 border-top">
                <h5 className=" fs-6">Total Payment</h5>
                <div className="d-flex flex-row align-items-center">
                  <h4 style={{ color: '#7ECFC0' }}>$ 145,00</h4>
                  <FiChevronDown color="#7ECFC0" size={20}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={styleCoba.parentAll} className="d-flex flex-column d-md-none mx-4 pb-4 gap-4">
            <div className="d-flex flex-row justify-content-between">
              <h5 style={{ color: 'white' }}>Flight Details</h5>
              <h5 style={{ color: 'white' }}>View Details</h5>
            </div>
            <div className="parentRightDetailSec d-flex flex-column ">
            <div className="d-flex flex-column gap-4">
                <div className="d-flex flex-row justify-content-between">
                  <h4>Medan (IDN)</h4>
                  <FaPlaneDeparture />
                  <h4>Japan (JPN)</h4>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <Image className="me-4" src={airlineIcon} fluid/>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-row gap-1">
                      <AiFillStar color="#FF7F23" />
                      <AiFillStar color="#FF7F23" />
                      <AiFillStar color="#FF7F23" />
                      <AiFillStar color="#FF7F23" />
                      <AiFillStar color="#FF7F23" />
                    </div>
                    <h6>120k review</h6>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <p>Code</p>
                    <h6>AB-221</h6>
                  </div>
                  <div>
                    <p>Class</p>
                    <h6>Economy</h6>
                  </div>
                  <div>
                    <p>Terminal</p>
                    <h6>A</h6>
                  </div>
                  <div>
                    <p>Gate</p>
                    <h6>221</h6>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="">Facilities</h5>
            <div className="d-flex flex-row flex-wrap gap-3">
              <div style={{ backgroundColor: '#6DDA6B' }} className="d-flex flex-row align-items-center gap-4 p-3 rounded-3">
                <FaHamburger size={20} color="white" />
                <p style={{ color: 'white', fontWeight: '700' }}>Snack</p>
              </div>
              <div style={{ backgroundColor: '#7861D7' }} className="d-flex flex-row align-items-center gap-4 p-3 rounded-3">
                <TiWiFi size={20} color="white" />
                <p style={{ color: 'white', fontWeight: '700' }}>Wifi</p>
              </div>
              <div style={{ backgroundColor: '#E45D32' }} className="d-flex flex-row align-items-center gap-4 p-3 rounded-3">
                <ImManWoman size={20} color="white" />
                <p style={{ color: 'white', fontWeight: '700' }}>Restroom</p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mt-3">
              <p>Total you???ll pay</p>
              <h5 style={{ color: '#7ECFC0' }}>$ 145,00</h5>
            </div>
            <Button style={styleCoba.btnBook}>BOOK FLIGHT</Button>
          </div>
        </div>
      </div>
    )
  }
}

const styleCoba = {
  warpAll: {
    backgroundColor: '#F5F6FA'
  },
  parentAll: {
    marginTop: '-6em'
  },
  input: {
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderBottom: '1',
    borderBottomWidth: '2px',
    borderColor: '#7ECFC0',
    boxShadow: 'none',
    borderRadius: '0',
    padding: '0px 10px 15px 10px',
    fontWeight: '600'
  },
  input2: {
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderBottom: '1',
    borderBottomWidth: '2px',
    borderColor: '#7ECFC0',
    borderRadius: '0',
    padding: '0px 10px 15px 10px',
    fontWeight: '600'
  },
  select: {
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderBottom: '1',
    borderBottomWidth: '2px',
    borderColor: '#7ECFC0',
    boxShadow: 'none',
    borderRadius: '0',
    fontWeight: '600',
    padding: '0px 10px 15px 10px',
    width: '20%'
  },
  select2: {
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderBottom: '1',
    borderBottomWidth: '2px',
    borderColor: '#7ECFC0',
    boxShadow: 'none',
    borderRadius: '0',
    fontWeight: '600',
    padding: '0px 10px 15px 10px',
    width: '100%'
  },
  btnBook: {
    backgroundColor: '#7ECFC0',
    padding: '15px 0px',
    border: '0',
    boxShadow: '0 4px 8px 0 rgba(126, 207, 192, 0.5)',
    fontWeight: 'bold',
    borderRadius: '10px',
    marginBottom: '2em'
  }
}
