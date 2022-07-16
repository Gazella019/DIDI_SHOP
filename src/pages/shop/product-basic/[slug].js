import { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { LayoutTwo } from "../../../components/Layout";
import { getDiscountPrice } from "../../../lib/product";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
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
      <div className="product-details space-mt--r100 space-mb--r100">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              {/* image gallery bottom thumb */}
              <DidiGallery/>
            </Col>

            <Col lg={6}>
              {/* product description */}
              {product.fullDescription}
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