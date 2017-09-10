import React from 'react';
import ReactDOM from 'react-dom';

import 'react-quill/dist/quill.snow.css';
import 'react-select/dist/react-select.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
