
import SofaWhite from '../product-images/sofa-images/sofa-1 (6).jpeg'
import TableBrown from '../product-images/table-images/table (4).jpeg'
import Decorate from '../product-images/decorative-images/decorative-items (12).png'
import LargeGraySofa from '../product-images/large-sofa-images/sofa-1 (2).jpeg'
import ChairBrown from '../product-images/chair-images/chair (9).jpeg'
import { Link } from 'react-router-dom'



function Categories() {
    const categories = [
  { name: "sofa2", image: SofaWhite, category2: 'sofa' },
  { name: "tables2", image: TableBrown, category2: 'tables' },
  { name: "large sofa2", image: LargeGraySofa, category2: 'large sofa' },
  { name: "chair2", image: ChairBrown, category2: 'chair' },
  { name: "decorative2", image: Decorate, category2: 'decorative' },
  { name: "wall hanging2", image: ChairBrown, category2: 'wall hanging' },
  { name: "Decorative2", image: Decorate, category2: 'lamps' },
];
  return (
    <div className='min-h-[25vw] w-full  just_col gap-6 py-8  '
    >
        <h2 className='title_text'>Top Categories</h2>
        <div className=' h-[20vw] w-full relative  flex  justify-center   pt-5  overflow-x-auto  perspective-distant'>
             {categories.map((cat,) => (
              <Link key={cat} to={cat.name} >
                  <div className=' h-[12vw] w-[15vw] flex flex-col items-center justify-center py-1 bg-[#ffff] rounded     transition-all duration-300'>
                    <img src={cat.image} className='h-[80%] w-[90%]   object-contain mx-auto ' />
                    <p className='mt-2 text-sm font-medium text-gray-700 '>{cat.name}</p>
                  </div>
              </Link>
        ))}
        </div>
    </div>
  )
}

export default Categories