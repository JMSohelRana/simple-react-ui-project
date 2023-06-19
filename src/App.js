import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/app.scss";
import "./styles/colors.scss";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
