import React from 'react';
import img2 from './img2.jpg'


class ContainerTwo extends React.Component {
  render() {
    return (
      <div className="container-two">
        <div className="container-two-text">
          <h1>Our Story</h1>
          <p>
            Hello from Studio Moone! We are a small group of passionate
            jewelry makers who like making delicate and personalized jewelry
            for meaningful moments such as weddings, engagements, and other
            milestones. Our pieces are thoughtfully designed and one of a kind.
            You can be assured that no two pieces are ever alike, making it
            even more special as it is passed on from generation to generation.
          </p>
        </div>
        <div>
          <img
            className="container-two-img-box"
            src={img2}
            alt="img2"
          />
        </div>
      </div>
    );
  }
}

export default ContainerTwo;
