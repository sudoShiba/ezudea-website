import "../css/app.css";
import "../css/general.css";
import * as data from "../descriptions.json"

const Product = ({ title, imgsrc, description, producent, formaten }) => {
    return (
        <section>
            <div className="center">
                <img src={imgsrc} alt={title} />
            </div>
            <div>
                <h1>{title}</h1>
                <h3>Over dit product</h3>
                <p>{description}</p>
                <h4>Producent</h4>
                <p>{producent}</p>
                <h4>Formaten</h4>
                <p>{formaten}</p>
            </div>
        </section>
    );
}

export default Product;