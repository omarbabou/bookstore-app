import React from 'react';
import { PropTypes } from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    const { title, author } = this.props;
    return (
      <article className="container-book">
        <header className="book-haeder">
          <h3 className="book-title">{title}</h3>
          <h4 className="book-category">category</h4>
          <h5 className="book-author">{author}</h5>
          <div className="bookActions">
            <button type="button">Comments</button>
            <div className="book-remove-edit" />
            <button type="button">Remove</button>
            <div className="book-remove-edit" />
            <button type="button">Edit</button>
          </div>
        </header>
        <section className="bookProgress">
          <div className="book-stats">
            <div className="book-circle" />
            <div className="book-percent" />
            <div className="book-state" />
          </div>
          <div className="book-remove-edit" />
          <div className="book-chapter">
            <p className="current-chapter">CURRENT CHAPTER</p>
            <p className="current-chapter-2" />
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </section>
      </article>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
