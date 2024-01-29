import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { SavedRecipe } from "./pages/saved-recipe";
import { Navbar } from "./components/navbar";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/create-recipe" element={<CreateRecipe />}></Route>
          <Route path="/save-recipe" element={<SavedRecipe />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
