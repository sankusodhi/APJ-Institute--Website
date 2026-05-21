const ACCOUNTS_KEY = 'apj_student_accounts';
const TOKEN_KEY = 'apj_student_token';
const PROFILE_KEY = 'apj_student_profile';

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function getStudentAccounts() {
  return readJson(ACCOUNTS_KEY, []);
}

export function findStudentAccount(email) {
  return getStudentAccounts().find((account) => account.email.toLowerCase() === email.toLowerCase());
}

export function registerStudentAccount(account) {
  const accounts = getStudentAccounts();
  const normalizedAccount = {
    id: account.id || `student_${Date.now()}`,
    fullName: account.fullName?.trim(),
    email: account.email?.trim().toLowerCase(),
    phone: account.phone?.trim(),
    password: account.password,
    course: account.course,
  };

  const nextAccounts = [
    ...accounts.filter((storedAccount) => storedAccount.email.toLowerCase() !== normalizedAccount.email),
    normalizedAccount,
  ];

  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(nextAccounts));
  return normalizedAccount;
}

export function createStudentSession(account) {
  const profile = {
    id: account.id || `student_${Date.now()}`,
    fullName: account.fullName?.trim(),
    email: account.email?.trim().toLowerCase(),
    phone: account.phone?.trim(),
    course: account.course,
  };

  const token = `student_${profile.id}_${Date.now()}`;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));

  return { token, profile };
}

export function getStudentProfile() {
  return readJson(PROFILE_KEY, null);
}

export function clearStudentSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(PROFILE_KEY);
}

export function getStudentToken() {
  return localStorage.getItem(TOKEN_KEY);
}
