import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { LayoutDidi } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { SectionTitleOne } from "../../components/SectionTitle";
import { FooterTwo } from "../../components/Footer";
import { TestimonialTwo } from "../../components/Testimonial";
import testimonialTwoData from "../../data/testimonials/testimonial-two.json";

const AboutTwo = () => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <LayoutDidi>
      {/* breadcrumb */}

      <div className="about-page-wrapper">
        {/* primary content */}
        <div className="about-content space-pt--r130">
          {/* <BreadcrumbOne
            pageTitle="關於我們"
          >
          </BreadcrumbOne> */}

          <Container className="wide">
            <SectionTitleOne
              title="DIDI 選貨"
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
                <div className="didi-text space-mb--30 mt-0">
                  <p>
                    DIDI SHOP 成立於2023年，是家專營珠寶翡翠及大眾所需生活百貨的公司。
                  </p>
                </div>
                <div className="about-widget space-mb--35">
                  <p className="didi-text">
                    以經營食、衣、住、行、育、樂等類別的生活百貨為主。
                    透過本公司的專頁採購品質把關及良好的服務態度提供顧客物美價廉精緻且實用的多項商品做選擇
                    以顧客的需求做需求 並且隨時掌握大眾流行 季節所需的產品趨勢 提供顧客更多的選擇
                  </p>
                  <p className="didi-text">
                    透過本公司的專頁採購、品質把關及良好的服務態度提供顧客物美價廉、精緻且實用的多項商品做選擇
                    ，以顧客的需求做需求，並且隨時掌握大眾流行、季節所需的產品趨勢 提供顧客更多的選擇。
                  </p>
                  <p className="didi-text">
                    本公司網站商品皆為台灣現貨，以能讓顧客能在最短時間內收到下單訂購的商品為原則，商品品質把關和服務顧客態度有一定的承諾與保障。
                  </p>
                  <p className="didi-text">
                  隨著科技進步 本公司也期盼跟著時代一同成長，期盼可以帶給各位顧客更方便更優質的服務。
                  </p>
                </div>
                {/* <div className="about-widget space-mb--35">
                  <p className="didi-text">手機: (+88) – 1990</p>
                  <p className="didi-text">專線: 1800 – 1102</p>
                </div>
                <div className="about-widget">
                  <h2 className="widget-title space-mb--25">EMAIL</h2>
                  <p className="didi-text">contact@lezadastore.com</p>
                </div> */}
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
      <FooterTwo/>
    </LayoutDidi>
  );
};

export default AboutTwo;
