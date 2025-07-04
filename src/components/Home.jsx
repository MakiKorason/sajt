import React, { useEffect, useState } from 'react';
import './Home.css'
import { Button,   Col,   Container,   Row } from 'react-bootstrap';
import cobbis from '../images/cobbis.webp'
import matica from '../images/matica.webp'
import narodna from '../images/narodna.webp'
import ministarstvo from '../images/ministarstvo.webp'
import opstina from '../images/opstina.webp'  
import biblioteka from '../images/biblioteka.webp'
import konkurs from '../images/konkurs.webp'
import { IoBookSharp } from "react-icons/io5";
import muzej from '../images/muzej.webp'
import kc from '../images/kc.webp'
import turisticka from '../images/turisticka.webp'
import '@react-pdf-viewer/core/lib/styles/index.css';
import beke from '../images/beke.webp'
import Frigo from '../images/Frigo.webp'
import Boss from '../images/Boss.webp'
import trkulja from '../images/trkulja.webp'
import books from '../images/books.webp'
import Panonija from '../images/Panonija.webp'
import karoselSlika from '../images/karoselSlika.webp'
import livada from '../images/livada.webp'
import digitalna from '../images/digitalna.webp'
import objava4 from '../images/objava4.webp'
// import zahvalnica from '../images/zahvalnica.jpg'
import objava3 from '../images/objava3.webp'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AnimatedImage from "./Department/AnimatedImage";
import AnimatedCard from './Department/AnimatedCard'; 
import psihijatri from '../images/psihijatri.webp'
import pokrajina from '../images/pokrajina.webp'
import { Helmet } from "react-helmet";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import program from '../images/program.webp';
import dani1 from '../images/dani1.webp'
import dani2 from '../images/dani2.webp'
import dani3 from '../images/dani3.webp'
import dani4 from '../images/dani4.webp'
import KulturoLetoProgram from '../images/KulturoLetoProgram.webp';


