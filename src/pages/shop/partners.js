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
import { urlFor } from "../../lib/client";

import {
  ShopHeader,
  ShopFilter,
  ShopSidebar,
  ShopProducts
} from "../../components/Shop";
import { client } from '../../lib/client';

const ShopPartners = ({ partner }) => {
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
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <LayoutDidi>
      {/* breadcrumb */}
      <div className="shop-partners">
        <div className="didi-partner-title">
          合作商家
        </div>
        <div className="didi-partner-subtitle">
          {partner[0].name}
        </div>
        <div className="didi-partner-img"/>
        <div className="didi-partner-gallery">
          <img src={urlFor(partner[0].image[0])}/>
          <img src={urlFor(partner[0].image[1])}/>
          <img src={urlFor(partner[0].image[2])}/>
        </div>
        <div className="partner-container">
          <div className="didi-partner-info">
            {partner[0].shortDescription}
          </div>
          <p className="didi-partner-p">
            {partner[0].fullDescription}
          </p>
        </div>
          
      </div>
      <FooterTwo/>
    </LayoutDidi>
  );
};


export const getServerSideProps = async () => {
  const query = '*[_type == "partner"]';
  const partner = await client.fetch(query);
  return {
    props: { partner }
  }
}

export default ShopPartners;