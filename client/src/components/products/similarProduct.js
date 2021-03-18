import React, { useState, useEffect } from 'react'
import ProductLayout from '../common/productLayout'
import ProductService from '../products/product.service'

const SimilarProduct = ({ product }) => {
    const boxes = [
        {
            "name": "Sản phẩm tương tự"
        }
    ]

    const [similarProducts, setSimilarProducts] = useState([])

    useEffect(() => {
        getSimilarProducts(product._id, product.category?.name, 4)
    }, [])
  
    const getSimilarProducts = async (currentProductId, category, top) => {
      try {
        const result = await ProductService.getSimilarProducts(currentProductId, category, top)
        setSimilarProducts(result.data)
      } catch (ex) {
        console.log(ex)
      }
    }

    return (
         <ProductLayout widgets={boxes} products={similarProducts} />
    )
}
export default SimilarProduct