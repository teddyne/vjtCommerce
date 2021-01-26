import React from 'react'
import _ from 'lodash'
import { productBoxes, products } from '../../constants/data'
import ProductLayout from '../common/productLayout'

const Product = () => {
  return <ProductLayout key="44" productBoxes={productBoxes} products={products} />
}
export default Product