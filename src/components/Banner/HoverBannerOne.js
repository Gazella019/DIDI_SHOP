import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const HoverBannerOne = ({ spaceBottomClass, text, images, bannerLink}) => {
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
                    images[0]
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href={`/shop/${bannerLink[0]}`}
                      as={process.env.PUBLIC_URL + `/shop/${bannerLink[0]}`}
                    >
                      <a>
                        {text[0]}
                      </a>
                    </Link>
                  </p>
                  <Link
                    href={`/shop/${bannerLink[0]}`}
                    as={process.env.PUBLIC_URL + `/shop/${bannerLink[0]}`}
                  >
                    <a>Shop Now</a>
                  </Link>
                </div>
              </div>
              <Link
                href={`/shop/${bannerLink[0]}`}
                as={process.env.PUBLIC_URL + `/shop/${bannerLink[0]}`}
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
                    images[1]
                  }
                  // className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href={`/shop/${bannerLink[1]}`}
                      as={process.env.PUBLIC_URL + `/shop/${bannerLink[1]}`}
                    >
                      <a>
                      {text[1]}
                      </a>
                    </Link>
                  </p>
                  <Link
                    href={`/shop/${bannerLink[1]}`}
                    as={process.env.PUBLIC_URL + `/shop/${bannerLink[1]}`}
                  >
                    <a>Shop Now</a>
                  </Link>
                </div>
              </div>
              <Link
                href={`/shop/${bannerLink[1]}`}
                as={process.env.PUBLIC_URL + `/shop/${bannerLink[1]}`}
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
                    images[2]
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href={`/shop/${bannerLink[2]}`}
                      as={process.env.PUBLIC_URL + `/shop/${bannerLink[2]}`}
                    >
                      <a>
                      {text[2]}
                      </a>
                    </Link>
                  </p>
                  <Link
                    href={`/shop/${bannerLink[2]}`}
                    as={process.env.PUBLIC_URL + `/shop/${bannerLink[2]}`}
                  >
                    <a>Shop Now</a>
                  </Link>
                </div>
              </div>
              <Link
                href={`/shop/${bannerLink[2]}`}
                as={process.env.PUBLIC_URL + `/shop/${bannerLink[2]}`}
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
