import React from "react";
import Col from "react-bootstrap/Col";
import './_productItem.scss'

const ProductItem = ({ product, onProductItemClick }) => {
  return (
    <Col onClick={onProductItemClick} className="product-item" md={6} xl={3}>
      <div className="product-thumb">
        <img src={product.thumbUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <p>{product.name}</p>
        <div className="product-price">{product.price} ₫</div>
      </div>
    </Col>
  );
};
export default ProductItem;
