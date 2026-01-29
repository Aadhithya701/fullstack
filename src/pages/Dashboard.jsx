import { Container, Row, Col, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <Container fluid>
        <div className="dashboard-header">
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Welcome, {user?.name}!</h1>
              <p>Student Course Management Portal</p>
            </Col>
            <Col md={6} className="text-end">
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            </Col>
          </Row>
        </div>

        <Row className="mt-5 g-4">
          <Col md={6} lg={4}>
            <div className="dashboard-card">
              <div className="card-icon">📚</div>
              <h5>View Courses</h5>
              <p>Browse available courses</p>
              <Button variant="primary" onClick={() => navigate('/courses')}>
                Explore
              </Button>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="dashboard-card">
              <div className="card-icon">📋</div>
              <h5>Enrolled Courses</h5>
              <p>View your enrolled courses</p>
              <Button variant="primary" onClick={() => navigate('/enrolled')}>
                View
              </Button>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="dashboard-card">
              <div className="card-icon">⭐</div>
              <h5>Give Feedback</h5>
              <p>Provide feedback on courses</p>
              <Button variant="primary" onClick={() => navigate('/feedback')}>
                Submit
              </Button>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="dashboard-card">
              <div className="card-icon">🏆</div>
              <h5>My Certificates</h5>
              <p>View your earned certificates</p>
              <Button variant="primary" onClick={() => navigate('/certificates')}>
                View
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
