const saveToken = (token) => {
    localStorage.setItem('smart-shop-verify-token', token);
};

const getToken = () => {
    return localStorage.getItem('smart-shop-verify-token');
};

export { saveToken, getToken };