import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./Pages/Detail-page/DetailPage";
import Home from "./Pages/Home-Page/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<DetailPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
