import React from 'react';
import img7 from './img7.jpg'


class ContainerSeven extends React.Component {
  render() {
    return (
      <div className="container-seven">
        <div>
          <img className="container-seven-img" src={img7} alt="img7" />
        </div>
        <div className="container-seven-header-text">
          STUDIO<br />MOONE
        </div>
        <div className="container-seven-footer">
          <h1 className="Get">Get in Touch</h1>
          <p className="paragraph">
            Mailing Address <br />
            123 Anywhere St.Any City,State, <br />
            Country 12345
          </p>
          <p className="paragraph">
            Email Address <br />
            hello@realygreatsite.com
          </p>
          <p className="paragraph">
            Phone Number <br />
            (123)456 7890
          </p>
        </div>
      </div>
    );
  }
}

export default ContainerSeven;
