import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cart = ref([])

    const quantity = computed(() => cart.value.reduce((a, b) => a + b.quantity, 0))
    const price = computed(() => cart.value.reduce((a, b) => a + b.price * b.quantity, 0))

    const add = product => {
        // Version 1
        // if(cart.value.includes(product)) {
        //     product.quantity++
        // }
        // else {
        //     product.quantity = 1
        //     cart.value.push(product)
        // }

        // Version 2
        const p = cart.value.find(p => p.id == product.id)
        p ? p.quantity++ : cart.value.push({ ...product, quantity: 1 })
    }

    return { cart, add, quantity, price }
})