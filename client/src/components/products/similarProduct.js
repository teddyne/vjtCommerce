import React, { useState, useEffect } from 'react'
import ProductLayout from '../common/productLayout'
import ProductService from '../products/product.service'

const SimilarProduct = ({ _id, categoryName }) => {
    const boxes = ["Sản phẩm tương tự"]

    const [similarProducts, setSimilarProducts] = useState([])
    console.log('clm', similarProducts)

    useEffect(() => {
      if (_id !== null) {
        getSimilarProducts(_id, categoryName, 4)
        console.log('SimilarProduct useEffect')
      }
    }, [_id])
  
    const getSimilarProducts = async (currentProductId, category, top) => {
      try {
        const result = await ProductService.getSimilarProducts(currentProductId, category, top)
        const arrData = [
          {
            "a": "s"
          },
          {
            "a": "d"
          }
        ]
        console.log('xx', result.data)
        setSimilarProducts(arr => [...arr, ...result.data])
      } catch (ex) {
        console.log(ex)
      }
    }

    return (
      <ProductLayout widgets={boxes} products={similarProducts} />
    )
}
export default SimilarProduct