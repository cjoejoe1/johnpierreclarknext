import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {Row, Col, Card, Tab, Tabs} from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import argentmag from '../images/argentmag.png'
import bankbank from '../images/bankbank.png'
import createur from '../images/createur.png'
import classement from '../images/classement.png'
import crispyfish from '../images/crispyfish.png'
import findcurrency from '../images/findcurrency.png'
import focusfrance from '../images/focusfrance.png'
import helloiceland from '../images/helloiceland.png'
import hellopret from '../images/hellopret.png'
import johnthedog from '../images/johnthedog.png'
import kohdao from '../images/kohdao.png'
import madshipping from '../images/madshipping.png'
import nubapp from '../images/nubapp.png'
import propertaz from '../images/propertaz.png'
import sockbuzz from '../images/sockbuzz.png'
import startupmag from '../images/startupmag.png'
import stimply from '../images/stimply.png'
import unicornalert from '../images/unicornalert.png'
import vctracker from '../images/vctracker.png'
import founderalert from '../images/founderalert.png'
import alicosta from '../images/alicosta.png'
import definingdetail from '../images/definingdetail.png'
import laperlaazul from '../images/laperlaazul.png'
import maufay from '../images/maufay.png'
import ukimmigration from '../images/ukimmigration.png'
import universal from '../images/universal.png'

