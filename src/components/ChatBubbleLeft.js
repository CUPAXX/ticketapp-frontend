import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/all'
import imgUser from '../assets/user.png'

export default function ChatBubbleLeft ({ fullname, message, time, img, on, isFile }) {
  return (
    <div className="d-flex flex-column m-2">
      <div className="d-flex flex-row justify-content-between align-items-center border-1 border-bottom p-2">
        <div className="d-flex flex-row align-items-center gap-3">
          <Image className="rounded-circle" style={styleCoba.img} src={imgUser} />
          <div style={{ maxWidth: '380px' }} className="d-flex flex-column">
            <p style={{ wordWrap: 'break-word' }}>{message}</p>
          </div>
        </div>
        <div className="d-flex flex-column gap-2 align-items-center">
          <h6>{time}</h6>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <Button variant="light" style={{ boxShadow: 'none' }} >
              {isFile}
            </Button>
            <Button onClick={on} variant="light" style={{ boxShadow: 'none' }}>
              <FaTrash size={30} color="#909497"/>
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}

const styleCoba = {
  img: {
    width: 50,
    height: 50
  }
}
