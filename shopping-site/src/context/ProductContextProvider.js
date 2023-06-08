import React, { createContext, useEffect, useState } from "react";

import getProducts from "../services/api";

export const ProductContexts = createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        };

        fetchAPI();
    }, []);

    return (
        <div>
            <ProductContexts.Provider value={products}>
                {children}
            </ProductContexts.Provider>
        </div>
    );
};

export default ProductContextProvider;
