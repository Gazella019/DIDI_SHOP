import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { getProducts } from "../../lib/product";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { SlideDown } from "react-slidedown";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { getSortedProducts } from "../../lib/product";
import { ShopHeader, ShopFilter, ShopProducts } from "../../components/Shop";

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
    <LayoutTwo>
      {/* breadcrumb */}
      <div className="shop-page-content shop-all">
        <BreadcrumbOne
          pageTitle="所有商品"
        >
          <ul className="breadcrumb__list">
            <li>
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>主頁</a>
              </Link>
            </li>

            <li>所有商品</li>
          </ul>
        </BreadcrumbOne>
        <div className="shop-page-content">

          {/* shop page body */}
          <div className="shop-page-content__body space-mt--r130 space-pb--r130">
            <Container className="wide">
              <Row>
                <Col>
                  {/* shop products */}
                  <ShopProducts layout={layout} products={currentData} />

                  {/* shop product pagination */}
                  <div className="pro-pagination-style">
                    <Paginator
                      totalRecords={sortedProducts.length}
                      pageLimit={pageLimit}
                      pageNeighbours={2}
                      setOffset={setOffset}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      pageContainerClass="mb-0 mt-0"
                      pagePrevText="«"
                      pageNextText="»"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "furniture", "popular", 12)
  };
  // did_modify
  // return {
  //   products: state.productData
  // };
};

export default connect(mapStateToProps)(FullwidthNoSidebar);
