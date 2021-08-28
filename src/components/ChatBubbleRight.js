import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { BiCheckDouble, BiDotsVerticalRounded, FaPlaneDeparture, FaTrash, BsFileEarmarkArrowDown } from 'react-icons/all'
import airline from '../assets/airlineIcon.png'
import qr from '../assets/qr.png'
import imgChat from '../assets/imgChat.png'

export default function ChatBubbleRight ({ fullname, message, time, img, on, isFile }) {
  return (
    <div className="d-flex flex-column m-2">
      <div className="d-flex flex-row justify-content-between align-items-center border-1 border-bottom p-2">
        <div className="d-flex flex-column gap-2 align-items-center">
          <h6>{time}</h6>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <Button onClick={on} variant="light" style={{ boxShadow: 'none' }}>
              <FaTrash size={30} color="#909497"/>
            </Button>
            <Button variant="light" style={{ boxShadow: 'none' }} >
              {isFile}
            </Button>
          </div>
        </div>
        <div className="d-flex flex-row  align-items-center gap-3">
          <div style={{ maxWidth: '380px' }} className="d-flex flex-column ">
            <p style={{ wordWrap: 'break-word' }}>{message}</p>
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
