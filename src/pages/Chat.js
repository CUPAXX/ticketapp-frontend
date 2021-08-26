import React, { useRef, useState, useEffect } from 'react'
import { Image, Button, Form } from 'react-bootstrap'
import { BiCheckDouble, BiDotsVerticalRounded, FaPlaneDeparture, FaSearchLocation } from 'react-icons/all'
import airline from '../assets/airlineIcon.png'
import qr from '../assets/qr.png'
import imgChat from '../assets/imgChat.png'
import ItemChat from '../components/ChatItemList'
import { chatList } from '../redux/action/chat'
import { connect, useDispatch, useSelector } from 'react-redux'

const Chat = (props) => {
  const { user } = useSelector(state => state.chat);
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chatList(token));
  }, [token]);

  return (
      <div style={{ backgroundColor: '#7ECFC0' }} className="py-4 d-flex justify-content-center">
        <div style={{ borderRadius: '15px', padding: '3em' }} className="bg-white d-md-flex d-none flex-column w-50">
          <p style={{ color: '#7ECFC0', letterSpacing: '3px', fontSize: '13px' }}>chat</p>
          <div className="d-flex flex-row align-items-center justify-content-between  mt-2 mb-4">
            <h6 className="fw-bold">Chat</h6>
            <p className="fw-bold" style={{ color: '#7ECFC0', fontSize: '13px' }}>Filter</p>
          </div>
          <ItemChat />

        </div>

        <div className="d-flex flex-column d-md-none w-100 p-3 gap-4">
          <div style={{ borderRadius: '15px' }} className="bg-white d-flex d-md-none flex-column w-100 p-3">

            <p style={{ color: '#7ECFC0', letterSpacing: '3px', fontSize: '13px' }}>chat</p>
            <div className="d-flex flex-row align-items-center justify-content-between  mt-2 mb-4">
              <h6 className="fw-bold">Chat</h6>
              <p className="fw-bold" style={{ color: '#7ECFC0', fontSize: '13px' }}>Filter</p>
            </div>
            <div>
              <Form.Group className="position-relative d-flex justify-content-between align-items-center m-3" style={{ backgroundColor: '#F5F5F5', padding: '10px 13px', borderRadius: '10px' }} controlId="formSearch">
              <FaSearchLocation size={17} style={{ margin: '5px' }}/>
                <Form.Control style={styleCoba.input} type="text" placeholder="Search" />
              </Form.Group>
            </div>
            <ItemChat />
            <ItemChat />
          </div>
        </div>
      </div>
  )
}

export default Chat;

const styleCoba = {
  input: {
    border: 'none',
    backgroundColor: '#F5F5F5'
  }
}
