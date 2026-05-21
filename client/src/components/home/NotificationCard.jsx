import { motion } from 'framer-motion';
import { FaCalendarAlt, FaDownload, FaEye, FaExclamationTriangle, FaFilePdf } from 'react-icons/fa';

export default function NotificationCard({ item, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white/85 p-5 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.4)] backdrop-blur-xl transition"
    >
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-600 via-sky-500 to-red-500" />

      <div className="flex flex-wrap items-start justify-between gap-3 pl-2">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {item.isNew && (
              <motion.span
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-sm"
              >
                NEW
              </motion.span>
            )}
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700">
              {item.category}
            </span>
            {item.important && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700">
                <FaExclamationTriangle />
                Important
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <FaCalendarAlt className="text-blue-600" />
            {item.date}
          </div>
        </div>

        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-200 transition group-hover:scale-105">
          <FaFilePdf />
        </div>
      </div>

      <div className="mt-4 pl-2">
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3 pl-2">
        <a
          href={item.viewUrl}
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
        >
          <FaEye />
          View
        </a>
        <a
          href={item.pdfUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
        >
          <FaDownload />
          Download PDF
        </a>
      </div>
    </motion.article>
  );
}