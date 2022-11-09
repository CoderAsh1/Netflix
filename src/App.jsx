import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/login/Login";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Signup from "./pages/signUp/SignUp";
AOS.init({
  duration: 400,
});

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className="App">
      <marquee>
        &#9889; Get 50% discount on Yearly Subscription- Only for Today &#9889;
      </marquee>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
