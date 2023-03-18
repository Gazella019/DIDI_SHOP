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
import {
  ShopHeader,
  ShopFilter,
  ShopSidebar,
  ShopProducts
} from "../../components/Shop";
import { client } from '../../lib/client';

const ShopPartners = ({ products }) => {
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
      <div className="shop-partners">
        <div className="didi-partner-title">
          合作商家
        </div>
        <div className="partner-container">
          <div className="didi-partner-img">

          </div>
          <div className="didi-partner-info">
            從車庫到 Googleplex
            Google 的發展史要從 1995 年的史丹佛大學 (Stanford University) 開始說起。Larry Page 當年正考慮到史丹佛大學攻讀研究所，而 Sergey Brin 是該所的學生，負責帶 Larry 認識校園環境。
          </div>
        </div>
        {/* shop page body */}
          
      </div>
      <FooterTwo/>
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

export default ShopPartners;

// https://images.unsplash.com/photo-1584257354243-694488a0adac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80

// const mapStateToProps = (state) => {
//   const products = state.productData;
//   return {
//     products: getProducts(products, "furniture", "popular", 12)
//   };
// };

// export default connect(mapStateToProps)(ShopPartners);
