import axios from "./axios.js";

export const getAllProductsRequest = () => axios.get( '/getProducts' )