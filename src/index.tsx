import * as React from 'react';
import * as ReactDOM from 'react-dom';

// assets
import 'src/index.css';
import registerServiceWorker from 'src/shared/registerServiceWorker';

// components
import App from 'src/app';

ReactDOM.render(
	<App />,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
