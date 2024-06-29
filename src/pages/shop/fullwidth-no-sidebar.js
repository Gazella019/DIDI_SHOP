import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { getProducts } from "../../lib/product";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { SlideDown } from "react-slidedown";
import { LayoutDidi } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { getSortedProducts } from "../../lib/product";
import { ShopHeader, ShopFilter, ShopProducts } from "../../components/Shop";
import { FooterTwo } from "../../components/Footer";
import { client } from '../../lib/client';
import { DidiNewProductCard } from "../../components/Product";
import { urlFor } from "../../lib/client";
import Pagination from "../../components/Pagination/Pagination";


const FullwidthNoSidebar = ({ products }) => {
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

  const pageLimit = 8;

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
      <div className="shop-page-content shop-all">
        <BreadcrumbOne
          pageTitle="所有商品"
        >
        </BreadcrumbOne>
        {/* shop page body */}
        <Pagination products={products}/>
      </div>
      <FooterTwo/>
    </LayoutDidi>
  );
};

export const getServerSideProps = async () => {
  let products;
  let query = '*[_type == "foods"]';
  let temp = await client.fetch(query);
  products = temp;
  
  query = '*[_type == "clothes"]';
  temp = await client.fetch(query);
  products = products.concat(temp);

  query = '*[_type == "house"]';
  temp = await client.fetch(query);
  products = products.concat(temp);

  query = '*[_type == "jewls"]';
  temp = await client.fetch(query);
  products = products.concat(temp);

  query = '*[_type == "supplies"]';
  temp = await client.fetch(query);
  products = products.concat(temp);
  // console.log(products)
  return {
    props: { products }
  }
}

export default FullwidthNoSidebar;

// const mapStateToProps = (state) => {
//   const products = state.productData;
//   return {
//     products: getProducts(products, "furniture", "popular", 12)
//   };
//   // did_modify
//   // return {
//   //   products: state.productData
//   // };
// };

// export default connect(mapStateToProps)(FullwidthNoSidebar);
