import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "react-blogs-1231.firebaseapp.com",
  projectId: "react-blogs-1231",
  storageBucket: "react-blogs-1231.appspot.com",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

