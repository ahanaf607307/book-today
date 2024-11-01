import React from 'react'
import banner from '../../assets/banner.png'

function Banner() {
  return (
    <div className="hero bg-base-200 h-[554px] md:mt-20">
    <div className="hero-content flex-col lg:flex-row-reverse md:px-20">
      <img
        src={banner}
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="md:text-5xl pr-16 font-bold">Books to freshen up your bookshelf</h1>
        <button className="btn bg-green-500 text-white font-bold mt-10">View The List</button>
      </div>
    </div>
  </div>
  )
}

export default Banner