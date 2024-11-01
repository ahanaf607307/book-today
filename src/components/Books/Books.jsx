import React, { useEffect, useState } from 'react'
import Book from './Book';

function Books() {
    const [books , setBooks] = useState([])
    useEffect(() => {
        const fetchBookData = async () => {
            const res = await fetch('./book.json');
            const data =await res.json();
            console.log(data);
            setBooks(data)
        }
        fetchBookData()
    },[])
  return (
    <div>
        <h1>Book : {books.length}</h1>
        <div className='grid md:grid-cols-4 gap-3'>
            {
                books.map(book => <Book book={book}/>)
            }
        </div>
    </div>
  )
}

export default Books