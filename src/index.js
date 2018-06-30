import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contatinhos from './Contatinhos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Contatinhos />, document.getElementById('root'));
registerServiceWorker();
