import React, { useState } from 'react';
import './Home.css';
import { Button,   Col,   Row } from 'react-bootstrap';
import cobbis from '../images/cobbis.jpg'
import matica from '../images/matica.jpg'
import narodna from '../images/narodna.jpg'
import ministarstvo from '../images/ministarstvo.jpg'
import opstina from '../images/opstina.jpg'  
import biblioteka from '../images/biblioteka.jpg'
import konkurs from '../images/konkurs.jpg'
import { IoBookSharp } from "react-icons/io5";
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
import digitalna1 from '../images/digitalna1.jpg'
import objava1 from '../images/objava1.jpg'
// import zahvalnica from '../images/zahvalnica.jpg'
import objava3 from '../images/objava3.jpg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AnimatedContainer from '../AnimatedContainer';


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
  <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="15000" data-bs-pause="false" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  </div>
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={biblioteka} alt="Зграда библиотеке"  className="d-block w-100 image-carousel img-thumbnail"/>

      <div  className="carousel-caption ">
        <p >Зграда Градске библиотеке „Атанасије Стојковић“ представља пример јединственог архитектонског 
          стваралаштва.
        <Button
    href="http://localhost:3000/history " 
      target="_blank"
 className="btn btn-light container-button"
  >
 ДЕТАЉНИЈЕ
  </Button>
        </p>
     
      </div>
    </div>

    <div  className="carousel-item">
  
<img src={digitalna1} alt="Атанасије Стојковић" className="d-block w-100 float-end image-carousel img-thumbnail"/>
      <div  className="carousel-caption ">
         <h3 style={{padding:'1%'}}>Атанасије Стојковић</h3>
        <p style={{padding:'1%'}}>Румљанин Атанасије Стојковић је међу првим српским научницима<br/> чији је рад признат на Западу.  
         <Button
    href="http://localhost:3000/events" 
      target="_blank"
 className="btn btn-light container-button"
  >
 ДЕТАЉНИЈЕ
  </Button> </p>
      </div>  
    </div>

    <div className="carousel-item">
      <img src={karoselSlika} alt="Култура за све"   className="d-block w-100 image-carousel img-thumbnail " />
      <div  className="carousel-caption ">
        <p>Пројекат „КУЛТУРА ЗА СВЕ“ представља јачање техничких капацитета наше установе, како би све културне садржаје учинили доступним особама са инвалидитетом.   
        <Button
    href="http://localhost:3000/project" 
      target="_blank"
 className="btn btn-light container-button"
  >
 ДЕТАЉНИЈЕ
  </Button>
        </p>
      </div>
    </div>

    <div  className="carousel-item">
     <img src={books} alt="књиге"   className="d-block w-100 image-carousel img-thumbnail " />

      <div className="carousel-caption ">
  
<p><IoBookSharp /> <IoBookSharp /> <IoBookSharp /><br/>ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА!
        <Button
    href="http://localhost:3000/recommendations" 
      target="_blank"
 className="btn btn-light container-button"
  >
 ДЕТАЉНИЈЕ
  </Button>
        </p>
      </div>  </div>
      
</div>

    </div></Col>
</Row>
        <AnimatedContainer className='container-library ms-auto mt-4 mb-4'>
        
         <Row className='text-center'>
         <Col md={4}>     
     
           <h6 className='container-title'><br/> Претражите<br/> наш фонд  </h6>
        <a href="https://plus.cobiss.net/cobiss/sr/sr/bib/search?db=gbru" target="_blank" rel="noopener noreferrer">
        <img 
      src={cobbis}
      alt="COBISS" 
      className='container-image'
      style={{border:'none'}}
      />
 </a>   
     </Col>

     <Col md={4}>
     <h6 className='container-title'>  
              <br/> Наш дигитални<br/> фонд </h6>
               <br/><a href="https://www.digitalna.bibliotekaruma.rs/" target='_blank' rel="noopener noreferrer"> <img 
     src="/logo.jpg"
      alt="Грб библиотеке" 
      /></a>
      </Col> 
    
         <Col  md={4}  >
         <br/>
          <h6 className="container-title">
                 Књижевни <br/>конкурс </h6>
           <a  href="http://localhost:3000/competition" target='_blank' rel="noopener noreferrer">   <img 
      src={konkurs}
      alt="Конкурс" 
       style={{width:'60%'}}
      /></a>
        </Col></Row>
      
     <hr/>
       
           <Row>   <h1 className='container-title' >Година иза нас</h1>
            <Col md={12}>
            <div className='container-iframe'>
            <iframe src="https://www.youtube.com/embed/0Ay8XmhQHSI" 
    title="Филм: Година иза нас" 
    >
    </iframe></div>
       </Col></Row>
       </AnimatedContainer>

    <br/><hr/>
  <h1 className= "container-title"  
       >ОГЛАСНА ТАБЛА</h1>
       <hr style={{margin: '0 auto', width: '50%' ,border: '1px solid' }} />
   
    <AnimatedContainer  className=" container-library ms-auto mt-4 mb-4 ">
 <Row>
 <Col md={4} className='mt-3 mb-3  '>
        <Calendar  onChange={onChange} value={date}  tileClassName={tileClassName}  />
        
      </Col>  
      <Col md={8}><p className='container-title'>Промоције књига и различита тематска предавања се углавном одржавају у просторијама Градске библиотеке. </p>  
        </Col> <Col md={6}>
     <hr/>
    <img
                src={objava3}
                alt="Објава 3"
                className="image-event"
              />
    
         </Col>
        <Col md={6}><hr/>
          
              <img
                src={objava1}
                alt="Објава 1"
                className="image-event"
              />
         
 </Col> 

        </Row>         
        <br/>
        </AnimatedContainer>

        <br/><hr/>

      <AnimatedContainer className='container-library ms-auto mt-4 mb-4' >
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
<p className='container-text'>Статут установе Градске библиотеке „Атанасије Стојковић“ Рума </p>
        <Button
  onClick={() => window.open('/Statut.pdf', '_blank')}
className='btn btn-secondary'
>
ДЕТАЉНИЈЕ
</Button> </Col><hr/>
</Row>
     
    
    </Row>
      </AnimatedContainer>

    <br/><hr/>

<h1 className='container-title'>Пријатељи и сарадници </h1>
<Row className='image-background '>
    <div className="carousel-item active">
      <div  style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}} >
    
          <Col md={12} className='text-center' > 
          <img style={{width:'15%'}} src={ministarstvo} alt='Министарство културе'/>  
         <img style={{width:'15%'}}  src={opstina} alt='Општина Рума'/> 
         <img style={{width:'10%'}}  alt='Народна библиотека Србије' src={narodna}/> 
       <img style={{width:'15%'}}  src={matica} alt='Матица српска' />   
          <br/> 
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
