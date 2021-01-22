import React from 'react'
import ProductStar from './productStar'
import ProductPrice from './productPrice'
import color from "../../../assets/scss/_colors.scss";
import QualityInput from './qualityInput'
import Button from 'react-bootstrap/Button'

import './_productInfo.scss'

const ProductInfo = ({ product }) => {
    return (
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <ProductStar color={color.colorSts} size="sm" numberStar={4.5} />
        <ProductPrice price={product.price} discount={product.discount} />
        <QualityInput />
        <Button className="btn-buy-right-now">Mua Ngay</Button>
      </div>
    );
}
export default ProductInfo