import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/loginScreens";
import StockScreen from "./screens/stockScreens";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/stock" element={<StockScreen />} />
      </Routes>
    </Router>
  );
};

export default App;