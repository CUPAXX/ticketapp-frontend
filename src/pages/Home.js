import React, { Component } from 'react'
import { Container, Row, Col, Image, Form, Button, Carousel } from 'react-bootstrap';
import card from '../assets/card.png'
import card2 from '../assets/card2.png'
import slideItem from '../assets/slideItem.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiChevronRight, BiChevronLeft } from 'react-icons/all'
import Footer from '../components/Footer'

class Home extends Component {
  constructor (props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next () {
    this.slider.slickNext();
  }

  previous () {
    this.slider.slickPrev();
  }

  render () {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            variableWidth: true,
            autoplay: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            variableWidth: true,
            autoplay: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            variableWidth: true,
            autoplay: true
          }
        }
      ]
    };
    return (
      <div className="overflow-hidden overflow-md-hidden " >
        <div className="bgHome">
          <div className="parentText" >
            <h1 className="textHome" >Find your <span style={styleCoba.flight}>Flight</span> </h1>
            <h6 className="subText">and explore the world with us</h6>
          </div>
        </div>
        <div className="parentGalery">
          <h2 className="textTrending" >TRENDING</h2>
          <Row className="g-0 justify-content-md-between justify-content-between mb-2 mb-md-4">
            <Col md="auto" xs="auto">
              <h2 className="textDestination">Trending destinations</h2>
            </Col>
            <Col md="auto" xs="auto">
              <h2 className="textView" >View all</h2>
            </Col>
          </Row>
          <div className="galeryParent g-0 d-inline-flex flex-nowrap gap-4 overflow-scroll">
            <div className="col">
              <Image src={card} />
            </div>
            <div className="col">
              <Image src={card2} />
            </div>
            <div className="col">
              <Image src={card} />
            </div>
            <div className="col">
              <Image src={card2} />
            </div>
            <div className="col">
              <Image src={card} />
            </div>
          </div>
        </div>

        <div className="parentUtama">
          <div className="parentInside ">
          <div className="parentSlider ">
            <h2 className="text-center fs-4 mb-4 mb-md-5 ">Top 10 destinations</h2>
            <Slider arrows={false} ref={c => (this.slider = c)} {...settings}>
              <div className=" d-md-flex justify-content-md-center d-flex justify-content-center ">
                <Image className="parentItem px-2" src={slideItem} />
              </div>
              <div className="d-md-flex justify-content-md-center ">
                <Image className="parentItem px-2" src={slideItem} />
              </div>
              <div className="d-md-flex justify-content-md-center ">
                <Image className="parentItem px-2" src={slideItem} />
              </div>
              <div className="d-md-flex justify-content-md-center ">
                <Image className="parentItem px-2" src={slideItem} />
              </div>
              <div className="d-md-flex justify-content-md-center ">
                <Image className="parentItem px-2" src={slideItem} />
              </div>
              <div className="d-md-flex justify-content-md-center ">
                <Image className="parentItem px-2" src={slideItem} />
              </div>
              <div className="d-md-flex justify-content-md-center ">
                <Image className="parentItem px-2" src={slideItem} />
              </div>
              <div className="d-md-flex justify-content-md-center ">
                <Image className="parentItem px-2" src={slideItem} />
              </div>
              <div className="d-md-flex justify-content-md-center ">
                <Image className="parentItem px-2" src={slideItem} />
              </div>
            </Slider>
            <div className="parentBtnHome">
              <Button style={styleCoba.btn} onClick={this.previous}>
                <BiChevronLeft style={styleCoba.cev} />
              </Button>
              <Button style={styleCoba.btnNext} onClick={this.next}>
                <BiChevronRight style={styleCoba.cevNext} />
              </Button>
          </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

const styleCoba = {
  flight: {
    color: '#7ECFC0'
  },
  parentBtn: {
    textAlign: 'center',
    marginTop: '30px'
  },
  btn: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    padding: '4px 10px',
    borderRadius: '8px',
    marginRight: '20px',
    boxShadow: 'none'
  },
  cev: {
    fontSize: '35px',
    fontWeight: 'bold'
  },
  btnNext: {
    backgroundColor: 'white',
    border: '0',
    padding: '4px 10px',
    borderRadius: '8px',
    marginLeft: '20px',
    boxShadow: 'none'
  },
  cevNext: {
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#7ECFC0'
  }
}

export default Home
