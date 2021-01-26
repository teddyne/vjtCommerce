import React from 'react'
import { products } from '../../constants/data'
import ProductLayout from '../common/productLayout'
import _ from 'lodash'

const ProductSimilar = () => {
    const boxes = [
        {
            "title": "sản phẩm tương tự"
        }
    ]
    const productItems = _.slice(products, 0 , 4)

    return (
         <ProductLayout productBoxes={boxes} products={productItems} />
    )
}
export default ProductSimilar