import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './css/all.css'
// import './css/baguetteBox.min.css'
// import './css/bootsnav.css'
// import './css/bootstrap-select.css'
// import './css/bootstrap.min.css'
// import './css/style.css'
// import './css/responsive.css'
// import './css/custom.css'
// import './css/superslides.css'
import './css/carousel-ticker.css'
// import './css/code_animate.css'
// import './css/jquery-ui.css'
import './css/owl.carousel.min.css'


import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
