import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './get';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './login';
import Register from './post';
import Get from './get';
import Delete from './delete';
import Update from './update';
import App from './App';
import Register1 from "./post1";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <App />
    {/* <Get />
    <Delete />
    <Update /> */}
    {/* <App /> */}
    
  </React.StrictMode>
);


reportWebVitals();
