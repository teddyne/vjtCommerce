import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Box from '../common/box'
import ProductLine from '../common/productLayout/productLine'
import ProductItem from '../common/productLayout/productItem'
import { Constant } from '../../constants'
import _ from 'lodash'
import ProductService from '../../services/product.service'
import search from '../../assets/images/search.png'
import { Context } from '../../store'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Filter from './filter'
import { beginLoading, endLoading } from '../../services/loadingBar.service'

import './scss/_search.scss'

const Search = () => {
    const history = useHistory()
    const location = useLocation()
    const [state, dispatch] = useContext(Context)
    const [products, setProducts] = useState([])
    const keyword = location.search.replace('?keyword=', '')

    useEffect(() => {
        const getProducts = async () => {
            beginLoading(dispatch)
            try {
                const result = await ProductService.getProducts()
                setProducts(result.data)
            } catch (ex) {
                console.log(ex)
            }
            endLoading(dispatch)
        }
        getProducts()
    }, [keyword])

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
        return (
            <Box>
                <Row>
                    <Col className='filter-col' lg={3}>
                        <Filter />
                    </Col>
                    <Col lg={9}>
                        {productLines}
                    </Col>
                </Row>
            </Box>
            )
    }

    return (
        <div className='search'>
            <div className='search-header'>
                <span>
                    <img src={search} alt='Tìm kiếm sản phẩm' />
                </span>
                <span className='search-name'>Kết quả tìm kiếm cho: {keyword}</span>
            </div>
            {renderProducts()}
        </div>
    )
}
export default Search