import React from 'react'
import Text2 from './Content/Text2.jsx'
import ChooseCard from './Content/ChooseCard.jsx'
import { FaGlobe, FaBuilding, FaShieldAlt, FaTruck } from "react-icons/fa";
const ChooseUs = () => {

 const whyChooseUsData = [
  {
    id: 1,
     icon: FaGlobe,
    title: "International Trading",
    description:
      "Buy and sell products across global markets with seamless international trade support and worldwide access."
  },
  {
    id: 2,
    icon: FaBuilding,
    title: "B2B & B2C Marketplace",
    description:
      "A unified platform designed for both businesses and individual buyers to trade efficiently and securely."
  },
  {
    id: 3,
    icon: FaShieldAlt,
    title: "Verified Sellers",
    description:
      "Trade with confidence through our network of trusted and verified sellers from around the world."
  },
  {
    id: 4,
    icon: FaTruck,
    title: "Global Import & Export",
    description:
      "Supporting smooth international logistics with reliable import and export solutions worldwide."
  }
];

  return (
    <div className='w-full min-h-screen '>
     <Text2 /> 



     <div className='flex gap-5 justify-center shrink-0 flex-wrap  p-6 w-full  h-auto'>
    {whyChooseUsData.map((item) => (
        
        <ChooseCard  key={item.id} Icon={item.icon} data = {item}/>
    ))}  
    </div>



    </div>
  )
}

export default ChooseUs
