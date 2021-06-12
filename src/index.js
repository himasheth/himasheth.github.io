  
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/styles.scss"
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));
console.log(process.env.PUBLIC_URL);
