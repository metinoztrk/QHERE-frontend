import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
const Store=createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    
)

ReactDOM.render(<BrowserRouter><Provider Store={Store} ><App /></Provider></BrowserRouter> , document.getElementById('root'));
serviceWorker.unregister();
