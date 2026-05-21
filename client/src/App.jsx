import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AuthSplitScreen from './pages/AuthSplitScreen';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/auth" element={<AuthSplitScreen />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import Faculty from './pages/Faculty';
import About from './pages/About';
import FacilitiesPage from './pages/FacilitiesPage';
import MainContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';
import AuthSplitScreen from './pages/AuthSplitScreen';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import StudentLogin from './pages/student/StudentLogin';
import StudentSignup from './pages/student/StudentSignup';
import StudentDashboard from './pages/student/StudentDashboard';
import ExamLayout from './layouts/ExamLayout';
import ExamDashboard from './pages/exam/ExamDashboard';
import ExamLoginPage from './pages/exam/ExamLoginPage';
import ExamStudentSignupPage from './pages/exam/ExamStudentSignupPage';
import ResultsPage from './pages/exam/ResultsPage';
import NoticesPage from './pages/exam/NoticesPage';
import FormsPage from './pages/exam/FormsPage';
import ContactPage from './pages/exam/ContactPage';
import ExamAdminPanel from './pages/exam/AdminPanel';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import StudentPrivateRoute from './routes/StudentPrivateRoute';
import ExamProtectedRoute from './routes/ExamProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/contact" element={<MainContactPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/auth" element={<AuthSplitScreen />} />
          <Route path="/academics/faculty" element={<Faculty />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route
            path="/student/dashboard"
            element={
              <StudentPrivateRoute>
                <StudentDashboard />
              </StudentPrivateRoute>
            }
          />

          {/* Examination dashboard routes */}
          <Route path="/examination-dashboard" element={<ExamLayout />}>
            <Route index element={<ExamDashboard />} />
            <Route path="student-login" element={<ExamLoginPage role="student" />} />
            <Route path="student-signup" element={<ExamStudentSignupPage />} />
            <Route path="admin-login" element={<ExamLoginPage role="admin" />} />
            <Route path="teacher-login" element={<ExamLoginPage role="teacher" />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="notices" element={<NoticesPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route
              path="admin-panel"
              element={
                <ExamProtectedRoute roles={["admin"]}>
                  <ExamAdminPanel />
                </ExamProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
