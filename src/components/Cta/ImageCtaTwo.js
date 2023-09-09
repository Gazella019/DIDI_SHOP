import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { IoIosCart } from "react-icons/io";

const ImageCtaTwo = ({ spaceBottomClass }) => {
  return (
    <div
      className={`image-cta-two ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="image-cta-two__content space-mb-mobile-only--40">
              <h3 className="subtitle space-mb--30">@DIDI_SHOP</h3>
              <h2 className="title space-mb--30">聯繫我們</h2>
                <a href="https://page.line.me/680suyiu?openQrModal=true" className="lezada-button lezada-button--medium lezada-button--icon--left">
                  <IoIosCart />  Line 聯繫我們
                </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-cta-two__image">
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaTwo;
