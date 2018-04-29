import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import registerServiceWorker from 'registerServiceWorker';
import Root from 'Root';
import App from 'containers/App'

ReactDOM.render(<Root component={App} />, document.getElementById('root'));
registerServiceWorker();
