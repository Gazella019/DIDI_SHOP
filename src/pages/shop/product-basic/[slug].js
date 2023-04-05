import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { LayoutTwo } from "../../../components/Layout";
import { getDiscountPrice } from "../../../lib/product";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import { IoMdArrowForward } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { DidiProductCard, DidiRelatedProduct, DidiModal }from "../../../components/Product";

import {
  DidiGallery,
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab
} from "../../../components/ProductDetails";
import { addToCart } from "../../../redux/actions/cartActions";
import {
  addToWishlist,
  deleteFromWishlist
} from "../../../redux/actions/wishlistActions";
import {
  addToCompare,
  deleteFromCompare
} from "../../../redux/actions/compareActions";
import products from "../../../data/products.json";
import { client } from '../../../lib/client';
import { DidiProduct } from "../../../components/Product";

const ProductBasic = ({
  product,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare
}) => {
  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });
  
  const [toggler, setToggler] = useState(false);

  const toggleModal = () => {
    setToggler(!toggler);
  }

  const { addToast } = useToasts();
  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  return (
    <LayoutTwo>
      <div className="product-details space-mt--r100 ">
        <Container className="didi-container">
          { toggler && <div>
            <div className="didi-overlay" onClick={toggleModal}>
            </div>
            <FaTimes className="didi-modal-btn" onClick={toggleModal}/>
            <DidiModal product={product}/>
          </div>}
          <Row>
            <Col lg={6} className="space-mb-mobile-only--30">
              <div className="didi-gallery-container">
                <DidiProduct product={product} onClick={toggleModal}/>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="didi-img"/> */}
              </div>
            </Col>

            <Col lg={6} className="didi-product-info">
              <div className="didi-product-container">
                <h2 className="didi-product-name">
                  <div>
                    {product.name} 
                  </div>
                  <div className="didi-product-price">
                    NT${product.price}
                  </div>
                </h2>
                {/* <div className="didi-line">
                </div> */}
                {/* <h3 > 簡介 </h3> */}
                <div className="didi-product-fullDescription">
                  {product.fullDescription}
                </div>
                {/* <Link
                  href="/"
                  as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                >
                  <a className="lezada-button lezada-button--medium lezada-button--icon--left didi-product-button">
                    <IoIosCart />  立即購買
                  </a>
                </Link> */}
                <button className="didi-product-button">
                  <a href={product.lineURL}>
                    聯繫我們 <IoMdArrowForward/>
                  </a>
                </button>
              </div>
              <a>

              </a>
            </Col>
          </Row>
          <Row>
            <div className="didi-product-video">
              <h3 className="space-mb--r50">
                影片介紹
              </h3>
              {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ONqYdBtTltg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${product.youtubeURL}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Row>
          <Row>
            <Col>
              {/* product description tab */}
              <ProductDescriptionTab product={product} />
            </Col>
          </Row>
              <DidiRelatedProduct/>
        </Container>
      </div>
      <div className="didi-product-banner">
      </div>
    </LayoutTwo>
  );
};

// const ProductBasic = (props) => {
//   console.log(props);
//   return (
//     <div>
//       hello
//     </div>
//   )
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ProductBasic);
export default ProductBasic;
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);
  // console.log(product);
  return {
    props: { product },
    revalidate: 300,
  }
}