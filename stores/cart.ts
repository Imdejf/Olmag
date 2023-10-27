import { defineStore } from 'pinia'
import { CartDTO } from '~/types/ShoppingCart/Cart.ts'

export interface Cart {
    total: number,
    totalGross: number,
    cartItem: CartItem[]
  }
  
export interface CartItem {
    parentProductId: string
    id: string
    name: string
    filePath: string
    price: number
    productPriceGross: number
    quantity: number
    relatedProducts: CartItemRelatedDTO[],
  }
  
  interface CartItemRelatedDTO {
    optionName: string;
    value: string;
   }
  
  interface CartState {
      cart: CartDTO | null,
      items: CartItem[],
      lastAddedItem: CartItem | null,
      totalCount: number, 
      total: number,
      addCartResult: boolean,
      showCart: boolean,
    }

export const useCart = defineStore({
  id: 'cart',
  state: (): CartState => ({
    cart: null,
    items: [],
    lastAddedItem: null,
    totalCount: 0,
    total: 0,
    addCartResult: false,
    showCart: false,
  }),
  getters: {

  },
  actions: {
    async initCartBadge(): Promise<void> {
        
        try {

        } catch (error) {
          console.error(error)
        }
    },
  }
})

