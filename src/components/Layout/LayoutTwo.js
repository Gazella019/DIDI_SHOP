import { Fragment } from "react";
import { HeaderOne, HeaderThree } from "../Header";
import { FooterTwo } from "../Footer";

const LayoutTwo = ({ children, aboutOverlay, footerBgClass }) => {
  return (
    <Fragment>
      <HeaderThree aboutOverlay={aboutOverlay} />
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterTwo footerBgClass={footerBgClass} />
    </Fragment>
  );
};

export default LayoutTwo;
