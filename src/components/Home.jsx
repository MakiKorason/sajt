import React, { useState } from 'react';
import './Home.css';
import { Button,   Col,   Container,   Row } from 'react-bootstrap';
import cobbis from '../images/cobbis.jpg'
import matica from '../images/matica.jpg'
import narodna from '../images/narodna.jpg'
import ministarstvo from '../images/ministarstvo.jpg'
import opstina from '../images/opstina.jpg'  
import biblioteka from '../images/biblioteka.jpg'
import konkurs from '../images/konkurs.jpg'
import { IoBookSharp, IoCalendarSharp } from "react-icons/io5";
import muzej from '../images/muzej.jpg'
import kc from '../images/kc.jpg'
import turisticka from '../images/turisticka.jpg'
import '@react-pdf-viewer/core/lib/styles/index.css';
import beke from '../images/beke.jpg'
import Frigo from '../images/Frigo.jpg'
import Boss from '../images/Boss.jpg'
import trkulja from '../images/trkulja.jpg'
import books from '../images/books.jpg'
import Panonija from '../images/Panonija.jpg'
import karoselSlika from '../images/karoselSlika.jpg'
import digitalna from '../images/digitalna.jpg'
import objava4 from '../images/objava4.jpg'
// import zahvalnica from '../images/zahvalnica.jpg'
import objava3 from '../images/objava3.jpg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AnimatedImage from "./Department/AnimatedImage";
import AnimatedCard from './Department/AnimatedCard'; 
import pokrajina from '../images/pokrajina.jpg'
import ButtonSparkle from './ButtonSparkle';
import dis from '../images/dis.jpg'




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
   <Row><Col md={12}>
  <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="12000" data-bs-pause="false" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  </div>
 
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={biblioteka} alt="Зграда библиотеке"  
  className="d-block w-100 image-carousel img-thumbnail img-fluid" 
/>

      <div  className="carousel-caption ">
        <p style={{padding:'2.5%'}} >Зграда Градске библиотеке „Атанасије Стојковић” представља пример јединственог архитектонског 
          стваралаштва.
        <Button
          href="https://www.gradnja.rs/rekonstrukcija-dom-vojske-jna-ruma/"
          target="_blank"
          className="btn btn-light container-button"
        >
          ДЕТАЉНИЈЕ
        </Button>
        </p>
     
      </div>
    </div>

    <div  className="carousel-item">
  
<img src={digitalna}  alt="Атанасије Стојковић"  className="d-block w-100 image-carousel img-thumbnail img-fluid" 
/>
      <div  className="carousel-caption ">
    
        <p > Атанасије Стојковић је међу првим српским научницима<br/> чији је рад признат на Западу.  
         <ButtonSparkle
    href="https://www.virtualna-ruma.rs/page.php?pro_id=59" 
      target="_blank"
 className="btn-light container-button btn-lg"
  >
 ДЕТАЉНИЈЕ
  </ButtonSparkle> </p>
      </div>  
    </div>

    <div className="carousel-item">
      <img src={karoselSlika} alt="Култура за све"   className="d-block w-100 image-carousel img-thumbnail img-fluid" 
   />
      <div  className="carousel-caption ">
        <p style={{padding:'2.5%'}}>Пројекат „КУЛТУРА ЗА СВЕ” представља јачање техничких капацитета наше установе, како би све културне садржаје учинили доступним особама са инвалидитетом.   
        <ButtonSparkle
    href="https://sremskevesti.rs/sva-odeljenja-rumske-gradske-biblioteke-atanasije-stojkovic-dostupna-ljudima-ostecenog-sluha-slepim-i-slabovidim-osobama/" 
      target="_blank"
 className="btn-light container-button"
  >
 ДЕТАЉНИЈЕ
  </ButtonSparkle>
        </p>
      </div>
    </div>

    <div  className="carousel-item">
     <img src={books} alt="књиге"    className="d-block w-100 image-carousel img-thumbnail img-fluid" 
  />

      <div className="carousel-caption ">
  
<p style={{padding:'4%'}}><IoBookSharp /> <IoBookSharp /> <IoBookSharp /><br/>ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА!
        <ButtonSparkle
    href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma/videos/967554408223187?locale=sr_RS" 
      target="_blank"
 className="btn-light container-button"
  >
 ДЕТАЉНИЈЕ
  </ButtonSparkle>
        </p>
      </div>  </div>
      
</div>

    </div></Col>
</Row>

