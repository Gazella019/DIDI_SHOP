import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { connect } from "react-redux";
import Image from "next/image";
import {
  IoIosSearch,
  IoMdPerson,
  IoIosHeartEmpty,
  IoIosCart,
  IoIosMenu
} from "react-icons/io";
import NavigationOverlay from "./elements/NavigationOverlay";
import SearchOverlay from "./elements/SearchOverlay";
import CartOverlay from "./elements/CartOverlay";
import WishlistOverlay from "./elements/WishlistOverlay";
import MobileMenu from "./elements/MobileMenu";

const HeaderThree = ({ cartItems, wishlistItems }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasNavigationActive, setOffCanvasNavigationActive] = useState(
    false
  );
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
  const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
  const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
    false
  );

  // useEffect(() => {
  //   const header = document.querySelector("header");
  //   setHeaderTop(header.offsetTop);
  //   setHeaderHeight(header.offsetHeight);
  //   window.addEventListener("scroll", handleScroll);
  //   scroll > headerTop
  //     ? (document.body.style.paddingTop = `${headerHeight}px`)
  //     : (document.body.style.paddingTop = 0);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Fragment>
      <header className="didi-navbar">
        <Link href="/" as={process.env.PUBLIC_URL + "/"}>
          <a>
          <Image
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            alt="logo image"
            width={80}
            height={80}
          />
          </a>
        </Link>
        <h1>
          DIDI SHOP
        </h1>
      </header>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

export default connect(mapStateToProps)(HeaderThree);
