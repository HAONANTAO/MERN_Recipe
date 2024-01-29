import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={"./pages/auth.js"}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
