import React from 'react';
import img61 from './img61.jpg'
import img62 from './img62.jpg'
import img63 from './img63.jpg'


class ContainerSix extends React.Component {
  render() {
    return (
      <div className="container-six">
        <div className="container-six-header">
          <h1>Moone Light</h1>
        </div>
      
        <div className="container-six-image-box">
          <div>
            <img className="container-six-img1" src={img61} alt="img61" />
            <p>
              "To celebrate a work milestone, I <br /> rewarded myself a necklace from
              <br /> Studio Moone and I couldn't be <br /> happier with my decision."
            </p>
          </div>
          <div>
            <img className="container-six-img2" src={img62} alt="img62" />
            <p>
              I love my engagement ring from <br /> Studio Moone because my fiancé
              <br /> worked closely with them to design <br /> the ring literally just
              for me!
            </p>
          </div>
          <div>
            <img className="container-six-img3" src={img63} alt="img63" />
            <p>
              My mom loved the earrings I gave <br /> her for her birthday. She loved
              that it <br /> was handmade and personalized. <br /> Thinking of
              getting a pair for <br /> myself, too!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerSix;
