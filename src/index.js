import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0ProviderWithNavigate} from "./auth0-provider-with-navigate";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Routes>
          <Route path = "/" element = {<App />}/>
        </Routes>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);