const Home =()=> { 
  const [date, setDate] = useState(new Date());
  const markedDates = [
    new Date(2025, 1, 6), 
    new Date(2025, 1, 20), 

  ];



  const tileClassName = ({ date, view }) => {

    if (markedDates.some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear())) {
      return 'marked-date';
    }
  };


  const onChange= date =>{
    setDate(date);
  }



  
  
  return (
    <>
  

  <Helmet>
    <title>Gradska biblioteka Ruma | Fond, manifestacije, digitalna biblioteka, odeljenja, konkurs i radno vreme</title>
    <meta name="description" content="Zvanični sajt Gradske biblioteke u Rumi – informacije o knjigama, događajima, digitalnoj biblioteci, konkursima i radnom vremenu. Pronađite sve što vas zanima o našoj biblioteci!" />
    <link rel="canonical" href="https://bibliotekaruma.rs" />
  </Helmet>



  <Row><Col md={12}>
   <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="33000" data-bs-pause="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>  
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button> 
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button> 
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    {/* <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button> */}
  </div>
 
  <div className="carousel-inner">   


 
      <div className="carousel-item active">
    <img src={biblioteka} alt="улаз у Градску библиотеку Рума"  
  className="d-block w-100 image-carousel img-thumbnail img-fluid" 
/>

      <div  className="carousel-caption ">
        <p style={{padding:'2.5%'}} >Зграда Градске библиотеке "Атанасије Стојковић" представља пример јединственог архитектонског 
          стваралаштва.
        <Button
    href="https://www.gradnja.rs/rekonstrukcija-dom-vojske-jna-ruma/ " 
      target="_blank"
 className="btn btn-light container-button"
  >
 ДЕТАЉНИЈЕ
  </Button>
        </p>
  
      </div>
    </div> 

    <div  className="carousel-item">
  
<img src={digitalna}  alt="дигитална библиотека у Руми"  className="d-block w-100 image-carousel img-thumbnail img-fluid" 
/>
      <div  className="carousel-caption ">
    
        <p style={{padding:'1.5%'}} >  Румљанин Атанасије Стојковић био је најобразованији Србин<br/> прве трећине 19. века.
         <Button
    href="https://www.facebook.com/watch/?v=1235424304400303" 
      target="_blank"
 className="btn btn-light container-button btn-lg"
  >
 ДЕТАЉНИЈЕ
  </Button> </p>
      </div>  
    </div>

    <div className="carousel-item">
      <img src={karoselSlika} alt="Култура за све"   className="d-block w-100 image-carousel img-thumbnail img-fluid" 
   />
      <div  className="carousel-caption ">
        <p style={{padding:'2.5%'}}>Пројекат "КУЛТУРА ЗА СВЕ" представља јачање техничких капацитета наше установе.
        <Button
    href="https://sremskevesti.rs/sva-odeljenja-rumske-gradske-biblioteke-atanasije-stojkovic-dostupna-ljudima-ostecenog-sluha-slepim-i-slabovidim-osobama/" 
      target="_blank"
 className="btn btn-light container-button"
  >
 ДЕТАЉНИЈЕ
  </Button>
        </p>
      </div>
    </div> 
 
    <div className="carousel-item">
      <img src={books} alt="Култура за све"   className="d-block w-100 image-carousel img-thumbnail img-fluid" 
   />
      <div  className="carousel-caption ">
        <p style={{padding:'1.5%'}}>ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА
        <Button
    href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma/videos/967554408223187?locale=sr_RS" 
      target="_blank"
 className="btn btn-light container-button"
  >
 ДЕТАЉНИЈЕ
  </Button>
        </p>
      </div>
    </div> 
 
      
</div>


  </div>
  </Col>

</Row>


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
  <Col xs={12} sm={12} md={8} lg={8} xl={8} className="mt-4">
 

<p className="container-text">Роман "Психијатри, психолози и други болесници" Родрига Муњоса Авие је духовита и иронична прича која ће вас у исто време насмејати и растужити. Кроз занимљив, једноставан, али снажан наратив провлачи се лајтмотив овог романа, а то је страх од смрти – универзално осећање које не познаје разлике у занимању, образовању, ни у друштвеном статусу.

Управо тај страх изазива код главног јунака поремећај говора који је осликан хумором кроз апсурдне ситуације, па је и сам егзистенцијални немир на крају дао простор оптимизму:

<hr/>
"Онда, не знам зашто, али тако ми је дошло — почео сам ненормално да се смејем, тако дубоко и дуго да је тај смех одзвањао све до краја нашег насеља... Потапшао сам психијатра по леђима и вратио се у нашу кућу не престајући да се смејем."
   </p></Col>

  <Col md={4} > 

</Col></Row>
<br/>

  </Container>
        <Container className='container-library ms-auto mt-4 mb-4'>
  <Row>
    <Col md={12} className='text-center'>
  
      <img className='container-image' src={KulturoLetoProgram} alt="Културно лето 2025"/>
    </Col>
  </Row>
</Container>
  
        <Container className='container-library ms-auto mt-4 mb-4'>
  <Row>
    <Col md={12}>
      <h3 className='text-center'>СВЕЧАНО ОТВАРАЊЕ 15. МАНИФЕСТАЦИЈЕ<br/>„Дани словенске писмености и културе“</h3>
      <hr/>
    </Col>
  </Row>
  <Row>
    <Col md={4}>
      <AnimatedImage className='container-image' src={dani1}/>
      <p>,,Вивкови виоoliniсти", квартет виолина.</p>
    </Col>
    <Col md={4}>
      <AnimatedImage className='container-image' src={dani2}/>
      <p>Архијерејски намесник румски протојереј Сретен Лазаревић.</p>
      <AnimatedImage className='container-image' src={dani4}/>
    </Col>
    <Col md={4}>
      <AnimatedImage className='container-image' src={dani3}/>
      <p>Изложба икона и калиграфских радова ученика 5 основних школа и ССШ "Бранко Радичевић".</p>
    </Col>
  </Row>
</Container>
  



        <Container className='container-library ms-auto mt-4 mb-4'>
        
         <Row className='text-center'>
         <Col md={4} className='mt-4'>     
           
         <AnimatedCard>
        <a href="https://plus.cobiss.net/cobiss/sr/sr/bib/search?db=gbru" target="_blank" rel="noopener noreferrer">
        <h6 className='container-title'>Претражите<br/> наш фонд  </h6> </a><img 
      src={cobbis}
      alt="COBISS" 
      className='container-image'
      style={{border:'none', width: "85%"}}
      />
  </AnimatedCard> 
     </Col>

     <Col md={4} className='mt-4'>
    
              <AnimatedCard>
               <a href="https://www.digitalna.bibliotekaruma.rs/" target='_blank' rel="noopener noreferrer">  <h6 className='container-title'>  
              Наш дигитални<br/> фонд </h6></a>
               <br/><img 
     src="/logo.jpg"
      alt="Грб Градске библиотеке Рума" 
      className='container-image'
      style={{border:'none', width:'33%'}}
      /> </AnimatedCard>
      </Col> 
    
         <Col  md={4}  className='mt-4'>
                 <AnimatedCard>
           <a  href="https://www.facebook.com/story.php/?story_fbid=993378846121072&id=100063468972871&_rdr" target='_blank' rel="noopener noreferrer">  
            <h6 className="container-title">
              Књижевни <br/>конкурс </h6></a><img 
      src={konkurs}
      alt="Конкурс" 
      className='container-image'
      style={{border:'none', width:'48%'}}
      /></AnimatedCard>
        </Col></Row>
      
     <hr/>
       
           <Row>   
            <Col md={12}>
            <AnimatedCard className='container-iframe'>
            <iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/0Ay8XmhQHSI" 
  title="Филм: Година иза нас" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>

    </AnimatedCard>
       </Col></Row>
       </Container>

    <br/><hr/>
  <h1 className= "container-title"  
       >ОГЛАСНА ТАБЛА</h1>
       <hr style={{margin: '0 auto', width: '50%' ,border: '1px solid' }} />
   
    <Container  className=" container-library ms-auto mt-4 mb-4 ">
 <Row>
 <Col md={4} className='mt-3 mb-3  '>
 <AnimatedCard>
        <Calendar  onChange={onChange} value={date}  tileClassName={tileClassName}  />
        </AnimatedCard>
        <br/>
      </Col>  
      <Col md={8}><p className='container-title'>Промоције књига и различита тематска предавања се углавном одржавају у просторијама Градске библиотеке. </p>  
        </Col>
        


        <Col md={6} className='text-center'><hr/>
          <AnimatedImage
            src={objava4}
            alt="Објава 4"
            className="image-event"
          />
     
</Col>         
        
         <Col md={6} className='text-center'>
     <hr/>
    <AnimatedImage
                src={objava3}
                alt="Објава 3"
                className="image-event"
              />
         </Col>
        </Row>         
        <br/>
        </Container>

        <br/><hr/>
   <AnimatedCard>
      <Container className='container-library ms-auto mt-4 mb-4' >
        <Row>
    
    <Row>

  <Col md={12}>
        <h1 className='container-title'>Званични документи</h1><br/>
        <p className='container-text'>Правилник о условима и начину коришћења библиотечке грађе</p>
        <Button
  onClick={() => window.open('/Pravilnik.pdf', '_blank')}
className='btn btn-secondary'
>
ДЕТАЉНИЈЕ
</Button><hr/>
<p className='container-text'>Статут установе Градске библиотеке "Атанасије Стојковић" Рума </p>
        <Button
  onClick={() => window.open('/Statut.pdf', '_blank')}
className='btn btn-secondary'
>
ДЕТАЉНИЈЕ
</Button><br/><hr/> </Col>
</Row>
    </Row>
      </Container>
</AnimatedCard>
    <br/><hr/>

<h1 className='container-title'>Пријатељи и сарадници </h1>
<Row className='image-background '>
    <div className="carousel-item active">
      <div  style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}} >
     < Row>
          <Col md={12} className='text-center' > 
        <img style={{width:'13%' }} src={ministarstvo} alt='Министарство културе Србије' />
