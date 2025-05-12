import React, { useState } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';


const Fourdigit= () => {

        const [pin, setPin] = useState(['', '', '', '']);
          const navigate = useNavigate();

          const handleChange = (index, e) => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            if (value.length > 1) return;

            const newPin = [...pin];
            newPin[index] = value;
            setPin(newPin);

    
            if (value && index < 3) {
              document.getElementById(`pin-${index + 1}`)?.focus();
            }

            if (newPin.every(d => d !== '')) {
              const enteredPin = newPin.join('');
              if (enteredPin === '4545') {
                navigate('/paymentsuces');
              } else {
                alert('Incorrect PIN');
                setPin(['', '', '', '']);
                document.getElementById('pin-0')?.focus();
              }
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


{/* Fourdigit */}


  <div className="container text-center mt-5">
      <h1 className="fw-bold mb-4">Enter 4-DIGIT UPI PIN</h1>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {pin.map((digit, index) => (
          <input
            key={index}
            id={`pin-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleChange(index, e)}
            maxLength="1"
            className="form-control text-center"
            style={{
              width: '60px',
              height: '60px',
              fontSize: '24px',
              border: 'none',
              borderBottom: '3px solid #000',
              borderRadius: '0',
              boxShadow: 'none',
            }}
          />
        ))}
      </div>
      <p className="mt-4 text-muted px-3">
        UPI PIN keeps your account secure. Do not share this PIN with anyone.
      </p>
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

  export default Fourdigit;