import { urlFor } from "../../lib/client";
import React, { useState } from "react";

const DidiProductCard = ({title, price, image, isTemplate, index}) => {
    if (isTemplate) {
        return (
            <div className="didi-card-container">
                <div className="didi-image-container">
                    <img src={"/assets/images/related" + `${index}` + ".jpg"}/>
                </div>
                <div className="didi-card-content">
                    <div className="didi-card-title">
                        <h6>
                            ELAN LUMINE NECKLACE
                        </h6>
                    </div>
                    <div className="didi-card-price">
                        <h6>
                            玫瑰金
                        </h6>
                        <h6>
                            NT$4,290
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="didi-image-container-v1">
                    <img src={image}/>
                </div>
                <div className="didi-card-content-v1">
                    <div className="didi-card-title">
                        <h6>
                            {title}
                        </h6>
                    </div>
                    <div className="didi-card-price">
                        <h6>
                            NT${price}
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default DidiProductCard;