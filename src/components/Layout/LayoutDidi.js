import { Fragment } from "react";
import { HeaderOne, HeaderThree } from "../Header";

const LayoutDidi = ({ children, aboutOverlay, footerBgClass }) => {
  return (
    <Fragment>
      <HeaderThree aboutOverlay={aboutOverlay} />
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
    </Fragment>
  );
};

export default LayoutDidi;
