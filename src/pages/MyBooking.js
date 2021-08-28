import React, { Component } from 'react'
import { Image, InputGroup, FormControl, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import ItemBooking from '../components/ItemBooking'
import profilePic from '../assets/imgProfile.png'
import cardAtm from '../assets/cardAtm.png'
import { BsStarFill, BsGearFill, FiLogOut, FaUserCircle, FaPlaneDeparture, BiChevronDown } from 'react-icons/all'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import { getUser } from '../redux/action/user'
import { getTicket, payTicket } from '../redux/action/ticket'
import { authLogout } from '../redux/action/auth'
import { createNotif } from '../redux/action/notification'
const { REACT_APP_BACKEND_URL: URL } = process.env

class MyBooking extends Component {
  state ={
    togglePay1: false,
    togglePay2: true
  }

  getTicket = () => {
    const { token } = this.props.auth
    this.props.getTicket(token)
  }

  getUser = () => {
    const { token } = this.props.auth
    this.props.getUser(token)
  }

  componentDidMount () {
    this.getTicket()
    this.getUser()
  }

  onLogout= (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure want to logout?',
      text: 'You will be logout!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logout!',
          'Your has been logout.',
          'success'
        )
        this.props.authLogout()
        this.props.history.push('/');
      }
    })
  }

  onPay = (id) => {
    const dataNotif = { label: 'Booking Payment Success', message: 'You can see ticket / booking detail in page booking detail dont forgot to screenshot or save your booking detail' }
    Swal.fire({
      title: 'Are you sure want to pay?',
      text: 'You will pay this booking!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, i want to pay!'
    }).then((result) => {
      if (result.isConfirmed) {
        const { token } = this.props.auth
        this.props.payTicket(id, token).then(() => {
          Swal.fire(
            'Success!',
            'Success Pay this booking',
            'success'
          )
          this.props.createNotif(token, dataNotif)
          this.props.history.push('/')
          this.props.history.replace('/mybooking')
        })
      }
    })
  }

  render () {
    const { dataUser } = this.props.user
    const { dataTicket } = this.props.ticket
    return (
      <div style={styleCoba.warpAll}>
        <div className="d-flex flex-row py-5 mx-5 gap-4">
          <div style={styleCoba.parentLeft} className="d-md-flex d-none">
          {dataUser.picture !== null
            ? (
              <Image className="rounded-circle" style={{ width: '130px', height: '130px' }} src={`${URL}${dataUser.picture}`} />
              )
            : (
              <Image className="rounded-circle" style={{ width: '130px', height: '130px' }} src={profilePic} />
              )}
            <h5 className="fw-bold py-2 mt-3">{dataUser.fullname}</h5>
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
              <div style={{ cursor: 'pointer' }} onClick={(e) => this.onLogout(e)} className="d-flex flex-row align-items-center gap-4">
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

            <div style={{ maxHeight: '500px', overflowY: 'scroll' }} className="d-flex flex-column gap-4">
              {dataTicket.map(item => (
                <ItemBooking key={item.id}
                  detail={item.id}
                  onPay={() => this.onPay(item.id)}
                  togglePay={item?.isPayment === 0 ? this.state.togglePay1 : this.state.togglePay2}
                  payStatus={item?.isPayment === 0 ? 'lets pay' : 'Already pay'}
                  departureDate={item?.ticket?.departure_time}
                  departure={item?.ticket?.code_departure}
                  destination={item?.ticket?.code_destination}
                  airlines={item?.ticket?.airline?.name}
                  code={item?.ticket?.seat}
                  status={item?.isPayment === 0 ? 'Waiting for payment' : 'E-ticked Issued'}
                  statusColor={item?.isPayment === 0 ? 'btn-danger' : 'btn-success'}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  ticket: state.ticket
})
const mapDispatchToProps = {
  getUser, getTicket, authLogout, payTicket, createNotif
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyBooking))

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
