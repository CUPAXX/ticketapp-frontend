import React, { Component } from 'react'
import ItemNotif from '../components/ItemNotif'
import { connect } from 'react-redux';
import { getNotif, delNotif } from '../redux/action/notification'

import Swal from 'sweetalert2'

class Notification extends Component {
  componentDidMount () {
    const { token } = this.props.auth
    this.props.getNotif(token)
  }

  onDel = (id) => {
    Swal.fire({
      title: 'Are you sure want delete?',
      text: 'you will no able see this again!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, i want to delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        const { token } = this.props.auth
        this.props.delNotif(token, id).then(() => {
          Swal.fire(
            'Success!',
            'Success delete this notification',
            'success'
          )
          this.props.history.push('/')
          this.props.history.replace('/notification')
        })
      }
    })
  }

  render () {
    const { data } = this.props.notification
    return (
      <div style={{ backgroundColor: '#7ECFC0' }} className="py-4 d-flex justify-content-center">
        <div className="parentNotif bg-white d-flex flex-column gap-3">
          <p style={{ color: '#7ECFC0', letterSpacing: '3px', fontSize: '13px' }}>NOTIFICATIONS</p>
          <div className="d-flex flex-row align-items-center justify-content-between mb-4">
            <h6 className="fw-bold">Notifications</h6>
            <p className="fw-bold" style={{ color: '#7ECFC0', fontSize: '13px' }}>Clear</p>
          </div>

          {data.map(data => (
            <ItemNotif
            key={data.id}
            label={data.label}
            message={data.message}
            onDel={() => this.onDel(data.id)}
          />
          ))}

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  notification: state.notification
})
const mapDispatchToProps = {
  getNotif, delNotif
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
