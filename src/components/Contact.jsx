import React from 'react';
import { Container, Row, Col, Card, CardTitle, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'; 
import AnimatedCard from './Department/AnimatedCard';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d3efaa2a-1c6e-4a2c-af80-9e50e001b682");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Ваша порука је успешно послата.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <>
 <Helmet>
       <title>Контакт – Библиотека Рума</title>
       <meta name="description" content="Контактирајте Градску библиотеку Рума – сазнајте радно време, адресу и како да нас посетите или нам пошаљете поруку!" />
    <link rel="canonical" href="https://www.bibliotekaruma.rs/kontakt" />
    <link rel="alternate" hreflang="sr" href="https://www.bibliotekaruma.rs/kontakt" />
  </Helmet>
    <Container className="container-library mt-4 mb-4">
  <Row>
    {/* Leva strana: Adresa i telefoni bez naslova */}
    <Col md={4} className="mb-4">
      <Row className="gy-3">
        {/* Kartica telefoni */}
        <Col xs={12}>
          <Card className="p-1 shadow-sm h-100">
       <Card.Body>
              <h4 className="container-title text-center mb-3">Телефони</h4>
              <Row>
                <Col xs={12} className="container-text text-center mb-3">
                  <FaPhone className="container-icon" />
                  <hr />
                  <h6>Дечије одељење</h6>
             <p>022/495-047</p>
              </Col>
                <Col xs={12} className="container-text text-center mb-3">
                  <FaPhone className="container-icon" />
                  <hr />
                  <h6>Научно одељење</h6>
                  <p>022/490-047</p>
                </Col>
                <Col xs={12} className="container-text text-center mb-3">
                  <FaPhone className="container-icon" />
                  <hr />
                  <h6>Одрасло одељење</h6>
             <p>022/478-920</p>
           </Col>
                <Col xs={12} className="container-text text-center">
                  <FaPhone className="container-icon" />
                  <hr />
                  <h6>Администрација</h6>
             <p>022/215-65-63</p>
           </Col>
           </Row> 
            </Card.Body>
          </Card>
       </Col>     
        </Row>
    </Col>
    {/* Desna strana: Forma + Email + Društvene mreže ispod */}
    <Col md={8} className="mb-4">
      <Row className="gy-3">
        <Col xs={12}>
          <Card className="p-4 shadow-sm h-100">
            <Card.Body>
              <CardTitle className="container-title mb-3 text-center">Питајте библиотекара</CardTitle>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
                  <Form.Label>Име и презиме</Form.Label>
                  <Form.Control type="text" placeholder="Упишите ваше име и презиме" name="name" autoComplete="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="Упишите ваш email" name="email" autoComplete="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaMessage">
                  <Form.Label>Ваша порука</Form.Label>
                  <Form.Control as="textarea" rows={3} name="message" autoComplete="message" required />
                </Form.Group>
                <Button className="btn btn-secondary w-100" type="submit">Пошаљите поруку</Button>
                <div className="mt-2 text-center">{result}</div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        {/* Novi red ispod forme: mail, adresa, društvene mreže */}
        <Col xs={12}>
          <Row className="mt-4 g-2">
            <Col md={3} className="text-center">
              <Card className="p-3 shadow-sm h-100">
                <Card.Body className="text-center">
                  <h4 className="container-title">E-mail</h4>
                  <FaEnvelope className="container-icon" style={{ fontSize: '2em' }} />
                  <hr />
                  <h5>gbasruma@gmail.com</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="text-center">
              <Card className="p-3 shadow-sm h-100">
                <Card.Body className="text-center">
                  <h4 className="container-title">Адреса</h4>
                  <FaMapMarkerAlt className="container-icon" />
                  <hr />
                  <h5>Главна 114, Рума</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5} className="text-center">
              <Card className="p-3 shadow-sm h-100">
                <Card.Body className="text-center">
                  <h4 className="container-title">Друштвене мреже</h4>
                  <Row className="justify-content-center">
                    <Col xs={4} className="text-center">
                      <a href="https://youtube.com/@gradskabibliotekaruma" target="_blank" rel="noopener noreferrer">
                        <FaYoutube style={{ fontSize: '2em', color: '#ff0000', margin: '0 8px' }} />
                        <div style={{ fontSize: '0.95em', color: '#3b5998', textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}>YouTube</div>
             </a>
           </Col>
                    <Col xs={4} className="text-center">
                      <a href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma" target="_blank" rel="noopener noreferrer">
                        <FaFacebook style={{ fontSize: '2em', color: '#3b5998', margin: '0 8px' }} />
                        <div style={{ fontSize: '0.95em', color: '#3b5998', textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}>Facebook</div>
             </a>
           </Col>
                    <Col xs={4} className="text-center">
                      <a href="https://www.instagram.com/gradska_biblioteka_ruma" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ fontSize: '2em', color: '#e4405f', margin: '0 8px' }} />
                        <div style={{ fontSize: '0.95em', color: '#3b5998', textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}>Instagram</div>
             </a>
           </Col>
         </Row>
       </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
         </Col>
         </Row>
     </Container>
{/* Mapa ispod containera, preko cele širine */}
<div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', background: '#fff', padding: 0 }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.8357378135383!2d19.815873700000015!3d45.007957499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475babf03c300113%3A0x1b25325c9cabd2d9!2z0JPRgNCw0LTRgdC60LAg0LHQuNCx0LvQuNC-0YLQtdC60LAgItCQ0YLQsNC90LDRgdC40ZjQtSDQodGC0L7RmNC60L7QstC40Zsi!5e0!3m2!1ssr!2srs!4v1727858256248!5m2!1ssr!2srs"
    width="100%"
    height="350"
    style={{ border: 0, display: 'block' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Градска библиотека, Рума"
  ></iframe>
</div>
   </>
  );
};

export default Contact;


