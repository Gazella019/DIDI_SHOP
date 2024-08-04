import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from "react";

const Navigation = () => {

  const navRef = useRef();

  const ShowNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <div className="didi-header">
      <div ref={navRef} className="didi-navbar header-content__navigation space-pr--15 space-pl--15">
        <ul className="test-nav">
          <li>
              <Link href="/">
                <a onClick={ShowNavbar}>主頁</a>
              </Link>
          </li>
          <li>
              <Link
                href="/shop/fullwidth-no-sidebar"
              >
                <a onClick={ShowNavbar}>商店</a>
              </Link>
            </li>
            <li className="position-relative">
              <Link href="/other/about-two">
              <a onClick={ShowNavbar}>關於我們</a>
              </Link>
            </li>
          <li className="position-relative">
            <Link href="/shop/jewls">
              <a onClick={ShowNavbar}>珠寶/玉石</a>
              </Link>
            </li>
            <li className="position-relative">
              <Link href="/shop/clothes">
                <a onClick={ShowNavbar}>服裝飾品</a>
              </Link>
              <IoIosArrowDown />
              <ul className="sub-menu sub-menu--one-column">
                <li>
                  <Link
                    href="/shop/clothes?tag=男士"
                  >
                    <a onClick={ShowNavbar}>男士</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/clothes?tag=女士"
                  >
                    <a onClick={ShowNavbar}>女士</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/clothes?tag=孩童"
                  >
                    <a onClick={ShowNavbar}>孩童</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="position-relative">
              <Link href="/shop/supplies">
                <a onClick={ShowNavbar}>日常用品</a>
              </Link>
            </li>
            <li className="position-relative">
              <Link href="/shop/foods">
                <a onClick={ShowNavbar}>食品</a>
              </Link>
            </li>
            <li className="position-relative">
              <Link href="/shop/house">
                <a onClick={ShowNavbar}>房屋/車</a>
              </Link>
              <IoIosArrowDown />
              <ul className="sub-menu sub-menu--one-column">
                <li>
                  <Link
                    href="/shop/house?tag=新屋"
                  >
                    <a onClick={ShowNavbar}>新屋</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/house?tag=中古屋"
                  >
                    <a onClick={ShowNavbar}>中古屋</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/house?tag=新車"
                  >
                    <a onClick={ShowNavbar}>新車</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/house?tag=中古車"
                  >
                    <a onClick={ShowNavbar}>中古車</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="position-relative">
              <Link href="/partner">
                <a onClick={ShowNavbar}>合作商家產品介紹</a>
              </Link>
            </li>
            <FaTimes className="nav-btn nav-close-btn" onClick={ShowNavbar}/>
        </ul>
      </div>
      <div className="didi-mobile-logo">
      </div>
      <FaBars className="didi-mobile-logo" onClick={ShowNavbar}/>
    </div>
  );
};

export default Navigation;
