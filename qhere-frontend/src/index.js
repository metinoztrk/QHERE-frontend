import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware'
import rootReducer from '../src/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
const Store=createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(reduxPromise(),thunk,logger)
    )
    
)

ReactDOM.render(<BrowserRouter><Provider store={Store} ><App/></Provider></BrowserRouter> , document.getElementById('root'));
serviceWorker.unregister();
