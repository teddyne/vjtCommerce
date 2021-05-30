import React, { useState, useEffect } from 'react'
import ProductLayout from '../common/productLayout'
import ProductService from '../../services/product.service'

const SimilarProduct = ({ _id, categoryName }) => {
    const [similarProducts, setSimilarProducts] = useState([])
    const [widgets, setWidgets] = useState([])
    const similarProductWidgetName = 'Sản phẩm tương tự'

    useEffect(() => {
      if (_id) {
        getSimilarProducts(_id, categoryName, 4)
        getSimilarProductWidget(similarProductWidgetName)
      }
    }, [_id, categoryName])

    const getSimilarProductWidget = async (name) => {
      try {
        const result = await ProductService.getSimilarProductsWidget(name)
        setWidgets(arr => [...arr, result.data])
      } catch(ex) {
        console.log(ex)
      }
    }
  
    const getSimilarProducts = async (currentProductId, category, top) => {
      try {
        const result = await ProductService.getSimilarProducts(currentProductId, category, top)
        setSimilarProducts(result.data)
      } catch (ex) {
        console.log(ex)
      }
    }

    return (
      <ProductLayout key='prod-layout' widgets={widgets} products={similarProducts} />
    )
}
export default SimilarProduct