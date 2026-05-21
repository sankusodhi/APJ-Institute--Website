import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { testimonials as fallbackTestimonials } from '../../data/homepageData';
import api from '../../services/api';

export default function TestimonialsSection() {
  const [remoteTestimonials, setRemoteTestimonials] = useState([]);

  useEffect(() => {
    let isMounted = true;

    api.get('/testimonials')
      .then((response) => {
        if (!isMounted) return;
        const list = Array.isArray(response.data?.data) ? response.data.data : [];
        setRemoteTestimonials(list);
      })
      .catch(() => {
        if (isMounted) setRemoteTestimonials([]);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const displayTestimonials = remoteTestimonials.length
    ? remoteTestimonials.map((item, index) => ({
        name: item.name,
        role: item.course,
        quote: item.message,
        image: fallbackTestimonials[index % fallbackTestimonials.length]?.image,
      }))
    : fallbackTestimonials;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Testimonials</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">What our students say about their experience</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {displayTestimonials.map((item, index) => (
            <motion.article key={item.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-b from-white to-blue-50 p-6 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)]">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded-full object-cover ring-4 ring-white" loading="lazy" />
                <div>
                  <h3 className="font-bold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-blue-700">{item.role}</p>
                </div>
              </div>

              <div className="mt-5 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">“{item.quote}”</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}