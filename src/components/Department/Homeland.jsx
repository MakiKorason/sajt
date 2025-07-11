import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LiaBookSolid } from "react-icons/lia";
import zavicajno from '../../images/zavicajno.webp'
import AnimatedImage from "./AnimatedImage";
import { Helmet } from 'react-helmet';

const Homelend =()=>{
return (<>

<Helmet>
         <title>Zavičajno odeljenje - Biblioteka Ruma</title>
         <link rel="canonical" href="https://bibliotekaruma.rs/zavicajno" />
       </Helmet> 
 <Container  className="container-library mt-4 mb-4">
  <section aria-labelledby="zavicajna-naslov">
    <div className="container-frame">
      <Row>
        <h1 className="container-title" id="zavicajna-naslov">Завичајна збирка</h1>
  <div className="container-icon">
               <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div><hr/>
   
        <Col md={12} >
          <p className="container-text">
          Градска библиотека „Атанасије Стојковић“ у Руми
интензивно ради на сакупљању грађе за Завичајни
фонд након што је донесен војвођански закон о
библиотекама 1974. године. Данас Завичајна
збирка обухвата преко 3.000 библиотечких
јединица, које су обрађене по свим библиотечким
стандардима. </p></Col>
        
    <Col md={12} className="text-center">
            <AnimatedImage src={zavicajno} alt="Физика Атанасија Стојковића" className='container-image'/></Col>
 
 
      <Col md={12}>
          <br/>
          <p className="container-text">Монографских публикација има 2.285, периодике 125, док остатак представља некњижну грађу. Монографске публикације у збирци су сложене по формату, а некњижна грађа према УДК.</p>
          <p className="container-text">Монографске публикације највећим делом обухватају белетристику, монографије, самоуправне акте предузећа и установа, научне радове у облику сепарата или зборника који су добијени од аутора на поклон.</p>
          <p className="container-text">Серијске публикације обухватају новине и часописе, док се некњижна грађа односи на плакате, разгледнице, позивнице и остали ситан штампани материјал.</p>
          <p className="container-text">Публикације из фонда Завичајне збирке не износе се ван библиотеке, већ се користе искључиво у Читаоници. У већини случајева корисницима се дају дупликати или фотокопије.</p>
          <p className="container-text">Најзначајнија публикација је „Фисика...” Атанасија Стојковића, штампана у три тома у Будиму 1801–1803. године.</p>
          
          
         <hr/> </Col> </Row>

        </div>
   
    </section>
</Container>

   

</>)
}

export default Homelend