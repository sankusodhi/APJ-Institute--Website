import React from 'react';
import { PageShell, ResultSearchPanel } from '../../components/exam/ExamComponents';
import { resultsData } from '../../data/examPortalData';

export default function ResultsPage() {
  return (
    <PageShell
      title="Results"
      subtitle="Search student results quickly using roll number, name, course, or semester."
    >
      <ResultSearchPanel rows={resultsData} />
    </PageShell>
  );
}
