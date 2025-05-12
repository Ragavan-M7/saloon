import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Facialcard from '../Component5/Facialcard';
import sal60 from '../assets/sal60.png';
import sal61 from '../assets/sal61.png';
import sal62 from '../assets/sal62.png';
import sal63 from '../assets/sal63.png';
import sal64 from '../assets/sal64.png';
import sal65 from '../assets/sal65.png';

        const facialData = [

           { id: 1, title: 'Lakme Perfect Radiance Illuminate Facial', price: 600, image: sal60 },
           { id: 2, title: 'Good Bye Tan Facial', price: 1200, image: sal61 },
           { id: 3, title: 'Lakme Youth Infinity Sculpting Facial', price: 900, image: sal62 },
           { id: 4, title: 'Dermalogica Luminous Immunity Face Fit', price: 1000, image: sal63 },
           { id: 5, title: 'Marine Secrets Masques -Detox', price: 800, image: sal64 },
           { id: 6, title: 'Organic Skin Lightening Facial with Eye Treatment', price: 500, image: sal65 }

        ];

          const FacialList = () => (
            <Container className="py-5">
              <Row className="g-4">
                {facialData.map(item => (
                  <Col key={item.id} xs={12} sm={6} md={4}>
                    <Facialcard {...item} />
                  </Col>
                ))}
              </Row>
            </Container>
          );

    export default FacialList;