import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  // eslint-disable-next-line camelcase
  const { item_id, title, author } = props;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(item_id));
  };

  return (
    <article className="container-book">
      <header className="book-header">
        <h4 className="book-category">Category</h4>
        <h3 className="book-title">{title}</h3>
        <h5 className="book-author">{author}</h5>
        <div className="bookActions">
          <button type="button">Comments</button>
          <div className="book-remove-edit" />
          <button type="button" onClick={handleRemoveBook}>Remove</button>
          <div className="book-remove-edit" />
          <button type="button">Edit</button>
        </div>
      </header>
      <section className="bookProgress">
        <div className="book-stats">
          <div className="book-circle" />
          <div className="book-status">
            <div className="book-percent">64%</div>
            <div className="book-state">Completed</div>
          </div>
        </div>
        <div className="book-remove-edit" />
        <div className="book-chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="current-chapter-2">CHAPTER 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </section>
    </article>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
