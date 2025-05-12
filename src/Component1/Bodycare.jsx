import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import sal34 from '../assets/sal34.png';
import sal33 from '../assets/sal33.png';
import sal35 from '../assets/sal35.png';
import sal36 from '../assets/sal36.png';



const Bodycare = () => {
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

    <h2>Categerois</h2>

    <div className='align-item-center'>
      <h2 style={{color:'#7D057D'}} className='text-center'>BODY CARE</h2>
    </div>

{/* col-1 */}

            <div style={{backgroundColor:'#000000'}} className="py-1 ">
                  <Container>
                    <Row>
                      <Col md={6} xs={12} className="mb-3 mb-md-0 py-3 ">
                        <h5 style={{fontSize:'40px'}} className="py-4 fw-bold text-white">Radiant, <br />
                                                     Rejuvenating & <br />
                                                     Replenishing <br />
                                                     Skin Care Service
                        </h5>
                        <button style={{backgroundColor:'#BE5985',padding:'17px 22px', borderRadius:'10px',}}>Service for Her</button>
                       <Link to='/Bodycare2'><button style={{backgroundColor:'white',padding:'17px 22px', borderRadius:'10px'}}>Service for Him</button></Link> 
                      </Col>
                      <Col md={6} xs={12}>
                        <img src={sal33} alt="Christian Wedding Look" className="img-fluid" />
                      </Col>
                    </Row>
                  </Container>
                </div>

{/* col-2 */}

             <div className="align-item-center py-5">
                            <Container>
                              <Row>
                                <Col md={6} xs={12} className="mb-3 mb-md-0">
                                  <img src={sal34} alt="South Indian Bride and Groom" className="img-fluid" />
                                </Col>
                      
                                <Col md={6} xs={12} className="py-2">
                                  <h2 style={{color:'#BE5985'}} className="fw-bold">Threading & Waxing</h2>
                                  <h5 style={{fontSize:'26px'}} className=" fw-bold">
                                                             Classic Layered Haircut. The classic layered <br />
                                                             haircut is versatile and timeless for women <br />
                                                             with medium to long hair and the haircut and <br />
                                                             styling are the unique look for both women <br />
                                                             and men
                                      </h5>
                                     <Link to='/Appointment'><button style={{backgroundColor:'#EC7FA9',borderRadius:'10px'}}>BOOK NOW</button></Link>
                                 </Col>
                             </Row>
                          </Container>
                      </div>

{/* col-3 */}

              <div style={{backgroundColor:'#000000'}} className="align-item-center py-5">
                            <Container>
                              <Row>
                                <Col md={6} xs={12} className="mb-3 mb-md-0">
                                  <img src={sal35} alt="South Indian Bride and Groom" className="img-fluid" style={{height:'50vh', width:'90vh'}}/>
                                </Col>
                      
                                <Col md={6} xs={12} className="py-1">
                                  <h2 style={{color:'#BE5985',fontSize:'42px'}} className="fw-bold">Manicure </h2>
                                  <h5 style={{fontSize:'26px'}} className="py-2 fw-bold text-white">
                                                  Manicure' is a treatment that <br />
                                                  improves the appearance of nails <br />
                                                  and hands,and softens
                                  </h5>
                                  <Link to='/Appointment'> <button style={{backgroundColor:'#EC7FA9',borderRadius:'10px'}}>BOOK NOW</button></Link>
                                </Col>
                            </Row>
                         </Container>
                      </div>

{/* col-4 */}

               <div className="py-1">
                         <Container>
                            <Row>
                               <Col md={6} xs={12} className="mb-3 mb-md-0 py-5 ">
                                  <h2 style={{color:'#BE5985'}}  className='py-2 fw-bold'>Pedicure</h2>
                                  <h5 style={{fontSize:'25px'}} className="fw-bold">A hair spa is a treatment that helps enhance <br />
                                                                                    the overall quality of your hair. It can be used <br />
                                                                                    to treat a varity of issues,such as dandruff, <br />
                                                                                    dry scalp,and hair loss. It's a great way to <br />
                                                                                    give your hair some much-and it's something <br />
                                                                                    you can do on your own,without having to go <br />
                                                                                    to a salon.
                                  </h5>
                                <Link to='/Appointment'> <button style={{backgroundColor:'#EC7FA9',borderRadius:'10px'}}>BOOK NOW</button></Link> 
                                  </Col>
                                 <Col md={6} xs={12}>
                                <img src={sal36} alt="Christian Wedding Look" className="img-fluid py-5" />
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
export default Bodycare;