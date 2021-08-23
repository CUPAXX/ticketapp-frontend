
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

import Header from './components/Header'
import Footer from './components/Footer'
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
        <Route path="/search" component={Search}/>
        <Route path="/detail" component={FlightDetail}/>
        <Route path="/mybooking" component={MyBooking}/>
        <Route path="/bookingdetail" component={BookingDetail}/>
      </Switch>
      <Footer />
      </BrowserRouter>
    )
  }
}

export default App
