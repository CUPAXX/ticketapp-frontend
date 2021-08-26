import React, { Component } from 'react'
import { Image, Button, Form } from 'react-bootstrap'
import ItemNotif from '../components/ItemNotif'

export default class Notification extends Component {
  render () {
    return (
      <div style={{ backgroundColor: '#7ECFC0' }} className="py-4 d-flex justify-content-center">
        <div className="parentNotif bg-white d-flex flex-column gap-3">
          <p style={{ color: '#7ECFC0', letterSpacing: '3px', fontSize: '13px' }}>NOTIFICATIONS</p>
          <div className="d-flex flex-row align-items-center justify-content-between mb-4">
            <h6 className="fw-bold">Notifications</h6>
            <p className="fw-bold" style={{ color: '#7ECFC0', fontSize: '13px' }}>Clear</p>
          </div>

          <ItemNotif />
          <ItemNotif />
          <ItemNotif />
          <ItemNotif />

        </div>
      </div>
    )
  }
}
