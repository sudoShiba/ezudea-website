import React from "react";

import "../css/app.css";
import "../css/general.css";

const data = require("../productData.json");

const Product = ({ item }) => {
    const DisplayData = data[item];
    return (
        <article>
            <img src={DisplayData.imgsrc} alt={DisplayData.title} />
            <div>
                <h1 className="XL">{DisplayData.title}</h1>
                <h3>Over dit product</h3>
                <p>{DisplayData.description}</p>
                <h4>Regio van afkomst</h4>
                <p>{DisplayData.afkomst}</p>
                <h4>Producent</h4>
                <p>{DisplayData.producent}</p>
                <h4>Website</h4>
                <p><a href={DisplayData.url} rel="noreferrer" target="_blank">{DisplayData.url.substr(7)}</a></p>
            </div>
        </article>
    );
};

export default Product;
