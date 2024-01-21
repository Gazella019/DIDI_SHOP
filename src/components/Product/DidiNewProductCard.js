import React, { useState } from "react";
import Link from "next/link";

const DidiNewProductCard = ({slug, title, price, image}) => {
    return (
        <div className="didi-new-product">
            {/* <Link href={`/shop/product-basic/${slug}`}>
                <a>
                    <img src ={image} className="product-image"/>
                </a>
            </Link> */}
            <img src ={image} className="product-image"/>
            <div className="product-info">
                <h1 className="product-name">{title}</h1>
                <p className="product-price"> NT${price} </p>
            </div>
        </div>
    )
}

export default DidiNewProductCard;