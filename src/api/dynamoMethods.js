import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data.products;
};

export const createProduct = async (product) => {
    return await axios.post(`${BASE_URL}/product`, product);
};

export const deleteProduct = async (productId) => {
    return await axios.delete(`${BASE_URL}/product`, { data: { product_id: productId } });
};
