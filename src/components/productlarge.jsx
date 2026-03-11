import React from "react";

import "../css/app.css";
import "../css/general.css";

import data from "../productData.json";

const ProductLarge = ({ item }) => {
    const DisplayData = data[item];

    return (
        <article className="product-large">
            <img 
                src={DisplayData.imgsrc}
                alt={DisplayData.title}
                className="rounded"
            />
            <div>
                <h1 className="XL">{DisplayData.title}</h1>
                <h3>{DisplayData.title1}</h3>
                <p>{DisplayData.description1}</p>
                <h3>{DisplayData.title2}</h3>
                <p>{DisplayData.description2}</p>
                <h4>Regio van afkomst</h4>
                <p>{DisplayData.afkomst}</p>
                <h4>Producent</h4>
                <p>{DisplayData.producent}</p>
                <h4>Website</h4>
                <p>
                    <a href={DisplayData.url} rel="noreferrer" target="_blank">
                        {DisplayData.url.substr(8)}
                    </a>
                </p>
            </div>
        </article>
    );
};

export default ProductLarge;
