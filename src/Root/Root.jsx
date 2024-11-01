import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function Root() {
  return (
    <>
<div className='max-w-6xl mx-auto'>
<Navbar/>
<Outlet/>
<Footer/>
</div>
    </>
  )
}

export default Root