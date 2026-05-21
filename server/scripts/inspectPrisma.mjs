import { getPrismaClient } from '../config/database.js';

const prisma = getPrismaClient();
console.log('Prisma client keys (sample checks):');
console.log('has inquiry:', typeof prisma.inquiry !== 'undefined');
console.log('has faq (lower):', typeof prisma.faq !== 'undefined');
console.log('has FAQ (upper):', typeof prisma.FAQ !== 'undefined');
console.log('has fAQ:', typeof prisma.fAQ !== 'undefined');
console.log('has Faq:', typeof prisma.Faq !== 'undefined');
console.log('access sample count functions (safe checks):');
try { console.log('inquiry.count typeof:', typeof (prisma.inquiry && prisma.inquiry.count)); } catch (e) { console.log('inquiry.count error', e.message); }
try { console.log('faq.findMany typeof:', typeof (prisma.faq && prisma.faq.findMany)); } catch (e) { console.log('faq.findMany error', e.message); }
process.exit(0);
