import { urlFor } from "../../lib/client";
import React, { useState } from "react";
import DidiProductCard from "./DidiProductCard";

const DidiRelatedProduct = () => {
    return (
        <div className="didi-related-product-container">
            <h3>
                相關產品
            </h3>
            <div className="didi-related-product">
                <DidiProductCard isTemplate={true} index={1}/>
                <DidiProductCard isTemplate={true} index={2}/>
                <DidiProductCard isTemplate={true} index={3}/>
            </div>
        </div>
    )
}

export default DidiRelatedProduct;