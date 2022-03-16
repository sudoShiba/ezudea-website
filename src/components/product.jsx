import "../css/app.css";
import "../css/general.css";

const data = require("../productData.json");

const Product = ({ item, title,  imgsrc }) => {
    const DisplayData = data[item];
    return (
        <section>
            <div className="center">
                <img src={imgsrc} alt={title} />
            </div>
            <div>
                <h1>{title}</h1>
                <h3>Over dit product</h3>
                <p>{DisplayData.description}</p>
                <h4>Producent</h4>
                <p>{DisplayData.producent}</p>
                <h4>Formaten</h4>
                <p>{DisplayData.formaten}</p>
            </div>
        </section>
    );
}

export default Product;