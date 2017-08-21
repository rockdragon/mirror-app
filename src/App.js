import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter, Greeting } from './components'
import { Route, Link} from 'mirrorx'

// connect state with component
const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
    </div>
    <div>
      <nav>
        <ul>
          <li><Link to="/counter">/Counter</Link></li>
          <li><Link to="/greeting">/Greeting</Link></li>
        </ul>
      </nav>

      <div>
        <Route exact path="/counter" component={Counter}/>
        <Route exact path="/greeting" component={Greeting}/>
      </div>
    </div>
  </div>
)

export default App;
