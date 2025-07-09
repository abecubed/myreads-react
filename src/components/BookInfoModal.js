import '../App.css';

const BookInfoModal = ({ book, isOpen, onClose }) => {
  if (!isOpen) return null;

  const authors = book.authors?.join(', ') || 'Unknown Author';

  const handleCloseClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button 
          className="modal-close" 
          onClick={handleCloseClick}
          type="button"
          aria-label="Close modal">×</button>
        
        <div className="modal-header">
          <h2>{book.title}</h2>
          <div className="modal-subtitle">
            {book.subtitle && <h3>{book.subtitle}</h3>}
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-book-info">
            <div className="modal-book-cover">
              {book.imageLinks?.thumbnail && (
                <img src={book.imageLinks.thumbnail} alt={book.title} />
              )}
            </div>
            <div className="modal-book-details">
              <p><strong>Authors:</strong> {authors}</p>
              {book.publishedDate && (
                <p><strong>Published:</strong> {book.publishedDate}</p>
              )}
              {book.pageCount && (
                <p><strong>Pages:</strong> {book.pageCount}</p>
              )}
              {book.categories && (
                <p><strong>Categories:</strong> {book.categories.join(', ')}</p>
              )}
              {book.averageRating && (
                <p><strong>Rating:</strong> {book.averageRating}/5 ({book.ratingsCount} ratings)</p>
              )}
              {book.publisher && (
                <p><strong>Publisher:</strong> {book.publisher}</p>
              )}
              {book.description && (
                <div className="modal-description">
                  <p><strong>Description:</strong></p>
                  <p>{book.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfoModal;
