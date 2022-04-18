import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logoari from '../../../images/myimages.png'
import './about.css';
const About = () => {
  return (
    <Fragment>
      <div className='aboutpages'>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className=''>
                <img width={160} src={logoari} alt='logo' />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <p>I am working on WordPress Sector Since 2017 and i have been working with lot of clients and all are satisfied. You may try giving a small project. I have complete more than 100 projects on WordPress during past years. I currently work on WordPress theme Customization . I currently work on WordPress Theme Customization Responsive Web Design Speed Up Website Plugin Usage WordPress Page Builder and so on My services are affordable and maintain the best quality design for you. Please inbox me before place an order to discuss more your project. Thank you for studying about me.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default About;