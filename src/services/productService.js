const productService = {
  async fetchProduct(id) {
    try {
      const res = await fetch(`/api/products/${encodeURIComponent(id)}`)
      if (!res.ok) throw new Error('Network error')
      const json = await res.json()
      return json
    } catch (err) {
      // Fallback mock data to keep UI working during development
      console.warn('productService.fetchProduct fallback mock', err)
      return {
        id,
        title: 'Divine Tunes-11',
        artist: 'Pradip Sarkar',
        price: '₹1,18,300',
        images: ['https://zigguratss.com/assets/upload/art-1155.jpg'],
        story: 'A contemplative series inspired by meditation and harmony.',
        specs: { size: '45.72 x 50.80 cm', material: 'Acrylic on Canvas' },
        scentProfile: ['Warm Amber', 'Sandalwood', 'Citrus'],
      }
    }
  },
}

export default productService
