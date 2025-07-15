export function isAuthenticated() {
  return !!localStorage.getItem('session');
}

export function isAdmin() {
  const session = JSON.parse(localStorage.getItem('session'));
  return session?.role === 'admin';
}