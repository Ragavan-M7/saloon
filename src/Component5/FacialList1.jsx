import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Facialcard1 from '../Component5/Facialcard1';
import sal66 from '../assets/sal66.png';
import sal67 from '../assets/sal67.png';
import sal68 from '../assets/sal68.png';
import sal69 from '../assets/sal69.png';
import sal70 from '../assets/sal70.png';
import sal71 from '../assets/sal71.png';

            const facialData = [
                { id: 1, title: 'Lakme Perfect Radiance Illuminate Facial', price: 600, image: sal66 },
                { id: 2, title: 'Good Bye Tan Facial', price: 1200, image: sal67 },
                { id: 3, title: 'Lakme Youth Infinity Sculpting Facial', price: 900, image: sal68 },
                { id: 4, title: 'Dermalogica Luminous Immunity Face Fit', price: 1000, image: sal69 },
                { id: 5, title: 'Marine Secrets Masques -Detox', price: 800, image: sal70 },
                { id: 6, title: 'Organic Skin Lightening Facial with Eye Treatment', price: 500, image: sal71 } 
              ];

              const FacialList1 = () => (
                <Container className="py-5">
                  <Row className="g-4">
                    {facialData.map(item => (
                      <Col key={item.id} xs={12} sm={6} md={4}>
                        <Facialcard1 {...item} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              );

       export default FacialList1;