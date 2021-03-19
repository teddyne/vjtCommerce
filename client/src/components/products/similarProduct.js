import React, { useState, useEffect } from 'react'
import ProductLayout from '../common/productLayout'
import ProductService from '../products/product.service'

const SimilarProduct = ({ _id, categoryName }) => {
    const boxes = [
        {
            "name": "Sản phẩm tương tự"
        }
    ]

    const [similarProducts, setSimilarProducts] = useState([])
    console.log('clm', similarProducts)

    useEffect(() => {
      if (_id !== null) {
        getSimilarProducts(_id, categoryName, 4)
        console.log('SimilarProduct useEffect')
      }
    }, [_id])
  
    const getSimilarProducts = async (currentProductId, category, top) => {
      try {
        const result = await ProductService.getSimilarProducts(currentProductId, category, top)
        const arrData = [
          {
            "isActive": true,
            "_id": "604f39a733c6f969b4fc14b5",
            "name": "Mũ bảo hiểm AGV 1",
            "description": "Thiết kế form nón theo phong cách 3/4 hiện đạiVỏ nhựa ABS chịu lực tốt, bền bỉ Lớp mút xốp dày dặn êm ái, thoải mái khi sử dụng Dây khóa chắc chắn, dễ dàng điều chỉnh Màu sắc nổi bật, thời trang, chóng bong tróc Vòng đầu 54 - 58 cm (Chu Vi vòng trán) Tem kiểm định Quatest 3, bảo vệ an toàn *** Mũ Bảo Hiểm 3/4 Napoli SH Free Size - Kem Lót Nâu có kiểu dáng hiện đại, đẹp mắt, phần kính trong suốt phía trước bảo vệ tối ưu. Vỏ ngoài được làm từ chất liệu nhựa ABS chuyên dùng, chịu lực và chịu va chạm tốt để bạn an tâm khi lưu thông trên đường. Bên trong được trang bị lớp vải lót mềm, có khả năng chống khuẩn, chống ẩm tốt, tránh tình trạng ngứa da đầu kể cả khi bạn đội mũ trong thời tiết nóng bức. Thuộc phân khúc giá rẻ và chất lượng Mũ Bảo Hiểm 3/4 Napoli SH - Kem Lót Nâu nhắm đến người dùng mới bắt đầu sử dụng mũ 3/4 ",
            "price": "1200000",
            "discount": 90
          },
          {
            "isActive": true,
            "_id": "605066a81138f847b83b4e4d",
            "name": "Mũ bảo hiểm AGV 2",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price": "1200000",
            "discount": 45
          }
        ]
        console.log('xx', result.data)
        setSimilarProducts(arr => [...arr, ...arrData])
      } catch (ex) {
        console.log(ex)
      }
    }

    return (
      <ProductLayout widgets={boxes} products={similarProducts} />
    )
}
export default SimilarProduct