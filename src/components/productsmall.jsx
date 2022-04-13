import React from "react";

import "../css/app.css";
import "../css/general.css";

const data = require("../productData.json");

const ProductSmall = ({ item }) => {
    const DisplayData = data[item];
    return (
        <article>
            <img src={DisplayData.imgsrc} alt={DisplayData.title} />
            <div>
                <h1 className="L">{DisplayData.title}</h1>
                <h4 className="S">Regio van afkomst</h4>
                <p>{DisplayData.afkomst}</p>
                <h4 className="S">Formaten</h4>
                <p>{DisplayData.formaten}</p>
            </div>
        </article>
    );
};

export default ProductSmall;
