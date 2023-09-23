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
      </header>

      <main>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/feeling" component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
    


      </Router>
      </main>

      

    <div>

    
    
    </div>

    </div>
  );
}

export default App;
