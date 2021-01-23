import React from 'react'
import _ from 'lodash'
import { productBoxes, products } from '../../constants/data'
import ProductBox from './productBox'
import ProductLine from './productLine'
import ProductItem from './productItem'
import { useHistory } from 'react-router-dom'
import { Constant } from '../../constants/index'

const Product = () => {
  let history = useHistory()

  const handleClickProductDetail = (productId) => {
    history.push(`/products/${productId}`)
  }

  return productBoxes.map((item) => {
    let currentProducts = _.filter(products, (p) =>
      _.includes(p.productBoxIds, item.id)
    )
    if (!_.isEmpty(currentProducts)) {
      const totalLines = Math.ceil(
        currentProducts.length / Constant.MAX_ITEM_PER_LINE
      )
      const productLines = []
      for (let index = 0; index < totalLines; index++) {
        const productItems = _.slice(
          currentProducts,
          index * Constant.MAX_ITEM_PER_LINE,
          index < totalLines - 1 ? (index + 1) * Constant.MAX_ITEM_PER_LINE : Constant.MAX_ITEM_PER_LINE + 1
        )
        productLines.push(
          <ProductLine>
            {_.map(productItems, (item) => {
              return (
                <ProductItem
                  product={item}
                  onProductItemClick={() => handleClickProductDetail(item.id)}
                />
              )
            })}
          </ProductLine>
        )
      }

      return <ProductBox title={item.title}>{productLines}</ProductBox>
    }
  })
}
export default Product
