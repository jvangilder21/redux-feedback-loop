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
        // console.log(`THE FEELING RATING WAS ${action.payload}`);
        return action.payload;
    }
    return state;
}

const understandingRating = (state = 0, action) => {
    console.log("Hey! I'm the understanding reducer", state);

    if(action.type === 'ADD_UNDERSTANDING_RATING') {
        return action.payload;
    }
    return state;
}

const supportRating = (state = 0, action) => {
    console.log("Hey! I'm the support reducer", state);

    if(action.type === 'ADD_SUPPORT_RATING') {
        return action.payload;
    }
    return state;
}

const commentsRating = (state = '', action) => {
    console.log("Hey! I'm the comments reducer", state);

    if(action.type === 'ADD_COMMENTS_RATING') {
        return action.payload;
    }
    return state;
}

// Combine Reducers
const storeInstance = createStore(
    combineReducers({
      feelingRating,
      understandingRating,
      supportRating,
      commentsRating,
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
