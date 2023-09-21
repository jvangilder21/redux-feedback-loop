import React from 'react';
import axios from 'axios';
import './App.css';

//Components
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

// react & redux imports
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {HashRouter as Router, Route, Link, useHistory} from "react-router-dom";


function App() {

  // const dispatch = useDispatch();


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>

      <main>
      <Router>
        <Route exact path="/" component={Home} />
        
      <ul>
        <li>
          <Link to="/feeling">Feelings Page</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/understanding">Understanding Page</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/support">Support Page</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/comments">Comments Page</Link>
        </li>
      </ul>
     


      </Router>
      </main>

      </header>
    </div>
  );
}

export default App;
