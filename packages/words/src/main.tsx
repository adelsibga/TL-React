import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = document.querySelector('#root');
if (root !== null) {
  // eslint-disable-next-line functional/no-expression-statements
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );
}
