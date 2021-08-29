import React from 'react'
import { Container, Row, Col, Image, Form, Button, Carousel } from 'react-bootstrap';
import icon from '../assets/icon.png';
import Gplay from '../assets/plIcon.png'
import Astore from '../assets/asIcon.png'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, BiMap } from 'react-icons/all'
import { useLocation, Link } from 'react-router-dom'

export default function Footer () {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <React.Fragment >
      {location.pathname !== '/signup' && location.pathname !== '/forgot' && location.pathname !== '/login'
        ? (
        <div className="py-5 parentUtamaFooter">
        <div className=" parentInsideFooter py-5">
          <div className=" d-md-flex flex-column ">
            <div className="d-md-flex justify-content-md-between d-flex justify-content-between parentIconFooter">
              <div>
                <Image src={icon} />
              </div>
              <div >
                <h1 className="fs-4 fw-bold">Ticky</h1>
              </div>
            </div>
            <p className="mt-4 parentIconTextFooter">Find your Flight and explore the world with us. We will take care of the rest</p>
          </div>
          <div >
          <h2 className="fs-5 fw-bold mb-3">Features</h2>
            <div className="align-items-md-center justify-content-md-center d-md-grid align-items-center justify-content-between d-flex flex-row gap-md-3">

              <h4 className="textMiniFooter">Find Ticket</h4>
              <h4 className="textMiniFooter">My Booking</h4>
              <h4 className="textMiniFooter">Chat</h4>
              <h4 className="textMiniFooter">Notification</h4>
            </div>
          </div>
          <div>
          <h2 className="fs-5 text-md-center fw-bold mb-3">Download Angkasa app</h2>
              <div className="align-items-md-center justify-content-md-center d-md-grid  d-flex flex-row gap-3 gap-md-3">
                <Image className="imageFooter" src={Gplay} />
                <Image className="imageFooter" src={Astore} />
              </div>
          </div>
          <div >
            <div className="align-items-md-center justify-content-md-center d-md-grid gap-md-3">
              <h2 className="fs-5 fw-bold">Follow Us</h2>
              <div className="d-md-flex justify-content-md-between d-flex  gap-4  gap-md-3">
                <FiFacebook size={20} />
                <FiTwitter size={20} />
                <FiInstagram size={20} />
                <FiYoutube size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex justify-content-md-between">
          <h6>© Ankasa.  All Rights Reserved.</h6>
          <div className="d-md-flex justify-content-md-between d-flex gap-3 gap-md-0" >
            <BiMap size={20} />
            <h6>Jakarta Indonesia</h6>
          </div>
        </div>
      </div>
          )
        : (
        <div></div>
          )}
    </React.Fragment>
  )
}
