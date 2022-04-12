import React from 'react';
import BasicForm from './component/Basicform';
import './App.css';
import Home from './component/Home';
import Register from './component/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
        <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BasicForm/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
