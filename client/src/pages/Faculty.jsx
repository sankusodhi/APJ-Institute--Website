import FacultySection from '../components/home/FacultySection';

export default function Faculty() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Public Faculty</p>
        <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Meet our faculty and academic mentors</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          View active faculty profiles, departments, and contact details pulled directly from the institute CMS.
        </p>
      </div>
      <FacultySection />
    </main>
  );
}
