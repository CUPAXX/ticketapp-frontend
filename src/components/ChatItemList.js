import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { BiCheckDouble, BiDotsVerticalRounded, FaPlaneDeparture } from 'react-icons/all'
import airline from '../assets/airlineIcon.png'
import qr from '../assets/qr.png'
import imgChat from '../assets/imgChat.png'

const ChatItemList = ({ fullname, message }) => {
  return (
    <div className="d-flex flex-column m-2">
            <div className="d-flex flex-row justify-content-between align-items-center border-1 border-bottom p-2">
              <div className="d-flex flex-row align-items-center gap-3">
                <Image src={imgChat} />
                <div className="d-flex flex-column">
                  <h6>{fullname}</h6>
                  <p>{message}</p>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <h6>8:30</h6>
                <BiCheckDouble />
              </div>
            </div>

          </div>
  )
}

export default ChatItemList
