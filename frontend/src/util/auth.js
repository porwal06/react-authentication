export function setAuthToken(token) {
    localStorage.setItem('token', token);
}

export function getAuthToken() {
   return localStorage.getItem('token');
}