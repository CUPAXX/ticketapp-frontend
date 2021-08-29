import React, { useState, useEffect } from 'react'
import { Image, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import { BsFileEarmarkArrowDown } from 'react-icons/all'
import ChatBubbleLeft from '../components/ChatBubbleLeft'
import ChatBubbleRight from '../components/ChatBubbleRight'
import { chatRoom, sendChat, deleteChat } from '../redux/action/chat'
import { connect, useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client';
import { getUser } from '../redux/action/user'
import { useParams, withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'

const { REACT_APP_BACKEND_URL: URL } = process.env

const socket = io(`${URL}`);

const ChatRoom = (props) => {
  const [chatData, setChatData] = useState({
    message: '',
    attachment: ''
  });
  const [message, setMessage] = useState('')
  const [fileUpload, setFileUpload] = useState(null)
  const { RoomChat } = props.chat;
  const messageEnd = React.useRef(null)
  console.log(fileUpload)

  const { dataUser } = useSelector(state => state.user);
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();

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
    socket.on(dataUser.id, (data) => {
      dispatch(chatRoom(token, id))
    })
  }, [token, id], onScroll())

  useEffect(() => {
    onScroll()
    dispatch(chatRoom(token, id)).then(() => {
      setFileUpload(null)
    })
  }, [token, id], onScroll())

  useEffect(() => {
    dispatch(getUser(token))
  }, [token]);

  const onSubmit = (e) => {
    onScroll()
    e.preventDefault()
    const form = {
      message: message,
      attachment: fileUpload
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
    setFileUpload(null)
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
        props.deleteChat(token, form.id, form.chatId).then(() => {
          Swal.fire(
            'Deleted!',
            'chat has been deleted.',
            'success'
          )
          props.history.push('/')
          props.history.replace(`/chatroom/${id}`)
        })
      }
    })
  }

  const onPick = (e) => {
    const max = 61440
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if (e.target.files[0].size <= max) {
      setFileUpload(e.target.files[0])
    } else {
      Toast.fire({
        icon: 'error',
        title: 'File cannot exceed 60kb'
      })
      setFileUpload(null)
    }
  }

  return (
      <div style={{ backgroundColor: '#7ECFC0' }} className="py-5 d-flex justify-content-center">
        <div style={styleCoba.wrap} className="bg-white d-md-flex flex-column w-50 justify-content-between">
          <h4 className="fw-bold ps-3 mb-4">Room Chat</h4>
          <div style={styleCoba.wrap2} >
            {RoomChat.map(chat => {
              return chat.sender !== dataUser.id
                ? <ChatBubbleLeft
                on={() => onDelete(chat)}
                key={chat.id}
                time={chat.createdAt.slice(11, 16)}
                message={chat.message}
                isFile={chat.attachment !== null ? <BsFileEarmarkArrowDown size={30} /> : <div></div>}
                />
                : <React.Fragment>
                    <ChatBubbleRight
                    on={() => onDelete(chat)}
                    key={chat.id}
                    img={`${URL}${dataUser.picture}`}
                    time={chat.createdAt.slice(11, 16)}
                    message={chat.message}
                    isFile={chat.attachment !== null ? <BsFileEarmarkArrowDown size={30} /> : <div></div>}
                    />
                </React.Fragment>
            })}
            <div className="text-center text-white" ref={messageEnd}>bla</div>
          </div>

          <Form className="p-2" onSubmit={onSubmit} >
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Write your message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <Button type="submit" variant="outline-secondary" id="button-addon2">
                Send
              </Button>
            </InputGroup>
            <input type="file" onChange={e => onPick(e)} className="d-none" id="file-upload"/>
              <label htmlFor="file-upload" style={{ backgroundColor: '#7ECFC0', padding: '10px 20px', color: 'white', fontWeight: 'bold', borderRadius: '10px' }} >{fileUpload === null ? 'Select File' : `${fileUpload.name} Selected`}</label>
          </Form>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatRoom))

const styleCoba = {
  input: {
    border: 'none',
    backgroundColor: '#F5F5F5'
  },
  wrap: {
    borderRadius: '15px',
    padding: '3em',
    height: '600px'
  },
  wrap2: {
    // height: '250px',
    paddingBottom: '15px',
    maxHeight: '80%',
    overflowY: 'scroll'
  }
}

// style={{ borderRadius: '15px', padding: '3em' }}
