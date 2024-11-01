import React from 'react'
import banner from '../../assets/banner.png'

function Banner() {
  return (
    <div className="hero bg-base-200 h-[554px] md:mt-20">
    <div className="hero-content flex-col lg:flex-row-reverse md:px-20">
      <img
        src={banner}
        className="h-80 rounded-lg shadow-2xl" />
      <div className='flex-col flex text-center items-center justify-center md:items-start md:justify-start md:text-start'>
        <h1 className="md:text-5xl text-2xl md:pr-16 font-bold">Books to freshen up your bookshelf</h1>
        <button className="btn bg-cyan-500 text-white font-bold mt-5 md:mt-10">View The List</button>
      </div>
    </div>
  </div>
  )
}

export default Banner