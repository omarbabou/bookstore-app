import React from 'react';
import { PropTypes } from 'prop-types';
import Navigation from './Navigation';
import Book from './Book';
import Form from './Form';

const Books = (props) => {
  const { BooksList } = props;

  return (
    <>
      <Navigation />
      <main className="container-books">
        <ul className="books-list">
          {BooksList.map((book) => (
            <li key={book.id}>
              <Book
                id={book.id}
                author={book.author}
                title={book.title}
              />
            </li>
          ))}
        </ul>
        <Form />
      </main>
    </>
  );
};

Books.propTypes = {
  BooksList: PropTypes.instanceOf(Array).isRequired,
};

export default Books;
