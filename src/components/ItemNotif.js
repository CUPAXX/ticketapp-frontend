import React from 'react'

export default function ItemNotif () {
  return (
    <div style={styleCoba.parentNotif} className="d-flex flex-column gap-2">
      <h6 style={{ color: '#7ECFC0' }}>Congratulations</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</p>
      <p style={{ color: 'gray', fontSize: '13px' }}>5h ago</p>
    </div>
  )
}

const styleCoba = {
  parentNotif: {
    border: 'solid 1px',
    borderRadius: '10px',
    borderColor: '#7ECFC0',
    padding: '20px'
  }
}
