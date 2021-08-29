import React from 'react'
import { Button } from 'react-bootstrap'
import { BiTrash } from 'react-icons/bi'

export default function ItemNotif (props) {
  return (
    <div style={styleCoba.parentNotif} className="d-flex flex-column gap-2">
      <h6 style={{ color: '#7ECFC0' }}>{props.label}</h6>
      <p>{props.message}</p>
      <div className="d-flex">
        <Button onClick={props.onDel} variant="light" style={{ boxShadow: 'none', backgroundColor: 'transparent', border: '0' }}>
          <BiTrash />
        </Button>
      </div>
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
