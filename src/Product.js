import React from "react";

function Product({image, title, discription}) {
    return(
        <article className="product">
            <img src={image} alt={title}/>
            <h2 className="product-name">
                {title}
            </h2>
            <p className="product-description">
                {discription}
            </p>
        </article>
    );
}

export default Product;