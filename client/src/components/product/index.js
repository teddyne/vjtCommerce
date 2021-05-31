import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ProductLayout from '../common/productLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideBar from '../../layouts/sideBar'
import Slider from '../../layouts/slider'
import ProductService from '../../services/product.service'
import { Context } from '../../store'
import { beginLoading, endLoading } from '../../services/loadingBar.service'
import climbing from '../../assets/images/menu/climbing.png'
import camping from '../../assets/images/menu/camping.png'
import biker from '../../assets/images/menu/biker.png'
import trekking from '../../assets/images/menu/trekking.png'
import other from '../../assets/images/menu/other.png'
import { CategoryConstant } from '../../constants'

const Product = () => {
  const history = useHistory()
  const [state, dispatch] = useContext(Context)
  const [products, setProducts] = useState([])
  const [widgets, setWidgets] = useState([])

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
    
    const getWidgets = async () => {
      try {
        const result = await ProductService.getWidgets()
        setWidgets(result.data)
      } catch (ex) {
        console.log(ex)
      }
    }
    getProducts()
    getWidgets()
  }, [])

  const handleClickMenu = (path) => {
    history.push(`/${path}.html`)
  }

  const getSideBarItems = () => {
    return [
      {
        'name': 'Leo Núi',
        'icon': climbing,
        'iconLabel': 'Leo núi',
        'onClick': () => handleClickMenu(CategoryConstant.Climbing)
      },
      {
        'name': 'Cắm Trại - Dã Ngoại',
        'icon': camping,
        'iconLabel': 'Cắm trại - dã ngoại',
        'onClick': () => handleClickMenu(CategoryConstant.Camping)
      },
      {
        'name': 'Du Lịch Bụi',
        'icon': biker,
        'iconLabel': 'Du lịch bụi',
        'onClick': () => handleClickMenu(CategoryConstant.Traveling)
      },
      {
        'name': 'Trekking - Chạy bộ',
        'icon': trekking,
        'iconLabel': 'Trekking - Chạy bộ',
        'onClick': () => handleClickMenu(CategoryConstant.Trekking)
      },
      {
        'name': 'Vài Thứ Khác',
        'icon': other,
        'iconLabel': 'Vài thứ khác',
        'onClick': () => handleClickMenu(CategoryConstant.OtherThings)
      }
    ]
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={3}>
          <SideBar items={getSideBarItems()} />
        </Col>
        <Col sm={12} lg={9}>
          <Slider />
        </Col>
      </Row>
      <div className="content">
        <ProductLayout widgets={widgets} products={products} />
      </div>
    </React.Fragment>
  )
}
export default Product