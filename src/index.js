import React from 'react';
import ReactDOM from 'react-dom';
import Index from './router';
import { history } from './router';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './assets/styles.css';
import '../node_modules/react-intl-tel-input/dist/libphonenumber.js';
import '../node_modules/react-intl-tel-input/dist/main.css';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Index store={store}/>, document.getElementById('root'));
    registerServiceWorker();
});