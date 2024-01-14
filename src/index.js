import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAiXl3XLYiOCVu2TyED3QbAYvBKSjcskzE",
  authDomain: "react-blogs-d3631.firebaseapp.com",
  projectId: "react-blogs-d3631",
  storageBucket: "react-blogs-d3631.appspot.com",
  messagingSenderId: "876691280334",
  appId: "1:876691280334:web:3735a22d256cc3d1165b9f"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

