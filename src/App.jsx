
import Home from './home/Home'
import { Routes, Route, } from 'react-router-dom'
import About from './about/About'
import Product from './product/Product'
import Contact from './contact-us/Contact'
import Navbar from './home/section-one/Navbar'
import SofaOne from './home/images/sofa-one.png'
import ChairOne from './home/images/chair-one.png'
import TableOne from './home/images/tabel-one.png'
import VasOne from './home/images/vash-one.png'
import LampOne from './home/images/lamp-one.png'
import SectionalOne from './home/images/sectional-one.png'
import SecThreeCards from './home/section-three/SecThreeCards'
import Footer from './home/footer/Footer'

  

function App() {

    const products = [
  { id:"all", name:"Three Seater Sofa", price:45000, color:"Medium Grey",  rating:4.5, image:SofaOne },
  { id:"all", name:"Single Lounge Chair", price:12000, color:"Dark Grey", rating:4.1, image:ChairOne  },
  { id:"all", name:"Side Table", price:6000, color:"Dark Grey",  rating:4.1, image:TableOne },
  { id:"all", name:"Succulents Pot", price:2500, color:"Dark Charcoal",  rating:4.2, image:VasOne},
  { id:"all", name:"Floor Lamp", price:7500, color:"Soft White",  rating:4.4, image:LampOne },
  { id:"all", name:"Sectional Sofa", price:88000, color:"Muted Slate Blue",  rating:4.8, image:SectionalOne },

  { id:"sofa", name:"Three Seater Sofa", price:45000, color:"Medium Grey",  rating:4.5, image:SofaOne },
  { id:"sofa", name:"Two Seater Sofa", price:32000, color:"Emerald Green",  rating:4.2, image:"https://source.unsplash.com/400x300/?couch" },
  { id:"sofa", name:"L-Shaped Sofa", price:78000, color:"Charcoal Grey",  rating:4.7, image:"https://source.unsplash.com/400x300/?sectional-sofa" },
  { id:"sofa", name:"Recliner Sofa", price:65000, color:"Wine Red",  rating:4.6, image:"https://source.unsplash.com/400x300/?recliner" },
  { id:"sofa", name:"Sofa Cum Bed", price:52000, color:"Mustard Yellow",  rating:4.3, image:"https://source.unsplash.com/400x300/?sofa-bed" },
  { id:"sofa", name:"Sectional Sofa", price:88000, color:"Muted Slate Blue",  rating:4.8, image:SectionalOne },

  { id:"chair", name:"Single Lounge Chair", price:12000, color:"Dark Grey", rating:4.1, image:"https://source.unsplash.com/400x300/?lounge-chair" },
  { id:"chair", name:"Accent Chair", price:15000, color:"Ivory White", rating:4.4, image:"https://source.unsplash.com/400x300/?accent-chair" },
  { id:"chair", name:"Rocking Chair", price:18000, color:"Walnut Brown", rating:4.6, image:"https://source.unsplash.com/400x300/?rocking-chair" },
  { id:"chair", name:"Arm Chair", price:14000, color:"Olive Green", rating:4.2, image:"https://source.unsplash.com/400x300/?armchair" },
  { id:"chair", name:"Wingback Chair", price:22000, color:"Navy Blue", rating:4.7, image:"https://source.unsplash.com/400x300/?wingback-chair" },
  { id:"chair", name:"Bar Stool Chair", price:8000, color:"Matte Black", rating:4.0, image:"https://source.unsplash.com/400x300/?bar-stool" },

  { id:"table", name:"Coffee Table", price:10000, color:"Oak Finish", rating:4.3, image:"https://source.unsplash.com/400x300/?coffee-table" },
  { id:"table", name:"Dining Table", price:30000, color:"Mahogany Brown", rating:4.6, image:"https://source.unsplash.com/400x300/?dining-table" },
  { id:"table", name:"Side Table", price:6000, color:"Dark Grey", rating:4.1, image:"https://source.unsplash.com/400x300/?side-table" },
  { id:"table", name:"Console Table", price:14000, color:"Rust Orange", rating:4.4, image:"https://source.unsplash.com/400x300/?console-table" },
  { id:"table", name:"Bedside Table", price:7000, color:"Cream Beige", rating:4.2, image:"https://source.unsplash.com/400x300/?bedside-table" },
  { id:"table", name:"Study Table", price:18000, color:"Dark Walnut", rating:4.5, image:"https://source.unsplash.com/400x300/?study-table" },

  { id:"decorative", name:"Wall Art Frame", price:5000, color:"Golden Beige",  rating:4.3, image:"https://source.unsplash.com/400x300/?wall-art" },
  { id:"decorative", name:"Decorative Mirror", price:9000, color:"Antique Gold",  rating:4.6, image:"https://source.unsplash.com/400x300/?mirror-decor" },
  { id:"decorative", name:"Floor Lamp", price:7500, color:"Soft White",  rating:4.4, image:"https://source.unsplash.com/400x300/?floor-lamp" },
  { id:"decorative", name:"Table Lamp", price:3500, color:"Sky Blue",  rating:4.1, image:"https://source.unsplash.com/400x300/?table-lamp" },
  { id:"decorative", name:"Succulents Pot", price:2500, color:"Dark Charcoal",  rating:4.2, image:"https://source.unsplash.com/400x300/?plant-pot" },
  { id:"decorative", name:"Wall Shelf Decor", price:6500, color:"Pastel Lavender",  rating:4.5, image:"https://source.unsplash.com/400x300/?wall-shelf" }
];


  return (
    <div className='h-full relative w-screen flex flex-col  '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<SecThreeCards products={products} />} />
          <Route path=':category' element={<SecThreeCards products={products}  /> } />
        </Route>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App