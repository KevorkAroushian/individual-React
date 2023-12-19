import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContainerOne from './components/header/ContainerOne';
import ContainerTwo from './components/ourstory/ContainerTwo';
import ContainerThree from './components/start1/ContainerThree';
import ContainerFour from './components/start2/ContainerFour';
import ContainerFive from './components/start3/ContainerFive';
import ContainerSix from './components/start4/ContainerSix';
import ContainerSeven from './components/ending/ContainerSeven';


const renderComponents = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  ReactDOM.render(
    <React.StrictMode>
      <ContainerOne />
    </React.StrictMode>,
    document.getElementById('container-one-root')
  );

  ReactDOM.render(
    <React.StrictMode>
      <ContainerTwo />
    </React.StrictMode>,
    document.getElementById('container-two-root')
  );

  ReactDOM.render(
    <React.StrictMode>
      <ContainerThree />
    </React.StrictMode>,
    document.getElementById('container-three-root')
  );

  ReactDOM.render(
    <React.StrictMode>
      <ContainerFour />
    </React.StrictMode>,
    document.getElementById('container-four-root')
  );

  ReactDOM.render(
    <React.StrictMode>
      <ContainerFive />
    </React.StrictMode>,
    document.getElementById('container-five-root')
  );

  ReactDOM.render(
    <React.StrictMode>
      <ContainerSix />
    </React.StrictMode>,
    document.getElementById('container-six-root')
  );

  ReactDOM.render(
    <React.StrictMode>
      <ContainerSeven />
    </React.StrictMode>,
    document.getElementById('container-seven-root')
  );
};

renderComponents();
