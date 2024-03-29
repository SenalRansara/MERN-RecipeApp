// this is app.js file 
//2022-11-2

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/view/recipeView";
import Header from "./components/Header";
import View from "./components/view/ViewRecipe";

function App() {
  return (

    <Router>
      <Header />

      <Routes>
        {/* <Home /> */}
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/ViewRecipe/:name/:ing/:des" element={<View/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
