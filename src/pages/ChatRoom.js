import React, { useRef, useState, useEffect } from 'react'
import { Image, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import { BiCheckDouble, BiDotsVerticalRounded, FaPlaneDeparture, FaSearchLocation } from 'react-icons/all'
import airline from '../assets/airlineIcon.png'
import qr from '../assets/qr.png'
import imgChat from '../assets/imgChat.png'
import ChatBubbleLeft from '../components/ChatBubbleLeft'
import ChatBubbleRight from '../components/ChatBubbleRight'
import { chatRoom, sendChat, deleteChat } from '../redux/action/chat'
import { connect, useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client';
import { getUser } from '../redux/action/user'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const { REACT_APP_BACKEND_URL: URL } = process.env

const ChatRoom = (props) => {
  const [chatData, setChatData] = useState({
    message: '',
    attachment: ''
  });
  const [message, setMessage] = useState('')
  const { ListChat } = props.chat;
  const { RoomChat } = props.chat;
  const socket = io(`${URL}`);
  const messageEnd = React.useRef(null)

  const { dataUser } = useSelector(state => state.user);
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  // const { user } = props.route.params;
  const { id } = useParams();
  console.log(id)

  const onScroll = () => {
    if (messageEnd && messageEnd.current) {
      messageEnd.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }

  useEffect(() => {
    onScroll()
    props.chatRoom(token, id)
    props.getUser(token)
    socket.on(dataUser.id, (data) => {
      props.chatRoom(token, id)
      props.getUser(token)
    })
  }, [onScroll()])

  // [id || dataUser.id]
  useEffect(() => {
    dispatch(chatRoom(token, id));
  }, [token, id]);

  useEffect(() => {
    dispatch(getUser(token));
  }, [token]);

  const onSubmit = (e) => {
    e.preventDefault()
    const form = {
      message: message
    }
    props.sendChat(token, id, form).then(() => {
      props.chatRoom(token, id);
      setChatData({
        ...chatData,
        message: '',
        attachment: ''
      });
    });
    setMessage('')
  }

  const onDelete = chat => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const form = {
          id: chat.sender !== dataUser?.id ? chat.sender : chat.recipient,
          chatId: chat.id
        };
        console.log('hapus', form.id, form.chatId)
        props.deleteChat(token, form.id, form.chatId)
        Swal.fire(
          'Deleted!',
          'chat has been deleted.',
          'success'
        )
      }
    })
  }

  return (
      <div style={{ backgroundColor: '#7ECFC0' }} className="py-4 d-flex justify-content-center">
      <div style={{ borderRadius: '15px', padding: '3em' }} className="bg-white d-md-flex d-none flex-column w-50">
        <h4 className="fw-bold ps-3 mb-4">Room Chat</h4>

        {RoomChat.map(chat => {
          return chat.sender !== dataUser.id
            ? <ChatBubbleLeft
            on={() => onDelete(chat)}
            key={chat.id}
            time={chat.createdAt.slice(11, 16)}
            // img={`${URL}${dataUser.picture}`}
            message={chat.message}
            />
            : <ChatBubbleRight

              on={() => onDelete(chat)}
              key={chat.id}
              img={`${URL}${dataUser.picture}`}
              time={chat.createdAt.slice(11, 16)}
              message={chat.message}
              />
        })}

    <form onSubmit={onSubmit} >
        <InputGroup className="mb-3">

    <FormControl
      placeholder="..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      // onChange={val =>
      //   setChatData({
      //     ...chatData,
      //     message: val
      //   })
      // }
      onChange={(e) => setMessage(e.target.value)}
      value={message}
    />
    <Button type="submit" variant="outline-secondary" id="button-addon2">
      Send
    </Button>
  </InputGroup>
  <input
      type="file"
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
    />
  </form>

        {/* <ChatBubbleLeft />
        <ChatBubbleRight /> */}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  chat: state.chat
})

const mapDispatchToProps = { getUser, chatRoom, sendChat, deleteChat }

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)

const styleCoba = {
  input: {
    border: 'none',
    backgroundColor: '#F5F5F5'
  }
}
