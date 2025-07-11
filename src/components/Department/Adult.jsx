import {  Col, Container, Row} from "react-bootstrap";
import './Adult.css';
import { LiaBookSolid } from "react-icons/lia";
import koncertNaOdraslom from '../../images/koncertNaOdraslom.webp'
import osmiMart from '../../images/osmiMart.webp'
import pesmaOTriSveta from '../../images/pesmaOTriSveta.webp'
import likovniKonkurs1 from '../../images/likovniKonkurs1.webp'
import likovniKonkurs2 from '../../images/likovniKonkurs2.webp'
import likovniKonkurs3 from '../../images/likovniKonkurs3.webp'
import cudoUBanatu from '../../images/cudoUBanatu.webp'
import AnimatedImage from "./AnimatedImage";
import odraslo from '../../images/odraslo.webp'
import { Helmet } from 'react-helmet';
const Adult =()=>{
    return(
        <>
        <Helmet>
         <title>Одељење за одрасле – Библиотека Рума</title>
         <link rel="canonical" href="https://bibliotekaruma.rs/odraslo" />
       </Helmet> 
          <Container className="container-library mt-4 mb-4"> 
       <div className="container-frame">
      <Row>         
        <h1 className="container-title">Одељење за одрасле</h1> <div className="container-icon">
              <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div><hr/>

        <Col md={8} >
          <p className="container-text">
            Одељење за одрасле је наше највеће одељење, са 38.000 књига, активног фонда и мањим делом депозита. Ово одељење је организовано у две просторије.
          </p>
          <p className="container-text">
            У првој просторији се налази изложбени део са књигама и место за рад са корисницима, а у другој просторији од скоро 200 метара квадратних, фонд је смештен у пет редова двостраних полица.
          </p>
          <p className="container-text">
            Фонд је распоређен по УДК систему, а између фонда и Читаонице су полице у којима се налазе књиге на страном језику.
          </p>
          <p className="container-text">
            У другој половини ове просторије се налази поменута Читаоница капацитета до двадесет места за учење и рад. Она је и простор за одржавање свих културних и уметничких дешавања, дечијих радионица, изложби, предавања, књижевних промоција, представа или мањих концерата.
          </p>
          <p className="container-text">
            У ту сврху у Читаоницу се постављају столице и она тада може да прими до 70 људи.
          </p>
          <p className="container-text">
            Специфичност овог простора је што он има бину и излаз на двориште, где се одржавају културни догађаји на отвореном, у оквиру Румског културног лета и организације наше библиотеке.
          </p>
          <div className="container-icon">
            <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/>
          </div>
        </Col>

        <Col md={4}>
        <AnimatedImage src={odraslo} alt="Одрасло одељење" /><hr/>  <AnimatedImage src={koncertNaOdraslom} alt="Концерт на Одраслом одељењу" />
      </Col> 
 
      </Row> 
        <hr/>

       <Row>
<h1 className="container-title">Културни кутак</h1>
<Col md={8}>
<p className="container-text"><br/>Владимирa Пишталa, тренутнoг управника
Народне библиотеке Србије, и једног од
најзначајних савремених српских писаца угостили
смо 19. априла 2024. године.
Промоција његове књиге „Песма о три света“,
изазвала је велико интересовање код љубитеља
лепе књижевности, па је завршетак вечери
испраћен аплаузом.
У разговору са аутором учествовали су Ненад
Шапоња, директор Културног центра Војводине
„Милош Црњански“, и Селимир Радуловић,
награђивани српски песник и управник Библиотеке
Матице српске.
            </p></Col>

<Col  md={4} className="mt-5">
<AnimatedImage src={pesmaOTriSveta} alt="Књига: Песма о три света" />
</Col>

<Col md={8} >
<p className="container-text"><hr/><br/>Књига „Чудо у Банату“ је збирка
кратких прича која даје приказ збивања на
банатским просторима и говори о судбини
тамошњих људи након Великог рата. Она је промовисана
 2. децембра 2023. године у просторијама наше
библиотеке.
Њен аутор, Милан Мицић, доктор историјских наука
и Генерални секретар Матице српске, oбјавио је 50

књига историографских студија, историјских есеја,
документарне прозе и поезије. </p>

</Col>
<Col md={4} className="mt-4"><AnimatedImage src={cudoUBanatu} alt="Чудо у Банату" className='container-image'/></Col>
</Row>
<hr/>
<Col md={12}>
<p className="container-text">Поводом Дана жена,
8. марта 2021. године, у холу наше библиотеке
постављена је изложба ликовних радова румских
гимназијалаца на тему „Женски ликови у
књижевности“.</p>
</Col>

<Row>
<Col md={4}>
<AnimatedImage  src={likovniKonkurs1} alt="Женски ликови из књижевности" className='container-image2'/></Col>
<Col md={4}><AnimatedImage  src={likovniKonkurs2} alt="Женски ликови из књижевности" className='container-image2'/></Col>
<Col md={4}><AnimatedImage  src={likovniKonkurs3} alt="Женски ликови из књижевности" className='container-image2'/>
</Col>
<hr/></Row>
<Row>
<Col md={8}>
<p className="container-text"><br/><br/>Три године касније на исти дан
Александра Ћирић Бошковић, тадашња председница
Општине Рума, одржала је предавање под називом
„Знамените Румљанке“ .
Након што је директор библиотеке Дамир
Васиљевић Тоскић поздравио присутне, имали смо
прилику да чујемо изузетно излагање о улози и
значају жена у нашем друштву.</p>
<div className="container-icon">
              <LiaBookSolid /><LiaBookSolid/><LiaBookSolid/></div>
</Col>
<Col md={4}>
<AnimatedImage src={osmiMart} alt="Предавање: Знамените Румљанке" className='container-image3'/>
</Col>
       
       
       </Row> <hr/>
     </div>

    </Container>    </>
    );
}


export default Adult;