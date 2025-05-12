import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import sal1 from '../assets/sal1.png';
import sal2 from '../assets/sal2.png';
import sal5 from '../assets/sal5.png';
import sal6 from '../assets/sal6.png';
import sal7 from '../assets/sal7.png';
import sal8 from '../assets/sal8.png';
import sal9 from '../assets/sal9.png';
import sal10 from '../assets/sal10.png';


const Home = () => {
  return (
          <>

  {/* Navbar1   */}

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
                  <Link to='/Appointment' className='text-white'> <FaShoppingCart size={20} /></Link>
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
     
 {/* Corosel */}


                  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">

                      {/* Slide 1 */}
                      <div className="carousel-item active" data-bs-interval="10000">
                        <img src={sal1} className="d-block w-100" alt="First Slide" />
                        <div className="carousel-caption d-none d-md-block text-end" style={{ height: '100%' }}>
                          <div className="d-flex flex-column justify-content-center align-items-end h-100">
                            <h5 style={{fontSize:'52px'}} className="text-white">30%</h5>
                            <h2 style={{ color: '#EC7FA9', fontWeight: 'bold',fontSize:'52px', }}>OFFER...</h2>
                            <p style={{fontSize:'32px'}}  className="text-white fw-semibold">World’s fastest growing salon chain</p>
                          </div>
                        </div>
                      </div>

                      {/* Slide 2 */}
                      <div className="carousel-item" data-bs-interval="2000">
                        <img src={sal2} className="d-block w-100" alt="Second Slide" />
                        <div className="carousel-caption d-none d-md-block text-end" style={{ height: '100%' }}>
                          <div className="d-flex flex-column justify-content-center align-items-end h-100">
                            <h3 style={{fontSize:'62px'}} className="text-white">Book</h3>
                            <h3 style={{fontSize:'62px'}} className="text-white">Your Day ...!</h3>
                          </div>
                        </div>
                      </div>

                      {/* Slide 3 */}
                      <div className="carousel-item">
                        <img src={sal1} className="d-block w-100" alt="Third Slide" />
                        <div className="carousel-caption d-none d-md-block text-end" style={{ height: '100%' }}>
                          <div className="d-flex flex-column justify-content-center align-items-end h-100">
                            <h5 style={{fontSize:'52px'}} className="text-white">30%</h5>
                            <h2 style={{ color: '#EC7FA9', fontWeight: 'bold',fontSize:'52px', }}>OFFER...</h2>
                            <p style={{fontSize:'32px'}}  className="text-white fw-semibold">World’s fastest growing salon chain</p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

{/* content-1 */}
   
                <div className="mt-5 px-3">
                      <h1 style={{ color: '#eb81ad' }} className=" mb-4">
                        Why Choose Us?
                      </h1>
                      <p style={{ fontSize: '20px', fontWeight: 'bold' }} className="text-justify text-mute fw-bold">
                        With over two decades of expertise, Naturals Salons offers a wide range of services, including hair care, skincare,bridal makeovers,
                        spa treatments, and more. Their commitment to quality, innovation, and customer satisfaction has earned them a loyal clientele
                        across India and several international locations.A professional salon offers a wide range of environmentally friendly services 
                        including hair coloring (all-over,trend colors), hair extensions, eyelash extensions, makeup application, waxing, nail services, and even
                        ear piercing.
                      </p>
                    </div>

{/* Content-2 */}
                  <div style={{ backgroundColor: '#000000', padding: '60px 0' }}>
                        <Container>
                          <Row className="align-items-center">
                            <Col md={6} sm={12} className="text-center text-md-start">
                              <h1 style={{ color: '#EA1A85', marginBottom: '20px' }}>
                                Exclusively Bridal
                              </h1>
                              <p style={{ fontSize: '20px' }} className="text-white fw-bold">
                                Make your wedding day unforgettable with <br />
                                our luxurious Bridal Services. We rely on <br />
                                premium products and uphold the highest <br />
                                hygiene standards to ensure a flawless, <br />
                                radiant look. Trust our team on your <br />
                                special day.
                              </p>
                            </Col>
                            <Col md={6} sm={12} className="text-center mt-4 mt-md-0">
                              <img src={sal5} alt="Bridal Services" className="img-fluid" />
                            </Col>
                          </Row>
                        </Container>
                      </div>

{/* Content-3 */}
  
                  <div className="position-relative overflow-hidden">
                      <img
                        src={sal6}
                        alt="Korean Glass Skin Facial"
                        className="img-fluid w-100"
                        style={{ objectFit: 'cover', maxHeight: '100vh' }} />
                   <div
                       className="position-absolute top-50 start-50 translate-middle w-100 px-3"
                        style={{ maxWidth: '100%' }} >
                          <div className="text-center text-md-end text-white px-md-3" style={{ maxWidth: '500px', marginLeft: 'auto' }}>
                             <h1 className="fw-bold mb-3"
                                style={{color: '#EA1A85', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', }}>
                                Korean Glass Skin Facial
                             </h1>
                             <p
                            className="fw-semibold"
                               style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)', lineHeight: 1.0, }}>
                                       It is a multi-step skincare treatment designed to give your skin a mirror-like glow.
                                       The specialized facial includes hydra infusion with intense exfoliation and collagen
                                       boosters that improve the skin's texture, tone, and elasticity.
                              </p>
                          </div>
                       </div>
                    </div>


{/* Content-4 */}

                  <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                      <Container>
                        <Row className="align-items-center text-center text-md-start">
                          <Col md={4} className="mb-1 mb-md-0 ">
                            <img src={sal7} alt="Spa Treatment Part 1" className="img-fluid rounded" />
                          </Col>

                          <Col md={4}
                            className="d-flex flex-column justify-content-center align-items-center text-white px-5"
                            style={{ backgroundColor: '#000000', height: '100%', padding: '130px 120px' }}>
                            <h2 style={{ color: '#EA1A85', fontWeight: 'bold', fontSize: '36px' }}>
                              SPA <br /> Treatment
                            </h2>
                          </Col>

                          <Col md={4}>
                            <img src={sal8} alt="Spa Treatment Part 2" className="img-fluid rounded " />
                          </Col>
                        </Row>
                      </Container>
                    </div>

{/* Content-5 */}

                <div className='align-item-center px-5' style={{color:'#EA1A85'}}>
                  <h1>What Our Valued Customers Say?</h1>
                </div>


                <div className="py-5 px-2 text-center">
                  <Container>
                    <Row className="align-items-center justify-content-center g-4">
                      <Col md={6} xs={12}>
                        <img src={sal9} alt="Customer Review 1" className="img-fluid rounded mb-3" />
                        <p className="fw-bold" style={{ fontSize: '18px', maxWidth: '500px', margin: '0 auto' }}>
                          I recently went for a haircut, and one <br />
                          of their senior staff attended to me. <br /> 
                          The whole experience was very comfortable, <br />
                          and I absolutely love the result.
                        </p>
                      </Col>
                      <Col md={6} xs={12}>
                        <img src={sal10} alt="Customer Review 2" className="img-fluid rounded mb-3" />
                        <p className="fw-bold" style={{ fontSize: '18px', maxWidth: '500px', margin: '0 auto' }}>
                          I had a wonderful experience at <br />
                          Naturals. The haircut was <br />
                          satisfying, and the hairdresser <br />
                          was hospitable.
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>

{/* Footer */}

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
        
export default Home;