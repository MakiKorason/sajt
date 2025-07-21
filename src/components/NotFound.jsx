import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const NotFound = () => (
  <Container className="container-library text-center mt-5 mb-5">
    <h1 className="container-title" style={{ fontSize: '4rem' }}>404</h1>
    <h2 className="mb-4">Страница није пронађена</h2>
    <p className="container-text mb-4">
      Извините, страница коју тражите не постоји или је премештена.<br/>
      Можда желите да посетите неку од следећих страница:
    </p>
    <div className="mb-4">
      <Button as={Link} to="/" variant="secondary" className="m-2">Почетна</Button>
      <Button as={Link} to="/услуге" variant="secondary" className="m-2">Услуге</Button>
      <Button as={Link} to="/контакт" variant="secondary" className="m-2">Контакт</Button>
      <Button as={Link} to="/одељење-за-одрасле" variant="secondary" className="m-2">Одељење за одрасле</Button>
    </div>
    <p className="container-text">Ако мислите да је ово грешка, јавите нам се преко <Link to="/контакт">контакт форме</Link>.</p>
  </Container>
);

export default NotFound; 