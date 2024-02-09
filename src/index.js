import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/components/_nav.scss";
import "./styles/components/_logo.scss";
import "./styles/base/_body.scss";
import "./styles/base/_typography.scss";
import "./styles/components/_header.scss";
import "./styles/components/_footer.scss";
import "./styles/components/_hero-card.scss";
import "./styles/components/_more-info.scss";
import "./styles/components/_search-bar.scss";
import "./styles/components/_slick.scss";
import "./styles/pages/_about-page.scss";
import "./styles/pages/_movie-page.scss";
import "./styles/pages/_search-page.scss";
import "./styles/components/_slick.scss";
import "./styles/components/_movieCards.scss";
import "./styles/components/_movies-container.scss";
import "./styles/pages/_home.scss";
import "./styles/pages/_favorites-page.scss";



import reportWebVitals from './reportWebVitals';
import AppRouter from './router/AppRouter';
import { useActionData } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
