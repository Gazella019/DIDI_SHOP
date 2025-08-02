import React, { useState } from 'react';
import { DidiNewProductCard } from '../Product';
import { urlFor } from "../../lib/client";

const productsPerPage = 12; // 每頁顯示的商品數

const Pagination = ({ products, category }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
        {/* <div className="product-grid">
            {currentProducts.map((product) => (
            <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <h3 className="product-title">{product.name}</h3>
            </div>
            ))}
        </div> */}
        <div className="products-container">
            <div className = "product-items">
              {currentProducts &&
                currentProducts.map((product) => {
                  return (
                    <DidiNewProductCard key={product.id} category={product.category} slug={product.slug.current} title={product.name} price={product.price} image={product.thumbImage[0]}/>
                  );
                })}
            </div>
        </div>
        <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
            <div
                key={index}
                className={`pagination-button ${currentPage === index + 1 ? 'button_active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
            >
                {index + 1}
            </div>
            ))}
        </div>
    </div>
  );
};

export default Pagination;
