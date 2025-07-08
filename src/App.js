import {useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./utils/BooksAPI";
import MainBookShelf from "./components/mainBookShelf";
import BookSearch from "./components/BookSearch";

function App() {
  const [books, setBooks] = useState([]);

  const getBooksList = async () => {
    const getAllBooks = await BooksAPI.getAll();
    setBooks(getAllBooks);
  }

  const updateBookStatus = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      getBooksList();
    });
  };
  
  useEffect(() => {
    getBooksList();
  }, []);


  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<MainBookShelf books={books} onStatusChange={updateBookStatus} />} />
          <Route path="/search" element={<BookSearch books={books} onStatusChange={updateBookStatus}/>} />
        </Routes>
    </div>
  );
}

export default App;
