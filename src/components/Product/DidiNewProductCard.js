import React from "react";
import Link from "next/link";
import { urlFor } from '../../lib/client';

const DidiNewProductCard = ({category, slug, title, price, image}) => {

    if (!image || !image.asset) {
        return null; 
    }

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        padding: 0
    };

    const imageWrapperStyle = {
        position: 'relative',
        width: '100%',
        paddingTop: '100%', // This creates the 1:1 aspect ratio
    };

    const imageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover', // This ensures the image covers the container without distortion
    };

    const infoStyle = {
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px',
        textAlign: 'center',
    };
    
    const nameStyle = {
        fontSize: '1rem',
        fontWeight: '400',
        margin: '0 0 5px 0',
    }

    const priceStyle = {
        fontSize: '0.9rem',
        color: '#555',
    }

    return (
        <Link href={`/shop/${category}/${slug}`}>
            <a style={cardStyle}>
                <div style={imageWrapperStyle}>
                    <img 
                        style={imageStyle}
                        src={urlFor(image).width(400).auto('format').url()} 
                        alt={title}
                    />
                </div>
                <div style={infoStyle}>
                    <h1 style={nameStyle}>{title}</h1>
                    <p style={priceStyle}>NT${price}</p>
                </div>
            </a>
        </Link>
    )
}

export default DidiNewProductCard;