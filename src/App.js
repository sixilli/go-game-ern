import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Canvas from './components/canvas';

function App() {
  // add into Router
  // <Navbar />
  // <br/>
  return (
    <Router>
      <Route path="/" exact component={Canvas} size={9} color={'black'} />
    </Router>
  )
}

export default App;
