import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { useCart } from './CartContext';
import Footer from '../Component/Footer';
import Navbar1 from '../Component/Navbar1';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, increaseQty, decreaseQty } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const sgst = subtotal * 0.18;
  const total = subtotal + sgst;

  const navigate = useNavigate();

  return (
    <>
    <Navbar1 />
      <Container className="py-5">
        <h2 className="mb-4">Your Cart</h2>
        <Row >

  {/* LEFT SIDE: Cart Items */}

          <Col md={8} style={{ backgroundColor: '#eb81ad'}}>
            {cartItems.map((item, index) => (
              <Row key={index} className="align-items-center mb-4">
                <Col md={4}>
                  <Image src={item.image} fluid rounded />
                </Col>
                <Col md={8}>
                  <h5>{item.title}</h5>
                  <p>Rs. {item.price}</p>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <Button variant="outline-dark" onClick={() => decreaseQty(item.title)}>-</Button>
                    <span>{item.quantity}</span>
                    <Button variant="outline-dark" onClick={() => increaseQty(item.title)}>+</Button>
                  </div>
                  <strong>Subtotal: Rs. {item.price * item.quantity}</strong>
                </Col>
              </Row>
            ))}
          </Col>

 {/* RIGHT SIDE: Summary */}

                  <Col md={4}>
                    <Card className="p-4 shadow-sm"  style={{ backgroundColor: '#eb81ad'}}>
                      <h5>Price Details</h5>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span>Rs. {subtotal.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>SGST (18%):</span>
                        <span>Rs. {sgst.toFixed(2)}</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between fw-bold">
                        <span>Total:</span>
                        <span>Rs. {total.toFixed(2)}</span>
                      </div>
                      <div className="d-grid mt-4">

                      <Button style={{ backgroundColor: '#EC7FA9' }}size="lg"onClick={() => navigate('/Bank')}> Pay Now</Button>
                     
                      </div>
                 </Card>
               </Col>
             </Row>
           </Container>
         <Footer />
       </>
      );
    };

export default CartPage;


















