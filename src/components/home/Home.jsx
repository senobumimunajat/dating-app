import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import HowItWorks from './HowItWorks';
import MainHome from './MainHome';


function Home() {
  return (
      <>
      <Header />
      <MainHome />
      <HowItWorks />
      <Footer />
      </>
  )
    
  
}

export default Home;