import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { BiCheckDouble, BiDotsVerticalRounded, FaPlaneDeparture, FaTrash } from 'react-icons/all'
import airline from '../assets/airlineIcon.png'
import qr from '../assets/qr.png'
import imgChat from '../assets/imgChat.png'

export default function ChatBubbleRight ({ fullname, message, time, img, on }) {
  return (
    <div className="d-flex flex-column m-2">
      <div className="d-flex flex-row justify-content-between align-items-center border-1 border-bottom p-2">
        <div className="d-flex flex-column gap-2">
          <h6>{time}</h6>
          <Button onClick={on} variant="light">
          <FaTrash color="#909497"/>
          </Button>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <div className="d-flex flex-column">
            <h6></h6>
            <p>{message}</p>
          </div>

          <Image className="rounded-circle" style={styleCoba.img} src={img} />

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
