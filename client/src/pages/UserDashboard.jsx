import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token) {
      navigate('/login');
      return;
    }

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/');
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <nav className="dashboard-navbar">
        <div className="navbar-content">
          <h2 className="navbar-title">Student Dashboard</h2>
          <div className="navbar-actions">
            <span className="user-name">{user.fullName}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Welcome, {user.fullName}! 👋</h1>
          <p>Your student portal</p>
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <div className="card-icon">📚</div>
            <h3>My Courses</h3>
            <p>View and manage your enrolled courses</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📋</div>
            <h3>Assignments</h3>
            <p>Check your pending assignments</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📊</div>
            <h3>Grades</h3>
            <p>View your academic performance</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📅</div>
            <h3>Schedule</h3>
            <p>View your class schedule</p>
          </div>
        </div>

        <div className="dashboard-info">
          <h2>Profile Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Full Name:</label>
              <p>{user.fullName}</p>
            </div>
            <div className="info-item">
              <label>Email:</label>
              <p>{user.email}</p>
            </div>
            <div className="info-item">
              <label>Phone:</label>
              <p>{user.phone}</p>
            </div>
            <div className="info-item">
              <label>Account Type:</label>
              <p className="role-badge">Student</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
