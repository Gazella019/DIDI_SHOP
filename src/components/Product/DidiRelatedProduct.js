import { urlFor } from "../../lib/client";
import React, { useState } from "react";
import DidiProductCard from "./DidiProductCard";
import product from "../../../didishop/schemas/product";

const DidiRelatedProduct = ({products}) => {
    console.log(products)
    return (
        <div className="didi-related-product-container">
            <h3>
                相關產品
            </h3>
            <div className="didi-related-product">
                {products.map((product) => (
                    <div className="related-item">
                        <img src={urlFor(product.thumbImage[0])}/>
                        <h1>{product.name}</h1>
                    </div>
                ))}
                {/* <img></img> */}
                {/* <DidiProductCard isTemplate={true} index={1}/>
                <DidiProductCard isTemplate={true} index={2}/>
                <DidiProductCard isTemplate={true} index={3}/> */}
            </div>
        </div>
    )
}

export default DidiRelatedProduct;