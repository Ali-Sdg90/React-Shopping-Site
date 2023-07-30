import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ProductContexts } from "../context/ProductContextProvider";

const ProductDetail = () => {
    const params = useParams();
    const pageId = params.id;
    const product = useContext(ProductContexts);
    const { id, title, price, description, category, image, rating } =
        product[pageId - 1];
    return (
        <div style={{ padding: "20px" }}>
            <h1>Details - {pageId}</h1>
            <br></br>
            {console.log(
                id,
                title,
                price,
                description,
                category,
                image,
                rating
            )}
            <img src={image} alt="product-img" style={{ width: "200px" }}></img>
            <h2>
                {id}. {title}
            </h2>
            <br></br>
            <p>{description}</p>
            <br></br>
            <p>Category: {category}</p>
            <p>Price: {price}$</p>
            <p>Rating: {rating.rate}/5</p>
            <br></br>
            <Link to="/shopping-site/products">Go Back</Link>
        </div>
    );
};

export default ProductDetail;
