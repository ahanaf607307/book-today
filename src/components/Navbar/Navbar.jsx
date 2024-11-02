import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <>
    
    <div className="navbar bg-base-100 fixed top-0  z-10">
  <div className="navbar-start flex  items-center">
    
    <Link className="btn btn-ghost font-bold text-2xl">Book_Today</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li> <NavLink to='/'>Home</NavLink></li>
     <li> <NavLink to='/listedBooks'>Listed Books</NavLink></li>
     <li> <NavLink to='/pageToread'>Pages to Read</NavLink></li>
      

    </ul>
  </div>
  <div className="navbar-end ">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu flex flex-col gap-y-2 absolute right-0 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
       <li> <NavLink to='/'>Home</NavLink></li>
     <li> <NavLink to='/listedBooks'>Listed Books</NavLink></li>
     <li> <NavLink to='/pageToread'>Pages to Read</NavLink></li>
     <li><button className="btn bg-cyan-500 text-white"> <Link to='/'>Sine in</Link></button></li>
     <li><button className="btn bg-white text-cyan-500">  <Link to='/'>Sine up</Link></button></li>
      </ul>
      
    </div>
   <div className='hidden md:flex gap-x-3'>
   <button className="btn bg-cyan-500 text-white"> <Link to='/'>Sine in</Link></button>
   <button className="btn bg-white text-cyan-500">  <Link to='/'>Sine up</Link></button>
   </div>
   
  </div>
</div>

    </>
  )
}

export default Navbar