<Container className='container-library ms-auto mt-4 mb-4'>
  <Row className='text-center'>
    <Col md={12}>
      <div className="date-badge">
        <IoCalendarSharp className="calendar-icon" />
        <a href="https://www.youtube.com/watch?v=eCKjhozrBdA" target="_blank" rel="noopener noreferrer" className="date-text">
          10. март
        </a>
      </div>
      <img 
        src={dis} 
        alt="Владислав Петковић Дис" 
        className="dis-image mb-4"
        style={{ maxWidth: '300px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
      />
      <h2 className='container-title mb-4'> На данашњи дан, пре 145 година, рођен је велики српски песник Владислав Петковић Дис. </h2>
      <Row>
        <Col md={12}>
          <p className='container-text mb-4'>
            Градска библиотека „Атанасије Стојковић” поносно чува и позајмљује својим корисницима његове збирке песама.
          </p>
          <div className='dis-quote'>
            <p className='italic-text'>
              "Заборавио сам јутрос песму једну ја,<br/>
              песму једну у сну што сам сву ноћ слушао:<br/>
              да је чујем узалуd сам данас кушао,<br/>
              као да је песма била срећа моја сва.<br/>
              Заборавио сам јутроs песму једну ја."
            </p>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>

        <Container className='container-library ms-auto mt-4 mb-4'>
        
         <Row className='text-center'>
         <Col md={4} className='mt-4'>     
           
         <AnimatedCard>
        <a href="https://plus.cobiss.net/cobiss/sr/sr/bib/search?db=gbru" target="_blank" rel="noopener noreferrer">
        <h6 className='container-title'>Претражите<br/> наш фонд  </h6></a><img 
      src={cobbis}
      alt="COBISS" 
      className='container-image'
      style={{border:'none', width: "90%"}}
      />
  </AnimatedCard> 
     </Col>

     <Col md={4} className='mt-4'>
    
              <AnimatedCard>
               <a href="https://www.digitalna.bibliotekaruma.rs/" target='_blank' rel="noopener noreferrer">  <h6 className='container-title'>  
              Наш дигитални<br/> фонд </h6></a>
               <br/><img 
     src="/logo.jpg"
      alt="Грб библиотеке" 
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
      style={{border:'none', width:'55%'}}
      /></AnimatedCard>
        </Col></Row>
      
     <hr/>
       
           <Row>   
            <Col md={12}>
            <AnimatedCard className='container-iframe'>
            <iframe src="https://www.youtube.com/embed/0Ay8XmhQHSI" 
    title="Филм: Година иза нас" 
    >
    </iframe></AnimatedCard>
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
        
        <Col md={6} className='text-center'>
          
          <AnimatedImage
            src={objava4}
            alt="Објава 4"
         
          />
</Col>         
        
         <Col md={6} className='text-center'
       >
     
    <AnimatedImage
                src={objava3}
                alt="Објава 3"
        
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
        <ButtonSparkle
  onClick={() => window.open('/Pravilnik.pdf', '_blank')}
className='btn btn-secondary'
>
ДЕТАЉНИЈЕ
</ButtonSparkle><hr/>
<p className='container-text'>Статут установе Градске библиотеке „Атанасије Стојковић" Рума </p>
        <ButtonSparkle
  onClick={() => window.open('/Statut.pdf', '_blank')}
className='btn btn-secondary'
>
ДЕТАЉНИЈЕ
</ButtonSparkle><br/><hr/> </Col>
</Row>
    </Row>
      </Container>
</AnimatedCard>
    <br/><hr/>

<h1 className='container-title'>Пријатељи и сарадници </h1>
<Row className='image-background '>
    <div className="carousel-item active">
      <div  style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}} >
    
          <Col md={12} className='text-center' > 
          <img style={{width:'12%' }} src={ministarstvo} alt='Министарство културе'/> 
          <img style={{width:'10%',marginLeft:'2.2em'}}  src={pokrajina} alt='Покрајински секретаријат за културу, јавно информисање и односе с верским заједницама'/> 
        <img style={{width:'20%',marginLeft:'0.8em' }}  src={opstina} alt='Општина Рума'/> </Col>
      
          <hr/> 
          <Col md={12} className='text-center'>
           <img style={{width:'10%'}}  alt='Народна библиотека Србије' src={narodna}/> 
       <img style={{width:'15%'}}  src={matica} alt='Матица српска' />  
       <img style={{width:'25%', marginTop:'1em', marginLeft:'1rem'}} src={muzej} alt='Музеј'/>
          <img style={{width:'15%',marginLeft:'1rem' }} src={turisticka} alt='Туристичка'/>
          <img  style={{width:'10%', marginLeft:'1rem'}}  src={kc} alt="Културни центар"  />
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
      alt="Панонија књижара"
    />
    <img
      style={{ width: '15%' }}
      src={Boss}
      alt="Босс"
    />
    <img
      style={{ width: '20%' }}
      src={trkulja}
      alt="Тркуља керамика"
    />
    <img
      style={{ width: '10%' }}
      src={Frigo}
      alt="Фриго Жика"
    />
    <img
      style={{ width: '15%', marginLeft:'1rem' }}
      src={beke}
      alt="Беке"
    />
  </div>
</div><hr/>

    </>
  );
}

export default Home;
