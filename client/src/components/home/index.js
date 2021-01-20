import React from 'react'
import Product from '../products/index'
import './_home.scss'
import Test from './test'

const Home = () => {
    return (
        <div className="home">
            <Product onClick={()=> console.log('hahahah')} />
            <Test />
        </div>
    )
}
export default Home