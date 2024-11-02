import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredList } from '../Utility/addToDb';
import Book from '../Books/Book';
import { getWishList } from '../Utility/addWish';


function ListedBooks() {
    const loadAllBooks = useLoaderData()
    const [books , setBooks] = useState([])
    const [wishs , setWishes] = useState([])
    console.log(loadAllBooks);
    useEffect(() => {
      const storedList =   getStoredList()
     const storedListInt = storedList.map(id => parseInt(id))
     console.log(storedListInt);
     const readListBook = loadAllBooks.filter(book => storedListInt.includes(book.bookId))
     setBooks(readListBook)
    },[])
    useEffect(() => {
      const storedList =   getWishList()
     const storedListInt = storedList.map(id => parseInt(id))
     console.log(storedListInt);
     const wishBookList = loadAllBooks.filter(wish => storedListInt.includes(wish.bookId))
     setWishes(wishBookList)
    },[])
  return (
    <div>
        <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read List" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    <h1>Books Added : {books.length}</h1>
   <div className='grid md:grid-cols-2 gap-4'>
   {
        books.map(book => <Book key={book.bookId} book={book}></Book>)
    }
   </div>
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Wish List"
    defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <h1>Wishes Added : {wishs.length}</h1>
   <div className='grid md:grid-cols-2 gap-4'>
   {
        wishs.map(book => <Book key={book.bookId} book={book}></Book>)
    }
   </div>
  </div>
</div>
    </div>
  )
}

export default ListedBooks