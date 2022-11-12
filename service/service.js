import { myAxios } from "../utils/myAxios";

const saveToken = (token) => {
    localStorage.setItem('smart-shop-verify-token', token);
};

const getToken = () => {
    return localStorage.getItem('smart-shop-verify-token');
};

const addToFavorite = async ({UserId, ProductId}) => {
    await myAxios.post('/products/add-product-to-liked', {UserId, ProductId}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});
};

const removeFromFavorite = async ({UserId, ProductId}) => {
    await myAxios.post('/products/remove-product-to-liked', {UserId, ProductId}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});
};

export { saveToken, getToken, addToFavorite, removeFromFavorite };