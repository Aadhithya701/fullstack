import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import '../styles/Courses.css';

export default function Courses() {
  const { courses, enrollCourse } = useCourse();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  const handleEnroll = (courseId) => {
    const success = enrollCourse(courseId);
    if (success) {
      alert('Successfully enrolled in course!');
    }
  };

  return (
    <Container className="courses-container py-5">
      <div className="courses-header mb-5">
        <h1>Available Courses</h1>
        <p>Choose courses to enroll in</p>
        <Button variant="secondary" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </Button>
      </div>

      <Row className="g-4">
        {courses.map((course) => (
          <Col md={6} lg={4} key={course.id}>
            <Card className="course-card h-100">
              <Card.Body>
                <div className="course-header mb-3">
                  <Card.Title>{course.name}</Card.Title>
                  <Badge bg="info">{course.credits} Credits</Badge>
                </div>
                <Card.Subtitle className="mb-2 text-muted">
                  {course.instructor}
                </Card.Subtitle>
                <Card.Text className="course-description">
                  {course.description}
                </Card.Text>
                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => handleEnroll(course.id)}
                >
                  Enroll Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
