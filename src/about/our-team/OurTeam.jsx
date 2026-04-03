import React from 'react'
import Team1 from '../about-images/team1.png'
import Team2 from '../about-images/team2.png'
import Team3 from '../about-images/team3.png'
import Team4 from '../about-images/team4.png'

function OurTeam() {

 const workers= [
  {
    profilePic: Team1,
    post: "Head Designer",
    name: "Aarav Mehta",
    description: "Aarav is the creative force behind our signature furniture pieces. With over a decade of experience in modern and sustainable design."
  },
  {
    profilePic: Team2,
    post: "Workshop Manager",
    name: "Ravi Patel",
    description: "Ravi ensures every piece crafted in our workshop meets the highest standards. His passion for woodworking keep our production smooth."
  },
  {
    profilePic: Team3,
    post: "Interior Consultant",
    name: "Neha Sharma",
    description: "Neha helps customers turn houses into homes. She guides clients in choosing furniture that perfectly complements their space and style."
  },
  {
    profilePic: Team4,
    post: "Quality Control Specialist",
    name: "Karan Verma",
    description: "Karan is dedicated to perfection. He carefully inspects every product to ensure durability, comfort, and finish meet our brand promise before it reaches customers."
  }
]

  return (
    <div className='min-h-screen just_col gap-8 '>
      <div className='items_col w-full gap-2'>
        <h2 className='title_text'>Meet Our Team</h2>
        <p className='sub_text w-[50%] text-center '>Our passion for furniture and design is brought to life by our delitated seust of experts. Get to know the people behind FurniNest.</p>
      </div>
      <div className=' w-full flex justify-center gap-10 py-6  '>
        {workers.map((elem, idx) => (
          <div key={idx} className='bg-[#ffffff] relative h-[28vw] w-[20vw] items_col justify-end py-4 px-2  rounded-xl gap-2 bg_sub  overflow-hidden z-20 '>
            <img src={elem.profilePic} className='h-full w-full  object-cover brightness-80 contrast-115 absolute top-0 -z-5  ' />
            <div className='items_col'>
              <h4 className='text-[#e7e6e6] text-[16px] font-semibold '>{elem.post}</h4>
              <h4 className='text-[#f7f7f7] text-[14px] font-semibold '>{elem.name}</h4>
            </div>
            <p className='text-[12px] text-[#cfcfc0] font-medium '>{elem.description}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam