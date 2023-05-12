import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/pages/components/Navbar'
import Hero from '@/pages/components/Hero'
import AboutWork from '@/pages/components/AboutWork'
import CTAone from '@/pages/components/CTAOne'
import About from '@/pages/components/About'
import Products from '@/pages/components/Products'
import Contact from '@/pages/components/Contact'

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
        <CTAone />
        <About />
        <Products />
        <Contact />
      </main>
    </>
  )
}