<img style={{width:'18%'}}  src={opstina} alt='Општина Рума'/>     
<img src={pokrajina} style={{width:'10%'}} alt='Покрајински секретаријат за културу' />
    </Col></Row>
      
          <hr/> 
          <Col md={12} className='text-center'>
          <img style={{width:'15%'}}  src={matica} alt='Матица српска' />  
<img style={{width:'10%'}}  alt='Народна библиотека Србије' src={narodna}/> 
       <img style={{width:'25%', marginTop:'1em', marginLeft:'1rem'}} src={muzej} alt='Музеј у Руми'/>
          <img style={{width:'15%',marginLeft:'1rem' }} src={turisticka} alt='Туристичка организација Рума'/>
          <img  style={{width:'10%', marginLeft:'1rem'}}  src={kc} alt="Културни центар Рума"  />
         </Col>
          </div>
      </div>     
</Row>

<div
  style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%' }}
  className="container mt-3"
>
  <h2 style={{marginLeft:'26rem'}}>Пријатељи библиотеке</h2>
  <button
    type="button"
    className="btn btn-secondary"
    data-bs-toggle="collapse"
    data-bs-target="#friends-demo"
  >
    Пријатељи библиотеке
  </button>
  <div id="friends-demo" className="collapse text-center">
    <img
      style={{ width: '15%', marginRight:'1rem' }}
      src={Panonija}
      alt="Панонија књижара у Руми"
    />
    <img
      style={{ width: '15%' }}
      src={Boss}
      alt="Босс компанија Рума"
    />
    <img
      style={{ width: '20%' }}
      src={trkulja}
      alt="Тркуља керамика Рума"
    />
    <img
      style={{ width: '10%' }}
      src={Frigo}
      alt="Фриго Жика Рума"
    />
    <img
      style={{ width: '15%', marginLeft:'1rem' }}
      src={beke}
      alt="Беке компанија Рума"
    />
  </div>
</div><hr/>


    </>
  );
}

export default Home;
