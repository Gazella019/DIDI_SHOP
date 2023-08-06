import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { animateScroll } from "react-scroll";
import { SubscribeEmailTwo } from "../Newsletter";
import Image from "next/image";

const FooterTwo = ({ footerBgClass }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer className="didi-footer">
      
      <Image
        src={
          process.env.PUBLIC_URL + footerBgClass ===
          "bg-color--blue-two"
            ? "/assets/images/logo.png"
            : "/assets/images/logo.png"
        }
        width={120}
        height={160}
        alt=""
      />

      <div className="footer-blurr-text">
        <h5 className="footer-single-widget__title">關注我們</h5>
        <nav className="footer-single-widget__nav footer-single-widget__nav--social">
          <ul>
            <li>
              <a href="https://www.facebook.com">
                <FaFacebookF style = {{ color: "black", fontSize: "1.2em" }}/> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagram style = {{ color: "black", fontSize: "1.2em" }}/> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <FaYoutube style = {{ color: "black", fontSize: "1.2em" }}/> Youtube
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowRoundUp />
      </button>
    </footer>
  );
};

export default FooterTwo;
