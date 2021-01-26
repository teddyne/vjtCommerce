import React from 'react'
import Row from 'react-bootstrap/Row'

const ProductLine = (props) => {
    return (
        <div className="product-line">
            <Row>
                {props.children}
            </Row>
        </div>
    )
}
export default ProductLine