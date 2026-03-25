import React from 'react'

function Services(props) {
  return (
    <div className='w-full flex items-center justify-center gap-4 border'>
        {props.services.map((elem, idx) => (
            <div key={idx} className='h-60 w-50 bg-gray-500 flex_col'>
                <h2>{elem.logo}</h2>
                <h2>{elem.service}</h2>
                <h5>{elem.discrip}</h5>
            </div>
        ))}
    </div>
  )
}

export default Services