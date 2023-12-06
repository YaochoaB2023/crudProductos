import axios from "./axios.js";

export const createProductRequest = (newProductData) => axios.post("/createProduct", newProductData);
export const getAllProductsRequest = () => axios.get("/getProducts");
export const updateProductRequest = (productId, updatedProductData) => axios.put(`/updateProduct/${productId}`, updatedProductData);
export const deleteProductRequest = (productId) => axios.delete(`/deleteProduct/${productId}`);
