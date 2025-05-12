import React, { useState } from 'react';
import { Container, Row, Col, Form, Button,} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import google from '../assets/google.png'


const Upi= () => {

  const [upiId, setUpiId] =useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!upiId.includes('mani@gmail.com')) {
      alert('Please enter a valid UPI ID');
      return;
    }

    navigate('/Fourdigit', { state: { upiId } });
  };

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
   
                       <li className="nav-item dropdown px-5">
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

  {/* upi */}

                    <Container className="py-5">
                        <Row className="justify-content-center py-5">
                          <Col xs={12} md={8} lg={6}>
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                              <h2 className="mb-0">Welcome to Google Pay</h2>
                              <img src={google} alt="Google Pay" style={{ width: '50px', height: '50px' }} />
                            </div>

                            <Form className="d-flex flex-column gap-3 py-3" onSubmit={handleSubmit}>
                              <Form.Group controlId="upiId">
                                <Form.Label style={{ fontSize: '18px' }}>Enter Your UPI ID</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="example@upi"
                                  value={upiId}
                                  onChange={(e) => setUpiId(e.target.value)} />
                              </Form.Group>

                              <button
                                type="submit"
                                style={{
                                  backgroundColor: '#491AB0',
                                  padding: '15px 20px',
                                  border: 'none',
                                  color: 'white',
                                  fontSize: '18px',
                                  borderRadius: '5px',
                                  width: '30%',
                                }} >
                                Continue
                              </button>
                            </Form>
                          </Col>
                        </Row>
                      </Container>

  {/* footer */}
                   
                        <div className="text-white " style={{ backgroundColor: '#EC7FA9' }}>
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
              
   export default Upi;