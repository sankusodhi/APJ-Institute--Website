import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {
  const [counts, setCounts] = useState({});
  const { logout } = useAuth();

  useEffect(() => {
    async function load() {
      try {
        const [inq, noti, events, gallery, faculty] = await Promise.all([
          api.get('/inquiries'),
          api.get('/notifications'),
          api.get('/events'),
          api.get('/gallery'),
          api.get('/faculty'),
        ]);

        setCounts({
          inquiries: inq.data.length || 0,
          notifications: noti.data.length || 0,
          events: events.data.length || 0,
          gallery: gallery.data.length || 0,
          faculty: faculty.data.length || 0,
        });
      } catch (err) {
        console.error('Failed to load dashboard data', err);
      }
    }
    load();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Inquiries" value={counts.inquiries} />
        <Card title="Notifications" value={counts.notifications} />
        <Card title="Events" value={counts.events} />
        <Card title="Gallery" value={counts.gallery} />
        <Card title="Faculty" value={counts.faculty} />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-3xl font-bold">{value ?? 0}</div>
    </div>
  );
}
