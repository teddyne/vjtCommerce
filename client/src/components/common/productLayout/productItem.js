import React from 'react'
import Col from 'react-bootstrap/Col'
import { formatCurrency } from '../../../helpers/stringHelper'
import './scss/_productItem.scss'

const ProductItem = ({ product, onProductItemClick }) => {
  return (
    <Col onClick={onProductItemClick} className="product-item" md={6} xl={3}>
      <div className="product-thumb">
        <img src={product.images[0].thumbnailUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <p>{product.name}</p>
        <div className="product-price">{formatCurrency(product.price)}</div>
      </div>
    </Col>
  )
}
export default ProductItem