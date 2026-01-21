import React from 'react'
import WorkingText from './WorkingStruct/WorkingText'
import WorkingCard from './WorkingStruct/WorkingCard'
import {
  RiUserAddLine,
  RiSearchLine,
  RiMessage2Line,
  RiShieldCheckLine
} from "react-icons/ri";
const Working = () => {


    const howItWorksData = [
  {
    id: 1,
    step: "01",
    icon: RiUserAddLine,
    title: "Register an Account",
    description:
      "Create your account to start buying or selling products worldwide."
  },
  {
    id: 2,
    step: "02",
    icon: RiSearchLine,
    title: "List or Browse Products",
    description:
      "Post your products for sale or explore thousands of listings across categories."
  },
  {
    id: 3,
    step: "03",
    icon: RiMessage2Line,
    title: "Contact Seller or Buy",
    description:
      "Communicate directly with sellers or proceed to purchase securely."
  },
  {
    id: 4,
    step: "04",
    icon: RiShieldCheckLine,
    title: "Secure Trading Worldwide",
    description:
      "Trade with confidence through trusted sellers and global logistics support."
  }
];


  return (
    <div>
      <WorkingText />

      <div className='flex gap-5 justify-center shrink-0 flex-wrap  p-6 w-full  h-auto'>

      {howItWorksData.map((data) => (
          <WorkingCard key={data.id} data={data} Icon={data.icon} />
        ))}
        </div>
    </div>
  )
}

export default Working
