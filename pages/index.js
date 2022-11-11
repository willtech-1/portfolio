import Head from 'next/head'
// import children components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div>
      {/* Head Title */}
      <Head>
        <title>Aphile Ntando | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* import children components */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

