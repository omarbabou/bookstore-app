const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ewYk4YjZVq8pYtMAfktj/books';
const ADD = 'BOOK_ADDED';
const DEL = 'BOOK_REMOVED';
const READ = 'BOOKS_RETRIEVED';

// Action creators
export const addBook = ({
  // eslint-disable-next-line camelcase
  item_id, title, author, category,
}) => ({
  type: ADD,
  // eslint-disable-next-line camelcase
  item_id,
  title,
  author,
  category,
});

// eslint-disable-next-line camelcase
export const removeBook = (item_id) => ({
  type: DEL,
  // eslint-disable-next-line camelcase
  item_id,
});

export const getActionData = ({
  // eslint-disable-next-line camelcase
  item_id, title, author, category,
}) => ({
  // eslint-disable-next-line camelcase
  item_id, title, author, category,
});

export const readBooks = (books) => ({
  type: READ,
  books,
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        getActionData(action),
      ];
    case DEL:
      return state.filter((book) => book.item_id !== action.item_id);

    case READ:
      return action.books;

    default:
      return state;
  }
};

export default bookReducer;
