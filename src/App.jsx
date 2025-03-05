import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Contact from './components/Contact';
import Home from './components/Home';
import History from './components/AboutAs/History';
import Employees from './components/AboutAs/Employees';
import Services from './components/AboutAs/Services';
import Competition from './components/Books/Competition';
import Recommendations from './components/Books/Recommendations';
import DigitalLibrary from './components/Books/DigitalLibrary';
import BooksSearche from './components/Books/BooksSearche';
import Events from './components/Events';
import OurPublic from './components/Books/OurPublic';
import Kid from './components/Department/Kid';
import Adult from './components/Department/Adult';
import Scientific from './components/Department/Scientific';
import Homeland from './components/Department/Homeland';
import Project from './components/AboutAs/Project';
import Legati from './components/Department/Legati';
import MisionAndVision from './components/AboutAs/MisionAndVision';
import { FaEnvelope } from 'react-icons/fa';

const App = () => {


  return (<>

    <Row className="top-bar">
      <Col md={12} className="bar-content">
        <span>Адреса: Главна 114, Рума</span>
        <span> |Радно време: понедељак-петак: 08-20h и суботом: 08-13h </span>
       
      </Col>
    </Row>

    <Router> 
      <header>

    <Navbar expand="lg" className="sticky-navbar shadow" >
  <Container>
    <Navbar.Brand as={Link} to="/" >
    <Row>
   <Col md={4}> <img src="/logo.jpg" alt="Logo" className='logo' /></Col>
   <Col md={4}><p className='container-text fw-bold '>Градска библиотека „Атанасије Стојковић” Рума</p></Col>
    </Row>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto fs-5 mt-4" >
    
        <NavDropdown title="О НАМА" id="about-dropdown"   >
          <NavDropdown.Item as={Link} to="/history">Историјат библиотеке</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/employees">Запослени</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/misionAndVision">Визија и мисија</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services">Услуге</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/project">Пројекат</NavDropdown.Item>
  
        </NavDropdown>         

        <NavDropdown title="ФОНД" id="fund-dropdown" 
         > 
          <NavDropdown.Item as={Link} to="/recommendations">Препоруке библиотекара</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/ourpublications">Наша издања</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/competition">Конкурс</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/digitali">Дигитална библиотека</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/searche">Претраживање фонда</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="ОДЕЉЕЊА" id="sections-dropdown" 
>
          <NavDropdown.Item as={Link} to="/kid" >Одељење за децу</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/adult">Одељење за одрасле</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/scientific">Одељење научне и стручне литературе</NavDropdown.Item>
          <NavDropdown title={<Link to="/homeland"   style={{color:'black'}}>Завичајна збирка</Link>} id="homeland-submenu" drop="end">
            <NavDropdown.Item as={Link} to="/homeland/legati" >Легати</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>

        <Nav.Link as={Link} to="/events">МАНИФЕСТАЦИЈЕ</Nav.Link>
        <Nav.Link as={Link} to="/contact">КОНТАКТ</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/history' element={<History />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/services' element={<Services />} />
        <Route path='/events' element={<Events />} />
        <Route path='/competition' element={<Competition />} />
        <Route path='/recommendations' element={<Recommendations />} />
        <Route path='/ourpublications' element={<OurPublic />} />
        <Route path='/digitali' element={<DigitalLibrary />} />
        <Route path='/searche' element={<BooksSearche />} />
        <Route path='/kid' element={<Kid />} />
        <Route path='/adult' element={<Adult />} />
        <Route path='/scientific' element={<Scientific />} />
        <Route path='/homeland' element={<Homeland />} />
        <Route path='/project' element={<Project />} />
        <Route path='/homeland/legati' element={<Legati />} />
        <Route path='/misionAndvision' element={<MisionAndVision />} />
      </Routes>
    </Router>

    <footer className="library-footer">
      <Container>
        <Row>
          <Col md={12}>
            <div  >
              <span >АДРЕСА: ГЛАВНА 114, РУМА</span>
              <span> |Радно време: понедељак-петак: 08-20h и суботом: 08-13h </span>
                  <span  >
                          |<FaEnvelope style={{ fontSize: '20px', color: '#4b301f'}} />
                          gbasruma@gmail.com
                         </span>
              <span> | <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer">YouTube</a>
              </span><span> | <a  href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer">Facebook</a></span>
              <span> | <a  href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer">Instagram</a></span>

            </div>
          </Col></Row>
        <br /><hr/>
        <Row>
          <Col md={12}>
            <p
            className='container-text'
            >
              <></>
              <br />&copy; 2025 Библиотека Рума. Задржава сва права.</p>
          </Col>
        </Row>

      </Container>
    </footer>
  </>

  );
}

export default App;
