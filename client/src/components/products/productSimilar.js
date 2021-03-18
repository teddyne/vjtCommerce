import React from 'react'
import { products } from '../../constants/data'
import ProductLayout from '../common/productLayout'
import _ from 'lodash'

const ProductSimilar = ({ category }) => {
    const boxes = [
        {
            "name": "sản phẩm tương tự"
        }
    ]
    const productItems = _.slice(products, 0 , 4)

    return (
         <ProductLayout widgets={boxes} products={productItems} />
    )
}
export default ProductSimilar