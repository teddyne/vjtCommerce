import React from 'react'
import _ from 'lodash'
import { productBoxes, products } from '../data'
import ProductBox from './productBox'
import ProductLine from './productLine'
import ProductItem from './productItem'
import { Redirect } from 'react-router-dom'

const Product = () => {

    const handleClickProductDetail = () => {
        console.log('dfdf')
        //return <Redirect to='/contact' />
    }

    return (
        productBoxes.map((item) => 
        {
            let currentProducts = _.filter(products, p => _.includes(p.productBoxIds, item.id))
            if (!_.isEmpty(currentProducts)) {
                const totalLines = Math.ceil(currentProducts.length / 4)
                const productLines = []
                for (let index = 0; index < totalLines; index++) {
                    const productItems = _.slice(currentProducts, index * 4, index < totalLines - 1 ? (index + 1) * 4 : 5)
                    productLines.push(
                    <ProductLine>
                        {
                            _.map(productItems, (item) => {
                                return (
                                    <ProductItem product={item} onProductItemClick={handleClickProductDetail} />
                                )
                            })
                        }
                    </ProductLine>
                    );
                }

                return (
                    <ProductBox title={item.title}>
                        {productLines}
                    </ProductBox>
                )
            }
        })
    )
}
export default Product