
import Home from './home/Home'
import { Routes, Route, } from 'react-router-dom'
import About from './about/About'
import Product from './product/Product'
import Contact from './contact-us/Contact'
import Navbar from './section-one/Navbar'
import SecThreeCards from './home/section-three/SecThreeCards'
import Section6 from './home/footer/Section6'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from './javascript/product'
import NewArrival from './product/new-arrivals/NewArrival'

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  

function App() {
  return (
    <main className='h-full relative w-screen flex flex-col '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<SecThreeCards products={products}  /> } />
          <Route path=':id' element={<SecThreeCards products={products}  /> } />
        </Route>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product/>}>
            <Route index element={<NewArrival/>} />
            <Route path=':category' element={<NewArrival/>} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Section6/>
    </main>
  )
}

export default App