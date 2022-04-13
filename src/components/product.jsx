import React from "react";

import "../css/app.css";
import "../css/general.css";

const data = require("../productData.json");

const Product = ({ item }) => {
    const DisplayData = data[item];
    return (
        <article>
            <div className="center">
                <img src={DisplayData.imgsrc} alt={DisplayData.title} />
            </div>
            <div>
                <h1 className="XL">{DisplayData.title}</h1>
                <h3>Over dit product</h3>
                <p>{DisplayData.description}</p>
                <h4>Regio van afkomst</h4>
                <p>{DisplayData.afkomst}</p>
                <h4>Producent</h4>
                <p>{DisplayData.producent}</p>
            </div>
        </article>
    );
};

export default Product;
