import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-500 antialiased selection:bg-cyan-300 selection:text-cian-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(5, 53, 53, 0.5)_100%)]"></div>

      </div>

      <div className='container mx-auto px-8'>
        <div>
          <Navbar />
        </div>

        <div className='pt-40 '>
          <section id="home" className="scroll-mt-50">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-50">
          <About />
          </section>
          <section id="projects" className="scroll-mt-50">
          <Projects />
           </section>
           <section id="contact" className="scroll-mt-50">
          <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};
export default App;
