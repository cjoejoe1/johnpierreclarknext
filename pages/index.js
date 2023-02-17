import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {Row, Col, Card} from 'react-bootstrap'
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

export default function Home() {

  const data = [
    {
      url: '',
      image: 'argentmag',
      name: 'ArgentMag',
      date: 5
    },
    {
      url: '',
      image: 'classement',
      name: 'Classement',
      date: 13
    },
    {
      url: '',
      image: 'crispyfish',
      name: 'Crisfy.Fish',
      date: 12
    },
    {
      url: '',
      image: 'findcurrency',
      name: 'FindCurrency',
      date: 1
    },
    {
      url: '',
      image: 'focusfrance',
      name: 'FocusFrance',
      date: 2
    },
    {
      url: 'https://www.helloiceland.is/',
      image: 'helloiceland',
      name: 'HelloIceland',
      date: 9
    },
    {
      url: 'https://www.hellopret.fr/',
      image: 'hellopret',
      name: 'HelloPrêt',
      date: 6
    },
    {
      url: '',
      image: 'johnthedog',
      name: 'JohnTheDog',
      date: 7
    },
    {
      url: 'https://www.bankbank.fr/',
      image: 'bankbank',
      name: 'BankBank',
      date: 15
    },
    {
      url: 'https://www.kohdao.com',
      image: 'kohdao',
      name: 'Kohdao',
      date: 10
    },
    {
      url: '',
      image: 'madshipping',
      name: 'MadShipping',
      date: 11
    },
    {
      url: '',
      image: 'nubapp',
      name: 'Nubapp',
      date: 3
    },
    {
      url: '',
      image: 'propertaz',
      name: 'Propertaz',
      date: 4
    },
    {
      url: '',
      image: 'sockbuzz',
      name: 'SockBuzz',
      date: 8
    },
    {
      url: 'https://www.startupmag.co.uk',
      image: 'startupmag',
      name: 'StartupMag',
      date: 20
    },
    {
      url: 'https://www.createur.com',
      image: 'createur',
      name: 'Createur.com',
      date: 19
    },
    {
      url: 'https://www.stimply.com/',
      image: 'stimply',
      name: 'Stimply',
      date: 16
    },
    {
      url: 'https://www.unicornalert.io',
      image: 'unicornalert',
      name: 'UnicornAlert',
      date: 17
    },
    {
      url: 'https://vctracker.co.uk/',
      image: 'vctracker',
      name: 'VCTracker',
      date: 14
    },
    {
      url: 'https://www.founderalert.com/',
      image: 'founderalert',
      name: 'FounderAlert',
      date: 18
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
    }


    return (
      <>
      <Col sm={4} style={{minWidth: 380}}>
        <Card style={{marginBottom : 10, height: 102}}>
          <div  key={index} style={{display: 'flex'}}>
            <div style={{borderRight: '0px solid grey', borderRadius: 6, borderRadiusTopRight: 0, maxWidth: 150, minWidth: 100, display: 'block', height: 93}}>
              <div style={{marginBottom: -10}}>
                <a href={item.url} target="_blank" rel="noreferrer" style={{width: 150, height: 140}} >
                  <Image src={getImage()} layout="responsive" style={{borderRadius: 5, width: 149}}/>
                  </a>
                  </div>
            </div>
            <div style={{marginLeft: 20, marginTop: 20}}>
              <h4>{item.name}</h4>
              <a href={item.url} target="_blank" rel="noreferrer"><h5 style={{fontWeight: 300, fontSize: 16}}>{item.url}</h5></a>
            </div>
          </div>
        </Card>
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
  <Row>

     {data.sort((a,b) => b.date - a.date).map(renderProject)}
     </Row>

      <footer className={styles.footer}>
  
      </footer>
    </div>
  )
}
