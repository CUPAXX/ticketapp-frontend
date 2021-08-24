import React, { Component } from 'react'
import { Image, InputGroup, FormControl, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import profilePic from '../assets/imgProfile.png'
import cardAtm from '../assets/cardAtm.png'
import { BsStarFill, BsGearFill, FiLogOut, FaUserCircle, FaPlaneDeparture, BiChevronDown } from 'react-icons/all'
import { Link } from 'react-router-dom'

export default class MyBooking extends Component {
  render () {
    return (
      <div style={styleCoba.warpAll}>
        <div className="d-flex flex-row py-5 mx-5 gap-4">
          <div style={styleCoba.parentLeft} className="d-md-flex d-none">
            <Image className="rounded-circle" src={profilePic} />
            <Button style={styleCoba.btnLeft}>Select Photo</Button>
            <h5 className="fw-bold py-2">Mike Kowalski</h5>
            <p>Medan, Indonesia</p>
            <div className="d-flex flex-row justify-content-between w-100 pt-4">
              <p className="fw-bold">Cards</p>
              <p className="fw-bold" style={{ color: '#7ECFC0' }}>+ Add</p>
            </div>
            <Image src={cardAtm} />
            <div className="d-flex flex-column align-self-start gap-4">
              <Link to="/profile" style={{ textDecoration: 'none' }} className="d-flex flex-row align-items-center gap-4">
                <FaUserCircle size={20} color="#7ECFC0" />
                <p className="fw-bold" style={{ color: '#7ECFC0' }}>Profile</p>
              </Link>
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
          <div className="d-flex flex-column flex-grow-1 gap-4">
            <div style={{ borderRadius: '15px', padding: '2em' }} className="bg-white d-flex flex-column gap-2">
              <h6 style={{ color: '#7ECFC0', letterSpacing: '3px', fontSize: '13px' }}>MY BOOKING</h6>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h5 className="fw-bold">My Booking</h5>
                <p style={{ color: '#7ECFC0', fontSize: '13px' }} className="fw-bold">Order History</p>
              </div>
            </div>
            <div style={{ borderRadius: '15px', padding: '2em' }} className="bg-white d-flex flex-column gap-2">
              <div className="d-flex flex-column gap-2 border-bottom pb-3">
                <h6 style={{ fontSize: '13px' }}>Monday, 20 July ‘20 - 12:33</h6>
                <div className="d-flex flex-row align-items-center gap-4">
                  <h5 className="fw-bold">IDN</h5>
                  <FaPlaneDeparture color="gray" />
                  <h5 className="fw-bold">JPN</h5>
                </div>
                <h6 style={{ fontSize: '13px', color: 'gray' }}>Garuda Indonesia, AB-221</h6>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center py-2">
                <div className="d-flex flex-row align-items-center gap-3">
                  <h6 style={{ fontSize: '13px' }}>Status</h6>
                  <Button className="btn btn-danger fw-bold" style={{ color: 'white', fontSize: '13px', borderRadius: '6px' }}>Waiting for payment</Button>
                </div>
                <div className="d-md-flex d-none flex-row align-items-center gap-2">
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: '#7ECFC0' }}>View Details</h6>
                  <BiChevronDown color='#7ECFC0' size={25} />
                </div>
              </div>
            </div>

            <div style={{ borderRadius: '15px', padding: '2em' }} className="bg-white d-flex flex-column gap-2">
              <div className="d-flex flex-column gap-2 border-bottom pb-3">
                <h6 style={{ fontSize: '13px' }}>Monday, 20 July ‘20 - 12:33</h6>
                <div className="d-flex flex-row align-items-center gap-4">
                  <h5 className="fw-bold">IDN</h5>
                  <FaPlaneDeparture color="gray" />
                  <h5 className="fw-bold">JPN</h5>
                </div>
                <h6 style={{ fontSize: '13px', color: 'gray' }}>Garuda Indonesia, AB-221</h6>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center py-2">
                <div className="d-flex flex-row align-items-center gap-3">
                  <h6 style={{ fontSize: '13px' }}>Status</h6>
                  <Button className="btn btn-success fw-bold" style={{ color: 'white', fontSize: '13px', borderRadius: '6px' }}>E-Ticket Issued</Button>
                </div>
                <Link to="/bookingdetail" style={{ textDecoration: 'none' }} className="d-md-flex d-none flex-row align-items-center gap-2">
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: '#7ECFC0', textDecoration: 'none' }}>View Details</h6>
                  <BiChevronDown color='#7ECFC0' size={25} />
                </Link>
              </div>
            </div>
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
    padding: '10px 15px'
  }

}
