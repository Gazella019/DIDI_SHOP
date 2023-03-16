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
              <h3 className="subtitle space-mb--30">@DIDI_SOP</h3>
              <h2 className="title space-mb--30">聯繫我們</h2>
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                  <IoIosCart />  Line 聯繫我們
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-cta-two__image">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/cta/cabinet2.jpg"}
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
