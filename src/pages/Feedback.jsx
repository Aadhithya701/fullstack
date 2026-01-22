import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import { Rating } from '@mui/material';
import '../styles/Feedback.css';

export default function Feedback() {
  const { enrolledCourses, submitFeedback, getFeedbackForCourse } = useCourse();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCourse, setSelectedCourse] = useState(
    location.state?.courseId || (enrolledCourses[0]?.id || '')
  );
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCourse || !comment.trim()) {
      alert('Please select a course and enter feedback');
      return;
    }
    submitFeedback(parseInt(selectedCourse), rating, comment);
    setComment('');
    setRating(5);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const currentFeedbacks = selectedCourse
    ? getFeedbackForCourse(parseInt(selectedCourse))
    : [];

  return (
    <Container className="feedback-container py-5">
      <div className="feedback-header mb-5">
        <h1>Course Feedback</h1>
        <p>Share your feedback about the courses</p>
        <Button variant="secondary" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </Button>
      </div>

      {success && (
        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
          Thank you! Your feedback has been submitted successfully.
        </Alert>
      )}

      <Row className="g-4">
        <Col md={6}>
          <Card className="feedback-form-card">
            <Card.Body>
              <h5 className="mb-4">Submit Feedback</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Select Course</Form.Label>
                  <Form.Select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                  >
                    <option value="">-- Choose a course --</option>
                    {enrolledCourses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Rating</Form.Label>
                  <div>
                    <Rating
                      value={rating}
                      onChange={(e, newValue) => setRating(newValue)}
                      size="large"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Feedback</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Share your thoughts about this course..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit Feedback
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="feedback-list-card">
            <Card.Body>
              <h5 className="mb-4">Recent Feedback</h5>
              {currentFeedbacks.length === 0 ? (
                <p className="text-muted">No feedback yet for this course.</p>
              ) : (
                <div className="feedback-items">
                  {currentFeedbacks.map((feedback, idx) => (
                    <div key={idx} className="feedback-item mb-3 pb-3 border-bottom">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <Rating value={feedback.rating} readOnly size="small" />
                          <small className="text-muted d-block mt-1">
                            {feedback.date}
                          </small>
                        </div>
                      </div>
                      <p className="mt-2 mb-0">{feedback.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
