/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import iconWhite from '../assets/iconWhite.png';
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Carousel,
  Accordion
} from 'react-bootstrap';
import { BsArrowLeftRight, BsDot, BsArrowUpDown } from 'react-icons/all';
import ItemSearch from '../components/ItemSearch';
import { useDispatch, useSelector } from 'react-redux';
import { FaHamburger, FaLuggageCart, FaPlaneDeparture } from 'react-icons/fa';
import { Wifi } from '@material-ui/icons';
import { getTickets } from '../redux/action/ticket'
function Search () {
  const { data } = useSelector((state) => state.ticket);
  const dispatch = useDispatch()
  const Icon = ({ label }) => {
    switch (label) {
      case 'Luggage':
        return <FaLuggageCart size={20} />;
      case 'Snack':
        return <FaHamburger size={20} />;
      case 'Wifi':
        return <Wifi size={20} />;
      default:
        return <FaLuggageCart size={20} />;
    }
  };

  const [departure, setDeparture] = useState('Bandung')
  const [destination, setDestination] = useState('Jakarta')

  const onSearch = () => {
    const form = {
      departure: departure,
      destination: destination,
      classTicket: ''
    }
    dispatch(getTickets(form))
  }

  return (
    <div style={styleCoba.warpAll}>
      <div className="parentSearchResult">
        <div className="d-md-flex flex-md-row justify-content-md-between align-items-md-center d-flex flex-column align-self-auto">
          <div className="d-flex flex-column d-md-flex flex-md-row justify-content-md-center align-items-md-center gap-md-4">
            <Image className="d-none d-md-block" src={iconWhite} />
            <div className="gap-2 d-flex flex-column">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h6 className="texth6SearchResult">From</h6>
                <h6>To</h6>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center gap-5">
                {/* <h5>Medan (IDN)</h5> */}
                <select value={departure} onChange={(e) => setDeparture(e.target.value)}
                style={styleCoba.wrapperSelect}>
                  <option selected value="Bandung">Bandung</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Surabaya">Surabaya</option>
                  <option value="Medan">Medan</option>
                  <option value="Bali">Bali</option>
                  <option value="Semarang">Semarang</option>
                  <option value="Makassar">Makassar</option>
                  <option value="Jambi">Jambi</option>
                  <option value="Yogyakarta">Yogyakarta</option>
                  <option value="Solo">Solo</option>
                </select>
                <BsArrowLeftRight />
                {/* <h5>Tokyo (JPN)</h5> */}
                <select value={destination} onChange={(e) => setDestination(e.target.value)}
                style={styleCoba.wrapperSelect}>
                  <option value="Bandung">Bandung</option>
                  <option selected value="Jakarta">Jakarta</option>
                  <option value="Surabaya">Surabaya</option>
                  <option value="Medan">Medan</option>
                  <option value="Bali">Bali</option>
                  <option value="Semarang">Semarang</option>
                  <option value="Makassar">Makassar</option>
                  <option value="Jambi">Jambi</option>
                  <option value="Yogyakarta">Yogyakarta</option>
                  <option value="Solo">Solo</option>
                </select>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h6>Monday, 20 July 20</h6>
                <BsDot />
                <h6>6 Passenger</h6>
                <BsDot />
                <h6>Economy</h6>
              </div>
            </div>
          </div>
          <Button onClick={onSearch} style={{ backgroundColor: '#7ECFC0', borderColor: '#7ECFC0' }} className="mt-3 mt-md-0">
            <h5>Change Search</h5>
          </Button>
        </div>
      </div>
      <div className="d-md-flex flex-md-row justify-content-md-center py-5 px-md-5 px-3 gap-3">
        <div className="d-md-flex flex-md-column d-none ">
          <div className="d-flex flex-row align-items-center justify-content-between pb-3">
            <h5 className="fw-bold">Filter</h5>
            <h6 style={{ color: '#7ECFC0' }}>Reset</h6>
          </div>

          <div style={styleCoba.componentLeft}>
            <div className="w-100 rounded">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="fw-bold">Transit</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-between">
                      <p>Direct</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>Transit</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>Transit 2+</p>
                      <Form.Check />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fw-bold">Facilities</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-between">
                      <p>Luggage</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>In-Flight Meal</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>In-Flight Meal</p>
                      <Form.Check />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="fw-bold">Departure Time</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-between">
                      <p>00:00 - 06:00</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>06:00 - 12:00</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>12:00 - 18:00</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>18:00 - 24:00</p>
                      <Form.Check />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="fw-bold">Time Arrived</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-between">
                      <p>00:00 - 06:00</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>06:00 - 12:00</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>12:00 - 18:00</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>18:00 - 24:00</p>
                      <Form.Check />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span className="fw-bold">Airlines</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-between">
                      <p>Garuda Indonesia</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>Air Asia</p>
                      <Form.Check />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <p>Lion Air</p>
                      <Form.Check />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <span className="fw-bold">Ticket Price</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-between">
                      <p>Lowest</p>
                      <p>Higest</p>
                    </div>
                    <Form.Range />
                    <div className="d-flex flex-row justify-content-between">
                      <p>$300</p>
                      <p>$1000</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-grow-1">
          <div className="d-flex flex-row justify-content-between pb-3">
            <h5 className="fw-bold">{`Select Ticket (${data.length} flight found)`}</h5>
            <div className="d-flex flex-row align-items-center gap-2 ">
              <h6 className="fw-bold">Sort by</h6>
              <BsArrowUpDown size={17} />
            </div>
          </div>
          {data.map((res) => {
            return (
              <ItemSearch
                airline={res.airline.name}
                ticketDetail={res}
                codeDeparture={res.code_departure}
                codeArrival={res.code_destination}
                img={`http://localhost:8080${res.airline.picture}`}
                price={res.price}
                facilities={res.item_facilities.map((data) => {
                  return <Icon label={data.facility.name} />;
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;

const styleCoba = {
  warpAll: {
    backgroundColor: '#F5F6FA'
  },
  componentLeft: {
    backgroundColor: 'white',
    width: '323px',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '50px',
    marginBottom: '4em'
  },
  wrapperSelect: {
    color: 'white',
    backgroundColor: '#7ECFC0',
    borderColor: '#7ECFC0',
    fontSize: 20,
    fontWeight: '500'
  }
};
