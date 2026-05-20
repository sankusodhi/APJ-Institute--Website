import React, { useEffect, useMemo, useState } from 'react';
import api from '../services/api';

function pickList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.galleries)) return payload.galleries;
  return [];
}

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get('/gallery');
        setItems(pickList(res.data));
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load gallery.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const content = useMemo(() => {
    if (loading) return <p className="text-slate-500">Loading gallery...</p>;
    if (error) return <p className="text-red-600">{error}</p>;
    if (!items.length) return <p className="text-slate-500">No gallery images available.</p>;

    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const image = item.image || item.imageUrl || item.url || item.path;
          return (
            <article key={item.id || image} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {image ? (
                <img src={image} alt={item.title || 'Gallery image'} className="h-56 w-full object-cover transition duration-300 hover:scale-105" />
              ) : (
                <div className="flex h-56 items-center justify-center bg-slate-100 text-sm text-slate-500">No image</div>
              )}
            </article>
          );
        })}
      </div>
    );
  }, [error, items, loading]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Gallery</h1>
      <p className="mt-2 text-slate-600">Campus life, practical sessions, and events.</p>
      <section className="mt-6">{content}</section>
    </main>
  );
}
