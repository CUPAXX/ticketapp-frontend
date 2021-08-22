
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Forgot from './pages/Forgot'
import Home from './pages/Home'

import Header from './components/Header'
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/forgot" exact component={Forgot}/>
        <Route path="/signup" exact component={Signup}/>

        {/* <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/forgot" component={ForgotP}/>
        <Route path="/product" exact component={Product}/>
        <Route path="/product/:id" component={Product}/>
        <Route path="/productdetail/:id" component={Detail}/> */}
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App
