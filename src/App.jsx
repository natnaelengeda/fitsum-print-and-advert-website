import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Order from './pages/Order'
import SubBlog from './sub_pages/SubBlog'

export default function App() {
  return (
    <Router>
    <Header/>
    {/* <Header2 /> */}
        <main className='min-h-screen relative font-Sora'>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/about/*' element={ <About/>} />
            <Route path='/contact' element={ <Contact/>} />
            <Route path='/product' element={ <Product/>} />
            <Route path='/gallery' element={ <Gallery/>}/>
            <Route path='/order' element={<Order/>} />
            <Route path='/blog' element={ <Blog/>} />
            <Route path='/blog/:id' element={<SubBlog/>}/>
          </Routes>
        </main>
    <Footer/>
   </Router>
  )
}
