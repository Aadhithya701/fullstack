import { createContext, useState, useContext } from 'react';

const CourseContext = createContext();

const MOCK_COURSES = [
  { id: 1, name: 'React Fundamentals', instructor: 'John Doe', credits: 3, description: 'Learn React basics' },
  { id: 2, name: 'Advanced JavaScript', instructor: 'Jane Smith', credits: 4, description: 'Master JavaScript concepts' },
  { id: 3, name: 'Web Design Principles', instructor: 'Mike Johnson', credits: 3, description: 'UI/UX design fundamentals' },
  { id: 4, name: 'Database Design', instructor: 'Sarah Williams', credits: 4, description: 'SQL and database concepts' },
  { id: 5, name: 'APIs and REST', instructor: 'Tom Brown', credits: 3, description: 'Build RESTful APIs' },
];

export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [certificates, setCertificates] = useState([]);

  const enrollCourse = (courseId) => {
    const course = MOCK_COURSES.find(c => c.id === courseId);
    if (course && !enrolledCourses.find(c => c.id === courseId)) {
      const enrolledCourse = {
        ...course,
        enrollmentDate: new Date().toLocaleDateString(),
        isCompleted: false,
      };
      setEnrolledCourses([...enrolledCourses, enrolledCourse]);
      return true;
    }
    return false;
  };

  const unenrollCourse = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(c => c.id !== courseId));
    setCompletedCourses(completedCourses.filter(c => c !== courseId));
    setCertificates(certificates.filter(c => c.courseId !== courseId));
  };

  const markCourseAsCompleted = (courseId) => {
    if (!completedCourses.includes(courseId)) {
      setCompletedCourses([...completedCourses, courseId]);
      // Auto-generate certificate when course is completed
      generateCertificate(courseId);
    }
  };

  const generateCertificate = (courseId) => {
    const course = MOCK_COURSES.find(c => c.id === courseId);
    if (course && !certificates.find(c => c.courseId === courseId)) {
      const certificate = {
        courseId,
        courseName: course.name,
        instructor: course.instructor,
        credits: course.credits,
        completionDate: new Date().toLocaleDateString(),
        certificateId: `CERT-${Date.now()}-${courseId}`,
      };
      setCertificates([...certificates, certificate]);
      return certificate;
    }
    return null;
  };

  const getCertificate = (courseId) => {
    return certificates.find(c => c.courseId === courseId);
  };

  const isCourseCompleted = (courseId) => {
    return completedCourses.includes(courseId);
  };

  const submitFeedback = (courseId, rating, comment) => {
    setFeedbackList([...feedbackList, { courseId, rating, comment, date: new Date().toLocaleDateString() }]);
  };

  const getFeedbackForCourse = (courseId) => {
    return feedbackList.filter(f => f.courseId === courseId);
  };

  return (
    <CourseContext.Provider
      value={{
        courses: MOCK_COURSES,
        enrolledCourses,
        feedbackList,
        completedCourses,
        certificates,
        enrollCourse,
        unenrollCourse,
        markCourseAsCompleted,
        generateCertificate,
        getCertificate,
        isCourseCompleted,
        submitFeedback,
        getFeedbackForCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within CourseProvider');
  }
  return context;
};
