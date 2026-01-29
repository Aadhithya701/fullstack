import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import Certificate from '../components/Certificate';
import '../styles/EnrolledCourses.css';

export default function EnrolledCourses() {
  const { enrolledCourses, unenrollCourse, markCourseAsCompleted, getCertificate, isCourseCompleted } = useCourse();
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  const handleUnenroll = (courseId) => {
    if (window.confirm('Are you sure you want to unenroll from this course?')) {
      unenrollCourse(courseId);
      alert('Successfully unenrolled from course!');
    }
  };

  const handleCompleteCourse = (courseId) => {
    if (window.confirm('Mark this course as completed?')) {
      markCourseAsCompleted(courseId);
      const cert = getCertificate(courseId);
      if (cert) {
        setSelectedCertificate(cert);
      }
    }
  };

  const handleViewCertificate = (courseId) => {
    const cert = getCertificate(courseId);
    if (cert) {
      setSelectedCertificate(cert);
    }
  };

  return (
    <Container className="enrolled-container py-5">
      <div className="enrolled-header mb-5">
        <h1>My Enrolled Courses</h1>
        <p>Courses you are currently enrolled in</p>
        <Button variant="secondary" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </Button>
      </div>

      {enrolledCourses.length === 0 ? (
        <Alert variant="info">
          You are not enrolled in any courses yet.{' '}
          <Alert.Link href="/courses">Browse available courses</Alert.Link>
        </Alert>
      ) : (
        <Row className="g-4">
          {enrolledCourses.map((course) => {
            const isCompleted = isCourseCompleted(course.id);
            const certificate = getCertificate(course.id);

            return (
              <Col md={6} lg={4} key={course.id}>
                <Card className={`enrolled-card h-100 ${isCompleted ? 'completed-card' : ''}`}>
                  <Card.Body>
                    <div className="enrolled-header mb-3">
                      <Card.Title>{course.name}</Card.Title>
                      <div className="badge-group">
                        <Badge bg="success">Enrolled</Badge>
                        {isCompleted && <Badge bg="info">Completed</Badge>}
                      </div>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">
                      {course.instructor}
                    </Card.Subtitle>
                    <p className="mb-2">
                      <strong>Credits:</strong> {course.credits}
                    </p>
                    <p className="mb-3">
                      <strong>Enrolled:</strong> {course.enrollmentDate}
                    </p>
                    <Card.Text>{course.description}</Card.Text>

                    {isCompleted && (
                      <div className="completion-banner">
                        <span>✓ Course Completed!</span>
                      </div>
                    )}

                    <div className="button-group">
                      <Button
                        variant="info"
                        size="sm"
                        onClick={() => navigate('/feedback', { state: { courseId: course.id } })}
                      >
                        Give Feedback
                      </Button>

                      {!isCompleted ? (
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => handleCompleteCourse(course.id)}
                        >
                          Mark Complete
                        </Button>
                      ) : certificate ? (
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => handleViewCertificate(course.id)}
                        >
                          View Certificate
                        </Button>
                      ) : null}

                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleUnenroll(course.id)}
                      >
                        Unenroll
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
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
