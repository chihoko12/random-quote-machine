import React from 'react';
import QuoteBox from './QuoteBox';
import './App.css';

const App = () => {
  return (
    <div id="wrapper" className="App">
      <QuoteBox />
      <div className="footer">
        by <a href="https://codepen.io/chihoko12/pen/gOJxKwW">chihoko</a>
      </div>
    </div>
  );
}

export default App;
