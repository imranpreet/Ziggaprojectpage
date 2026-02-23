import productService from '../services/productService'

const productController = {
  async getProduct(id) {
    // controller can add validation, caching, or mapping
    if (!id) throw new Error('Missing product id')
    const data = await productService.fetchProduct(id)
    // map or transform server data to UI shape here if needed
    return data
  },
}

export default productController
