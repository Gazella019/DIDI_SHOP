import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
      <li className="position-relative">   
      </li>
      <li className="position-relative">   
      </li>
      <li>
           <Link href="/" as={process.env.PUBLIC_URL + "/"}>
             <a>主頁</a>
          </Link>
      </li>
      <li>
           <Link
             href="/shop/fullwidth-no-sidebar"
             as={process.env.PUBLIC_URL + "/shop/fullwidth-no-sidebar"}
           >
             <a>商店</a>
           </Link>
        </li>
        <li className="position-relative">
           <Link href="/other/about-two" as={process.env.PUBLIC_URL + "/"}>
             <a>關於我們</a>
           </Link>
         </li>
      <li className="position-relative">
        <Link href="/shop/jewls" as={process.env.PUBLIC_URL + "/"}>
            <a>珠寶/玉石</a>
          </Link>
        </li>
        <li className="position-relative">
          <Link href="/shop/clothes" as={process.env.PUBLIC_URL + "/"}>
            <a>服裝飾品</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link
                href="/other/about"
                as={process.env.PUBLIC_URL + "/other/about"}
              >
                <a>男士</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/about-two"
                as={process.env.PUBLIC_URL + "/other/about-two"}
              >
                <a>女士</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/about-two"
                as={process.env.PUBLIC_URL + "/other/about-two"}
              >
                <a>孩童</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="position-relative">
          <Link href="/shop/supplies" as={process.env.PUBLIC_URL + "/"}>
            <a>日常用品</a>
          </Link>
        </li>
        <li className="position-relative">
          <Link href="/shop/foods" as={process.env.PUBLIC_URL + "/"}>
            <a>食品</a>
          </Link>
        </li>
        <li className="position-relative">
          <Link href="/shop/house" as={process.env.PUBLIC_URL + "/"}>
            <a>房屋/車</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link
                href="/other/about"
                as={process.env.PUBLIC_URL + "/other/about"}
              >
                <a>新屋</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/about-two"
                as={process.env.PUBLIC_URL + "/other/about-two"}
              >
                <a>中古屋</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="position-relative">
          <Link href="/shop/partners" as={process.env.PUBLIC_URL + "/"}>
            <a>合作商家產品介紹</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
