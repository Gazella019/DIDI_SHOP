import React, { useState } from "react";

const DidiNewProductCard = ({title, price, image}) => {
    return (
        <div className="didi-new-product">
            <div className="product-img">
                <img src ={image} />
                {/* hello */}
            </div>

            <div className="product-info">
                <h1 className="product-name">{title}</h1>
                <p className="product-price"> NT${price} </p>
            </div>
        </div>
    )
}

export default DidiNewProductCard;