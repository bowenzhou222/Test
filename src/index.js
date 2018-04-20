import React from 'react';
import ReactDOM from 'react-dom';
import Index from './router';
import { history } from './router';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Index store={store}/>, document.getElementById('root'));
    registerServiceWorker();
});