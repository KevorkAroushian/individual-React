import React from 'react';
import ContainerOne from './components/header/ContainerOne';
import ContainerTwo from './components/ourstory/ContainerTwo';
import ContainerThree from './components/start1/ContainerThree';
import ContainerFour from './components/start2/ContainerFour';
import ContainerFive from './components/start3/ContainerFive';
import ContainerSix from './components/start4/ContainerSix';
import ContainerSeven from './components/ending/ContainerSeven';
import './components/header/index1.css';
import './components/ourstory/index2.css';
import './components/start1/index3.css';
import './components/start2/index4.css';
import './components/start3/index5.css';
import './components/start4/index6.css';
import './components/ending/index7.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ContainerOne />
        <ContainerTwo />
        <ContainerThree />
        <ContainerFour />
        <ContainerFive />
        <ContainerSix />
        <ContainerSeven />
      </div>
    );
  }
}

export default App;
