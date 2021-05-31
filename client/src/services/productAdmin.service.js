import http from '../helpers/httpCommon'
import httpFile from '../helpers/httpFile'

const ProductAdminService = {
    getCategories() {
      return http.get('/categories')
    },
    getWidgets() {
        return http.get('/widgets')
    },
    uploadImages(files) {
      let bodyFormData = new FormData()
      
      for (let index = 0; index < files.length; index++) {
        bodyFormData.append('files', files[index])
      }

      return httpFile.post('/upload', bodyFormData)
    },
    addProduct(product) {
      return http.post('/products', product)
    }
}
export default ProductAdminService