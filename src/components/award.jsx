import React from "react";

import "../css/app.css";
import "../css/general.css";

import data from "../productData.json";

const Award = ({ item }) => {
    const DisplayData = data[item]
    return (
        <article>
            <img src={DisplayData.award} alt={DisplayData.title}/>
        </article>
    );
};

export default Award;
