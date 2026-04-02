import React from 'react'


function OurTeam() {

 const workers= [
  {
    "profilePic": "https://example.com/images/team1.jpg",
    "post": "Head Designer",
    "name": "Aarav Mehta",
    "description": "Aarav is the creative force behind our signature furniture pieces. With over a decade of experience in modern and sustainable design, he blends functionality with timeless aesthetics."
  },
  {
    "profilePic": "https://example.com/images/team2.jpg",
    "post": "Workshop Manager",
    "name": "Ravi Patel",
    "description": "Ravi ensures every piece crafted in our workshop meets the highest standards. His precision and passion for woodworking keep our production smooth and flawless."
  },
  {
    "profilePic": "https://example.com/images/team3.jpg",
    "post": "Interior Consultant",
    "name": "Neha Sharma",
    "description": "Neha helps customers turn houses into homes. With a keen eye for detail, she guides clients in choosing furniture that perfectly complements their space and style."
  },
  {
    "profilePic": "https://example.com/images/team4.jpg",
    "post": "Quality Control Specialist",
    "name": "Karan Verma",
    "description": "Karan is dedicated to perfection. He carefully inspects every product to ensure durability, comfort, and finish meet our brand promise before it reaches customers."
  }
]

  return (
    <div className='min-h-screen just_col gap-8 border '>
      <div className='items_col w-full gap-2'>
        <h2 className='title_text'>Meet Our Team</h2>
        <p className='sub_text w-[50%] text-center '>Our passion for furniture and design is brought to life by our delitated seust of experts. Get to know the people behind FurniNest.</p>
      </div>
      <div className='border w-full flex justify-center gap-10 py-6  '>
        {workers.map((elem, idx) => (
          <div key={idx} className='bg-[#ffffff] h-[24vw] w-[20vw] just_col px-4 rounded-xl gap-2 bg_sub '>
            <div className='h-[40%] w-full '>
              <img src={elem.profilePic} className='h-full w-full object-center' />
            </div>
            <div className='items_col'>
              <h4 className='text-[#1a1a1a] text-[16px] font-semibold '>{elem.post}</h4>
              <h4 className='text-[#1a1a1a] text-[14px] font-semibold '>{elem.name}</h4>
            </div>
            <p className='discription'>{elem.description}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam