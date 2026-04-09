import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CourseProvider } from './context/CourseContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import EnrolledCourses from './pages/EnrolledCourses';
import Feedback from './pages/Feedback';
import Certificates from './pages/Certificates';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CourseProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/enrolled" element={<EnrolledCourses />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </CourseProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
