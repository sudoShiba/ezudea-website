const Product = ({ title, imgsrc, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={imgsrc} alt={title} />
            <p>{description}</p>
        </div>
    );
}

export default Product;