import React from 'react';
import {  Row, Col,  Container } from 'react-bootstrap';
import AnimatedImage from "../Department/AnimatedImage"; import { Helmet } from 'react-helmet';
const Recommendations =()=>{


    const knjigeZaOdrasle = [
      {
            slika: "https://delfi.rs/_img/artikli/2022/02/soba_leptira_vv.jpg",
            naslov: "Соба лептира",
            opis: "НАЈЧИТАНИЈИ АУТОР У НАШОЈ БИБЛИОТЕЦИ – ЛУСИНДА РАЈЛИ. Поузи Монтеґју се ближи седамдесетом рођендану. Мада и даље живи у свом лепом породичном дому Адмирал хаусу, у прекрасном сеоском пределу Сафока, где је провела идилично детињство хватајући лептире са вољеним оцем, а касније сама подизала децу, али сада мора да донесе мучну одлуку. Иако је сентиментално везана за кућу која увелико пропада, а има и изузетан врт који је стварала и неговала двадесет пет година, Поузи је свесна да је дошло време да је прода. ",
            link:'https://www.knjizare-vulkan.rs/roman/109472-soba-leptira',
          
        },
    {
        slika:"https://www.laguna.rs/_img/korice/5854/sazvezdje_svitaca_v.jpg",
        naslov: "Сазвежђе свитаца",
        opis: "НАЈЧИТАНИЈИ СРПСКИ РОМАН У НАШОЈ БИБЛИОТЕЦИ. Прича о искупљењу и људима које може спасти једино љубав. Чим га је угледала на вратима, и кад је секунд касније схватила да је он не препознаје, била је поражена. Али и трачак победе нашла је управо у томе што није морала да уступи.",
        link: 'https://www.knjizare-vulkan.rs/domaci-ljubavni-roman/159189-sazvezde-svitaca',
        },

        {
            slika: "https://delfi.rs/_img/artikli/2023/06/leto_kad_je_mama_imala_zelene_oci_vv.jpg",
            naslov: "Лето када је мама имала зелене очи",
            opis: "Ово је прича о лету помирења и прихватања, о три месеца током којих су мајка на самрти и психотични тинејџер коначно одложили оружје, подстакнути доласком неизбежног и потребом да се помире једно са другим и са собом. Написан поетичним стилом који одише снагом, страшћу, емоцијом, али и сиоровошћу, роман Лето када је мама имала зелене очи преплиће живот и смрт у позиву на љубав и праштање. Једно од великих открића савремене европске књижевности.",
            link:'https://delfi.rs/knjige/200802-leto-kad-je-mama-imala-zelene-oci-knjiga-delfi-knjizare.html',
          
        },
        {
            slika: "https://www.laguna.rs/_img/korice/6212/kuca_noci-ju_nesbe_v.jpg",
            naslov: "Кућа ноћи",
            opis: " Након што му родитељи страдају у пожару, четрнаестогодишњи Ричард Еловед одлази да живи код тетке и теће у забаченој и изолованој варошици Балантајн. Ричард брзо стиче статус отпадника, а кад нестане његов друг из одељења Том, сви за то криваве новог, гневног ђака у школи. Нико не верује Ричарду кад каже да је слушалица у телефонској говорници, попут каквог чудовишта из хорор филмова, прождрла Тома од главе до пете.  ",
            link: 'https://www.knjizare-vulkan.rs/trileri-misterije/211926-kuca-noci',
        },
        {
            slika: "https://delfi.rs/_img/artikli/Knjiga/136579/org/1704562890-1703768866-24597-1.jpg",
            naslov: "Деца зла",
            opis: " У средишту романа Деца зла налази се драматично убиство, а потрага за починиоцем биће само окидач за низ других догађаја који ће открити да је реч о злочину страсти, освете, опомене и симболике.Ова прича тиче се свих нас, јер ћемо у њој пронаћи обрисе наше друштвене стварности, али, што је још важније, пронаћи ћемо изгубљено зрно наде – чак и у друштвеном систему дубоко огрезлом у корупцију има места за хероје. ",
              link: 'https://www.vulkani.rs/domaci-autori/2862-deca-zla',
        },

      {
            slika: "https://delfi.rs/_img/artikli/2023/03/nataste_vv.jpg",
            naslov: "Наште",
            opis: " Приповест о једној породици и једној приколици. О животном кругу, од присуства до одсуства. О неминовној пролазности, о успоменама које се подстичу чулима. О љубави која прожетa све односе. О путовањима, о укусима. О дому, докле год је једне тачке у којој се сусрећемо. ",
              link: 'https://www.knjizare-vulkan.rs/domaci-roman/156954-nataste',
        },
        {
            slika: "https://delfi.rs/_img/artikli/2022/04/u_kasno_ljeto_vv.jpg",
            naslov: "У касно љето",
            opis: " У касно љето је моћан роман о бесмисленом рату и бесмисленим смртима. О убијеној девојчици и њеној пријатељици, о безбрижним играма и невиним маштаријама од којих неће остати ништа, о сиромашном а ипак топлом и нежном сеоском животу, о живописној и уједно сабласној природи босанског краја, о детињству и недоживљеној будућности. О јаким емоцијама и стањима која заувек обележе човека Магдалена Блажевић пише гласом мртве девојчице, стварајући причу која надилази Жепче и околна села и време у које је роман смештен, и постаје универзална химна против ратовања.",
              link: 'https://www.knjizare-vulkan.rs/domaci-roman/113392-u-kasno-ljeto',
        },  
        {
            slika: "https://www.beopolis.rs/wp-content/uploads/2023/06/Norveska-suma-Haruki-Murakami.jpg",
            naslov: "Норвешка шума",
            opis: "И данас је међу младима у Јапану најчитанија Муракамијева књига, још од објављивања 1987, управо Норвешка шума. Она је свог аутора учинила суперзвездом у домовини и обезбедила му широку популарност у читавом свету. Радња романа смештена је у Токио касних шездесетих, у време кад су јапански студенти, као и њихове колеге многих других нација у својим земљама, протестовали против сопствених режима. Ова помало носталгична позадина, осим што одсликава атмосферу светског бунта, представља кулисе за једну „обичну” љубавну причу. ",
            link:'https://geopoetika.com/o-knjizi/1419/norveska-suma'
       
        },
     

        {
            slika: "https://akademskaknjiga.com/wp-content/uploads/2023/06/Mlekadzija.jpg",
            naslov: "Млекаџија",
            opis: "У граду без имена, јер имена су из овог романа прогнана као непожељне издајице личног и колективног идентитета, ова осамнаестогодишњакиња суочава се са оним што се у њеној средини зове „политичким проблемима“, а што је у новијој историји подједнако еуфемистички названо „невољама“, док је заправо реч о крвавим сукобима везаним за борбу за отцепљење Северне Ирске од Велике Британије.",
            link:'https://delfi.rs/knjige/201557-mlekadzija-knjiga-delfi-knjizare.html'
       
        },
    
    ];
    const naucneKnjige = [
        {
            slika: "https://www.laguna.rs/_img/korice/5424/ovladaj_svojim_emocijama-tibo_meris_v.jpg",
            naslov: "Овладај својим емоцијама",
            opis: "Практичан водич за превазилажење негативног размишљања и боље овладавање осећањима. Аутор ове књиге био је изразито повучен, а стидљивост му је често представљала препреку у постизању животних циљева. Од тренутка када је одлучио да свој живот посвети личном усавршавању, све се променило. Ово је његова прича о томе како је пронашао радост и изградио пут ка успеху. Овај водич може постати твој алат за преображај. Програм који се у њему налази осмишљен је тако да ти помогне да овладаш својим емоцијама, нарочито ако си склона негативном размишљању. Кроз конкретне кораке и практичне савете, научићеш како да пронађеш унутрашњи мир и постигнеш жељени успех.",
            link: "https://www.knjizare-vulkan.rs/komunikacija-emocije-odnosi-sa-drugima/110285-ovladaj-svojim-emocijama"
      
        },
        {
            slika: "https://delfi.rs/_img/artikli/2023/05/mit_o_normalnom_vv.jpg",
            naslov: "Мит о нормалном",
            opis: "У Миту о нормалном, Габор Мате истражује како западна медицина занемарује утицај траума и друштвених норми на здравље. Кроз конкретне податке и примере, аутор повезује обољења са стресовима савременог друштва. Књига пружа дубоко разумевање здравствених проблема са циљем едукације и подизања свести о кључним променама које воде ка исцељењу.",
            link:'https://www.knjizare-vulkan.rs/asertivnost-motivacija-samopostovanje/161327-mit-o-normalnom'
       
        },

        {
            slika: "https://www.laguna.rs/_img/korice/5812/katarina_velika_i_potemkin_carska_ljubavna_afera-sajmon_sibag_montefjore_v.jpg",
            naslov: "Катарина Велика",
            opis: "Било је то најуспешније политичко партнерство у историји – сензуално и ватрено колико и стваралачко и визионарско. Катарина Велика била је позната по страствености и царским амбицијама. Кнез Потемкин, крајње самоуверен и изузетно даровит, био је љубав њеног живота и њен сувладар. Заједно су освојили Украјину и Крим и дефинисали Руско царство. Њихова љубав била је толико бурна да су се договорили да деле власт и оставе слободу Потемкину да воли своје лепе сестричине, а Катарини да узима младе милијенике. Но ове „душе близнакиње“ до краја су волеле једна другу.",
            link:'https://www.knjizare-vulkan.rs/biografije-memoari-dnevnici-pisma/155607-katarina-velika-i-potemkin'
       
        },
        {
            slika: "https://delfi.rs/_img/artikli/2021/09/grad_psihobiografija_cara_dusana_vv.jpg",
            naslov: "Град: психобиографија цара Душана",
            opis: "Град, психобиографија Стефана Уроша IV Душана Немањића, представља неку врсту подвижништа, управо напор потраге за Духом историје, који се крије међу тумиласима и апсидама некропола, међу записима на белинама књига, повеља и стенописима. То је нека врста невидљивог, али несумњиво постојећег паралелног света у коме живе и умиру стварни људи са својим породицама, пријатељима и непријатељима, са својим љубавима и мржњама, страховима, опсесијама, осујећењима и остварењима, дубоким потиштеностима, усхићењима и егзалтацијама.",
            link:'https://delfi.rs/knjige/178047-grad-psihobiografija-cara-dusana-knjiga-delfi-knjizare.html'
       
        },
        {
            slika: "https://delfi.rs/_img/artikli/2019/06/atomske_navike_vv.jpg",
            naslov: "Атомске навике",
            opis: "Књига Атомске навике Џејмса Клира припада жанру психологије успеха и од свог првог објављивања, пре мање од годину дана, постала је бестселер у тој области. Ове године ће се наћи на полицама чак у 40 земаља широм света! Џејмс Клир, један од водећих светских стручњака за формирање навика, открива практичне стратегије које нас уче како да формирамо добре навике, разбијемо лоше и овладамо ситним корацима који воде до изванредних резултата. ",
            link:'https://www.knjizare-vulkan.rs/saveti-za-karijeru-postizanje-uspeha/47595-atomske-navike'
       
        },


    ];

    const knjigeZaDecu = [
        {
            slika: "https://www.laguna.rs/_img/korice/4662/hajdi-johana_spiri_v.jpg",
            naslov: "Хајди",
            opis: "Девојчица Хајди долази да живи код деде, на чистом ваздуху и под дивним сунцем швајцарских Алпа. Међутим, тетка одлучује да девојчица треба да се образује уместо да по цео дан трчи за козама, па је одводи у Франкфурт, велики град, да прави друштво мало старијој девојчици Клари, која је прикована за инвалидска колица. Између две девојчице развија се дубоко пријатељство. Ипак, Хајди чезне за планином, јединим местом где је заиста била срећна. Роман Хајди одише искреном племенитошћу и неукротивим духом главне јунакиње.",
            link:"https://laguna.rs/n4662_knjiga_hajdi_laguna.html"
      
        },
        {
            slika: "https://www.laguna.rs/_img/korice/3313/agi_i_ema-igor_kolarov_v.jpg",
            naslov: "Аги и Ема",
            opis: "Кратки роман Аги и Ема доноси дирљиву причу о пријатељству усамљеног деветогодишњег дечака Агија и луцкасте старице Еме, као и о њиховом заједничком бунту против свирепог и отуђеног света. По овом поетском и духовитом роману (овенчаном Наградом Политикиног Забавника за најбољу дечју књигу) снимљен је први српски филм за децу након двадесет пет година паузе, у режији Милутина Петровића. Роман је до сада преведен на енглески, руски, француски и италијански језик, а у Русији је за кратко време доживео два издања.",
            link:"https://laguna.rs/n3313_knjiga_agi_i_ema_laguna.html"
        },

        {
            slika: "https://kreativnicentar.rs/data/v/B255.jpg",
            naslov: "Мали истраживач: Свемир",
            opis: "Серија „Мали истраживачи“ намењена је деци у узрасту од четири до седам година. Из ове књиге најмлађи читаоци ће научити различите занимљивости о васиони ‒ о звездама, галаксијама и невероватној величини универзума.",
            link:"https://kreativnicentar.rs/p/knjiga/svemir-mali-istrazivaci/"
        },
        {
            slika: "https://provens.edu.rs/wp-content/uploads/2023/10/Discovering-our-Wonderful-World-768x702.jpg",
            naslov: "Откривамо чудесни свет",
            opis: "ОТКРИВАМО ЧУДЕСНИ СВЕТ – интерактивна књига са 93 QR линка и матрицом намењена је деци узраста од 5 до 8+ година и припада едицији „Књиге са којима се расте“, написаних по методу др Драгане Малешевић. Интеракција детета и књиге остварује се преко текста, слике, QR кодова и матрице за самоконтролу. ",
            link:"https://www.knjizare-vulkan.rs/interaktivne-knjige-za-decu-6-8/144952-otkrivamo-cudesni-svet-interaktivna-knjiga-sa-93-qr-linkova-i-matricom"
        },
        {
            slika: "https://datastatus.rs/wp-content/uploads/2021/12/upload202112172048359207.png",
            naslov: "Зец Петар",
            opis: "Најлепша и најмириснија авантура зеца Петра до сада! Загреби и помириши шта то мами несташка Петра да скакуће кроз ову фантастичну књигу пуну мириса. Буду га мирис лаванде, привлачи мирис црног лука у башти, мами мирис јагоде и печуркице у шуми, не може да одоли мирису бомбона у продавници, све до мириса пите од купина која га код куће чека.  ",
            link:"https://datastatus.rs/knjige/zec-petar-sta-je-petar-nanjusio-zagrebi-i-pomirisi/"
        },

        {
            slika: "https://www.knjizaraimperativ.rs/__public/upload/2022/12/05/isidora-mun-ide-na-vencanje-harijet-mankaster.webp",
            naslov: "Исидора Мун",
            opis: "Њена мама је вила, њен тата је вампир, а она је и једно и друго. Исидора ће бити деверуша на венчању своје тетке Кристалине и ВЕОМА је узбуђена због тога. Али, са несташном старијом рођаком Миребел, која се поиграва магијом кад год стигне, тај дан на крају неће бити тако савршен као што би требало да буде.",
            link:"https://www.vulkani.rs/decje-knjige/4021-isidora-mun-ide-na-vencanje"
        },



    ];
   
 
    return (

            <>
                 <Helmet>
                 <title>Preporuke bibliotekara - Biblioteka Ruma</title>
                 <link rel="canonical" href="https://bibliotekaruma.rs/preporuke" />
               </Helmet> 
          <Container className='container-library  mb-4 mt-4 ms-auto '>
           
            <Row className="mb-4">
                   
                 <Col xs={12} md={12} >
                    <h3 className='container-title' >Књиге за одрасле</h3><br/> <a className='container-text' href='https://www.instagram.com/reel/C6Vmssjsa3s/' target='_blank' rel="noreferrer">Препоручујемо вам! 📚</a> 
                    {knjigeZaOdrasle.map((knjiga, index) => (
                        <Row key={index} className="mb-4 align-items-center">
                            <Col xs={12} md={4}>
                            <a  href={knjiga.link} target="_blank" rel="noopener noreferrer">
                               <br/> <AnimatedImage
                                    src={knjiga.slika}
                                    alt={knjiga.naslov}
                                    className="container-image"
                                /></a>
                                
                            </Col>
                            <Col xs={12} md={8}>
                                <p className='container-text'>{knjiga.opis}</p>
                                <p>
                                <a  href={knjiga.link} target="_blank" rel="noopener noreferrer">
                                    Извор:{knjiga.link}
                                </a></p>
                            </Col>     
                        </Row>
                    ))}
                </Col>
               
                <Col xs={12} md={12}>
                   
                    <br/><h3 className='container-title' >Научне књиге</h3><br/><a className='container-text' href='https://www.instagram.com/reel/C33Aqkysm9H/' target='_blank'  rel="noreferrer">Препоручујемо вам! 📚</a>
                    {naucneKnjige.map((knjiga, index) => ( 
                        <Row key={index} className="mb-4 align-items-center">
                            <Col xs={12} md={4} >
                            <a href={knjiga.link} target="_blank" rel="noopener noreferrer">
                                <AnimatedImage
                                    src={knjiga.slika}
                                    alt={knjiga.naslov}
                                    className="container-image"
                                /></a>      
                            </Col>
                            <Col xs={12} md={8}>
                                <p className='container-text'>{knjiga.opis}</p>
                                <p>
                                <a href={knjiga.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                                    Извор:{knjiga.link}
                                </a></p>
                            </Col>
                        </Row>
                    ))}
                </Col>
               
                <Col xs={12} md={12}>
                    <br/><h3 className='container-title'>Књиге за децу</h3><br/>
                    {knjigeZaDecu.map((knjiga, index) => (
                        <Row key={index} className="mb-4 align-items-center">
                            <Col xs={12} md={4} >
                            <a href={knjiga.link} target="_blank" rel="noopener noreferrer">
                                <AnimatedImage
                                    src={knjiga.slika}
                                    alt={knjiga.naslov}
                                    className="container-image"
                                /></a>
                            </Col>
                            <Col xs={12} md={8}>
                                <p className='container-text'>{knjiga.opis}</p>
                                <p>
                                <a href={knjiga.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                                    Извор:<br/>{knjiga.link}
                                </a></p>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Recommendations;



