import React from 'react'
import SecFiveText from './SecFiveText'
import SecFiveCards from './SecFiveCards'
import SofaOne from '../images/sofa-one.png'
import ChairOne from '../images/chair-one.png'
import TableOne from '../images/tabel-one.png'
import VasOne from '../images/vash-one.png'
import LampOne from '../images/lamp-one.png'
import SectionalOne from '../images/sectional-one.png'

function Section5() {

    const reviews = [
  {
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    personName: "Ananya Sharma",
    rating: 4.8,
    productName: "Three Seater Sofa",
    productPic:SofaOne,
    customerReview: "Super comfortable and looks premium in my living room.\nThe cushioning is perfect for long sitting hours."
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    personName: "Rahul Verma",
    rating: 4.5,
    productName: "Glass Finished Table",
    productPic: ChairOne,
    customerReview: "The finish is sleek and modern, exactly what I wanted.\nVery sturdy despite the elegant design."
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
    personName: "Priya Nair",
    rating: 4.7,
    productName: "Decorative Vase",
    productPic:TableOne,
    customerReview: "Adds a beautiful touch to my home decor.\nThe detailing is simply stunning and eye-catching."
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/18.jpg",
    personName: "Arjun Mehta",
    rating: 4.6,
    productName: "Single Sofa",
    productPic: VasOne,
    customerReview: "Compact yet very cozy for small spaces.\nPerfect for reading or relaxing after work."
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/29.jpg",
    personName: "Sneha Kapoor",
    rating: 4.9,
    productName: "Wooden Coffee Table",
    productPic: LampOne,
    customerReview: "The wood quality is excellent and feels very durable.\nBlends beautifully with my furniture setup."
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/41.jpg",
    personName: "Karan Singh",
    rating: 4.4,
    productName: "Wall Mounted Shelf",
    productPic: SectionalOne,
    customerReview: "Very easy to install and holds good weight.\nGreat for organizing and decorating at the same time."
  }
]

  return (
    <div className='min-h-screen flex flex-col items-center  py-4 gap-6'>
        <SecFiveText/>
        <SecFiveCards reviews={reviews} />
    </div>
  )
}

export default Section5