import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <button onClick={() => navigate("/")}>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" />
        Home
      </button>

      <button onClick={() => navigate("/about")}>
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" alt="About" />
        About
      </button>

      <button onClick={() => navigate("/contact")}>
        <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Contact" />
        Contact
      </button>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavigationButtons />

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
