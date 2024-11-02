import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Book({book}) {
    const{author,bookId,bookName,category,image,publisher,rating,review,tags,totalPages,yearOfPublishing} = book
  return (
    <div className="flex h-[520px] border card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes"
      className='h-56 '
      />
  </figure>
  <div className="card-body mt-4">
    <div className='flex'>
        <h1 className='bg-gray-100 py-1 px-3 font-semibold text-cyan-500 mr-3 rounded-xl'>{publisher}</h1>
        <h1 className='bg-gray-100 py-1 px-3 font-semibold text-cyan-500 mr-3 rounded-xl'>{category}</h1>
    </div>
    <div className='flex flex-col  h-full justify-between'>
       <div>
       <div className='flex justify-between items-center'>
       <h1 className='text-xl pr-10 my-3'>{bookName}</h1>
       <h1>Pages : {totalPages}</h1>
       </div>
        <div className='flex justify-between items-center font-semibold text-gray-600'>
        <h1 className='text-lg'>By : {author}</h1>
        <h1>{yearOfPublishing}</h1>
        </div>
        <div className='flex  justify-between items-center  font-semibold text-gray-500 mt-3'>
            <h1>Rating</h1>
            <h1 className='flex justify-between items-center  font-semibold text-gray-500 gap-x-1'><FaStar className='text-yellow-500 ' /> {rating}</h1>
        </div>
       </div>
        <div className='w-full justify-end'>
       <Link to={`/books/${bookId}`}> <button className="btn mt-5 w-full text-white bg-cyan-500">See Details</button></Link>
        </div>
    </div>
  </div>
</div>
  )
}

export default Book