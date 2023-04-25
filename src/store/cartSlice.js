import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    deliveryFee: 100,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product;
            const cartSameItemCheck = state.items.find(i => i.product.id === newProduct.id)

            if (cartSameItemCheck) {
                cartSameItemCheck.countCart += 1;
            }
            else {
                state.items.push({
                    product: newProduct,  // ? 
                    countCart: 1
                })
            }
        },
        changeQuantity: (state, action) => {
            const {productId, amount} = action.payload
            const cartItem = state.items.find(i => i.product.id === productId)

            if (cartItem) {
                cartItem.countCart += amount
            }
            if (cartItem.countCart <= 0) {
                state.items = state.items.filter(i => i !== cartItem)
            }
        }
    }
})

export const selectNumberOfCart = (state) => state.cart.items.length

export const selectSubtotal = (state) => state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.countCart, 0
)

export const selectDeliveryPrice = (state) => state.cart.deliveryFee

export const selectTotal = createSelector(
    selectSubtotal,
    selectDeliveryPrice,
    (subtotal, delivery) => (subtotal === 0 ? 0 :subtotal + delivery),
)