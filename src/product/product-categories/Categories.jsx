
import SofaWhite from '../product-images/sofa-images/sofa-1 (6).jpeg'
import TableBrown from '../product-images/table-images/table (4).jpeg'
import Decorate from '../product-images/decorative-images/decorative-items (12).png'
import LargeGraySofa from '../product-images/large-sofa-images/sofa-1 (2).jpeg'
import ChairBrown from '../product-images/chair-images/chair (9).jpeg'
import { Link } from 'react-router-dom'



function Categories() {
    const categories = [
  { name: "Sofa", image: SofaWhite, category2: 'sofa2' },
  { name: "Sables", image: TableBrown, category2: 'tables2' },
  { name: "Large Sofa", image: LargeGraySofa, category2: 'large-sofa2' },
  { name: "Chair", image: ChairBrown, category2: 'chair2' },
  { name: "Decorative", image: Decorate, category2: 'decorative2' },
  { name: "Wall Hangings", image: ChairBrown, category2: 'wall-hanging2' },
];
  return (
    <div className='min-h-[25vw] w-full  just_col gap-4 py-8  '
    >
        <h2 className='title_text'>Top Categories</h2>
        <div className=' h-[14vw] w-full  flex items-center  justify-center overflow-x-auto gap-5  perspective-distant'>
             {categories.map((cat,) => (
              <Link key={cat} to={cat.category2} >
                  <div className=' h-[10vw] w-[14vw] relative  flex flex-col items-center justify-center bg-[#ffff] shadow-xl rounded'>
                    <img src={cat.image} className='h-[85%] w-[85%] rounded ' />
                    <p className=' absolute bottom-0 text-sm font-medium text-[#1a1c25] text-center bg-[#e8e8e845] w-[95%] h-8 '>{cat.name}</p>
                  </div>
              </Link>
        ))}
        </div>
    </div>
  )
}

export default Categories