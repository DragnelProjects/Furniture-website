import React from 'react'

function FeaturedProduct(props) {
    const featuredItems = props.filteredItems.map((p) => p.isFeatured === true )

  return (
    <div>
        {featuredItems.map((elem , idx) => (
            <div key={idx}>
                {elem.name}
            </div>
        ))}
    </div>
  )
}

export default FeaturedProduct