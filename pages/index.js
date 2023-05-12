import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutWork from './components/AboutWork'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import CTAOne from './components/CTAOne'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Trinity Coworking</title>
        <meta name="description" content="O seu escritório inteligente!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Navbar />
        <Hero />
        <AboutWork />
        <CTAOne />
        <About />
        <Products />
        <Contact />
      </main>
    </>
  )
}
