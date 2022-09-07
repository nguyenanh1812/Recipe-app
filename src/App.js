import React, { useState } from "react";
// import { Counter } from './features/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./recipe-components/Home";
import Header from "./recipe-components/Layout/Header";
import ListItem from "./recipe-components/ListItem";
import Recipes from "./recipe-components/Recipes";

function App() {
  const [arrListRecipe, setArrListRecipe] = useState([])
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Recipes arrListRecipe={arrListRecipe} setArrListRecipe={setArrListRecipe}/>} />
          <Route path="/list-item" element={<ListItem />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
