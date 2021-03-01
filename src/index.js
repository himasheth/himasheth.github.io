  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Project } from "./components/Project.js";
import LearnButton from './components/Button';
import { Extracurricular } from "./components/Extracurricular";
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));
