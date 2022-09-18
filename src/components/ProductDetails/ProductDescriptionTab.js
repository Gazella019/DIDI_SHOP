import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const ProductDescriptionTab = ({ product }) => {
  return (
    <div className="product-description-tab space-pt--r100 border-top--grey">
      <Tab.Container defaultActiveKey="description">
        <Nav
          variant="pills"
          className="product-description-tab__navigation text-center justify-content-center space-mb--50"
        >
          <Nav.Item>
            <Nav.Link eventKey="description">詳情</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="additionalInfo">
              送貨&付款方式
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">
              退換貨
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="description">
            <div className="product-description-tab__details">
              {product.fullDescription}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="additionalInfo">
            <div className="product-description-tab__details">
            您有權在收到產品的30天內，退還任意/全部從我們的網站直接購買的產品。(依消保法規定，耳環屬個人衛生用品，故無鑑賞期，同時基於個人衛生原則，恕不受理退換貨服務。)
            若您需要辦理退貨，敬請將所有商品、包裝禮盒及贈品一併退回。
            獲贈的免費產品不適用於普通的退換貨政策。如有退款需求，產品需保持到貨時同樣的全新狀態並與獲贈產品一起寄回。
            由於活動優惠是根據原始消費金額，如果退貨後不再符合活動條件，退款金額會在原付款金額上調整。
            敬請留意，產品不能在本地零售店退還。
            更多資訊，請點閱我們的退貨政策。
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="reviews">
          <div className="product-description-tab__details">
            我們提供安全的支付方式：Visa, Mastercard, Maestro, American Express, Discover, Diners Club International, Paypal
          </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ProductDescriptionTab;
