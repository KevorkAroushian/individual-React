import React from 'react';
import img1 from './img1.jpg'
//import myImage from './images/myImage.jpg';


class ContainerOne extends React.Component {
  render() {
    return (
      <div className="container-one">
        <div className="container-one-header">
          <p className="container-one-header-text">
            STUDIO<br />MOONE
          </p>
          <div className="container-one-header-button">
            Customize a design
          </div>
        </div>
        <div className="container-one-var">
          <div className="container-one-text">
            <h1>
              Make<br />milestones<br />memorable
            </h1>
            <h6>celebrate with handmade <br />custom jewelry</h6>
          </div>
          <div>
            <img
              className="container-one-image"
              src={img1}
              alt="img1"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerOne;
