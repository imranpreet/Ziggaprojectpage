import { create } from 'zustand'

const useCartStore = create((set) => ({
  items: [],
  fly: { active: false, img: null, from: null, to: null },
  addToCart(product) {
    set((s) => ({ items: [...s.items, product] }))
  },
  triggerFly({ img, from, to }) {
    set({ fly: { active: true, img, from, to } })
    // auto-clear after animation duration
    setTimeout(() => set({ fly: { active: false, img: null, from: null, to: null } }), 850)
  },
}))

export default useCartStore
