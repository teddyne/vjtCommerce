import React from 'react'
import _ from 'lodash'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { productBoxes, products } from '../data'
import ProductBox from './product-box'

const Product = () => {
    return (
        productBoxes.map((item) => 
        {
            let currentProducts = _.filter(products, p => _.includes(p.productBoxIds, item.id))
            if (!_.isEmpty(currentProducts)) {
                return (
                    <ProductBox title={item.title} products={currentProducts} />
                )
            }
        })
    )
}
export default Product