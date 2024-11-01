import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function Booksdetails() {
    const {bookId} = useParams()
  
    const id = parseInt(bookId)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)
    const{author,bookName,category,image,publisher,rating,review,tags,totalPages,yearOfPublishing} = book
  return (
    <div className="grid md:grid-cols-2 bg-base-100 shadow-xl mt-10 md:mt-20">
    <figure>
      <img
        src={image}
        alt="Movie" />
    </figure>
    <div className="card-body flex flex-col gap-y-5">
     <h1 className='text-3xl font-bold'>{bookName}</h1>
     <h1 className='text-lg text-gray-500 font-bold'>By : {author}</h1>
     <hr />
     <h1 className='text-sm text-gray-500 font-bold'>Details : </h1>
     <hr />
     <h1 className='text-sm text-gray-500 font-semibold'>Review : {review}</h1>
     <div className='flex gap-x-3 items-center'>
       <h1 className='font-semibold text-gray-500'>Tag :</h1>  {
            tags.map(tag=> <button className='px-4 text-gray-100 py-1 bg-cyan-500 font-bold rounded-3xl'>{tag}</button>)
        }
     </div>
     <hr />
     <div>
        <h1>Number Of Page : {totalPages}</h1>
        <h1>Publisher : {publisher}</h1>
        <h1>Year of Publishing : {yearOfPublishing} </h1>
        <h1>Rating : {rating}</h1>
     </div>
     <div className='flex gap-2'>
        <button className="btn border-2  text-cyan-500 border-cyan-500">Read</button>
        <button className="btn bg-cyan-500 text-white">Wishlist</button>
     </div>
    </div>
  </div>
  )
}

export default Booksdetails