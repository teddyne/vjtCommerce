import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Box from '../common/box'
import ProductLine from '../common/productLayout/productLine'
import ProductItem from '../common/productLayout/productItem'
import { Constant } from '../../constants'
import _ from 'lodash'
import ProductService from '../../services/product.service'
import helmet from '../../assets/images/categories/helmet-cat.png'

import './_category.scss'

const Category = () => {
    const history = useHistory()
    const location = useLocation()
    const categorySlug = location.pathname.substring(1, location.pathname.length - 5)
    console.log(location);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const result = await ProductService.getProductsByCategory(categorySlug)
                setProducts(result.data)
            } catch (ex) {
                console.log(ex)
            }
        }
        getProducts()
    }, [])

    const handleClickProductDetail = (productId) => {
        history.push(`/products/${productId}`)
      }

    const renderProducts = () => {
        const totalLines = Math.ceil(products.length / Constant.MAX_ITEM_PER_LINE)
        const productLines = []
        for (let index = 0; index < totalLines; index++) {
            const productItems = _.slice(
                products,
                index * Constant.MAX_ITEM_PER_LINE,
                (index + 1) * Constant.MAX_ITEM_PER_LINE
            )
            productLines.push(
                <ProductLine key={`product_line_index_${index}`}>
                    {_.map(productItems, (item, index) => {
                        return (
                            <ProductItem
                                key={`product_item_index_${index}`}
                                product={item}
                                onProductItemClick={() => handleClickProductDetail(item._id)}
                            />
                        )
                    })}
                </ProductLine>
            )
        }
        return <Box>{productLines}</Box>
    }

    return (
        <div className='category'>
            <div className='category-header'>
                <span>
                    <img src={helmet} alt='Mũ bảo hiểm' />
                </span>
                <span className='category-name'>Mũ bảo hiểm</span>
            </div>
            {renderProducts()}
        </div>
    )
}
export default Category