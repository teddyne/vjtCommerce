import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Box from '../box'
import SideBar from '../../../layouts/sideBar'

import './_userLayout.scss'

const UserLayout = ({ sideBarItems, children }) => {
    return (
        <div className='user-layout'>
            <Row className='content-row'>
                <Col className='order-side-bar' lg={3}>
                  <SideBar items={sideBarItems} />
                </Col>
                <Col className='box-content' lg={9}>
                  <Box>
                    {children}
                  </Box>
                </Col>
            </Row>
        </div>
    )
}

export default UserLayout