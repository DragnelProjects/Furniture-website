
import SecThreeText from './SecThreeText'
import SecThreeLinks from './SecThreeLinks'
import { Outlet } from 'react-router-dom'

function Section3() {
  return (
    <div className='min-h-screen bg-[#F3F4E5] flex flex-col items-center py-15 gap-8 '>
      <SecThreeText />
      <SecThreeLinks />
      <Outlet />
    </div>
  )
}

export default Section3