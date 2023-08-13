import { Container, Row, Col } from "react-bootstrap";
const BreadcrumbOne = ({ children, backgroundImage, pageTitle, className }) => {
  return (
    <div
      className={`space-pt--10 space-pb--10${
        className ? className : ""
      }`}
      style={{
        backgroundImage: `url("${backgroundImage}")`
      }}
    >
      <h1 className="didi_page_title">{pageTitle}</h1>
    </div>
  );
};

export default BreadcrumbOne;
