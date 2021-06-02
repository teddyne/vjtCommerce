import React from 'react'
import Table from 'react-bootstrap/Table'
import Box from '../../common/box'

const ProductDetailInfo = () => {
  return (
    <Box title={'chi tiết sản phẩm'}>
      <div className='product-detail-table'>
        <Table striped bordered>
          <tbody>
            <tr>
              <td>Thương hiệu</td>
              <td>Bulldog</td>
            </tr>
            <tr>
              <td>Xuất xứ thương hiệu</td>
              <td>Việt Nam</td>
            </tr>
            <tr>
              <td>Xuất xứ</td>
              <td>Việt Nam</td>
            </tr>
            <tr>
              <td>Quy cách đóng gói</td>
              <td>
                Khóa dây Bulldog, Túi vải kèm theo mũ, Thùng đựng mũ, Túi hộp
                đựng thùng, Tem phản quang
              </td>
            </tr>
            <tr>
              <td>SKU</td>
              <td>5314421209818</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>Bulldog Perro 4U</td>
            </tr>
            <tr>
              <td>Chất liệu</td>
              <td>Nhựa ABS nguyên sinh</td>
            </tr>
            <tr>
              <td>Hướng dẫn sử dụng</td>
              <td>Chọn mũ đúng kích cỡ đầu và gài chặt quai khi TGGT</td>
            </tr>
            <tr>
              <td>Hướng dẫn bảo quản</td>
              <td>
                Lót mũ có thể tháo rời để vệ sinh. Giặt bằng xà bông gội đầu
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Box>
  )
}
export default ProductDetailInfo
