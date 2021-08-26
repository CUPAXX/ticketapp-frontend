import React, { Component } from 'react'
import { Image, Button, Form } from 'react-bootstrap'
import { BiCheckDouble, BiDotsVerticalRounded, FaPlaneDeparture, FaSearchLocation } from 'react-icons/all'
import airline from '../assets/airlineIcon.png'
import qr from '../assets/qr.png'
import imgChat from '../assets/imgChat.png'
import ChatBubbleLeft from '../components/ChatBubbleLeft'
import ChatBubbleRight from '../components/ChatBubbleRight'

export default class ChatRoom extends Component {
  render () {
    return (
      <div style={{ backgroundColor: '#7ECFC0' }} className="py-4 d-flex justify-content-center">
      <div style={{ borderRadius: '15px', padding: '3em' }} className="bg-white d-md-flex d-none flex-column w-50">
        <h4 className="fw-bold ps-3 mb-4">Andre</h4>
        <ChatBubbleLeft />
        <ChatBubbleRight />
      </div>
    </div>
    )
  }
}

const styleCoba = {
  input: {
    border: 'none',
    backgroundColor: '#F5F5F5'
  }
}
