import React, { useEffect, useState } from 'react';
import api from '../services/api';

function pickList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.notifications)) return payload.notifications;
  return [];
}

export default function Notifications() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get('/notifications');
        setItems(pickList(res.data));
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load notifications.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
      <p className="mt-2 text-slate-600">Live notices and important announcements.</p>

      {loading && <p className="mt-6 text-slate-500">Loading notifications...</p>}
      {error && <p className="mt-6 text-red-600">{error}</p>}

      <section className="mt-6 space-y-3">
        {items.map((item) => (
          <article key={item.id} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base font-semibold text-slate-900">{item.title}</h2>
              <span className="text-xs text-slate-500">
                {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{item.message || item.description}</p>
          </article>
        ))}
      </section>

      {!loading && !error && !items.length && <p className="mt-6 text-slate-500">No notifications yet.</p>}
    </main>
  );
}
