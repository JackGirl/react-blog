import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import MyHeader from './components/header/MyHeader';
import MyWrapper from './components/wrapper/MyWrapper';

class App extends Component {
  render() {
    return (
      <Router>
        <MyHeader />
        <MyWrapper />
      </Router>
    );
  }
}

export default App;
