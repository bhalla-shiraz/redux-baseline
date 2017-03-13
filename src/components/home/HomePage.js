import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Redux/React Boiler Plate</h1>
        <Link to="www.google.com" className="btn btn-primary btn-lg">Redux/React Boiler Plate</Link>
      </div>
    );
  }
}

export default HomePage;
