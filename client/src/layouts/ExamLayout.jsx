import React from 'react';
import { Outlet } from 'react-router-dom';
import { ExamPortalProvider } from '../context/ExamPortalContext';
import { ExamNavbar, ExamFooter, ToastStack } from '../components/exam/ExamComponents';

export default function ExamLayout() {
  return (
    <ExamPortalProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 dark:bg-[#08111f]">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.32),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.25),_transparent_25%),linear-gradient(180deg,#020617_0%,#07111f_42%,#0f172a_100%)]" />
          <div className="absolute left-[-10%] top-[-5%] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        </div>
        <ExamNavbar />
        <Outlet />
        <ExamFooter />
        <ToastStack />
      </div>
    </ExamPortalProvider>
  );
}
