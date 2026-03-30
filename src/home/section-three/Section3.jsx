
import SecThreeText from './SecThreeText'
import SecThreeLinks from './SecThreeLinks'
import { Outlet } from 'react-router-dom'

function Section3() {
  return (
    <div className='min-h-screen flex flex-col items-center py-15 gap-8 '>
      <SecThreeText />
      <SecThreeLinks />
      <Outlet />
    </div>
  )
}

export default Section3