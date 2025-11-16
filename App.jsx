import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
export default function App(){
 const [dark,setDark]=useState(false);
 return(
 <div className={dark?'dark':''}>
   <Navbar dark={dark} setDark={setDark}/>
   <Hero/>
   <About/>
   <Projects/>
   <Contact/>
 </div>);
}