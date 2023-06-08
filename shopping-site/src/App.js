import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Store from "./components/Store";

import ProductContextProvider from "./context/ProductContextProvider";

const App = () => {
    return (
        <ProductContextProvider>
            <Routes>
                <Route path="/shopping-site/products" element={<Store />} />
                <Route
                    path="/shopping-site/products/:id"
                    element={<ProductDetail />}
                />
            </Routes>
        </ProductContextProvider>
    );
};

export default App;
