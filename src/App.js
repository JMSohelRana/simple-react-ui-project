import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
