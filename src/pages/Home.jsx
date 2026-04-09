import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Home.css';

export default function Home() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="home-container">
      <Container fluid className="home-content">
        <div className="hero-section">
          <h1>Student Course Management Portal</h1>
          <p>Manage your academic journey with ease</p>
          <div className="cta-buttons">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className="btn btn-success btn-lg"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        </div>

        <div className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h4>Browse Courses</h4>
              <p>Explore a wide range of courses offered</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✏️</div>
              <h4>Easy Enrollment</h4>
              <p>Quickly enroll in your desired courses</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h4>Give Feedback</h4>
              <p>Share your experience and rate courses</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>Track Progress</h4>
              <p>Monitor your enrolled courses anytime</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
