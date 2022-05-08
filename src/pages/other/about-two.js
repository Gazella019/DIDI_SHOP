import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { SectionTitleOne } from "../../components/SectionTitle";
import { TestimonialTwo } from "../../components/Testimonial";
import testimonialTwoData from "../../data/testimonials/testimonial-two.json";

const AboutTwo = () => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <LayoutTwo>
      {/* breadcrumb */}

      <div className="about-page-wrapper">
        {/* primary content */}
        <div className="about-content space-pt--r130 space-pb--r130">
          <BreadcrumbOne
            pageTitle="關於我們"
            backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
          >
            <ul className="breadcrumb__list">
              <li>
                <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                  <a>DIDI Shop</a>
                </Link>
              </li>

              <li>關於我們</li>
            </ul>
          </BreadcrumbOne>

          <Container className="wide">
            <SectionTitleOne
              title="DIDI 選貨"
              subtitle="LEZADA STORE - SIMPLY AND BASIC"
            />
            <Row>
              <Col xl={6} lg={6}>
                <div className="about-page-2-image space-mb-mobile-only--50">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/backgrounds/about-bg.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Col>
              <Col xl={5} lg={6} className="ml-auto">
                <div className="about-page-text space-mb--30 mt-0">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur cing elit. Suspe
                    ndisse suscipit sagittis leo sit estibulum issim Lorem ipsum
                    dolor sit amet, consectetur cing elit. ipsum dolor sit amet,
                    consectetur cing elit. Suspe ndisse suscipit sagittis leo
                    sit es
                  </p>
                </div>
                <div className="about-widget space-mb--35">
                  <h2 className="widget-title space-mb--25">地址</h2>
                  <p className="widget-content">
                    1800 Abbot Kinney Blvd. Unit D &amp; E Venice
                  </p>
                </div>
                <div className="about-widget space-mb--35">
                  <h2 className="widget-title space-mb--25">PHONE</h2>
                  <p className="widget-content">手機: (+88) – 1990</p>
                  <p className="widget-content">專線: 1800 – 1102</p>
                </div>
                <div className="about-widget">
                  <h2 className="widget-title space-mb--25">EMAIL</h2>
                  <p className="widget-content">contact@lezadastore.com</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* testimonial */}
        {/* <TestimonialTwo
          testimonialData={testimonialTwoData}
          backgroundImage="/assets/images/backgrounds/testimonials-bg.png"
        /> */}
      </div>
    </LayoutTwo>
  );
};

export default AboutTwo;
