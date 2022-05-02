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
              <h3 className="subtitle space-mb--30">精選商品</h3>
              <h2 className="title space-mb--30">珍珠手環</h2>
              <p className="text space-mb--30">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae reprehenderit excepturi laboriosam sapiente ipsam
                delectus doloremque vel alias eveniet facere!
              </p>
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                  <IoIosCart /> 了解更多
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
