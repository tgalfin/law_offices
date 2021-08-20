import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
          <TopBar />
          <NavBar />
          <div style={{ overflow: 'hidden' }}>
            <Switch>
              <Route path='/' component={Home} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
