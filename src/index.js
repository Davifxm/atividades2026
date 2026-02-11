import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tela01 from './views/tela01';
import Tela02 from './views/tela02';
import Tela03 from './views/tela03';
import Tela04 from './views/tela04';
import Tela05 from './views/tela05';
import './css/tela1.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Tela01 />
    <Tela02/>
    <Tela03 />
    <Tela04/>
    <Tela05 />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
