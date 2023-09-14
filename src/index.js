import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css';
import { Provider } from 'react-redux';
import store from '../src/Component/store/store.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<Provider store={store}>
   <App />
 </Provider>
);

