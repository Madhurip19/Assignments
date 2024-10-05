import axios from 'axios';

const API_BASE = 'https://dummyjson.com/products';

// Fetch all products from the API
export const fetchProducts = () => axios.get(API_BASE);

// Add a new product to the API
export const addProduct = (data) => axios.post(`${API_BASE}/add`, data);
