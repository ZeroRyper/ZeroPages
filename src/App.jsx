import Navbar from "./components/Navbar";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RegisterProject from "./components/RegisterProject";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerP" element={<RegisterProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
