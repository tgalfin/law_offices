import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import BottomBar from './components/BottomBar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
        {/* <BottomBar /> */}
      </div>
    </Router>
  );
}

export default App;
