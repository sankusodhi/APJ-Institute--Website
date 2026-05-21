const fs = require('fs');
let content = fs.readFileSync('client/src/pages/CoursesPage.jsx', 'utf8');

const replacements = [
  ['bg-[#0b1121] min-h-screen text-slate-200', 'bg-white min-h-screen text-slate-800'],
  ['bg-[#060a16]', 'bg-slate-50'],
  ['border-white/5', 'border-slate-200'],
  ['from-blue-900/20 via-transparent to-[#060a16]', 'from-blue-100/50 via-transparent to-slate-50'],
  ['text-white mb-6', 'text-slate-900 mb-6'],
  ['text-blue-100/80', 'text-slate-600'],
  ['border-white/20 bg-white/5', 'border-slate-300 bg-white/50'],
  ['text-white font-bold text-lg hover:bg-white/10', 'text-slate-800 font-bold text-lg hover:bg-slate-100'],
  ['bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10', 'bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200'],
  ['text-white tracking-wider', 'text-slate-900 tracking-wider'],
  ['text-slate-400 uppercase', 'text-slate-500 uppercase'],
  ['text-white mb-4', 'text-slate-900 mb-4'],
  ['text-slate-400 max-w-xl', 'text-slate-600 max-w-xl'],
  ['border-white/10 bg-slate-800/50', 'border-slate-300 bg-white/50'],
  ['text-white focus:border-cyan-500/50', 'text-slate-900 focus:border-cyan-500/50'],
  ['placeholder-slate-500', 'placeholder-slate-400'],
  ['bg-slate-800/60 text-slate-300 border border-white/5 hover:bg-slate-700 hover:text-white', 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 hover:text-slate-900'],
  ['bg-slate-900/60 backdrop-blur-xl border border-white/10', 'bg-white backdrop-blur-xl border border-slate-200'],
  ['from-slate-900 via-transparent', 'from-slate-900/80 via-transparent'],
  ['bg-slate-900/80 backdrop-blur border border-white/10', 'bg-white/90 backdrop-blur border border-slate-200'],
  ['text-white group-hover:text-cyan-400', 'text-slate-900 group-hover:text-cyan-600'],
  ['text-slate-400 leading-relaxed', 'text-slate-600 leading-relaxed'],
  ['border-white/10 pt-6', 'border-slate-100 pt-6'],
  ['text-slate-300', 'text-slate-600'],
  ['bg-white/5 border border-white/10', 'bg-slate-50 border border-slate-200'],
  ['text-white group-hover:bg-gradient-to-r', 'text-slate-900 group-hover:text-white group-hover:bg-gradient-to-r'],
  ['text-slate-400', 'text-slate-600'],
  ['bg-[#0f172a] py-24 relative overflow-hidden', 'bg-white py-24 relative overflow-hidden border-t border-slate-100'],
  ['bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/60', 'bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:bg-white hover:shadow-xl'],
  ['text-white', 'text-slate-900'],
  ['bg-[#0b1121] relative', 'bg-slate-50 relative border-t border-slate-200'],
  ['border-slate-800 pb-8', 'border-slate-200 pb-8'],
  ['from-slate-800/40 to-slate-900/40 p-8 rounded-3xl border border-white/5', 'bg-white p-8 rounded-3xl border border-slate-200 shadow-sm'],
  ['text-slate-300 italic', 'text-slate-600 italic'],
  ['bg-slate-700 flex items-center justify-center text-xl font-bold text-white border border-slate-600', 'bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-800 border border-slate-300'],
  ['from-[#0b1121]', 'from-slate-900']
];

for (const [search, replace] of replacements) {
  content = content.split(search).join(replace);
}

fs.writeFileSync('client/src/pages/CoursesPage.jsx', content);
console.log("Done");
