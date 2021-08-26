
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Forgot from './pages/Forgot'
import Home from './pages/Home'
import Search from './pages/Search'
import FlightDetail from './pages/FlightDetail'
import MyBooking from './pages/MyBooking'
import BookingDetail from './pages/BookingDetail'
import Profile from './pages/Profile'
import Chat from './pages/Chat'
import ChatRoom from './pages/ChatRoom'
import Notification from './pages/Notification'

import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute';
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgot" component={Forgot}/>
            <Route path="/signup" component={Signup}/>
            <PrivateRoute path="/mybooking">
              <MyBooking/>
            </PrivateRoute>
            <PrivateRoute path="/bookingdetail/:id">
              <BookingDetail/>
            </PrivateRoute>
            <PrivateRoute path="/detail">
              <FlightDetail/>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile/>
            </PrivateRoute>
            <PrivateRoute path="/chat">
              <Chat/>
            </PrivateRoute>
            <PrivateRoute path="/chatroom/:id">
              <ChatRoom/>
            </PrivateRoute>
            <PrivateRoute path="/chatroom/:id">
              <Notification/>
            </PrivateRoute>
            <PrivateRoute path="/search">
              <Search/>
            </PrivateRoute>
            <Route path="/notification" component={Notification}/>
          </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
