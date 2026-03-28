import React from 'react'
import SecFiveText from './SecFiveText'
import SecFiveCards from './SecFiveCards'

function Section5() {

    const reviews = [
  {
    "profilePic": "https://randomuser.me/api/portraits/women/12.jpg",
    "personName": "Ananya Sharma",
    "rating": 4.8,
    "productName": "Three Seater Sofa",
    "customerReview": "Super comfortable and looks premium in my living room.\nThe cushioning is perfect for long sitting hours."
  },
  {
    "profilePic": "https://randomuser.me/api/portraits/men/32.jpg",
    "personName": "Rahul Verma",
    "rating": 4.5,
    "productName": "Glass Finished Table",
    "customerReview": "The finish is sleek and modern, exactly what I wanted.\nVery sturdy despite the elegant design."
  },
  {
    "profilePic": "https://randomuser.me/api/portraits/women/45.jpg",
    "personName": "Priya Nair",
    "rating": 4.7,
    "productName": "Decorative Vase",
    "customerReview": "Adds a beautiful touch to my home decor.\nThe detailing is simply stunning and eye-catching."
  },
  {
    "profilePic": "https://randomuser.me/api/portraits/men/18.jpg",
    "personName": "Arjun Mehta",
    "rating": 4.6,
    "productName": "Single Sofa",
    "customerReview": "Compact yet very cozy for small spaces.\nPerfect for reading or relaxing after work."
  },
  {
    "profilePic": "https://randomuser.me/api/portraits/women/29.jpg",
    "personName": "Sneha Kapoor",
    "rating": 4.9,
    "productName": "Wooden Coffee Table",
    "customerReview": "The wood quality is excellent and feels very durable.\nBlends beautifully with my furniture setup."
  },
  {
    "profilePic": "https://randomuser.me/api/portraits/men/41.jpg",
    "personName": "Karan Singh",
    "rating": 4.4,
    "productName": "Wall Mounted Shelf",
    "customerReview": "Very easy to install and holds good weight.\nGreat for organizing and decorating at the same time."
  }
]

  return (
    <div className='min-h-screen flex flex-col'>
        <SecFiveText/>
        <SecFiveCards reviews={reviews} />
    </div>
  )
}

export default Section5