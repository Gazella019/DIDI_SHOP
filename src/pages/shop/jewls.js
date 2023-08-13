import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { SlideDown } from "react-slidedown";
import { LayoutDidi } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { getSortedProducts } from "../../lib/product";
import { getProducts } from "../../lib/product";
import { FooterTwo } from "../../components/Footer";
import { DidiNewProductCard } from "../../components/Product";
import { urlFor } from "../../lib/client";

import {
  ShopHeader,
  ShopFilter,
  ShopSidebar,
  ShopProducts
} from "../../components/Shop";
import { client } from '../../lib/client';

const ShopJewls = ({ products }) => {
  const [layout, setLayout] = useState("grid four-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  const filterPorductsByCategory = products.filter(product => product.category.includes("jewls"));

  const pageLimit = 20;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <LayoutDidi>
      {/* breadcrumb */}
      <div className="shop-jewls">
        <BreadcrumbOne
            pageTitle="珠寶/玉石"
            // backgroundImage="https://images.unsplash.com/photo-1584377334016-464803e03b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          >
        </BreadcrumbOne>
          {/* shop page body */}
          <div className="products-container">
            {/* <ShopSidebar
              products={products}
              getSortParams={getSortParams}
            /> */}
            <div className = "product-items">
              {filterPorductsByCategory &&
                filterPorductsByCategory.map((product) => {
                  return (
                    <DidiNewProductCard slug={product.slug.current} title={product.name} price={product.price} image={urlFor(product.thumbImage[0])}/>
                    // <Link
                    //   href={`/shop/product-basic/${product.slug.current}`}
                    // >
                    //   <a>
                    //     <DidiNewProductCard title={product.name} price={product.price} image={urlFor(product.thumbImage[0])}/>
                    //   </a>
                    // </Link>
                  );
                })}
            </div>
          </div>
      </div>
      <FooterTwo />
    </LayoutDidi>
  );
};


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  // console.log(products)
  return {
    props: { products }
  }
}

export default ShopJewls;

// const mapStateToProps = (state) => {
//   const products = state.productData;
//   return {
//     products: getProducts(products, "furniture", "popular", 12)
//   };
// };

// export default connect(mapStateToProps)(ShopJewls);
