import { Fragment } from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import {
  getIndividualCategories,
  getIndividualColors,
  getIndividualTags,
  setActiveSort,
  getProducts,
  getDiscountPrice
} from "../../lib/product";
import { ProductRating } from "../Product";

const ShopSidebar = ({ products, getSortParams }) => {
  const categories = getIndividualCategories(products);
  const colors = getIndividualColors(products);
  const tags = getIndividualTags(products);
  const popularProducts = getProducts(products, "decor", "popular", 3);

  return (
    <div className="shop-sidebar">

      {/* category list */}
      <div className="didi-sidebar-container">
        `<div className="single-sidebar-widget space-mb--40">
          <h2 className="single-sidebar-widget__title space-mb--30">
            精品類別
          </h2>
          {categories.length > 0 ? (
            <ul className="single-sidebar-widget__list single-sidebar-widget__list--category">
              <li>
                <button
                  onClick={(e) => {
                    getSortParams("category", "");
                    setActiveSort(e);
                  }}
                  className="active"
                >
                  全部
                </button>
              </li>
              {/* {categories.map((category, i) => {
                return (
                  <li key={i}>
                    <button
                      onClick={(e) => {
                        getSortParams("category", category);
                        setActiveSort(e);
                      }}
                    >
                      {category}
                    </button>
                  </li>
                );
              })} */}
              <li>
                  <button>
                  玉墜
                  </button>
              </li>
              <li>
                  <button>
                  玉鐲
                  </button>
              </li>
              <li>
                  <button>
                  手鍊
                  </button>
              </li>
              <li>
                  <button>
                  珍玩
                  </button>
              </li>
              <li>
                  <button>
                  擺飾
                  </button>
              </li>
              <li>
                  <button>
                  印章
                  </button>
              </li>
              <li>
                  <button>
                  項鍊
                  </button>
              </li>
              <li>
                  <button>
                  耳環
                  </button>
              </li>
            </ul>
          ) : (
            "No categories found"
          )}
        </div>`
      </div>
    </div>
  );
};

export default ShopSidebar;
