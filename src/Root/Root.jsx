import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function Root() {
  return (
    <>
    <Navbar/>
<div className='max-w-6xl mx-auto'>

<Outlet/>

</div>
<Footer/>
    </>
  )
}

export default Root