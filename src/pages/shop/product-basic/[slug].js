import { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { LayoutTwo } from "../../../components/Layout";
import { getDiscountPrice } from "../../../lib/product";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import { IoIosCart } from "react-icons/io";


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
  console.log(product)
  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  const { addToast } = useToasts();
  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle={product.name}
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
      </BreadcrumbOne>

      {/* product details */}

      {/* <div className="didi-product-container">
        <div className="product-image">
          <DidiProduct product={product} />
        </div>
        <div className="product-info">
          <h2> title </h2>
          <h2> $100 </h2>
          <button> 聯繫我們 </button>
          <h2>簡介</h2>
          <p>
          全新Quadro方錶系列是Daniel Wellington首次方形設計腕錶,錶身採用拋光不銹鋼製成,精緻的玫瑰金或是極光銀兩種錶身選擇,別緻的方形錶面有蛋殼白,經典黑和伯朗大道綠三種款式,搭配新型的麥穗式金屬編織錶帶或是細緻的壓邊皮革錶帶,讓妳的造型更為出眾,成為眾人的目光嬌點
          </p>
        </div>
      </div> */}
      <div className="product-details space-mt--r80 space-mb--r100">
        <Container>

          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              <div className="gallery-container">
                <DidiProduct product={product}/>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="didi-img"/> */}
              </div>
            </Col>

            <Col lg={6} className="didi-product-info">
              <div className="didi-product-container">
                <h2 className="didi-product-name"> {product.name} </h2>
                <div className="didi-line">
                </div>
                <div className="didi-product-price">
                  <h3> ${product.price} </h3>
                </div>
                {/* <h3 > 簡介 </h3> */}
                <div className="didi-product-fullDescription">
                  {product.fullDescription}
                </div>
                <Link
                  href="/"
                  as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                >
                  <a className="lezada-button lezada-button--medium lezada-button--icon--left didi-product-button">
                    <IoIosCart />  購買
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (
//       item,
//       addToast,
//       quantityCount,
//       selectedProductColor,
//       selectedProductSize
//     ) => {
//       dispatch(
//         addToCart(
//           item,
//           addToast,
//           quantityCount,
//           selectedProductColor,
//           selectedProductSize
//         )
//       );
//     },
//     addToWishlist: (item, addToast) => {
//       dispatch(addToWishlist(item, addToast));
//     },
//     deleteFromWishlist: (item, addToast) => {
//       dispatch(deleteFromWishlist(item, addToast));
//     },
//     addToCompare: (item, addToast) => {
//       dispatch(addToCompare(item, addToast));
//     },
//     deleteFromCompare: (item, addToast) => {
//       dispatch(deleteFromCompare(item, addToast));
//     }
//   };
// };


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
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);
  console.log("====");
  console.log(product);
  return {
    props: { product }
  }
}