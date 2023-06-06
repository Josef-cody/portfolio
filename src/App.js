import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/projects"
function App() {
  
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
