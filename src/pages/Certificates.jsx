import { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import Certificate from '../components/Certificate';
import '../styles/Certificates.css';

export default function Certificates() {
  const { certificates, completedCourses, courses } = useCourse();
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  const completedCoursesData = courses.filter(c => completedCourses.includes(c.id));

  return (
    <Container className="certificates-container py-5">
      <div className="certificates-header mb-5">
        <h1>My Certificates</h1>
        <p>View your earned course completion certificates</p>
        <Button variant="secondary" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </Button>
      </div>

      {certificates.length === 0 ? (
        <Alert variant="info">
          You haven't completed any courses yet.{' '}
          <Alert.Link href="/enrolled">View your enrolled courses</Alert.Link>
        </Alert>
      ) : (
        <>
          <Row className="mb-4">
            <Col md={4}>
              <div className="stats-card">
                <div className="stats-number">{certificates.length}</div>
                <div className="stats-label">Certificates Earned</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="stats-card">
                <div className="stats-number">{completedCoursesData.reduce((sum, c) => sum + c.credits, 0)}</div>
                <div className="stats-label">Total Credits</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="stats-card">
                <div className="stats-number">{Math.round((certificates.length / completedCoursesData.length) * 100)}%</div>
                <div className="stats-label">Completion Rate</div>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            {certificates.map((cert) => (
              <Col md={6} lg={4} key={cert.courseId}>
                <Card className="certificate-card">
                  <Card.Body>
                    <div className="cert-badge">
                      <span>✓</span>
                    </div>
                    <Card.Title className="cert-course-name">
                      {cert.courseName}
                    </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                      {cert.instructor}
                    </Card.Subtitle>

                    <div className="cert-info">
                      <div className="cert-info-item">
                        <span className="cert-info-label">Credits:</span>
                        <span className="cert-info-value">{cert.credits}</span>
                      </div>
                      <div className="cert-info-item">
                        <span className="cert-info-label">Completed:</span>
                        <span className="cert-info-value">{cert.completionDate}</span>
                      </div>
                    </div>

                    <div className="cert-id-display">
                      <small>{cert.certificateId}</small>
                    </div>

                    <Button
                      variant="primary"
                      className="w-100 mt-3"
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      View Certificate
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {selectedCertificate && (
        <Certificate
          certificate={selectedCertificate}
          userName={user?.name}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </Container>
  );
}
