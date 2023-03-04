import { Fragment } from "react";
import { HeaderOne, HeaderThree, DidiHeader } from "../Header";

const LayoutDidi = ({ children, aboutOverlay, footerBgClass }) => {
  return (
    <Fragment>
      <HeaderThree aboutOverlay={aboutOverlay} />
      <DidiHeader/>
      {children}
    </Fragment>
  );
};

export default LayoutDidi;
