import React from 'react'
import { Watch } from 'react-loader-spinner'

function Pagetoread() {
  return (
    <div><div className='flex flex-col gap-5 w-full mx-auto'>
         <Watch
  visible={true}
  height="80"
  width="80"
  radius="48"
  color="#FF4545"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass="mx-auto mt-10"
  />
     <h1 className='text-5xl mt-50 text-center text-red-600 font-bold '>

        Update will soon 
        </h1> </div>
    </div>
  )
}

export default Pagetoread
