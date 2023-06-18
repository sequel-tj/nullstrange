import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Beats from "./pages/Beats";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Beats" element={<Beats/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
}

export default App;
