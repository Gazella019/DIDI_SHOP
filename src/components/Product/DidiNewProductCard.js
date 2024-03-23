import React, { useState } from "react";
import Link from "next/link";

const DidiNewProductCard = ({category, slug, title, price, image}) => {
    return (
        <Link href={`/shop/${category}/${slug}`}>
            <div className="didi-new-product">
                <img src ={image} className="product-image"/>
                <div className="product-info">
                    <h1 className="product-name">{title}</h1>
                    <p className="product-price"> NT${price} </p>
                </div>
            </div>
        </Link>
        // <Link href={`/shop/product-basic/${slug}`}>
        //                         <a>
        //                             <img src ={image} className="product-image"/>
        //                         </a>
        //                     </Link>
    )
}


export default DidiNewProductCard;