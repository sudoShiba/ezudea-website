import React from "react";

import "../css/app.css";
import "../css/general.css";

const data = require("../productData.json");

const Award = ({ item }) => {
    const DisplayData = data[item]
    return (
        <article>
            <img src={DisplayData.medal} alt={DisplayData.title}/>
        </article>
    );
};

export default Award;
