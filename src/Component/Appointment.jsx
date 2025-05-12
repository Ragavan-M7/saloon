import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import sal81 from '../assets/sal81.png';



const Appointment = () => {
  return (
    <>
    <div style={{ backgroundColor: '#eb81ad', padding: '10px 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Logo */}
          <Col  className="text-white ">
            <h2 style={{ fontWeight: 'bold',paddingRight:'90%'}}>NATURALS</h2>
            <p style={{ margin: 0 }}>World’s fastest growing salon chain</p>
          </Col>

          {/* Search bar */}
          <Col md={6}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '25px', padding: '5px 20px' }}>
              <Form.Control 
                type="text" 
                placeholder="Search Your Service..." 
                style={{ border: 'none', boxShadow: 'none' }}/>
              <Button variant="link" style={{ color: '#eb81ad', textDecoration: 'none' }}>
                <FaSearch />
              </Button>
            </div>
          </Col>

          {/* Cart */}
          <Col className="text-end fx-5 text-white d-flex justify-content-end align-items-center gap-2">
            <Link to='/Cart' className='text-white'> <FaShoppingCart size={20} /></Link>
              <span><Link to="/Contactus" style={{ fontWeight: 'bold',textDecoration:'none',color:'white' }}>Contact Us</Link></span>
          </Col>
        </Row>
      </Container>
    </div>

  {/* Navbar */}
  
              <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#b7537a' }}>
                <div className="container">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                  </button>
  
                  <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav gap-lg-4 gap-2 text-center">
                      <li className="nav-item">
                        <Link className="nav-link text-white fw-bold px-5" to="/">HOME</Link>
                      </li>
  
                      <li className="nav-item nav-link dropdown px-5">
                        <span
                          className="nav-link dropdown-toggle text-white fw-bold px-3"
                          id="servicesDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false" >
                          OUR SERVICES
                        </span>
                        <ul className="dropdown-menu text-start" aria-labelledby="servicesDropdown">
                          <li><Link className="dropdown-item" to="/Bridal">1. BRIDAL</Link></li>
                          <li><Link className="dropdown-item" to="/Skincare">2. SKINCARE</Link></li>
                          <li><Link className="dropdown-item" to="/Haircare">3. HAIRCARE</Link></li>
                          <li><Link className="dropdown-item" to="/Bodycare">4. BODYCARE</Link></li>
                        </ul>
                      </li>
  
                      <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold px-3" to="/pricing">PRICING</Link>
                      </li>
  
                      <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold px-3" to="/Blog">BLOG</Link>
                      </li>
  
                      <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold px-3" to="/Aboutus">ABOUT US</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

{/* appoint */}

      <div
        className="container-fluid fw-bold"
        style={{
          backgroundImage: `url(${sal81})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}>
        <div
          className="card shadow p-4 w-100"
          style={{
            maxWidth: '700px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}>
          <h2 className="text-center mb-4" style={{ color: '#EC7FA9' }}>
            Appointment Booking
          </h2>
          <form>
            <div className="row">
              {/* Left Side */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Monisha" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="monisha@gmail.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Choose Date</label>
                  <input type="date" className="form-control" id="date" />
                </div>
              </div>

              {/* Right Side */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone" placeholder="9876543210" />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">Location</label>
                  <input type="text" className="form-control" id="location" placeholder="Chennai" />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">Choose Time</label>
                  <input type="time" className="form-control" id="time" />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
              <textarea className="form-control" id="additionalInfo" rows="3"></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn w-50"
                style={{ backgroundColor: '#EC7FA9', border: 'none', color: 'white' }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>


{/* footer */}

  <div className="text-white" style={{ backgroundColor: '#EC7FA9' }}>
            <Container className="py-3" style={{fontSize:'18px'}}>
              <Row className="text-center text-md-start">
                
                {/* Column 1 */}
                <Col md={3} xs={12} className="py-3 px-1">
                  <h4 className="py-3">NATURALS</h4>
                  <p>World's fastest growing salon chain</p>
                </Col>
                
                {/* Column 2 */}
                <Col md={3} xs={12} className="py-3">
                  <h1 className="py-2">Location</h1>
                  <p>India Salon Pvt. Ltd <br />
                    No.123 Gandhinagar <br />
                    Road, Main Road, Chennai, Tamil Nadu
                  </p>
                </Col>
      
                {/* Column 3 */}
                <Col md={3} xs={12} className="py-3">
                  <h1 className="py-2">Our Services</h1>
                     <Link to='/Bridal'style={{ fontWeight: 'bold',textDecoration:'none',color:'white' }}><p>Bridal</p></Link>
                     <Link to='/Skincare'style={{ fontWeight: 'bold',textDecoration:'none',color:'white' }}><p>Skin Care</p></Link>
                     <Link to='/Haircare'style={{ fontWeight: 'bold',textDecoration:'none',color:'white' }}><p>Hair Care</p></Link>
                     <Link to='/Bodycare'style={{ fontWeight: 'bold',textDecoration:'none',color:'white' }}><p>Body Care</p></Link>
                </Col>
                
                {/* Column 4 */}
                <Col md={3} xs={12} className="py-3">
                  <h1 className="py-2">Quick Links</h1>
                    <Link to='/pricing'style={{ fontWeight: 'bold',textDecoration:'none',color:'white' }}><p>Pricing</p></Link> 
                    <Link to='/Aboutus'style={{ fontWeight: 'bold',textDecoration:'none',color:'white' }}><p>About Us</p></Link>
                    <Link to='/Contactus'style={{ fontWeight: 'bold',textDecoration:'none',color:'white' }}><p>Contact Us</p></Link>
                </Col>
              </Row>
              
              {/* Copyright */}
              <h3 className="text-center py-4">Copyright@naturals.com</h3>
            </Container>
          </div>
       </>
    );
  };

export default Appointment;