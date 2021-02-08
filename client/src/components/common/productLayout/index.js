import React, { useEffect } from 'react'
import Box from '../../common/box'
import ProductLine from './productLine'
import ProductItem from './productItem'
import { Constant } from '../../../constants'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

import './scss/_productLayout.scss'

const ProductLayout = (props) => {
  let history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const handleClickProductDetail = (productId) => {
    history.push(`/products/${productId}`)
  }

  return props.productBoxes.map((item) => {
    let currentProducts =
      props.productBoxes.length === 1
        ? props.products
        : _.filter(props.products, (p) => _.includes(p.productBoxIds, item.id))
    if (!_.isEmpty(currentProducts)) {
      const totalLines = Math.ceil(
        currentProducts.length / Constant.MAX_ITEM_PER_LINE
      )
      const productLines = []
      for (let index = 0; index < totalLines; index++) {
        const productItems = _.slice(
          currentProducts,
          index * Constant.MAX_ITEM_PER_LINE,
          index < totalLines - 1
            ? (index + 1) * Constant.MAX_ITEM_PER_LINE
            : Constant.MAX_ITEM_PER_LINE + 1
        )
        productLines.push(
          <ProductLine key={`product_line_index_${index}`}>
            {_.map(productItems, (item, index) => {
              return (
                <ProductItem
                key={`product_item_index_${index}`}
                  product={item}
                  onProductItemClick={() => handleClickProductDetail(item.id)}
                />
              )
            })}
          </ProductLine>
        )
      }

      return <Box title={item.title}>{productLines}</Box>
    }
    return null
  })
}
export default ProductLayout
