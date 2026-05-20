import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalStudents: 250,
    totalCourses: 12,
    enrollments: 1840,
    announcements: 24,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    const role = localStorage.getItem('role');

    if (!token || role !== 'admin') {
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
    <div className="dashboard-container admin-dashboard">
      <nav className="dashboard-navbar admin-navbar">
        <div className="navbar-content">
          <h2 className="navbar-title">🔐 Admin Dashboard</h2>
          <div className="navbar-actions">
            <span className="user-name admin-badge">
              {user.fullName} (ADMIN)
            </span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header admin-header">
          <h1>Admin Control Panel</h1>
          <p>Manage institute and user accounts</p>
        </div>

        <div className="admin-stats">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>{stats.totalStudents}</h3>
              <p>Total Students</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <h3>{stats.totalCourses}</h3>
              <p>Active Courses</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{stats.enrollments}</h3>
              <p>Total Enrollments</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📢</div>
            <div className="stat-content">
              <h3>{stats.announcements}</h3>
              <p>Announcements</p>
            </div>
          </div>
        </div>

        <div className="admin-controls">
          <h2>Management Options</h2>
          <div className="dashboard-cards">
            <div className="dashboard-card admin-card">
              <div className="card-icon">👥</div>
              <h3>Manage Users</h3>
              <p>Add, edit, or remove user accounts</p>
              <button className="action-btn">Open</button>
            </div>

            <div className="dashboard-card admin-card">
              <div className="card-icon">📚</div>
              <h3>Manage Courses</h3>
              <p>Create and manage courses</p>
              <button className="action-btn">Open</button>
            </div>

            <div className="dashboard-card admin-card">
              <div className="card-icon">📋</div>
              <h3>View Enrollments</h3>
              <p>Monitor course enrollments</p>
              <button className="action-btn">Open</button>
            </div>

            <div className="dashboard-card admin-card">
              <div className="card-icon">📢</div>
              <h3>Post Announcements</h3>
              <p>Send announcements to students</p>
              <button className="action-btn">Open</button>
            </div>

            <div className="dashboard-card admin-card">
              <div className="card-icon">📊</div>
              <h3>View Reports</h3>
              <p>Analytics and reports</p>
              <button className="action-btn">Open</button>
            </div>

            <div className="dashboard-card admin-card">
              <div className="card-icon">⚙️</div>
              <h3>Settings</h3>
              <p>Configure system settings</p>
              <button className="action-btn">Open</button>
            </div>
          </div>
        </div>

        <div className="dashboard-info admin-info">
          <h2>Admin Profile</h2>
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
              <p className="role-badge admin-role">Administrator</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
