import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Contact from './components/Contact';
import Home from './components/Home';
import History from './components/AboutAs/History';
import Employees from './components/AboutAs/Employees';
import Services from './components/Services';
import Competition from './components/AboutAs/Competition';
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
import { HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import AnimatedPage from './components/Department/AnimatedPage';
import { AnimatePresence } from 'framer-motion';

function InnerApp() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Row className="top-bar">
        <Col md={12} className="bar-content">
          <span>Адреса: Главна 114, Рума</span>
          <span> |Радно време: понедељак-петак: 08-20h и суботом: 08-13h </span>
          <span> | <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer" aria-label="YouTube kanal biblioteke" style={{ marginRight: '10px', fontSize: '1em', color: 'inherit' }}><i className="fab fa-youtube"></i> YouTube</a> |
          <a href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer" aria-label="Instagram biblioteke" style={{ marginRight: '10px', fontSize: '1em', color: 'inherit' }}><i className="fab fa-instagram"></i> Instagram</a> |
          <a href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer" aria-label="Facebook biblioteke" style={{ fontSize: '1em', color: 'inherit' }}><i className="fab fa-facebook"></i> Facebook</a></span>
        </Col>
      </Row>

      <header>
        <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="sticky-navbar shadow">
          <Container>
            <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
              <Row>
                <Col md={4}>
                  <img src="/logo.jpg" alt="Грб Градске библиотеке Рума" className='logo' style={{ marginLeft: '6rem' }} />
                </Col>
                <Col md={4} className='mt-3'>
                  <p className='container-text fw-bold' style={{ marginLeft: '1.5rem' }}>
                    Градска библиотека "Атанасије Стојковић" Рума
                  </p>
                </Col>
              </Row>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fs-5 mt-5">

                <NavDropdown title="О БИБЛИОТЕЦИ" id="about-dropdown">
                  <NavDropdown.Item as={Link} to="/o-biblioteci" onClick={() => setExpanded(false)}>Историјат библиотеке</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/zaposleni-biblioteke" onClick={() => setExpanded(false)}>Запослени</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/vizija-misija-biblioteke" onClick={() => setExpanded(false)}>Визија и мисија</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/projekti-biblioteke" onClick={() => setExpanded(false)}>Пројекат</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/konkurs-biblioteke" onClick={() => setExpanded(false)}>Конкурс</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="ФОНД" id="fund-dropdown">
                 <NavDropdown.Item as={Link} to="/preporuke-biblioteke" onClick={()=>setExpanded(false)}>Препорука библиотекара</NavDropdown.Item> 
                  <NavDropdown.Item as={Link} to="/nasa-izdanja" onClick={() => setExpanded(false)}>Наша издања</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/digitalna-biblioteka" onClick={() => setExpanded(false)}>Дигитална библиотека</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/pretrazivanje-kataloga" onClick={() => setExpanded(false)}>Претраживање фонда</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/legati-biblioteke" onClick={() => setExpanded(false)}>Легати</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="ОДЕЉЕЊА" id="sections-dropdown">
                  <NavDropdown.Item as={Link} to="/odeljenje-za-decu" onClick={() => setExpanded(false)}>Одељење за децу</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/odeljenje-za-odrasle" onClick={() => setExpanded(false)}>Одељење за одрасле</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/odeljenje-naucne-i-strucne-literature" onClick={() => setExpanded(false)}>Одељење научне и стручне литературе</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/zavicajna-zbirka" onClick={() => setExpanded(false)} >Завичајна збирка</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/usluge-biblioteka-ruma" onClick={() => setExpanded(false)}>УСЛУГЕ</Nav.Link>
                <Nav.Link as={Link} to="/manifestacije-biblioteka-ruma" onClick={() => setExpanded(false)}>МАНИФЕСТАЦИЈЕ</Nav.Link>
                <Nav.Link as={Link} to="/kontakt-biblioteka-ruma" onClick={() => setExpanded(false)}>КОНТАКТ</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path='/kontakt-biblioteka-ruma' element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path='/o-biblioteci' element={<AnimatedPage><History /></AnimatedPage>} />
          <Route path='/zaposleni-biblioteke' element={<AnimatedPage><Employees /></AnimatedPage>} />
          <Route path='/usluge-biblioteka-ruma' element={<AnimatedPage><Services /></AnimatedPage>} />
          <Route path='/manifestacije-biblioteka-ruma' element={<AnimatedPage><Events /></AnimatedPage>} />
          <Route path='/konkurs-biblioteke' element={<AnimatedPage><Competition /></AnimatedPage>} />
          <Route path='/preporuke-biblioteke' element={<AnimatedPage><Recommendations /></AnimatedPage>} />
          <Route path='/nasa-izdanja' element={<AnimatedPage><OurPublic /></AnimatedPage>} />
          <Route path='/digitalna-biblioteka' element={<AnimatedPage><DigitalLibrary /></AnimatedPage>} />
          <Route path='/pretrazivanje-kataloga' element={<AnimatedPage><BooksSearche /></AnimatedPage>} />
          <Route path='/odeljenje-za-decu' element={<AnimatedPage><Kid /></AnimatedPage>} />
          <Route path='/odeljenje-za-odrasle' element={<AnimatedPage><Adult /></AnimatedPage>} />
          <Route path='/odeljenje-naucne-i-strucne-literature' element={<AnimatedPage><Scientific /></AnimatedPage>} />
          <Route path='/zavicajna-zbirka' element={<AnimatedPage><Homeland /></AnimatedPage>} />
          <Route path='/projekti-biblioteke' element={<AnimatedPage><Project /></AnimatedPage>} />
          <Route path='/legati-biblioteke' element={<AnimatedPage><Legati /></AnimatedPage>} />
          <Route path='/vizija-misija-biblioteke' element={<AnimatedPage><MisionAndVision /></AnimatedPage>} />

        </Routes>
      </AnimatePresence>

      <footer className="library-footer">
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <span>АДРЕСА: ГЛАВНА 114, РУМА</span>
                <span> |Радно време: понедељак-петак: 08-20h и суботом: 08-13h </span>
                <span> | <FaEnvelope style={{ fontSize: '20px', color: '#4b301f' }} /> gbasruma@gmail.com</span>
                <span> | <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer">YouTube</a></span>
                <span> | <a href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer">Facebook</a></span>
                <span> | <a href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer">Instagram</a></span>
              </div>
            </Col>
          </Row>
          <br /><hr />
          <Row>
            <Col md={12}>
              <p className='container-text'>
                <br />&copy; 2025 Библиотека Рума. Задржава сва права.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <InnerApp />
      </Router>
    </HelmetProvider>
  );
}

export default App;
