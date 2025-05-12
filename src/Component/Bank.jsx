import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import sal80 from '../assets/sal80.png';
import visa from '../assets/visa.png';
import remo from '../assets/remo.png';
import google from '../assets/google.png';

const Bank= () => {
  
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    if (paymentMethod === 'Bank') {
      navigate('/Payment');
    } else {
      alert('Please select "Bank" to proceed to online payment.');
    }
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

{/* bank-details */}

<div
      style={{
        backgroundImage: `url(${sal80})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="py-5 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
        <Container>
          <Row className="justify-content-center py-5">
            <Col md={10} lg={8}>
              <Form className="d-flex flex-column gap-4 align-items-center">

{/* Bank Option */}

                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 py-3">
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="radio"
                      id="bank"
                      name="payment"
                      value="Bank"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      style={{ width: '24px', height: '24px' }} />
                    <label
                      htmlFor="bank"
                      className="fw-bold"
                      style={{ fontSize: '22px', marginBottom: 0, color: 'black' }}>
                      Bank
                    </label>
                  </div>
                  <img src={visa} alt="Visa" style={{ width: '90px' }} />
                  <img src={remo} alt="Remo" style={{ width: '90px' }} />
                  <img src={google} alt="Google Pay" style={{ width: '90px' }} />
                </div>

 {/* Pay at the Shop Option */}

                <div className="d-flex align-items-center gap-3">

                  <input type="radio" id="shop" name="payment" value="Pay at the shop"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    style={{ width: '24px', height: '24px' }}/>

                  <label  htmlFor="shop" className="fw-bold" style={{ fontSize: '22px', marginBottom: 0, color: 'black' }} >
                    Pay at the shop
                  </label>
                </div>

{/* Pay Button */}

                <button type="button"
                  style={{ backgroundColor: '#EC7FA9', padding: '10px 20px', border: 'none', color: 'white', fontSize:'18px', borderRadius:'5px',}}
                  onClick={handlePayment}  >
                  Pay Now
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
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
export default Bank;
 
