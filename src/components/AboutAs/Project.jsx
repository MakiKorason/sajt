import { Col, Container, Row } from "react-bootstrap"
import React from "react"
import kulturaZaSve1 from '../../images/kulturaZaSve1.webp'
import kulturaZaSve2 from '../../images/kulturaZaSve2.webp'
import AnimatedImage from "../Department/AnimatedImage";
import { Helmet } from 'react-helmet';
 
const Project =()=>{
    return(
    <>

<Helmet>
  <title>Пројекти библиотеке – Библиотека Рума</title>
  <meta name="description" content="Пројекти библиотеке у Руми за приступачност и унапређење културе." />
  <link rel="canonical" href="https://www.bibliotekaruma.rs/пројекти-библиотеке" />
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Library",
      "name": "Градска библиотека „Атанасије Стојковић "Рума",
      "url": "https://www.bibliotekaruma.rs/пројекти-библиотеке",
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

        <Container className='container-library mb-4 mt-4' >
       
        <div className="container-frame">   <h1 className="container-title">Култура за све</h1>
            <Row>
         <Col md={4} className="mt-4">
      <AnimatedImage alt='Култура за све' src={kulturaZaSve1} className="container-image"/><br/><br/><br/>
         </Col>
         <Col md={8} >
       <hr/>  <p  className="container-text mt-5"> 
    Пројекат „КУЛТУРА ЗА СВЕ“ представља јачање
техничких капацитета наше установе како би све
културне садржаје, које планом и програмом
спроводимо, учинили
доступним особама са инвалидитетом, тачније
слепим и слабовидим особама, као и особама
оштећеног слуха. Статистика у свету и код нас показује да 30%
становништва има ослабљен слух и има потребу за
употребом слушних апарата, а проценат се из
године у годину повећава.
</p><hr/></Col></Row>

<Col md={12}>
  <h2 className="container-title mt-5">Пројекат „Звук културе“</h2>
<p className="container-text">
    Добивши повратну информацију, од стране Међуопштинске организације слепих и слабовидих са седиштем у Руми, о квалитету културног живота њихових чланова дошли смо на идеју да реализујемо пројекат „Звук културе“. Овај пројекат је реализован 2023. године и његов значај препознало је и Министарство културе Републике Србије, које је исти подржало и чију је реализацију помогло. Захваљујући овим средствима и средствима локалне самоуправе постављена је тактилна табла на Брајевом писму, која представља архитектонски план наше зграде за слепе и слабовиде особе, као и поставку и инсталацију индукционе петље за амплификацију говора за особе оштећеног слуха.
  </p>

  <h2 className="container-title mt-5">Индукционе петље и приступачност</h2>
  <p className="container-text">
    Реализацијом овог пројекта Градска библиотека „Атанасије Стојковић“ у Руми постала је прва библиотека у Војводини која поседује ова два асистивна система, а заједно са приступном рампом наша библиотека постаје доступна особама са инвалидитетом и место за све. Након овог пројекта аплицирали смо са пројектом „КУЛТУРА ЗА СВЕ“, који је на неки начин наставак пројекта „Звук културе“ из претходне године. Пројекат „КУЛТУРА ЗА СВЕ“ представља набавку и инсталацију још три система индукционе петље за амплификацију говора и то на одељењима на којима радимо са корисницима у нашој библиотеци, а то су: Одељење за одрасле, Одељење за децу и Одељење научне и стручне литературе.
    <br/>Имплементацијом ових система остварена је лакша комуникација између корисника са оштећењем слуха и запослених у библиотеци. На овај начин особе оштећеног слуха су се охрабриле да самостално и лакше посећују Градску библиотеку, без бојазни да их неко од запослених неће разумети или да ће они остати ускраћени за неку од наших услуга, јер нису разумели све што су запослени у Библиотеци рекли. Такође, пројекат је подразумевао и набавку 7 тактилних плочица на Брајевом писму за слепе и слабовиде особе, којима су обележени називи одељења, као и осталих просторија унутар Библиотеке како би се они лакше кретали и сналазили у простору. Ове плочице су на истакнутим и лако доступним местима, како би слепе и слабовиде особе додиром лако распознавале где се налазе и куда треба да иду. Кроз реализацију ова два пројекта, остварили смо лепу сарадњу и са Савезом слепих Војводине и Специјалном библиотеком за слепе „Мр Омер Маринков“ из Новог Сада, који су желели да нас подрже. Свесни чињенице да смо прва библиотека у Војводини која поседује оба вида ових асистивних помагала, родила се идеја да кроз пројекат „КУЛТУРА ЗА СВЕ“ покушамо заједничким снагама да одштампамо и проспект о нашој установи на Брајевом писму.
    <br/><AnimatedImage className="container-image mx-auto d-block" src={kulturaZaSve2} alt='Култура за све' /><br/>
  </p>

  <h2 className="container-title mt-5">Проспект на Брајевом писму</h2>
  <p className="container-text">
    Проспект има 4 странице на Брајевом писму и формата је А4. Штампан је у 30 примерака, који су увезани спиралом. Овај проспект/информатор штампан је у Специјалној библиотеци за слепе „Мр Омер Маринков“ и пружа основне информације о Градској библиотеци. Овај информатор је доступан слепим и слабовидим особама при доласку у нашу библиотеку и омогућава им да се боље упознају са историјатом наше установе, одељењима и библиотечким фондом, као и о услугама које пружамо. Градска библиотека „Атанасије Стојковић“, својим вишедеценијским постојањем, постала је окосница готово свих културних дешавања унутар наше локалне заједнице. Као таква има обавезу да свој рад, поред примарне улоге обраде, смештаја, чувања и давања на коришћење грађе из својих фондова, усмери и на унапређење и проширење своје примарне делатности. Да би испунили овај задатак морамо ослушкивати потребе наших корисника и локалне заједнице, а све са циљем да свој рад, активности и садржаје учинимо доступним свима. Реализацијом пројекта „КУЛТУРА ЗА СВЕ“ наставили би низ активности које смо започели претходним пројектом из 2023. године, а све са циљем да особама са инвалидитетом пружимо што боље библиотечке услуге и да унапредимо њихов друштвени положај и доступност културних садржаја унутар наше локалне заједнице.
  </p>
</Col>

</div>
      </Container>
        
       
    </>)
}

export default Project