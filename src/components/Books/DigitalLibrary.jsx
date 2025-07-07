import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import digitalna2 from '../../images/digitalna2.webp'
import AnimatedCard from '../Department/AnimatedCard';     import { Helmet } from 'react-helmet';
const DigitalLibrary =()=>{
    return (<>

        <Helmet>
         <title>Digitalna biblioteka - Biblioteka Ruma</title>
         <link rel="canonical" href="https://bibliotekaruma.rs/digitalna" />
       </Helmet> 
     <Container className='container-library mt-4 mb-4' >
      <h1 className="container-title mb-4">Наш дигитални фонд</h1>

      <p className="container-text mb-5">
      Дигитална библиотека „Атанасије Стојковић“ Рума
је основана 2023. године у оквиру пројекта који је
суфинансиран од стране Министарства културе
Републике Србије и Локалне самоуправе. Пројекат
има за циљ да дигитализује и промовише културну
баштину Руме и околине. У оквиру дигиталне
библиотеке може се видети грађа која је од
културног значаја за локалну средину.

      </p>

      <Row className="mb-5">
        <Col md={12} className="mb-4">
          <AnimatedCard>
            <Card.Img   src={digitalna2} variant="top"  alt="Дигитална библиотека"  style={{ 
              display: 'block', 
              margin: '0 auto', 
              width: '100%', 
              height:'100%'
           
            }}  />
            <Card.Body>
           
              <Button 
                style={{
                  width: '200px',
                  marginTop: '16px',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                }}
                href="https://www.digitalna.bibliotekaruma.rs" 
                target="_blank" 
                rel="noopener noreferrer"  
                onMouseOver={e => { e.target.style.backgroundColor = '#6c757d'; e.target.style.color = 'white'; }}
                onFocus={e => { e.target.style.backgroundColor = '#6c757d'; e.target.style.color = 'white'; }}
                onMouseOut={e => { e.target.style.backgroundColor = '#6c757d'; e.target.style.color = 'white'; }}
                onBlur={e => { e.target.style.backgroundColor = '#6c757d'; e.target.style.color = 'white'; }}
              >
                Посетите нашу дигиталну библиотеку
              </Button>
            </Card.Body>
          </AnimatedCard>
        </Col>
      </Row>

     
    </Container>
    
    
    
    </>)
}

export default DigitalLibrary