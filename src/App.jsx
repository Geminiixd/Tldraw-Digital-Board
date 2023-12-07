import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [showFirstComponent, setShowFirstComponent] = useState(true);

  const handleButtonClick = () => {
    setShowFirstComponent(!showFirstComponent);
  };

  return (
    <div className="app-container">
      {showFirstComponent ? (
        <FirstComponent dissolve={handleButtonClick} />
      ) : (
        <SecondComponent />
      )}
    </div>
  );
};

const FirstComponent = ({ dissolve }) => {
  return (
    <div className="fade-component">
      <p>Developed By Aras Sahraiian</p>
      <button onClick={dissolve}>Enter The Board</button>
    </div>
  );
};

FirstComponent.propTypes = {
  dissolve: PropTypes.func.isRequired,
};

const SecondComponent = () => {
  return (	<div style={{ position: 'fixed', inset: 0 }}>
  <Tldraw />
</div>);
};

export default App;
