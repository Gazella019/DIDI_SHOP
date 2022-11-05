import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const HoverBannerTwo = ({ spaceBottomClass }) => {
  return (
    <div
      className={`hover-banner-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <Container className="wide">
        <Row>
          <Col lg={6} className="space-mb-mobile-only--30">
            <div className="single-banner single-banner--hoverborder">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="banner-link" />
              </Link>
              <img
                src={
                  "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                }ㄋ
                className="img-fluid"
                alt=""
              />
              <div className="banner-content banner-content--middle-white banner-content--middle-dark">
                <p>
                  <span className="d-block">食品</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="single-banner single-banner--hoverborder">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="banner-link" />
              </Link>
              <img
                src={
                  "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                }
                className="img-fluid"
                alt=""
              />
              <div className="banner-content banner-content--black-left">
                <p>
                  <span className="small-text d-block">
                    房屋/車
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HoverBannerTwo;
