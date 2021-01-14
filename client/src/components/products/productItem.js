import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductItem = ({ product }) => {
  return (
    <Col sm={3}>
      <div className="product-img">
        <p>Image</p>
      </div>
      <div className="product-info">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </Col>
  );
};
export default ProductItem;
