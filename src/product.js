import React from "react";

const Product = ({ title, img, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <p>{description}</p>
        </div>
    );
}

export default Product;