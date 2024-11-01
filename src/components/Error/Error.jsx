import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

function Error() {
  return (
    <div className=' font-bold flex flex-col justify-center text-center items-center w-screen h-screen '><h1 className='text-5xl text-red-600'>Page Not Found</h1>
    <p className='mt-5 text-2xl '>
        Status : 404
    </p>
    <div className='mt-5'>
    <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  />
    </div>
    </div>
  )
}

export default Error