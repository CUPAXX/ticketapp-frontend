import React, { useRef, useState, useEffect } from 'react'
import { Image, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import { BiCheckDouble, BiDotsVerticalRounded, FaPlaneDeparture, FaSearchLocation } from 'react-icons/all'
import airline from '../assets/airlineIcon.png'
import qr from '../assets/qr.png'
import imgChat from '../assets/imgChat.png'
import ItemChat from '../components/ChatItemList'
import { chatList } from '../redux/action/chat'
import { connect, useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client';
import { getUser } from '../redux/action/user'
import { Link } from 'react-router-dom'

const { REACT_APP_BACKEND_URL: URL } = process.env

const Chat = (props) => {
  const { ListChat } = props.chat;
  const socket = io(`${URL}`);

  const { dataUser } = useSelector(state => state.user);
  // const { details } = useSelector(state => state.chat);
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chatList(token));
  }, [token]);

  useEffect(() => {
    dispatch(getUser(token));
  }, [token]);

  return (
      <div style={{ backgroundColor: '#7ECFC0' }} className="py-4 d-flex justify-content-center">
        <div style={{ borderRadius: '15px', padding: '3em' }} className="bg-white d-md-flex d-none flex-column w-50">
          <p style={{ color: '#7ECFC0', letterSpacing: '3px', fontSize: '13px' }}>chat</p>
          <div className="d-flex flex-row align-items-center justify-content-between  mt-2 mb-4">
            <h6 className="fw-bold">Chat</h6>
            <p className="fw-bold" style={{ color: '#7ECFC0', fontSize: '13px' }}>Filter</p>
          </div>

          {ListChat.map(chat => {
            return chat.user.id !== dataUser.id
              ? <ItemChat
            img={`${URL}${chat.user.picture}`}
            to={`/chatroom/${chat.user.id}`}
            key={chat.id}
            fullname={chat.user.fullname}
            message={chat.message}
            />
              : <ItemChat
              img={`${URL}${dataUser.picture}`}
              to={`/chatroom/${chat.sender}`}
              key={chat.id}
              fullname={dataUser.fullname}
              message={chat.message}
              />
          })}

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

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  chat: state.chat
})

const mapDispatchToProps = { getUser, chatList }

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

const styleCoba = {
  input: {
    border: 'none',
    backgroundColor: '#F5F5F5'
  }
}
