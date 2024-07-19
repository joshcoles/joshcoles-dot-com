import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Firebase initiation
  var config = {
    apiKey: "AIzaSyDfFKpx1FEFBXvTUlybmRHJU67WJ9A9-zE",
    authDomain: "project--3958760679028477201.firebaseapp.com",
    databaseURL: "https://project--3958760679028477201.firebaseio.com",
    projectId: "project--3958760679028477201",
    storageBucket: "project--3958760679028477201.appspot.com",
    messagingSenderId: "971981900666"
  };
  initializeApp(config);


