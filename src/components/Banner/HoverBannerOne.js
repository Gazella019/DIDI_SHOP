import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const HoverBannerOne = ({ spaceBottomClass }) => {
  return (
    <div
      className={`hover-banner-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <Container className="wide">
        <Row className="space-mb--m30">
          <Col md={4} className="space-mb--30">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/banners/img1.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/shop/jewls"
                      as={process.env.PUBLIC_URL + "/shop/jewls"}
                    >
                      <a>
                        珠寶玉石
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/shop/jewls"
                    as={process.env.PUBLIC_URL + "/shop/jewls"}
                  >
                    <a>Shop Now</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/shop/jewls"
                as={process.env.PUBLIC_URL + "/shop/jewls"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="space-mb--30">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/banners/img2.jpg"
                  }
                  // className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/shop/clothes"
                      as={process.env.PUBLIC_URL + "/shop/clothes"}
                    >
                      <a>
                        服裝飾品
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/shop/clothes"
                    as={process.env.PUBLIC_URL + "/shop/clothes"}
                  >
                    <a>Shop Now</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/shop/clothes"
                as={process.env.PUBLIC_URL + "/shop/clothes"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="space-mb--30">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/banners/img3.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/shop/supplies"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      <a>
                        日常用品
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/shop/supplies"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Shop Now</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/shop/supplies"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HoverBannerOne;
