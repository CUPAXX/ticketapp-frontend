/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'react-bootstrap'
import { FaPlaneDeparture, BiChevronDown } from 'react-icons/all'

export default function ItemBooking (props) {
  return (
    <div style={{ borderRadius: '15px', padding: '2em' }} className="bg-white d-flex flex-column gap-2">
      <div className="d-flex flex-column gap-2 border-bottom pb-3">
        <h6 style={{ fontSize: '13px' }}>{props.departureDate}</h6>
        <div className="d-flex flex-row align-items-center gap-4">
          <h5 className="fw-bold">{props.departure}</h5>
          <FaPlaneDeparture color="gray" />
          <h5 className="fw-bold">{props.destination}</h5>
        </div>
        <h6 style={{ fontSize: '13px', color: 'gray' }}>{props.airlines}, {props.code}</h6>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center py-2">
        <div className="d-flex flex-row align-items-center gap-3">
          <h6 style={{ fontSize: '13px' }}>Status</h6>
          <Button className={`btn ${props.statusColor} fw-bold`} style={{ color: 'white', fontSize: '13px', borderRadius: '6px' }}>{props.status}</Button>
          <Button onClick={props.onPay} className={'btn btn-primary fw-bold'} disabled={props.togglePay} style={{ color: 'white', fontSize: '13px', borderRadius: '6px' }}>{props.payStatus}</Button>
        </div>
        <Link to={`/bookingdetail/${props.detail}`} style={{ textDecoration: 'none' }} className="d-md-flex d-none flex-row align-items-center gap-2">
          <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: '#7ECFC0' }}>View Details</h6>
          <BiChevronDown color='#7ECFC0' size={25} />
        </Link>
        </div>
      </div>
  )
}
