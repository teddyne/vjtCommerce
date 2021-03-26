import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextEditor from '../../../components/common/textEditor'
import MultipleUpload from '../../../components/common/multipleUpload'

import './scss/_productAdmin.scss'

const ProductAdmin = () => {
    const onChange = (data) => {
        console.log('dkm', data)
    }
    return(
        <div className='product-admin'>
            <Form>
            <Form.Group controlId="name">
                <Form.Label>Tên Sản Phẩm</Form.Label>
                <Form.Control type="text" placeholder="Tên sản phẩm" />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Mô Tả</Form.Label>
                <div className='ckeditor'>
                    <TextEditor onChange={onChange} />
                </div>
            </Form.Group>
            <Form.Group controlId="images">
                <Form.Label>Hình Ảnh</Form.Label>
                <MultipleUpload />
            </Form.Group>
            <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="widgets">
                <Form.Label>Widget</Form.Label>
                <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="price">
                <Form.Label>Giá</Form.Label>
                <Form.Control type="text" placeholder="Giá" />
            </Form.Group>
            <Form.Group controlId="discount">
                <Form.Label>Giảm Giá (%)</Form.Label>
                <Form.Control type="text" placeholder="Giảm giá" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
            </Form>
        </div>

    )
}

export default ProductAdmin