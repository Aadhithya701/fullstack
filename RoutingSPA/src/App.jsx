import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <p>Welcome to the Home page of our SPA.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>About Page</h2>
      <p>This page explains the concept of client-side routing.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <p>You can reach us via email or phone.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>React Router Demo</h1>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
