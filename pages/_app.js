
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import '../styles/globals.css'
import Projects from './projects';

function MyApp({ Component, pageProps }) {
  return <>
    
  
  <Navbar />
  
   < Component {...pageProps}/>
   
   
   
  

  
   </>
    
  
  
  
}

export default MyApp
