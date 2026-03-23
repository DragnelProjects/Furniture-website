
import SecThreeText from './SecThreeText'
import SecThreeLinks from './SecThreeLinks'
import SecThreeCards from './SecThreeCards'

function Section3(props) {
  return (
    <div className='min-h-screen bg-[#f8f9ef] flex flex-col items-center border py-4 gap-6 '>
      <SecThreeText />
      <SecThreeLinks products={props.products} setCategory={props.setCategory} />
      <SecThreeCards products={props.products} category={props.category} />
    </div>
  )
}

export default Section3