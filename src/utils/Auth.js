export const handleLogin = (res) => {
    localStorage.setItem('token', res.token);
} 

export const handleLogout = () => {
    localStorage.removeItem('token');
}
