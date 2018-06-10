import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

import App from 'src/app';
import registerServiceWorker from 'src/registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
