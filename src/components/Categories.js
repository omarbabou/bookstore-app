import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Navigation from './Navigation';
import { checkingStatus } from '../redux/categories/categories';

const Categories = ({ Categories }) => {
  const dispatch = useDispatch();

  const check = () => {
    dispatch(checkingStatus());
  };

  return (
    <>
      <Navigation />
      <main className="container-category">
        <p>
          {Categories}
        </p>
        <button type="button" onClick={() => check()}>Check Status</button>
      </main>
    </>
  );
};

Categories.propTypes = {
  Categories: PropTypes.instanceOf(Array).isRequired,
};

export default Categories;
