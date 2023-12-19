import React from 'react';
import img4 from './img4.jpg'

class ContainerFour extends React.Component {
  render() {
    return (
      <div className="container-four">
        <div>
          <img
            className="container-four-img"
            src={img4}
            alt="img4"
          />
        </div>
        <div className="container-four-text">
          <h1>From me to me</h1>
          <p>jewelry to give yourself for <br />reaching a personal goal</p>
          <div className="container-four-button">
            Shop now
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerFour;
