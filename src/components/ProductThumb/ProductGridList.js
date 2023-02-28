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
    <div className="didi-product-wrapper">
      <Link
          href={`/shop/product-basic/${product.slug.current}`}
        >
          <a>
            <DidiProductCard title={product.name} price={product.price} image={urlFor(product.thumbImage[0])} isTemplate={false}/>
          </a>
      </Link>
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
    </div>
  );
};

export default ProductGridList;
