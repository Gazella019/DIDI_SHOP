import { Container, Row, Col } from "react-bootstrap";
const BreadcrumbOne = ({ children, backgroundImage, pageTitle, className }) => {
  return (
    <div
      className={`breadcrumb-area space-pt--50 ${
        className ? className : ""
      }`}
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL + backgroundImage}")`
      }}
    >
      <h1 className="didi_page_title">{pageTitle}</h1>
    </div>
  );
};

export default BreadcrumbOne;
