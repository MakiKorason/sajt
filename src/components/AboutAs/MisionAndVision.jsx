import { Button, Col, Container, Row, Card } from "react-bootstrap"
import React from "react";
import horhe from '../../images/horhe.webp'
import stiven from '../../images/stiven.webp'
import AnimatedImage from "../Department/AnimatedImage";
import { Helmet } from 'react-helmet';

const MisionAndVision=()=>{

    const shoot = () => {
      alert("У нашу библиотеку учлањено је 16.800 корисника!");
    }
 
    return (
  <>
       <Helmet>
  <title>Визија и мисија – Библиотека Рума</title>
  <meta
    name="description"
    content="Визија и мисија Градске библиотеке 'Атанасије Стојковић' у Руми – инклузија, учење и културни развој."
  />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/визија-мисија-библиотеке" />
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Library",
      "name": "Градска библиотека „Атанасије Стојковић" Рума",
      "url": "https://www.bibliotekaruma.rs/визиja-мисија-библиотеке",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Главна 114",
        "addressLocality": "Рума",
        "postalCode": "22400",
        "addressCountry": "RS"
      },
      "openingHours": "Mo-Fr 08:00-20:00, Sa 08:00-13:00",
      "telephone": "022/490-047"
    }
  `}</script>
</Helmet>

    <Container className='container-library mt-4 mb-4'>
      <Card className="shadow-lg p-4" style={{ background: '#f9f6f2', borderRadius: '1.5rem', border: 'none' }}>
        <h1 className="container-title text-center mb-4">Визија и мисија</h1>
        <Row className="align-items-center mb-4">
          <Col md={6} className="mb-4 mb-md-0">
            <Card className="h-100 p-3" style={{ background: '#f5ede2', border: 'none', borderRadius: '1rem' }}>
              <h2 className="container-title text-center" style={{ fontSize: '1.5rem' }}>***</h2>
              <p className="container-text text-center mt-3">
                Наша визија је да постанемо ослонац у образовању и културном развоју, пружајући подршку свим потребама наших корисника. Да растемо као иновативни центар знања и културе, у којем ће се користити најновије технологије за пружање услуга, где ће сваки корисник имати прилику да истражује, учи и доприноси заједници.
              </p>
            </Card>
          </Col>
          <Col md={6} className="text-center">
<AnimatedImage className="container-image" alt='књиге' src={stiven}/>
          </Col>
        </Row>
        <Row className="align-items-center mb-4 flex-md-row-reverse">
          <Col md={6} className="mb-4 mb-md-0">
            <Card className="h-100 p-3" style={{ background: '#f5ede2', border: 'none', borderRadius: '1rem' }}>
              <h2 className="container-title text-center" style={{ fontSize: '1.5rem' }}>***</h2>
              <p className="container-text text-center mt-3">
                Мисија наше библиотеке је да пружи приступ информацијама, књигама и образовним ресурсима свим нашим корисницима. Библиотека је место инклузије, међусобног учења и размене идеја, зато је наш основни задатак да код деце развијемо и подстичемо навике читања. Циљ нам је да подржимо целоживотно учење, културну размену и развој критичког размишљања.
</p>
            </Card>
          </Col>
          <Col md={6} className="text-center">
            <AnimatedImage className="container-image mt-4" alt='књиге' src={horhe}/>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={6} className="text-center">
            <Card className="p-3" style={{ background: '#f5ede2', border: 'none', borderRadius: '1rem' }}>
              <Button onClick={shoot} className="btn btn-secondary" style={{ background: '#b5a999', border: 'none', color: '#fff' }} id="toastbtn" aria-label="Сазнајте број корисника библиотеке">Број корисника!</Button>
            </Card>
  </Col>
</Row>  
      </Card>
<hr/>
  </Container>
  </>
  )


}


export default MisionAndVision;