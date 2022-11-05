import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
