import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../App.css';

function Home() {
  return (
    <div className='Home'  style={{ marginTop: '0', paddingTop: '0' }}>
      <Container>
        <Row>
          <Col>
            <img src="https://res.cloudinary.com/de4euasql/image/upload/v1698392843/WhatsApp_Image_2023-10-27_at_13.15.56_ab6554fe_nabsny.jpg" alt="img" className='img' />
          </Col>
          <Col>
            <div className='profile'>
              <h1 >Hello, It's me</h1>
              <h1>Kilari.Nirmalkumar</h1>
              <h1> And I'm Interested Frontend Developer</h1>
              <div className='social-links'>
                <a href="https://www.instagram.com/your_nirmal_143" target="_blank" rel="noopener noreferrer"><FaInstagram style={{margin:'10px' , height:'50px', width:'50px'}}/></a>
                <a href="https://www.linkedin.com/in/nirmal-kumar-kilari-7129801a3" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{margin:'10px',  height:'50px', width:'50px'}}/></a>
                <a href="https://github.com/Nirmalkilari123" target="_blank" rel="noopener noreferrer"><FaGithub style={{margin:'10px', height:'50px', width:'50px'}} /></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
