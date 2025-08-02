import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { SlideDown } from "react-slidedown";
import { LayoutDidi } from "../../../components/Layout";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import { getSortedProducts } from "../../../lib/product";
import { getProducts } from "../../../lib/product";
import { FooterTwo } from "../../../components/Footer";
import { DidiNewProductCard } from "../../../components/Product";
import { urlFor } from "../../../lib/client";
import Pagination from "../../../components/Pagination/Pagination";
import { useRouter } from 'next/router';

import {
  ShopHeader,
  ShopFilter,
  ShopSidebar,
  ShopProducts
} from "../../../components/Shop";
import { client } from '../../../lib/client';

const ShopHouse = ({ products }) => {
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
  // const filterPorductsByCategory = products.filter(product => product.category.includes("house"));

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

  const router = useRouter();
  const { query } = router;

  // tag 為小分類 ex:男裝 女裝
  if(query["tag"])
    products = products.filter(product => product.tag.includes(query["tag"]))
  return (
    <LayoutDidi>
      {/* breadcrumb */}
      <div className="shop-page-content shop-house">
      <BreadcrumbOne
        pageTitle="房屋/車"
        // backgroundImage="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
      >
      </BreadcrumbOne>
        {/* shop page body */}
        <Pagination products={products} category={"house"}/>
      </div>
      <FooterTwo/>
    </LayoutDidi>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "house"]{
  ...,
  "thumbImage": thumbImage[]{
    _key,
    _type,
    asset->,
    crop,
    hotspot
  }
}`
  const products = await client.fetch(query);
  // console.log(products)
  return {
    props: { products }
  }
}

export default ShopHouse;

// const mapStateToProps = (state) => {
//   const products = state.productData;
//   return {
//     products: getProducts(products, "furniture", "popular", 12)
//   };
// };

// export default connect(mapStateToProps)(ShopHouse);
