import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Facialcard2 from '../Component5/Facialcard2';
import sal72 from '../assets/sal72.png';
import sal73 from '../assets/sal73.png';
import sal74 from '../assets/sal74.png';
import sal75 from '../assets/sal75.png';
import sal76 from '../assets/sal76.png';
import sal77 from '../assets/sal77.png';

        const facialData = [
          { id: 1, title: 'Lakme Perfect Radiance Illuminate Facial', price: 600, image: sal72 },
          { id: 2, title: 'Good Bye Tan Facial', price: 1200, image: sal73 },
          { id: 3, title: 'Lakme Youth Infinity Sculpting Facial', price: 900, image: sal74},
          { id: 4, title: 'Dermalogica Luminous Immunity Face Fit', price: 1000, image: sal75 },
          { id: 5, title: 'Marine Secrets Masques -Detox', price: 800, image: sal76 },
          { id: 6, title: 'Organic Skin Lightening Facial with Eye Treatment', price: 500, image: sal77 } 
        ];

          const FacialList2 = () => (
            <Container className="py-5">
              <Row className="g-4">
                {facialData.map(item => (
                  <Col key={item.id} xs={12} sm={6} md={4}>
                    <Facialcard2 {...item} />
                  </Col>
                ))}
              </Row>
            </Container>
          );

   export default FacialList2;