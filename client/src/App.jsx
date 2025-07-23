import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // ✅ You must import this!
import "react-toastify/dist/ReactToastify.css"; 

// Pages 
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="text-4xl">
      <BrowserRouter>
        <Routes>
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
