import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Box from '../common/box'
import ProductLine from '../common/productLayout/productLine'
import ProductItem from '../common/productLayout/productItem'
import { Constant } from '../../constants'
import _ from 'lodash'
import { CategoryConstant } from '../../constants'
import ProductService from '../../services/product.service'
import climbing from '../../assets/images/categories/climbing.png'
import camping from '../../assets/images/categories/camping.png'
import biker from '../../assets/images/categories/biker.png'
import trekking from '../../assets/images/categories/trekking.png'
import other from '../../assets/images/categories/other.png'

import './_category.scss'

const Category = () => {
    const history = useHistory()
    const location = useLocation()
    const slug = location.pathname.substring(1, location.pathname.length - 5)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const result = await ProductService.getProductsByCategory(slug)
                setProducts(result.data)
            } catch (ex) {
                console.log(ex)
            }
        }
        getProducts()
    }, [slug])

    const handleClickProductDetail = (productId) => {
        history.push(`/products/${productId}`)
    }

    const renderCategoryHeader = () => {
        let catThumb = null
        let catTitle = null
        switch (slug) {
            case CategoryConstant.Climbing: 
                catThumb = climbing
                catTitle = 'Leo Núi'
            break
            case CategoryConstant.Camping: 
                catThumb = camping
                catTitle = 'Cắm trại - dã ngoại'
            break
            case CategoryConstant.Traveling: 
                catThumb = biker
                catTitle = 'Du lịch bụi'
            break
            case CategoryConstant.Trekking: 
                catThumb = trekking
                catTitle = 'Trekking - chạy bộ'
            break
            case CategoryConstant.OtherThings: 
                catThumb = other
                catTitle = 'Vài thứ khác'
            break
            default: return
        }
        return (
            <div className='category-header'>
                <span>
                    <img src={catThumb} alt={catTitle} />
                </span>
                <span className='category-name'>{catTitle}</span>
            </div>
        )
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
                    {_.map(productItems, (item) => {
                        return (
                            <ProductItem
                                key={item._id}
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
            {renderCategoryHeader()}
            {renderProducts()}
        </div>
    )
}
export default Category