import React from 'react'
import RegionCard from './Region/RegionCard'
import RegionText from './Region/RegionText'
const Regions = () => {

     const regionsData = [
  {
    id: 1,
    region: " Dubai",
    description:
      "Our primary trading hub connecting businesses across the Middle East through Dubai.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
    searchKeyword: "dubai skyline illustration map"
  },
  {
    id: 2,
    region: "Africa",
    description:
      "Expanding trade opportunities with emerging and established markets across Africa.",
    image:
      "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    searchKeyword: "africa map illustration"
  },
  {
    id: 3,
    region: "Europe",
    description:
      "Connect with trusted buyers and suppliers across major European economies.",
    image:
      "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXVyb3BlfGVufDB8fDB8fHww",
    searchKeyword: "europe map illustration"
  },
  {
    id: 4,
    region: "Asia",
    description:
      "Access manufacturers and traders across Asia’s fastest-growing markets.",
    image:
      "https://images.unsplash.com/photo-1532236395709-7d70320fec2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFzaWF8ZW58MHx8MHx8fDA%3D",
    searchKeyword: "asia map illustration"
  }
];




  return (
    <div>
      <RegionText />
      <div className='flex gap-5 justify-center shrink-0 flex-wrap  p-6 w-full  h-auto'>
        {regionsData.map((region) => (
          <RegionCard
            key={region.id}
            data = {region}
          />
        ))}
      </div>
    </div>
  )
}

export default Regions
