import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { galleryImages } from '../../data/homepageData';
import api from '../../services/api';
import { resolveMediaUrl } from '../../utils/media';

function pickGalleryList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

const fallbackGallery = galleryImages.map((image, index) => ({
  id: `gallery-fallback-${index + 1}`,
  title: `Institute Image ${index + 1}`,
  category: index === 0 ? 'Campus' : index === 1 ? 'Building' : index === 2 ? 'Lab' : 'Classroom',
  image,
}));

export default function GallerySection() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState({ open: false, src: null, meta: null });

  useEffect(() => {
    let isMounted = true;

    api
      .get('/gallery?limit=20&active=true')
      .then((response) => {
        if (!isMounted) return;
        setGalleryItems(pickGalleryList(response.data));
      })
      .catch(() => {
        if (isMounted) setGalleryItems([]);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  function openLightbox({ src, meta = null }) {
    setLightbox({ open: true, src, meta });
  }

  function closeLightbox() {
    setLightbox({ open: false, src: null, meta: null });
  }

  const displayItems = galleryItems.length ? galleryItems : fallbackGallery;

  return (
    <section id="gallery" className="bg-medical-grid py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Gallery</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">A glimpse into institute life and medical training</h2>
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
            <span>{loading ? 'Loading gallery...' : `${displayItems.length} moments`}</span>
            <span className="font-medium text-blue-700">Campus highlights</span>
          </div>

          <div className="gallery-track gallery-autoscroll no-scrollbar">
            {displayItems.map((item, index) => {
              const image = resolveMediaUrl(item.image);
              const title = item.title || `Institute Image ${index + 1}`;
              const category = item.category || 'Gallery';

              return (
                <motion.div
                  key={item.id || image || title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="gallery-item"
                >
                  <div
                    className="gallery-card meta"
                    onClick={() => openLightbox({ src: image, meta: { title, category } })}
                    role="button"
                    tabIndex={0}
                  >
                    <img src={image} alt={title} className="gallery-img kenburns" loading="lazy" />
                    <div className="gallery-caption">
                      <span className="block text-[11px] uppercase tracking-[0.28em] text-blue-300">{category}</span>
                      <span className="mt-1 block text-sm font-semibold text-white">{title}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
            <img className="lightbox-img" src={lightbox.src} alt={lightbox.meta?.title || 'Gallery'} />
            {lightbox.meta && (
              <div className="lightbox-meta">
                <div className="text-sm font-semibold">{lightbox.meta.title}</div>
                {lightbox.meta.category ? <div className="mt-1 text-xs uppercase tracking-[0.3em] text-blue-200">{lightbox.meta.category}</div> : null}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}