import React from 'react'
import { NavLink, Link } from "react-router";
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import Header from './Components/Header/Header';
import Services from './Components/CategoriesSection/Services';
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Working from './Components/WorkingFlow/Working';
import Regions from './Components/Regions/Regions';
import CTA from './Components/CTA\'s/CTA';
import Footer from './Components/Footer/Footer';
const App = () => {


  return (
    <div className='w-full h-screen '>
     <Header />
     <Services />
     <FeaturedProducts />
     <ChooseUs />
     <Working />
     <Regions />
     <CTA /> 
     <Footer />
    </div>
  )
}

export default App
