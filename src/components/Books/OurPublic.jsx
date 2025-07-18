import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Kandor from '../../images/Ourpublic/Kandor.webp'
import Nuada from '../../images/Ourpublic/Nuada.webp'
import Nebuditeme from '../../images/Ourpublic/Nebuditeme.webp'
import Knjigeizratnogperioda from '../../images/Ourpublic/Knjigeizratnogperioda.webp'
import Katalog from '../../images/Ourpublic/Katalog.webp'
import public1 from "../../images/Ourpublic/public1.webp"
import public2 from "../../images/Ourpublic/public2.webp"
import public3 from "../../images/Ourpublic/public3.webp"
import public4 from "../../images/Ourpublic/public4.webp"
import public5 from "../../images/Ourpublic/public5.webp"
import public6 from "../../images/Ourpublic/public6.webp"
import public7 from "../../images/Ourpublic/public7.webp"
import public8 from "../../images/Ourpublic/public8.webp"
import public10 from "../../images/Ourpublic/public10.webp"
import public11 from "../../images/Ourpublic/public11.webp"
import public12 from "../../images/Ourpublic/public12.webp"
import public13 from "../../images/Ourpublic/public13.webp"
import public14 from "../../images/Ourpublic/public14.webp"
import public15 from "../../images/Ourpublic/public15.webp"
import public16 from "../../images/Ourpublic/public16.webp"
import public17 from "../../images/Ourpublic/public17.webp"
import public18 from "../../images/Ourpublic/public18.webp"
import public19 from "../../images/Ourpublic/public19.webp"
import public20 from "../../images/Ourpublic/public20.webp"
import public21 from "../../images/Ourpublic/public21.webp"
import public22 from "../../images/Ourpublic/public22.webp"
import public23 from "../../images/Ourpublic/public23.webp"
import AnimatedImage from "../Department/AnimatedImage";
import { Helmet } from 'react-helmet';
 
const OurPublic =()=>{

    return (<>
    <Helmet>
        <title>Наша издања - Biblioteka Ruma</title>
        <link rel="canonical" href="https://bibliotekaruma.rs/nasaIzdanja" />
      </Helmet> 
<Container className="container-library mt-4 mb-4">
<h1 className="container-title mb-4">Издавачка делатност Градске библиотеке „Атанасије Стојковић“</h1>
<p  className="container-text">
Током три деценије постојања издавачке
делатности, наша библиотека је издала више од
120 наслова, међу којима се посебно истичу књиге
које је написао Атанасије Стојковић.
</p>
<br/>

<h2 className="container-title mb-4">ПРОЗА</h2><hr/>
      <Row>
          <Col md={4} className="mb-4 ">
            <AnimatedImage
              src={Kandor}
              alt="Кандор" 
              className="container-image"
            />
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedImage 
              src={Nuada}
              alt="Нуада" 
              className="container-image"
            />
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedImage 
              src={public2}
              alt="Зврј упразно" 
              className="container-image"
            />
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedImage
              src={public3}
              alt="Балкански мол" 
              className="container-image"
            />
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedImage
              src={public4}
              alt="Аристид и Наталија" 
              className="container-image"
            />
          </Col>
          
          <Col md={4} className="mb-4">
            <AnimatedImage
              src={public12}
              alt="Озбиљне приче Сањалице Маштарић" 
              className="container-image"
            />
          </Col>

          <Col md={4} className="mb-4">
            <AnimatedImage
              src={public1}
              alt="Опело за боема" 
              className="container-image"
            />
          </Col>

          <Col md={4} className="mb-4">
            <AnimatedImage 
              src={public19}
              alt="триптихон грозоморе" 
              className="container-image"
            />
          </Col>

       <Col md={4} className="mb-4">
            <AnimatedImage 
              src={public20}
              alt="Од пролећа до пролећа" 
              className="container-image"
            />
          </Col>  
           <Col md={4} className="mb-4">
            <AnimatedImage
              src={public21}
              alt="Јужњачка утеха" 
              className="container-image"
            />
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedImage 
              src={public22}
              alt="Кобојаги" 
              className="container-image"
            />
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedImage 
              src={public23}
              alt="Семе пропасти" 
              className="container-image"
            />
          </Col>
        </Row>
       <br/> 
      <br/> <h2 className="container-title  mb-4">ПОЕЗИЈА</h2><hr/>
       <br/> <Row>   
          <Col md={4} className="mb-4">
            <AnimatedImage
              src={Nebuditeme}
              alt="Не будите ме" 
              className="container-image"
            />
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedImage 
              src={public5}
              alt="У тишини лудака" 
              className="container-image"
            />
          </Col>
  
          <Col md={4} className="mb-4">
            <AnimatedImage 
              src={public10}
              alt="Пехар, ране" 
              className="container-image"
            />
          </Col>
          
        </Row>

        <br/> 
      <br/> <h2 className="container-title mb-4">ДЕЧИЈЕ КЊИГЕ</h2><hr/>
       <br/> <Row>   
             <Col md={4}>
                       <AnimatedImage 
              src={public13}
              alt="Песме снохватице" 
              className="container-image"
            />
          </Col>
          
          <Col md={4}>
                       <AnimatedImage 
              src={public14}
              alt="Како спава сунце" 
              className="container-image"
            />
          </Col>
    
          <Col md={4}>
                       <AnimatedImage 
              src={public15}
              alt="Петнаест црвених ружа" 
              className="container-image"
            />
          </Col><hr style={{color:'#f3f2ee'}}/><br/>
              <Col md={4}>
                       <AnimatedImage 
              src={public17}
              alt="Добро јутро, цветићи" 
              className="container-image"
            />
          </Col>
          <Col md={4}>
                       <AnimatedImage 
              src={public16}
              alt="Дечак и звезде" 
              className="container-image"
            />
          </Col>
      
    
            <Col md={4}>
                       <AnimatedImage 
              src={public18}
              alt="Дугино бих клупко" 
              className="container-image"
            />
          </Col>
        </Row>

        <br/> 
      <br/> <h2 className="container-title mb-4">НАУЧНЕ КЊИГЕ</h2><hr/>
       <br/> <Row>   
          <Col md={4} className="mb-4">
            <AnimatedImage 
              src={Knjigeizratnogperioda}
              alt="Књиге из ратног периода-каталог" 
              className="container-image"
            /></Col>

            <Col md={4}>
                       <AnimatedImage 
              src={Katalog}
              alt="Каталог књига манастира Гргетег" 
              className="container-image"
            />
          </Col>
          <Col md={4}>
                       <AnimatedImage 
              src={public11}
              alt="Примери личних имена у Руми" 
              className="container-image"
            />
          </Col>
          <Col md={4}>
                       <AnimatedImage 
              src={public6}
              alt="Пут до крста Светог Владимира" 
              className="container-image"
            />
          </Col>
        <Col md={4}>
                       <AnimatedImage 
              src={public7}
              alt="Рума" 
              className="container-image"
            />
          </Col>
          <Col md={4}>
                       <AnimatedImage 
              src={public8}
              alt="социјални аспекти квалитета живота особа са телесним инвалидитетом" 
              className="container-image"
            />
          </Col>
          
       
        </Row>

      </Container>

    
    </>)
}


export default OurPublic