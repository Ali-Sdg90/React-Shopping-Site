import React, { useContext } from "react";

import { ProductContexts } from "../context/ProductContextProvider";
import Product from "./shared/Product";

const Store = () => {
    const products = useContext(ProductContexts);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}
        >
            {products.map((product) => (
                <Product key={product.id} productData={product} />
            ))}
        </div>
    );
};

export default Store;
