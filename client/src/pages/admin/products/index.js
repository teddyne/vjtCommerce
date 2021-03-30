import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextEditor from '../../../components/common/textEditor'
import MultipleUpload from '../../../components/common/multipleUpload'
import ProductAdminService from '../../../services/productAdminService'
import _ from 'lodash'

import './scss/_productAdmin.scss'

const ProductAdmin = () => {

    const [categories, setCategories] = useState([])
    const [widgets, setWidgets] = useState([])

    const initProduct = {
        name: null,
        description: null,
        price: null,
        discount: null,
        _categoryId: null,
        images: [],
        widgets: []
    }

    const [product, setProduct] = useState(initProduct)

    useEffect(() => {
        getCommonData()
    }, [])

    const onChangeDescription = (data) => {
        setProduct(prevState => ({
            ...prevState,
            description: data
        }))
    }

    const handleSelectCategoryChange = (e) => {
        const { value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            _categoryId: value
        }))
    }

    const handleSelectWidgetChange = (e) => {
        const arr = Array.from(e.target.selectedOptions, option => option.value)
        setProduct(prevState => ({
            ...prevState,
            widgets: arr
        }))
    }

    const getCommonData = async () => {
        try {
            const categoryResult = await ProductAdminService.getCategories()
            setCategories(categoryResult.data)
            const widgetResult = await ProductAdminService.getWidgets()
            setWidgets(widgetResult.data)
        } catch (ex) {
            console.log(ex)
        }
    }

    const renderSelectItems = (type) => {
        let data = null
        switch(type) {
            case 'category': data = categories
            break
            case 'widget': data = widgets
            break
            default: data = null
        }
        if (_.isEmpty(data)) return null
        return _.map(data, (item, index) => {
            return <option key={`${type}_${index}`} value={item._id}>{item.name}</option>
        })
    }

    const handleSave = async () => {
        console.log('data', product)
        const result = await ProductAdminService.addProduct(product)
        console.log('add product', result.data)
    }

    const handleImages = async (images) => {
        const result = await ProductAdminService.uploadImages(images)
        setProduct(prevState => ({
            ...prevState,
            images: result.data.urls 
            ? _.map(result.data.urls, url => {
                return {
                    originalUrl: url,
                    thumbnailUrl: url
                }
            })
            : 
            {
                originalUrl: result.data.url,
                thumbnailUrl: result.data.url
            }
        }))
    }

    const handleChangeName = (e) => {
        const { value } = e.target
        setProduct(prevState => ({
            ...prevState,
            name: value
        }))
    }

    const handleChangeDiscount = (e) => {
        const { value } = e.target
        setProduct(prevState => ({
            ...prevState,
            discount: value
        }))

        console.log(product)
    }

    const handleChangePrice = (e) => {
        const { value } = e.target
        setProduct(prevState => ({
            ...prevState,
            price: value
        }))
    }

    return (
        <div className='product-admin'>
            <Form>
            <Form.Group controlId="name">
                <Form.Label>Tên Sản Phẩm</Form.Label>
                <Form.Control type="text" required placeholder="Tên sản phẩm" onChange={handleChangeName} />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Mô Tả</Form.Label>
                <div className='ckeditor'>
                    <TextEditor onChange={onChangeDescription} />
                </div>
            </Form.Group>
            <Form.Group controlId="images">
                <Form.Label>Hình Ảnh</Form.Label>
                <MultipleUpload onUpload={handleImages} />
            </Form.Group>
            <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control name='category' as="select" onChange={handleSelectCategoryChange}>
                  <option>Select Category</option>
                  {renderSelectItems('category')}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="widgets">
                <Form.Label>Widget</Form.Label>
                <Form.Control as="select" multiple onChange={handleSelectWidgetChange}>
                 {renderSelectItems('widget')}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="price">
                <Form.Label>Giá</Form.Label>
                <Form.Control type="number" placeholder="Giá" onChange={handleChangePrice} />
            </Form.Group>
            <Form.Group controlId="discount">
                <Form.Label>Giảm Giá (%)</Form.Label>
                <Form.Control type="number" placeholder="Giảm giá" onChange={handleChangeDiscount} />
            </Form.Group>
            <Button variant="primary" disabled={
                 !product.name
                || !product.description
                || !product.price
                || !product.discount
                || _.isEmpty(product.widgets)
                || !product._categoryId
                || _.isEmpty(product.images)
                } onClick={handleSave}>Save</Button>
            </Form>
        </div>

    )
}

export default ProductAdmin