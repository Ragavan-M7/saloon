import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
     <>

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
       )
     }

export default Footer;