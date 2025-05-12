import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Facialcard2 = ({ title, price, image }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart({ title, price, image });
    navigate('/cart');
  };

  return (
    <Card className="border-0 text-center h-100">
      <Card.Img variant="top" src={image} style={{ borderRadius: '20px', height: '300px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className="fs-5">{title}</Card.Title>
        <p className="fw-bold fs-5">Rs.{price}</p>
        <div className="d-flex justify-content-center gap-3">
          <Button onClick={handleAdd} style={{ backgroundColor: '#b7537a', border: 'none' }}>Add to Cart</Button>
          <Button variant="outline" style={{ borderColor: '#b7537a', color: '#b7537a' }}>Book Now</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Facialcard2;