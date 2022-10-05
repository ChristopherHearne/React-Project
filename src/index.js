import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Server from './apis/server.js'


reportWebVitals();

Server()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);