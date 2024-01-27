import { urlFor } from "../../lib/client";
import React, { useState } from "react";
import Link from "next/link";

const DidiRelatedProduct = ({products}) => {
    console.log(products)
    return (
        <div className="didi-related-product-container">
            <h3>
                相關產品
            </h3>
            <div className="didi-related-product">
                {products.map((product) => (
                    <Link href={`/shop/product-basic/${product.slug.current}`}>
                        <div className="related-item">
                            <div className="related-item-img">
                                <img src={urlFor(product.thumbImage[0])}/>
                            </div>
                            <p className="related-item-title">{product.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DidiRelatedProduct;