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
import { getAirlines, getTickets } from '../redux/action/ticket'
import qs from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';

function Search () {
  const { data } = useSelector((state) => state.ticket);
  const { airlines } = useSelector(state => state.ticket)
  const { pageInfo } = useSelector(state => state.ticket)
  const history = useHistory()
  const location = useLocation()
  const urlParams = qs.parse(location)
  const dispatch = useDispatch()

  const [page, setPage] = useState([])

  const [searchData, setSearchData] = useState({
    departure: urlParams.departure ? urlParams.departure : '',
    destination: urlParams.destination ? urlParams.destination : '',
    airline: urlParams.airline ? urlParams.airline : '',
    transit: urlParams.transit ? urlParams.transit : '',
    classTicket: urlParams.classTicket ? urlParams.classTicket : '',
    searchClass: urlParams.searchClass ? urlParams.searchClass : '',
    sortBy: urlParams.sortBy ? urlParams.sortBy : 'price',
    sort: urlParams.sort ? urlParams.sort : '1',
    page: urlParams.page ? urlParams.page : '1'
  });

  const transitLocal = [
    'Direct', 'Transit', 'Transit 2'
  ]

  let searchParams =
  `?destination=${searchData.destination}&transit
  =${searchData.transit}&airline=${searchData.airline}`

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

  const onSearch = () => {
    dispatch(getTickets(searchData.departure, searchData.destination, searchData.airline, searchData.transit, searchData.classTicket, searchData.sortBy, searchData.sort, searchData.page))
  }

  useEffect(() => {
    if (searchData.destination !== '') {
      searchParams += `&page=${searchData.page}`
      history.push(`/search/${searchParams}`);
    } else {
      history.push(`/search/?page=${searchData.page}`);
    }
    onSearch()
  }, [searchData]);

  useEffect(() => {
    dispatch(getAirlines());
  }, []);

  useEffect(() => {
    const arrPage = [];
    for (let i = 1; i <= pageInfo.totalPage; i++) {
      arrPage.push(i)
    }
    setPage(arrPage)
  }, [pageInfo])

  console.log(page, 'ticket data')

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
                <select value={searchData.departure} onChange={(e) => setSearchData({
                  ...searchData,
                  departure: e.target.value
                })}
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
                <select value={searchData.destination} onChange={(e) => setSearchData({
                  ...searchData,
                  destination: e.target.value
                })}
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
                    {transitLocal.map((e, idx) => (
                      <div key={idx} className="d-flex flex-row justify-content-between">
                          <p>{e}</p>
                        <Form.Check value={e} onClick={(event) => {
                          setSearchData({
                            ...searchData,
                            transit: event.target.value
                          });
                          if (e.target?.checked) {
                            onSearch();
                          }
                        }} />
                      </div>
                    ))}
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
                      {airlines.map((e, idx) => (
                        <div key={idx} className="d-flex flex-row justify-content-between">
                            <p>{e.name}</p>
                          <Form.Check onClick={() => {
                            setSearchData({
                              ...searchData,
                              airline: e.id
                            });
                            if (e.target?.checked) {
                              onSearch();
                            }
                          }} />
                        </div>
                      ))}
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
                    <Form.Range onMouseDownCapture={(e) => {
                      if (e.clientX < 200) {
                        setSearchData({
                          ...searchData,
                          sort: '0'
                        })
                      } else {
                        setSearchData({
                          ...searchData,
                          sort: '1'
                        })
                      }
                      console.log(e, 'mouse action')
                      onSearch()
                      // dispatch(getTickets(searchData.departure, searchData.destination, searchData.classTicket, searchData.sortBy, searchData.sort))
                    }} />
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
            <div style={styleCoba.paginationContainer}>
              {page.map((e, idx) => (
                <div style={e === searchData.page ? styleCoba.pageBtnContainer2 : styleCoba.pageBtnContainer} key={idx}>
                    <Button onClick={() => {
                      setSearchData({
                        ...searchData,
                        page: e
                      })
                      onSearch()
                    }} style={styleCoba.pageBtn}>{e}</Button>
                </div>
              ))}
            </div>
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
  paginationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  pageBtnContainer: {
    backgroundColor: '#7ECFC0',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    margin: '17px'
  },
  pageBtnContainer2: {
    backgroundColor: '#4af7a4',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    margin: '17px'
  },
  pageBtn: {
    backgroundColor: 'transparent',
    border: '0px'
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
