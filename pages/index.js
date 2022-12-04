import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Skills from './skills'




import Navbar from '../components/Navbar'
import Projects from './projects'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Skills />
     {/* <Projects /> */}
     
    </div>
  )
}
