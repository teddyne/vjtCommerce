import React from 'react'
import Container from 'react-bootstrap/Container'

const AdminLayout = (props) => {
    return (
    <React.Fragment>
      <main className="wrap">
        <Container className="main">
          {props.children}
        </Container>
      </main>
    </React.Fragment>
    )
}
export default AdminLayout