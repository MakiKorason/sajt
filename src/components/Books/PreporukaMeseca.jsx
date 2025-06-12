import { Col, Container, Row, Button } from "react-bootstrap";

import AnimatedImage from "../Department/AnimatedImage";

import psihijatri from '../../images/psihijatri.jpg'


const PreporukaMeseca=()=>{

    

return (<>

 <Container className='container-library mt-2 mb-2'>
        <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" text-center mt-4"> 
  <AnimatedImage className="container-image" alt='књиге' src={psihijatri} />
<br/><br/><Button 
      variant="secondary" 
      href="https://plus.cobiss.net/cobiss/sr/sr/bib/search?q=munjos+avia*&db=gbru&mat=allmaterials" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Oстала дела овог аутора 
    </Button>
  </Col>    
  <Col xs={12} sm={12} md={8} lg={8} xl={8}>
 

<p className="container-text">Роман „Психијатри, психолози и други болесници“ Родрига Муњоса Авие је духовита и иронична прича која истовремено буди и смех и тугу. Кроз занимљив, једноставан, али снажан наратив провлачи се лајтмотив овог романа, а то је страх од смрти – универзално осећање које не познаје разлике ни у занимању, ни у образовању, ни у друштвеном статусу.

Управо тај страх изазива код главног јунака поремећај говора познат као парафазија која је  хумором и апсурдним ситуацијама, па је сам егзистенцијални немир на крају дао простор оптимизму:

<hr/>
„Онда, не знам зашто, али тако ми је дошло — почео сам ненормално да се смејем, тако дубоко и дуго да је тај смех одзвањао све до краја нашег насеља... Потапшао сам психијатра по леђима и вратио се у нашу кућу не престајући да се смејем.“
  </p></Col>

  <Col md={4} > 

</Col></Row>
<br/>

  </Container>



</>)


}


export default PreporukaMeseca;