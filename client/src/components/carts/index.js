import React from 'react'
import _ from 'lodash'
import CartItem from './cartItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './scss/_cart.scss'

const Cart = () => {
  const carts = [
    {
      "isActive": true,
      "_id": "604f39a733c6f969b4fc14b5",
      "name": "Mũ bảo hiểm AGV 1",
      "description": "Thiết kế form nón theo phong cách 3/4 hiện đạiVỏ nhựa ABS chịu lực tốt, bền bỉ Lớp mút xốp dày dặn êm ái, thoải mái khi sử dụng Dây khóa chắc chắn, dễ dàng điều chỉnh Màu sắc nổi bật, thời trang, chóng bong tróc Vòng đầu 54 - 58 cm (Chu Vi vòng trán) Tem kiểm định Quatest 3, bảo vệ an toàn *** Mũ Bảo Hiểm 3/4 Napoli SH Free Size - Kem Lót Nâu có kiểu dáng hiện đại, đẹp mắt, phần kính trong suốt phía trước bảo vệ tối ưu. Vỏ ngoài được làm từ chất liệu nhựa ABS chuyên dùng, chịu lực và chịu va chạm tốt để bạn an tâm khi lưu thông trên đường. Bên trong được trang bị lớp vải lót mềm, có khả năng chống khuẩn, chống ẩm tốt, tránh tình trạng ngứa da đầu kể cả khi bạn đội mũ trong thời tiết nóng bức. Thuộc phân khúc giá rẻ và chất lượng Mũ Bảo Hiểm 3/4 Napoli SH - Kem Lót Nâu nhắm đến người dùng mới bắt đầu sử dụng mũ 3/4 ",
      "price": "1200000",
      "discount": 90,
      "category": {
        "isActive": true,
        "_id": "604f39a733c6f969b4fc14b6",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-15T10:40:39.070Z",
        "updatedAt": "2021-03-15T10:40:39.070Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "604f39a733c6f969b4fc14b7",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/3a/ee/4a62e9f1fb51d2551cd44e3aea10c084.jpg",
          "createdAt": "2021-03-15T10:40:39.070Z",
          "updatedAt": "2021-03-15T10:40:39.070Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "604f39a733c6f969b4fc14b8",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-15T10:40:39.070Z",
          "updatedAt": "2021-03-15T10:40:39.070Z"
        },
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "604f39a733c6f969b4fc14b9",
          "name": "Sản phẩm nổi bật",
          "createdAt": "2021-03-15T10:40:39.070Z",
          "updatedAt": "2021-03-15T10:40:39.070Z"
        }
      ],
      "createdAt": "2021-03-15T10:40:39.070Z",
      "updatedAt": "2021-03-15T10:40:39.070Z",
      "__v": 0
    },
    {
      "isActive": true,
      "_id": "605066a81138f847b83b4e4d",
      "name": "Mũ bảo hiểm AGV 2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "price": "1200000",
      "discount": 45,
      "category": {
        "isActive": true,
        "_id": "605066a81138f847b83b4e4e",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-16T08:04:56.535Z",
        "updatedAt": "2021-03-16T08:04:56.535Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "605066a81138f847b83b4e4f",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "createdAt": "2021-03-16T08:04:56.535Z",
          "updatedAt": "2021-03-16T08:04:56.535Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605066a81138f847b83b4e50",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-16T08:04:56.535Z",
          "updatedAt": "2021-03-16T08:04:56.535Z"
        },
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605066a81138f847b83b4e51",
          "name": "Sản phẩm nổi bật",
          "createdAt": "2021-03-16T08:04:56.535Z",
          "updatedAt": "2021-03-16T08:04:56.535Z"
        }
      ],
      "createdAt": "2021-03-16T08:04:56.535Z",
      "updatedAt": "2021-03-16T08:04:56.535Z",
      "__v": 0
    },
    {
      "isActive": true,
      "_id": "605175dfd2ac1b259c9cfa2c",
      "name": "Mũ bảo hiểm AGV 3",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "price": "5400000",
      "discount": 24,
      "category": {
        "isActive": true,
        "_id": "605175dfd2ac1b259c9cfa2d",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-17T03:22:07.775Z",
        "updatedAt": "2021-03-17T03:22:07.775Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "605175dfd2ac1b259c9cfa2e",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "createdAt": "2021-03-17T03:22:07.776Z",
          "updatedAt": "2021-03-17T03:22:07.776Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605175dfd2ac1b259c9cfa2f",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-17T03:22:07.776Z",
          "updatedAt": "2021-03-17T03:22:07.776Z"
        }
      ],
      "createdAt": "2021-03-17T03:22:07.776Z",
      "updatedAt": "2021-03-17T03:22:07.776Z",
      "__v": 0
    },
    {
      "isActive": true,
      "_id": "605175e5d2ac1b259c9cfa30",
      "name": "Mũ bảo hiểm AGV 4",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "price": "5400000",
      "discount": 24,
      "category": {
        "isActive": true,
        "_id": "605175e5d2ac1b259c9cfa31",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-17T03:22:13.421Z",
        "updatedAt": "2021-03-17T03:22:13.421Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "605175e5d2ac1b259c9cfa32",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "createdAt": "2021-03-17T03:22:13.421Z",
          "updatedAt": "2021-03-17T03:22:13.421Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605175e5d2ac1b259c9cfa33",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-17T03:22:13.421Z",
          "updatedAt": "2021-03-17T03:22:13.421Z"
        }
      ],
      "createdAt": "2021-03-17T03:22:13.422Z",
      "updatedAt": "2021-03-17T03:22:13.422Z",
      "__v": 0
    },
    {
      "isActive": true,
      "_id": "605175ead2ac1b259c9cfa34",
      "name": "Mũ bảo hiểm AGV 5",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "price": "5400000",
      "discount": 24,
      "category": {
        "isActive": true,
        "_id": "605175ead2ac1b259c9cfa35",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-17T03:22:18.177Z",
        "updatedAt": "2021-03-17T03:22:18.177Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "605175ead2ac1b259c9cfa36",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "createdAt": "2021-03-17T03:22:18.177Z",
          "updatedAt": "2021-03-17T03:22:18.177Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605175ead2ac1b259c9cfa37",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-17T03:22:18.177Z",
          "updatedAt": "2021-03-17T03:22:18.177Z"
        }
      ],
      "createdAt": "2021-03-17T03:22:18.177Z",
      "updatedAt": "2021-03-17T03:22:18.177Z",
      "__v": 0
    },
    {
      "isActive": true,
      "_id": "604f39a733c6f969b4fc14b5",
      "name": "Mũ bảo hiểm AGV 1",
      "description": "Thiết kế form nón theo phong cách 3/4 hiện đạiVỏ nhựa ABS chịu lực tốt, bền bỉ Lớp mút xốp dày dặn êm ái, thoải mái khi sử dụng Dây khóa chắc chắn, dễ dàng điều chỉnh Màu sắc nổi bật, thời trang, chóng bong tróc Vòng đầu 54 - 58 cm (Chu Vi vòng trán) Tem kiểm định Quatest 3, bảo vệ an toàn *** Mũ Bảo Hiểm 3/4 Napoli SH Free Size - Kem Lót Nâu có kiểu dáng hiện đại, đẹp mắt, phần kính trong suốt phía trước bảo vệ tối ưu. Vỏ ngoài được làm từ chất liệu nhựa ABS chuyên dùng, chịu lực và chịu va chạm tốt để bạn an tâm khi lưu thông trên đường. Bên trong được trang bị lớp vải lót mềm, có khả năng chống khuẩn, chống ẩm tốt, tránh tình trạng ngứa da đầu kể cả khi bạn đội mũ trong thời tiết nóng bức. Thuộc phân khúc giá rẻ và chất lượng Mũ Bảo Hiểm 3/4 Napoli SH - Kem Lót Nâu nhắm đến người dùng mới bắt đầu sử dụng mũ 3/4 ",
      "price": "1200000",
      "discount": 90,
      "category": {
        "isActive": true,
        "_id": "604f39a733c6f969b4fc14b6",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-15T10:40:39.070Z",
        "updatedAt": "2021-03-15T10:40:39.070Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "604f39a733c6f969b4fc14b7",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/3a/ee/4a62e9f1fb51d2551cd44e3aea10c084.jpg",
          "createdAt": "2021-03-15T10:40:39.070Z",
          "updatedAt": "2021-03-15T10:40:39.070Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "604f39a733c6f969b4fc14b8",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-15T10:40:39.070Z",
          "updatedAt": "2021-03-15T10:40:39.070Z"
        },
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "604f39a733c6f969b4fc14b9",
          "name": "Sản phẩm nổi bật",
          "createdAt": "2021-03-15T10:40:39.070Z",
          "updatedAt": "2021-03-15T10:40:39.070Z"
        }
      ],
      "createdAt": "2021-03-15T10:40:39.070Z",
      "updatedAt": "2021-03-15T10:40:39.070Z",
      "__v": 0
    },
    {
      "isActive": true,
      "_id": "605066a81138f847b83b4e4d",
      "name": "Mũ bảo hiểm AGV 2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "price": "1200000",
      "discount": 45,
      "category": {
        "isActive": true,
        "_id": "605066a81138f847b83b4e4e",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-16T08:04:56.535Z",
        "updatedAt": "2021-03-16T08:04:56.535Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "605066a81138f847b83b4e4f",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "createdAt": "2021-03-16T08:04:56.535Z",
          "updatedAt": "2021-03-16T08:04:56.535Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605066a81138f847b83b4e50",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-16T08:04:56.535Z",
          "updatedAt": "2021-03-16T08:04:56.535Z"
        },
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605066a81138f847b83b4e51",
          "name": "Sản phẩm nổi bật",
          "createdAt": "2021-03-16T08:04:56.535Z",
          "updatedAt": "2021-03-16T08:04:56.535Z"
        }
      ],
      "createdAt": "2021-03-16T08:04:56.535Z",
      "updatedAt": "2021-03-16T08:04:56.535Z",
      "__v": 0
    },
    {
      "isActive": true,
      "_id": "605175dfd2ac1b259c9cfa2c",
      "name": "Mũ bảo hiểm AGV 3",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "price": "5400000",
      "discount": 24,
      "category": {
        "isActive": true,
        "_id": "605175dfd2ac1b259c9cfa2d",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-17T03:22:07.775Z",
        "updatedAt": "2021-03-17T03:22:07.775Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "605175dfd2ac1b259c9cfa2e",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "createdAt": "2021-03-17T03:22:07.776Z",
          "updatedAt": "2021-03-17T03:22:07.776Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605175dfd2ac1b259c9cfa2f",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-17T03:22:07.776Z",
          "updatedAt": "2021-03-17T03:22:07.776Z"
        }
      ],
      "createdAt": "2021-03-17T03:22:07.776Z",
      "updatedAt": "2021-03-17T03:22:07.776Z",
      "__v": 0
    },
    {
      "isActive": true,
      "_id": "605175e5d2ac1b259c9cfa30",
      "name": "Mũ bảo hiểm AGV 4",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "price": "5400000",
      "discount": 24,
      "category": {
        "isActive": true,
        "_id": "605175e5d2ac1b259c9cfa31",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-17T03:22:13.421Z",
        "updatedAt": "2021-03-17T03:22:13.421Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "605175e5d2ac1b259c9cfa32",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "createdAt": "2021-03-17T03:22:13.421Z",
          "updatedAt": "2021-03-17T03:22:13.421Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605175e5d2ac1b259c9cfa33",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-17T03:22:13.421Z",
          "updatedAt": "2021-03-17T03:22:13.421Z"
        }
      ],
      "createdAt": "2021-03-17T03:22:13.422Z",
      "updatedAt": "2021-03-17T03:22:13.422Z",
      "__v": 0
    },
    {
      "isActive": true,
      "_id": "605175ead2ac1b259c9cfa34",
      "name": "Mũ bảo hiểm AGV 5",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "price": "5400000",
      "discount": 24,
      "category": {
        "isActive": true,
        "_id": "605175ead2ac1b259c9cfa35",
        "name": "Mũ bảo hiểm",
        "createdAt": "2021-03-17T03:22:18.177Z",
        "updatedAt": "2021-03-17T03:22:18.177Z"
      },
      "images": [
        {
          "isActive": true,
          "_id": "605175ead2ac1b259c9cfa36",
          "originalUrl": "https://salt.tikicdn.com/cache/w444/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
          "createdAt": "2021-03-17T03:22:18.177Z",
          "updatedAt": "2021-03-17T03:22:18.177Z"
        }
      ],
      "widgets": [
        {
          "location": "Home",
          "order": 0,
          "isActive": true,
          "_id": "605175ead2ac1b259c9cfa37",
          "name": "Mũ bảo hiểm",
          "createdAt": "2021-03-17T03:22:18.177Z",
          "updatedAt": "2021-03-17T03:22:18.177Z"
        }
      ],
      "createdAt": "2021-03-17T03:22:18.177Z",
      "updatedAt": "2021-03-17T03:22:18.177Z",
      "__v": 0
    }
  ]

  return (
    <Row className='cart'>
      <Col lg={9}>
        <div className='cart-list'>
          {
            _.map(carts, (cart, index) => {
              return <CartItem key={index} cart={cart} />
            })
          }
        </div>
      </Col>
      <Col lg={3}>
        <div className='check-out'>
              Tổng tiền: 50.000000
        </div>
        <Button className="btn-check-out">Đặt hàng</Button>
      </Col>
    </Row>
  )
}
export default Cart