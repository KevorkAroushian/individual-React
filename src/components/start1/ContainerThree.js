import React from 'react';
import img3 from './img3.jpg'


class ContainerThree extends React.Component {
  render() {
    return (
      <div className="container-three">
        <div>
          <img className="container-three-img" src={img3} alt="img3" />
        </div>
        <div className="container-three-text">
          <h1>I do, too</h1>
          <p>Engagement and wedding <br />ring designs and options</p>
          <div className="container-three-button">
            Shop now
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerThree;
