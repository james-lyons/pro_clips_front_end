import React from 'react';
import App from './App';
import store from './store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>, document.getElementById('root')
);
