import React, { Component } from 'react'
import { Image, Button } from 'react-bootstrap'
import { BiDotsVerticalRounded, FaPlaneDeparture } from 'react-icons/all'
import airline from '../assets/airlineIcon.png'
import qr from '../assets/qr.png'

export default class BookingDetail extends Component {
  render () {
    return (
      <div style={{ backgroundColor: '#7ECFC0' }} className="py-4 d-flex justify-content-center">
        <div style={{ borderRadius: '15px', padding: '3em' }} className="bg-white d-md-flex d-none flex-column gap-5 w-50">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h5 className="fw-bold">Booking Pass</h5>
            <BiDotsVerticalRounded color="#7ECFC0" size={30} />
          </div>
          <div style={{ borderRadius: '15px' }} className="d-flex flex-row border border-2 p-4">
            <div className="d-flex flex-column flex-grow-1 gap-3">
              <div className="d-flex flex-row align-items-center gap-4 pb-4">
                <Image src={airline} />
                <h5 className="fw-bold">IDN</h5>
                  <FaPlaneDeparture color="gray" />
                <h5 className="fw-bold">JPN</h5>
              </div>
              <div className="d-flex flex-row gap-5">
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column">
                  <p>Code</p>
                  <h6>AB-221</h6>
                </div>
                <div className="d-flex flex-column">
                  <p>Class</p>
                  <h6>Economy</h6>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column">
                  <p>Terminal</p>
                  <h6>AB</h6>
                </div>
                <div className="d-flex flex-column">
                  <p>Gate</p>
                  <h6>221</h6>
                </div>
              </div>
              </div>
              <div className="d-flex flex-column pt-4">
                <p>Departure</p>
                <h6>Monday, 20 July ‘20 - 12:33</h6>
              </div>
            </div>
            <div className=" d-flex align-items-center justify-content-center" style={{ margin: '-24px 0px', borderLeftStyle: 'dashed', borderLeftWidth: '2px', borderLeftColor: 'lightGray' }}>
              <Image src={qr} style={{ paddingLeft: '20px' }} fluid />
            </div>
          </div>
        </div>

        <div className="d-flex flex-column d-md-none w-100 p-3 gap-4">
          <h4 style={{ color: 'white' }}>Booking Pass</h4>
          <div style={{ borderRadius: '15px' }} className="bg-white d-flex d-md-none flex-column w-100">
            <div className="d-flex flex-column align-items-center p-4 gap-4">
              <Image src={airline} fluid />
              <div className="d-flex flex-row gap-4 align-items-center">
                <h5 className="fw-bold">IDN</h5>
                <FaPlaneDeparture color="gray" />
                <h5 className="fw-bold">JPN</h5>
              </div>
              <Button className="btn btn-success fw-bold" style={{ color: 'white', fontSize: '13px', borderRadius: '6px' }}>E-Ticket Issued</Button>
            </div>
            <div className="border-1 border-top d-flex flex-column">
              <div className="d-flex flex-row p-4 justify-content-between">
                <div className="flex-column d-flex gap-2">
                  <p>Code</p>
                  <h6>AB-221</h6>
                </div>
                <div className="flex-column d-flex gap-2">
                  <p>Class</p>
                  <h6>Economy</h6>
                </div>
                <div className="flex-column d-flex gap-2">
                  <p>Terminal</p>
                  <h6>A</h6>
                </div>
                <div className="flex-column d-flex gap-2">
                  <p>Gate</p>
                  <h6>A</h6>
                </div>
              </div>
              <div className="d-flex flex-column p-4">
                <p>Departure</p>
                <h6>Monday, 20 July ‘20 - 12:33</h6>
              </div>
              <div className="d-flex justify-content-center pb-4">
                <Image src={qr} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
