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
        <div className="didi-partner-subtitle">
          傑泰玻璃
        </div>
        <div className="partner-container">
          <div className="didi-partner-img">

          </div>
          <div className="didi-partner-info">
            從車庫到 Googleplex
            Google 的發展史要從 1995 年的史丹佛大學 (Stanford University) 開始說起。Larry Page 當年正考慮到史丹佛大學攻讀研究所，而 Sergey Brin 是該所的學生，負責帶 Larry 認識校園環境。
          </div>
          <p className="didi-partner-p">
            根據某些人的說法，他們第一次會面時意見完全不合，但在隔年卻建立了合作關係。他們在宿舍房間開發出一個搜尋引擎，能利用連結判斷個別網頁在全球資訊網上的重要性。他們將這個搜尋引擎命名為 Backrub。

            不久後，他們將 Backrub 改名為 Google (好險他們換了名字)。「Google」是改拼自某個數學運算式，該運算式的意思是 1 後面加上 100 個零；之所以選用這個名字，是因為它能正確反映出 Larry 與 Sergey 的使命：「匯整全球資訊，供大眾使用，使人人受惠。」

            在接下來的幾年內，Google 不只吸引學術圈注意，也激起矽谷投資者的興趣。1998 年 8 月，Sun 的聯合創辦人 Andy Bechtolsheim 開給 Larry 和 Sergey 一張 $10 萬美元的支票，Google Inc. 就此成立。有了這筆投資，Larry 和 Sergey 這個新創團隊從宿舍搬到了第一間辦公室，也就是加州門洛帕克郊區的一間車庫 (擁有者為 Susan Wojcicki，她是 Google 錄用的第 16 位員工，目前擔任 YouTube 執行長)。幾台笨重的桌上型電腦、一張乒乓球桌和淺藍色地毯，這就是 Google 員工早期的辦公環境 (而這也是 Google 凡事都秉持著色彩繽紛原則的原因，這項傳統延續至今)。

            從草創時期開始，Google 就是個顛覆傳統的公司。舉例來說，Google 最初的伺服器是用樂高積木製成的；而他們在 1998 年製作的第一個「Doodle」，是在 Google 標誌上放了一個火柴人，藉此向網站訪客宣佈，Google 員工集體翹班去火人祭 (Burning Man Festival) 朝聖了！「不作惡」與「十大信條」展現了我們顛覆傳統的精神。Google 在後續幾年內迅速擴張，不只雇用了更多工程師、建立銷售小組，還養了一隻叫做 Yoshka 的狗。由於 Google 已茁壯到車庫無法容納的程度，因此最終搬到了目前的總部 (又稱為「Googleplex」)，位於加州山景城。就這樣，Google 秉持著不落於俗套的精神持續發展。當然，Yoshka 也一樣跟上 Google 的腳步繼續成長。

            持續尋求更好的答案一直是 Google 的經營理念。目前，Google 有 6 萬名以上的員工分佈於 50 個不同的國家/地區，並成功開發出數百款產品 (包括 YouTube、Android、Gmail，當然還有 Google 搜尋)，使用者高達數十億人，遍及全球。雖然我們淘汰了樂高伺服器，還多養了幾隻狗，但是從以前的宿舍房間、車庫到現在的規模，Google 始終懷抱著熱誠，致力為每個人打造合適的科技產品。
          </p>
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
