import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredList } from "../Utility/addToDb";
import Book from "../Books/Book";
import { getWishList, setWishList } from "../Utility/addWish";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ListedBooks() {
  const loadAllBooks = useLoaderData();
  const [sort, setSort] = useState("");
  const [books, setBooks] = useState([]);
  const [wishes, setWishes] = useState([]);
  console.log(loadAllBooks);
  useEffect(() => {
    const storedList = getStoredList();
    const storedListInt = storedList.map(id => parseInt(id));
    console.log(storedListInt);
    const readListBook = loadAllBooks.filter(book =>
      storedListInt.includes(book.bookId)
    );
    setBooks(readListBook);
  }, []);
  useEffect(() => {
    const storedList = getWishList();
    const storedListInt = storedList.map(id => parseInt(id));
    console.log(storedListInt);
    const wishBookList = loadAllBooks.filter(wish =>
      storedListInt.includes(wish.bookId)
    );
    setWishes(wishBookList);
  }, []);

 
  const handleDeleteWish = bookId => {
    const Deletewishes = wishes.filter(book => book.bookId !== bookId);
    setWishes(Deletewishes);
    setWishList(Deletewishes.map(book => book.bookId))
  }
    const handleSort = sortType => {
        setSort(sortType);
        if (sortType === "Pages") {
          const sortByPages = [...books].sort(
            (a, b) => a.totalPages - b.totalPages
          );
          const sortByPagesW = [...wishes].sort(
            (a, b) => a.totalPages - b.totalPages
          );
          setBooks(sortByPages);
          setWishes(sortByPagesW);
        }
    
        if (sortType === "Rating") {
          const sortByRating = [...books].sort((a, b) => a.rating - b.rating);
          const sortByPagesW = [...wishes].sort(
            (a, b) => a.totalPages - b.totalPages
          );
          setBooks(sortByRating);
          setWishes(sortByPagesW);
        }
      };
  
  return (
    <div>
      <div className="w-full text-center my-10">
        <details className="dropdown">
          <summary className="btn m-1">
            {sort ? `Sort by : ${sort}` : "Sort By"}{" "}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleSort("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("Pages")}>
              <a>Pages</a>
            </li>
          </ul>
        </details>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read List"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1>
            Books Added : {books.length}
          </h1>
          <div className="grid md:grid-cols-2 gap-4">
            {books.map(book => <Book key={book.bookId} book={book} />)}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wish List"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1>
            Wishes Added : {wishes.length}
          </h1>
          <div className="grid md:grid-cols-2 gap-4">
            {/* {
        wishes.map(book => <Book key={book.bookId} book={book}></Book>)
    } */}
            {wishes.map(book =>
              <div
                key={book.bookId}
                className="flex h-[520px] border card card-compact bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={book.image} alt="Shoes" className="h-56 " />
                </figure>
                <div className="card-body mt-4">
                  <div className="flex">
                    <h1 className="bg-gray-100 py-1 px-3 font-semibold text-cyan-500 mr-3 rounded-xl">
                      {book.publisher}
                    </h1>
                    <h1 className="bg-gray-100 py-1 px-3 font-semibold text-cyan-500 mr-3 rounded-xl">
                      {book.category}
                    </h1>
                  </div>
                  <div className="flex flex-col  h-full justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <h1 className="text-xl pr-10 my-3">
                          {book.bookName}
                        </h1>
                        <h1>
                          Pages : {book.totalPages}
                        </h1>
                      </div>
                      <div className="flex justify-between items-center font-semibold text-gray-600">
                        <h1 className="text-lg">
                          By : {book.author}
                        </h1>
                        <h1>
                          {book.yearOfPublishing}
                        </h1>
                      </div>
                      <div className="flex  justify-between items-center  font-semibold text-gray-500 mt-3">
                        <h1>Rating</h1>
                        <h1 className="flex justify-between items-center  font-semibold text-gray-500 gap-x-1">
                          <FaStar className="text-yellow-500 " /> {book.rating}
                        </h1>
                      </div>
                    </div>
                    <div className="w-full justify-end">
                      <Link to={`/books/${book.bookId}`}>
                        {" "}<button className="btn mt-5 w-full text-white bg-cyan-500">
                          See Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                <button  onClick={() => handleDeleteWish(book.bookId)} className="btn bg-white absolute -top-3 -right-3"><MdDelete className="text-2xl text-red-500"/></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListedBooks;
