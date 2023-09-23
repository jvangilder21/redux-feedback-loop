import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

// reducers
// global for application 
const feelingRating = (state = 0, action) => {
    console.log("Hey! I'm the feelings reducer", state);

    if(action.type === 'ADD_FEELING_RATING') {
        return action.payload;
    }
    return state;
}

const understandingRating = (state = 0, action) => {
    console.log("Hey! I'm the feelings reducer", state);

    if(action.type === 'ADD_UNDERSTANDING_RATING') {
        return action.payload;
    }
    return state;
}

// Combine Reducers
const storeInstance = createStore(
    combineReducers({
      feelingRating,
      understandingRating,
    }),
    applyMiddleware(logger)
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
  </React.StrictMode>
);
