import { Fragment } from "react";
import { HeaderOne, HeaderThree, DidiHeader, DidiNavSideBar } from "../Header";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const LayoutDidi = ({ children }) => {

  const [showSideBar, setShowSideBar] = useState(false);
  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }
  return (
    <Fragment>
      {/* <HeaderThree aboutOverlay={aboutOverlay} /> */}
      {showSideBar && <DidiNavSideBar toggleSideBar={toggleSideBar}/>}
      <header className="didi-navbar">
        <div className="didi-title">
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>
              <Image
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                className="didi-logo"
                alt="logo image"
                width={80}
                height={120}
              />
            </a>
          </Link>
          {/* <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} className="didi-logo"/> */}
          <h1>
            DIDI SHOP
          </h1>
        </div>
        <FaBars className="nav-side-btn" onClick={toggleSideBar}/>
      </header>
      <DidiHeader/>
      {children}
    </Fragment>
  );
};

export default LayoutDidi;
