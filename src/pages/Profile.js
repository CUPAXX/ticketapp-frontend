/* eslint-disable camelcase */
import React, { Component } from 'react'
import { Image, InputGroup, FormControl, Form, DropdownButton, Dropdown, Button, Row, FloatingLabel, Col } from 'react-bootstrap'
import profilePic from '../assets/imgProfile.png'
import cardAtm from '../assets/cardAtm.png'
import { BsStarFill, BsGearFill, FiLogOut, FaUserCircle, FaPlaneDeparture, BiChevronDown, BiChevronRight } from 'react-icons/all'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import { getUser, updateProfile } from '../redux/action/user'
import { authLogout } from '../redux/action/auth'
const { REACT_APP_BACKEND_URL: URL } = process.env

class Profile extends Component {
  state={
    dataUser: {},
    showImage: null
  }

  componentDidMount () {
    this.getUser()
  }

  getUser = () => {
    const { token } = this.props.auth
    this.props.getUser(token).then(() => {
      this.setState({
        dataUser: this.props.user.dataUser
      })
    })
  }

  data = async (e) => {
    e.preventDefault()
    const { token } = this.props.auth
    const { fullname, email, phone_number, city, postcode, address, picture } = this.state.dataUser
    const data = {
      fullname,
      email,
      phone_number,
      city,
      address,
      picture,
      postcode
    }
    console.log(data)
    await this.props.updateProfile(data, token).then(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      if (this.props.user.errMsg === '') {
        Toast.fire({
          icon: 'success',
          title: 'Update successfully'
        })
        this.props.history.push('/')
        this.props.history.replace('/profile')
      } else {
        Toast.fire({
          icon: 'error',
          title: `${this.props.user.errMsg}`
        })
      }
    })
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

  onPick = (e) => {
    const max = 61440
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if (e.target.files[0].size <= max) {
      this.setState(prevState => ({
        dataUser: {
          ...prevState.dataUser,
          picture: e.target.files[0]
        }
      }))
    } else {
      Toast.fire({
        icon: 'error',
        title: 'File cannot exceed 60kb'
      })
    }
  }

  render () {
    console.log(this.state)
    return (
      <div style={styleCoba.warpAll} className="overflow-hidden">
        <div className="d-flex flex-row justify-content-center py-5 mx-md-5 gap-md-4">
          <div style={styleCoba.parentLeft} className="d-flex">
            {this.state.dataUser.picture !== null
              ? (
              <Image className="rounded-circle" style={{ width: '130px', height: '130px' }} src={`${URL}${this.state.dataUser.picture}`} />
                )
              : (
              <Image className="rounded-circle" style={{ width: '130px', height: '130px' }} src={profilePic} />
                )}
            <input type="file" onChange={e => this.onPick(e)} className="d-none" id="file-upload"/>
              <label style={styleCoba.btnLeft} htmlFor="file-upload" >Select Photo</label>
            <h5 className="fw-bold py-2">{this.state.dataUser.fullname}</h5>
            {this.state.dataUser.address !== null && this.state.dataUser.address !== ''
              ? (
              <p>{this.state.dataUser.address}</p>
                )
              : (
              <p>please add your address</p>
                )}
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
              <div style={{ cursor: 'pointer' }} onClick={(e) => this.onLogout(e)} className="d-flex flex-row align-items-center gap-4">
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
              <Form onSubmit={this.data} className="mt-4">
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
                    <Form.Control onChange={e => this.setState(prevState => ({
                      dataUser: {
                        ...prevState.dataUser,
                        email: e.target.value
                      }
                    }))} style={styleCoba.input} type="email" placeholder="Example@gmail.com" value={this.state.dataUser.email} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>Username</Form.Label>
                    <Form.Control onChange={e => this.setState(prevState => ({
                      dataUser: {
                        ...prevState.dataUser,
                        fullname: e.target.value
                      }
                    }))} style={styleCoba.input} type="text" placeholder="My UserName" value={this.state.dataUser.fullname} />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>Phone Number</Form.Label>
                    <Form.Control onChange={e => this.setState(prevState => ({
                      dataUser: {
                        ...prevState.dataUser,
                        phone_number: e.target.value
                      }
                    }))} style={styleCoba.input} type="number" placeholder="please add your phone number" value={this.state.dataUser.phone_number} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>City</Form.Label>
                    <Form.Select style={styleCoba.input} onChange={e => this.setState(prevState => ({
                      dataUser: {
                        ...prevState.dataUser,
                        city: e.target.value
                      }
                    }))} defaultValue={this.state.dataUser.city}>
                      <option value="Medan">Medan</option>
                      <option value="Jambi">Jambi</option>
                      <option value="Bandung">Bandung</option>
                      <option value="Jakarta">Jakarta</option>
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
                    <Form.Control onChange={e => this.setState(prevState => ({
                      dataUser: {
                        ...prevState.dataUser,
                        address: e.target.value
                      }
                    }))} style={styleCoba.input} type="text" placeholder="please add your address example: Medan, Indonesia" value={this.state.dataUser.address} />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPostCode">
                    <Form.Label style={{ paddingLeft: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>Post Code</Form.Label>
                    <Form.Control onChange={e => this.setState(prevState => ({
                      dataUser: {
                        ...prevState.dataUser,
                        postcode: e.target.value
                      }
                    }))} style={styleCoba.input} type="number" placeholder="please add your postcode example: 36139" value={this.state.dataUser.postcode} />
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
  auth: state.auth,
  user: state.user
})
const mapDispatchToProps = {
  getUser, updateProfile, authLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))

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
