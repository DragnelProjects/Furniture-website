import React from 'react'
import ContainerTop from './ContainerTop'
import ContainerBottom from './ContainerBottom'
import ContainerMiddle from './ContainerMiddle'

function Container() {
  return (
    <div className=' h-[80%] w-[70%] flex flex-col gap-4 py-2 mt-4 mb-4 '>
        <ContainerTop />
        <ContainerMiddle />
        <ContainerBottom />
    </div>
  )
}

export default Container