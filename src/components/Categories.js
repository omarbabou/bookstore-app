import React from 'react';
import Navigation from './Navigation';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Navigation />
        <main className="container-category">
          <button type="button">Check Status</button>
        </main>
      </>
    );
  }
}

export default Categories;
