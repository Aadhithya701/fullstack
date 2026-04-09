import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// ✅ import image from assets
import profilePic from "./assets/Profile Pic.jpg";
function Profile() {
  return (
    <div className="page">
            <img
        src={profilePic}
        alt="profile"
        className="profile-pic"
            />
        alt="profile"
        className="profile-pic"
      />
      <h2 className="name">S.Aadhithya</h2>
      <p className="designation">Data Analyst</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page">
      <h2 className="section-title">My Skills</h2>
      <ul className="skills">
        <li>React.js</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container card">
        <nav className="navbar">
          <Link to="/">Profile</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
