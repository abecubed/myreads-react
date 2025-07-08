
import { useState } from 'react';
import BookInfoModal from './BookInfoModal';
import '../App.css';

const Book = ({ book, onStatusChange }) => {
  const [showModal, setShowModal] = useState(false);
  const thumbnail = book.imageLinks?.thumbnail || '';
  const authors = book.authors?.join(', ') || 'Unknown Author';

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={book.shelf || 'none'}
              onChange={(e) => onStatusChange(book, e.target.value)}
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="book-shelf-info-modal" onClick={openModal}></div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>

      {/* Modal */}
      <BookInfoModal 
        book={book} 
        isOpen={showModal} 
        onClose={closeModal} 
      />
    </>
  );
};

export default Book;
