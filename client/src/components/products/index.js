import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { productBoxes } from '../data'

const Product = () => {
    return (
        productBoxes.map((item) => 
        {
            return (<h1>{item.title}</h1>)
        })
    )
}
export default Product