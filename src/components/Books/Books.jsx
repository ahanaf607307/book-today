import React, { useEffect, useState } from 'react'
import Book from './Book';

function Books() {
    const [books , setBooks] = useState([])
    useEffect(() => {
        const fetchBookData = async () => {
            const res = await fetch('./book.json');
            const data =await res.json();
            setBooks(data)
        }
        fetchBookData()
    },[])
  return (
    <div className='mt-10 md:mt-20'>
        <h1 className='text-2xl md:text-4xl font-bold text-center mb-10 md:mb-20'>
            Available Book's
        </h1>
        <div className='grid md:grid-cols-3 md:gap-x-5 gap-y-12'>
            {
                books.map(book => <Book book={book}/>)
            }
        </div>
    </div>
  )
}

export default Books