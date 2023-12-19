import React from 'react';
import img5 from './img5.jpg'

class ContainerFive extends React.Component {
  render() {
    return (
      <div className="container-five">
        <div>
          <img className="container-five-img" src={img5} alt="img5" />
        </div>
        <div className="container-five-text">
          <h1>Just because</h1>
          <p>Dainty pieces to give friends and <br />family to show your love</p>
          <div className="container-five-button">
            Shop now
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerFive;
