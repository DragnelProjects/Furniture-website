
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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText"
import { products } from './javascript/product'
import NewArrival from './product/new-arrivals/NewArrival'
import FeaturedMain from './product/featured products/FeaturedMain'
import Cart from './cart/Cart'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Login from './about/login-info/Login'
import CreateAccount from './about/login-info/CreateAccount'
import Profile from './about/login-info/Profile'

  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
  

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <main className='h-full relative w-screen flex flex-col '>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}>
              <Route index element={<SecThreeCards products={products}  /> } />
              <Route path=':id' element={<SecThreeCards products={products}  /> } />
            </Route>
            <Route path='/about' element={<About />}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/create-account' element={<CreateAccount/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
          <Section6/>
        </main>
      </CartProvider>
    </AuthProvider>
  )
}

export default App