export default function Home() {

  const data = [
    {
      url: '',
      image: 'argentmag',
      name: 'argentmag',
      what: 'Financial comparison website (personal loans, mortgages, insurance). French version of Moneysupermarket',
      role: 'Founder',
      status: 'exit',
      date: 5
    },
    {
      url: '',
      image: 'classement',
      name: 'classement',
      date: 13
    },
    {
      url: '',
      image: 'crispyfish',
      name: 'crisfy.fish',
      status: 'previous',
      date: 12
    },
    {
      url: '',
      image: 'findcurrency',
      name: 'findcurrency',
      role: 'Founder',
      what: 'Currency transfer specialist',
      status: 'exit',
      date: 1
    },
    {
      url: '',
      image: 'focusfrance',
      name: 'focusfrance',
      status: 'previous',
      date: 2
    },
    {
      url: 'https://www.helloiceland.is/',
      image: 'helloiceland',
      name: 'Hello Iceland',
      status: 'client',
      date: 9
    },
    {
      url: 'https://www.hellopret.fr/',
      image: 'hellopret',
      name: 'helloprêt',
      status: 'exit',
      what: 'Digital mortgage broker',
      role: 'Co-founder',
      date: 6
    },
    {
      url: '',
      image: 'johnthedog',
      name: 'johnthedog',
      status: 'previous',
      date: 7
    },
    {
      url: 'https://www.bankbank.fr/',
      image: 'bankbank',
      name: 'bankbank',
      color: '#f10157',
      status: 'current',
      date: 15
    },
    {
      url: 'https://www.kohdao.com',
      image: 'kohdao',
      name: 'kohdao',
      status: 'current',
      date: 10
    },
    {
      url: '',
      image: 'madshipping',
      name: 'madshipping',
      status: 'previous',
      date: 11
    },
    {
      url: '',
      image: 'nubapp',
      name: 'nubapp',
      status: 'previous',
      date: 3
    },
    {
      url: '',
      image: 'propertaz',
      name: 'propertaz',
      status: 'previous',
      date: 4
    },
    {
      url: '',
      image: 'sockbuzz',
      name: 'sockbuzz',
      status: 'previous',
      date: 8
    },
    {
      url: 'https://www.startupmag.co.uk',
      image: 'startupmag',
      name: 'startupmag',
      color:'#4532ea',
      what: 'Startupmag helps founders connect with investors with interviews, articles and a premium acccess to a UK venture capital database.',
      role: 'creator, developer, interviewer',
      stack: 'Next JS, Firebase, Puppeteer, Twitter API, Stripe',
      marketing: 'SEO, SEMRush',
      status: 'current',
      date: 20
    },
    {
      url: 'https://www.createur.com',
      image: 'createur',
      name: 'createur.com',
      what: 'Createur.com is a community for French creators. The website offers a free daily newsletter with 1 idea/day and a paid member vault with unlimited access.',
      role: 'creator, developer, content',
      stack: 'Next JS, Firebase, Convertkit API, Stripe',
      marketing: 'Google Ads, Facebook Ads',
      color: '#e5234f',
      status: 'current',
      date: 19
    },
    {
      url: 'https://www.stimply.com/',
      image: 'stimply',
      name: 'stimply',
      color: '#000000',
      status: 'current',
      date: 16
    },
    {
      url: 'https://www.unicornalert.io',
      image: 'unicornalert',
      name: 'unicornalert',
      color: '#ff31ff',
      status: 'current',
      date: 17
    },
    {
      url: 'https://vctracker.co.uk/',
      image: 'vctracker',
      name: 'vctracker',
      status: 'previous',
      date: 14
    },
    {
      url: 'https://www.founderalert.com/',
      image: 'founderalert',
      name: 'founderalert',
      role: 'creator, developer',
      stack: 'Next JS, Firebase, Google API',
      marketing: 'Product Hunt',
      what: 'As soon as a founder raises funds, we collect all of their contact details and we give you that information in your dashboard. You can then connect and start networking before it’s too late!',
      status: 'current',
      date: 18
    },
    {
      url: 'https://www.ukimmigrationconsulting.com/',
      image: 'ukimmigration',
      name: 'UK immigration consulting',
      status: 'client',
      date: 20
    },
    {
      url: 'https://www.alicosta.es',
      image: 'alicosta',
      name: 'alicosta',
      status: 'client',
      date: 14
    },
    {
      url: 'https://definingdetail.co.uk/',
      image: 'definingdetail',
      name: 'defining detail',
      status: 'client',
      date: 13
    },
    {
      url: 'https://laperlaazul.eu/',
      image: 'laperlaazul',
      name: 'la perla azul',
      status: 'client',
      date: 14
    },
    {
      url: 'https://www.sasmaufay.fr/',
      image: 'maufay',
      name: 'sas maufay',
      status: 'client',
      date: 14
    },
    {
      url: 'https://www.universalstoryteller.com/',
      image: 'universal',
      name: 'universal storyteller',
      status: "client",
      date: 14
    },
  ]

  const renderProject = (item, index) => {

    const getImage = () => {
      if(item.image === 'argentmag') return argentmag
      if(item.image === 'bankbank') return bankbank
      if(item.image === 'classement') return classement
      if(item.image === 'crispyfish') return crispyfish
      if(item.image === 'findcurrency') return findcurrency
      if(item.image === 'focusfrance') return focusfrance
      if(item.image === 'helloiceland') return helloiceland
      if(item.image === 'hellopret') return hellopret
      if(item.image === 'johnthedog') return johnthedog
      if(item.image === 'kohdao') return kohdao
      if(item.image === 'madshipping') return madshipping
      if(item.image === 'nubapp') return nubapp
      if(item.image === 'propertaz') return propertaz
      if(item.image === 'sockbuzz') return sockbuzz
      if(item.image === 'startupmag') return startupmag
      if(item.image === 'createur') return createur
      if(item.image === 'stimply') return stimply
      if(item.image === 'unicornalert') return unicornalert
      if(item.image === 'vctracker') return vctracker
      if(item.image === 'founderalert') return founderalert
      if(item.image === 'alicosta') return alicosta
      if(item.image === 'definingdetail') return definingdetail
      if(item.image === 'laperlaazul') return laperlaazul
      if(item.image === 'maufay') return maufay
      if(item.image === 'ukimmigration') return ukimmigration
      if(item.image === 'universal') return universal
 
    }


    return (
      <>
     
      <Col sm={4} style={{minWidth: 380}}>
      <div style={{marginTop: 10}}>
        <Card style={{marginBottom : 10, height: '100%', minHeight: 83}}>
          <div key={index} style={{display: 'flex'}}>
            <div style={{borderRight: '0px solid grey', borderRadius: 6, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRadiusTopRight: 0, maxWidth: 150, minWidth: 100, display: 'block', background: item.color}}>
              <div style={{marginBottom: 0, height: '100%'}}>
                <a href={item.url} target="_blank" rel="noreferrer" style={{width: 150, height: 140}} >
                  <Image src={getImage()} layout="responsive" style={{borderRadius: 5, width: 149, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}/>
                  </a>
                  </div>
            </div>
            <div style={{marginLeft: 20, marginTop: 0, padding: 20}}>
              <h4 style={{fontWeight: 700}}>{item.name}</h4>
              {item.status === 'exit' ? <p style={{fontSize: 14, fontWeight: 300, marginTop: 0}}><span style={{fontWeight: 700, background: '#f00057', paddingLeft: 10, paddingRight: 10, paddingTop: 2, paddingBottom: 2,  color: 'white', borderRadius: 2}}>Exit</span></p> : null}
              {item.what ? <p style={{fontSize: 14, fontWeight: 300}}>{item.what}</p> : null }
              {item.role ? <p style={{fontSize: 14, fontWeight: 300}}><span style={{fontWeight: 700}}>Role:</span> {item.role}</p> : null }
              {item.stack ? <p style={{fontSize: 14, fontWeight: 300, marginTop: -15}}><span style={{fontWeight: 700}}>Stack:</span> {item.stack}</p> : null }
              {item.marketing ? <p style={{fontSize: 14, fontWeight: 300, marginTop: -15}}><span style={{fontWeight: 700}}>Marketing:</span> {item.marketing}</p> : null}
              <a href={item.url} target="_blank" rel="noreferrer"><h5 style={{fontWeight: 300, fontSize: 16}}>{item.url.split('//')[1]}</h5></a>
            </div>
          </div>
        </Card>
        </div>
      </Col>
   
      </>
    )
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>John-Pierre Clark</title>
        <meta name="description" content="Current and past projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Tabs
      defaultActiveKey="current"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="current" title="Current">
      <Row>
     {data.sort((a,b) => b.date - a.date).filter(project => project.status === 'current').map(renderProject)}
     </Row>
      </Tab>
      <Tab eventKey="exits" title="Exits">
      <Row>
      {data.sort((a,b) => b.date - a.date).filter(project => project.status === 'exit').map(renderProject)}
      </Row>
      </Tab>
      <Tab eventKey="previous" title="Previous">
      <Row>
      {data.sort((a,b) => b.date - a.date).filter(project => project.status === 'previous' || project.status === 'exit').map(renderProject)}
      </Row>
      </Tab>
      <Tab eventKey="clients" title="Clients">
        <Row>
      {data.sort((a,b) => b.date - a.date).filter(project => project.status === 'client').map(renderProject)}
      </Row>
      </Tab>
    </Tabs>


      <footer className={styles.footer}>
  
      </footer>
    </div>
  )
}
