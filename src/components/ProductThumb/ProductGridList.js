import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosShuffle, IoIosSearch } from "react-icons/io";
import { Tooltip } from "react-tippy";
import DidiProductCard from "../Product/DidiProductCard";
import ProductModal from "./ProductModal";
import { urlFor } from "../../lib/client";

const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <Col lg={3} md={3} className={bottomSpace ? bottomSpace : ""}>
        <div className="product-grid">
          {/* <div className="product-grid__image">
            <Link
              href={`/shop/product-basic/${product.slug.current}`}
            >
              <a className="image-wrap">
                <img
                  src={urlFor(product.thumbImage[0])}
                  className="img-fluid"
                  alt={product.name}
                />
              </a>
            </Link>
          </div>

          <div className="product-grid__content">
            <div className="title">
              <h3>
                <Link
                  href={`/shop/product-basic/${product.slug.current}`}
                  as={
                    process.env.PUBLIC_URL +
                    "/shop/product-basic/" +
                    product.slug.current
                  }
                >
                  <a>{product.name}</a>
                </Link>
              </h3>
            </div>
            <div className="price">
              {product.discount > 0 ? (
                <Fragment>
                  <span className="discounted-price">${discountedPrice}</span>
                </Fragment>
              ) : (
                <span className="main-price">${productPrice}</span>
              )}
            </div>
          </div> */}
          <Link
              href={`/shop/product-basic/${product.slug.current}`}
            >
              <a>
                <DidiProductCard title={product.name} price={product.price} image={urlFor(product.thumbImage[0])} isTemplate={false}/>
              </a>
            </Link>
        </div>

      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitems={cartItems}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        deletefromwishlist={deleteFromWishlist}
        addtocompare={addToCompare}
        deletefromcompare={deleteFromCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

export default ProductGridList;
