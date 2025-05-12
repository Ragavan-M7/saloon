import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import sal15 from '../assets/sal15.png';
import sal16 from '../assets/sal16.png';
import sal17 from '../assets/sal17.png';
import sal18 from '../assets/sal18.png';
import sal19 from '../assets/sal19.png';


const Aboutus = () => {
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


    <div className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} xs={12} className="mb-4 mb-md-0">
            <img src={sal15} alt="Creating a Beautiful World" className="img-fluid rounded" />
          </Col>

          <Col md={6} xs={12}>
            <h2 className="fw-bold py-3" style={{ color: '#7D057D' }}>
              Creating a Beautiful World
            </h2>
            <h5>
              A passionate Cosmetic Makeup Artist with 15 years of experience providing <br />
              high-quality makeup for photoshoots, fashion events, and special occasions. <br />
              Focused on creating versatile looks for different skin tones, face shapes, and <br />
              client preferences. Known for attention to detail and artistic approach. <br />
              I feel so much more confident about my makeup now that I know what I'm <br />
              doing. Thank you for sharing your knowledge and experience. You are both a <br />
              gifted artist and an excellent educator.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>

  
    <div className="py-1 text-center text-md-start">
      <Container>
        <h1 style={{ color: '#7D057D' }} className="fw-bold px-5">
          S. Devipriya
        </h1>
        <h3 className="pt-3 px-4">
          FOUNDER OF NATURALS
        </h3>
      </Container>
    </div>

  <div className="py-5 text-center">
      <Container>
        <Row className="g-4">
          <Col md={6} xs={12} className="position-relative">
            <img src={sal16} alt="Naturals Hair Salon" className="img-fluid rounded" />
            <h2 className="position-absolute top-0 start-50 translate-middle-x text-white py-1">
              Naturals Hair Salon
            </h2>
          </Col>

          <Col md={6} xs={12} className="position-relative">
            <img src={sal17} alt="Naturals Nail Art" className="img-fluid rounded" />
            <h2 className="position-absolute top-0 start-50 translate-middle-x text-white py-1">
              Naturals Nail Art
            </h2>
          </Col>
        </Row>

        <Row className="g-4 pt-4">
          <Col md={6} xs={12} className="position-relative">
            <img src={sal18} alt="Naturals Bridal Makeover" className="img-fluid rounded" />
            <h2 className="position-absolute top-0 start-50 translate-middle-x text-white py-1">
              Naturals Bridal Makeover
            </h2>
          </Col>

          <Col md={6} xs={12} className="position-relative">
            <img src={sal19} alt="Naturals SPA and Skincare" className="img-fluid rounded" />
            <h2 className="position-absolute top-0 start-50 translate-middle-x text-white py-1">
              Naturals SPA and Skincare
            </h2>
          </Col>
        </Row>
      </Container>
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

export default Aboutus;