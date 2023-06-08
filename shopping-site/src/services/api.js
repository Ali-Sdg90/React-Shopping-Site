import axios from "axios";

const baseURL = "https://fakestoreapi.com";

const getProducts = async () => {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
};

export default getProducts;
