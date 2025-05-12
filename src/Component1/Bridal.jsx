import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import sal20 from '../assets/sal20.png';
import sal21 from '../assets/sal21.png';
import sal22 from '../assets/sal22.png';
import sal23 from '../assets/sal23.png';
import sal24 from '../assets/sal24.png';

const Bridal = () => {
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


  <div className="position-relative text-center">
      <Container fluid className="p-0 m-0">
        <div className="position-relative">

          {/* Background Image */}
          <img
            src={sal20}
            alt="Bridal Makeover"
            className="w-100"
            style={{ height: '60vh', objectFit: 'cover' }}/>

         
          <div className="position-absolute top-50 start-50 translate-middle text-white px-3">
            <h2 className="fw-bold mb-4" style={{ fontSize: '34px' }}>
              Experience the Ultimate <br /> Bridal Makeover Journey
            </h2>
            <Link to="/Explore">
              <button
                className="btn"
                style={{
                  backgroundColor: '#221817',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '10px',
                  fontSize: '18px',}}> Next</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>

{/* col-1 */}

       <div className="align-item-center py-5">
          <Container>
            <Row>
              <Col md={6} xs={12} className="mb-3 mb-md-0">
                <img src={sal21} alt="South Indian Bride and Groom" className="img-fluid" />
              </Col>
    
              <Col md={6} xs={12} className="py-5">
                <h2 style={{color:'#BE5985'}} className="fw-bold"> Consultation </h2>
                <h3 className='fw-bold'> Stage 1</h3>
                <h5 className="py-4 fw-bold">The consultation stage of bridal makeup is crucial <br />
                                             because it gives the bride and the makeup artist a <br />
                                             chance to discuss and arrange the ideal look for the <br />
                                             wedding day.it offers an opportunity to learn about the <br />
                                             bride's preference,consider several looks,and make <br />
                                             sure that the makeup fits the wedding's general concept <br />
                                             and style.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>

  {/* col-2 */}

        <div className="py-1">
              <Container>
                <Row>
                  <Col md={6} xs={12} className="mb-3 mb-md-0 py-3 ">
                    <h2 style={{color:'#BE5985'}}  className='fw-bold'> Planning </h2>
                    <h3 className='fw-bold'> Stage 2</h3>
                    <h5 className="py-4 fw-bold">Planning is an essential step in bridal makeup that <br />
                                                 entails organising and coordinating varous elements to <br />
                                                 guarantee a seamless and practical makeup application <br />
                                                 on the wedding day. Planning beforehand can help <br />
                                                 create a unified and distinctive style that highlights the <br />
                                                 bride's inherent beauty and complements the wedding.
                    </h5>
                  </Col>
                  <Col md={6} xs={12}>
                    <img src={sal22} alt="Christian Wedding Look" className="img-fluid" />
                  </Col>
                </Row>
              </Container>
            </div>

{/* col-3 */}

        <div className="align-item-center py-5">
          <Container>
            <Row>
              <Col md={6} xs={12} className="mb-3 mb-md-0">
                <img src={sal23} alt="South Indian Bride and Groom" className="img-fluid" />
              </Col>
    
              <Col md={6} xs={12} className="py-5">
                <h2 style={{color:'#BE5985'}} className="fw-bold"> Trial Session</h2>
                <h3 className='fw-bold'> Stage 3</h3>
                <h5 className="py-4 fw-bold"> An essential part of the wedding planning process is a <br />
                                              bridal makeup trial .it enables the bride and makeup <br />
                                              artist to work together to develop and perfect the ideal <br />
                                              bridal look. The trial session offers a chance to try out <br />
                                              several aesthetic looks,express your preferences,and <br />
                                              ensure the final appearance is precisely what you had <br />
                                              in mind.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>

   {/* col-4 */}

         <div className="py-1">
              <Container>
                <Row>
                  <Col md={6} xs={12} className="mb-3 mb-md-0 py-3 ">
                    <h2 style={{color:'#BE5985'}}  className='fw-bold'>Actual Day </h2>
                    <h3 className='fw-bold'> Stage 4</h3>
                    <h5 className="py-4 fw-bold">The actual day of bridal makeup is an exciting and <br />
                                                 memorable time when the bride gets her makeup <br />
                                                 professionally done for her wedding day.To ensure a <br />
                                                 stress-free and joyful experience,planning ahead and <br />
                                                 setting aside enough time to apply makeup is crucial.

                    </h5>
                  </Col>
                <Col md={6} xs={12}>
                  <img src={sal24} alt="Christian Wedding Look" className="img-fluid" />
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
export default Bridal;