import Head from 'next/head'
import Image from 'next/image'
import About from './components/About'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Header from './components/Header'
import Contact from './components/Contact'

import Favicon from './../public/favicon.ico'
import WhatsappButton from './components/WhatsappButton'
import CTAone from './components/CTAone'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trinity Coworking</title>
        <meta name="description" content="O seu escritório inteligente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./../public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
      </Head>
      <main className='main'>
        <Navbar />
        <Header />
        <CTAone />
        <About />
        <Products />
        <Contact />
        <WhatsappButton />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous" />
      </main>
    </>
  )
}
