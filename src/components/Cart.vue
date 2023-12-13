<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const { cart, price } = storeToRefs(useCartStore())
</script>

<template>
    <div class="absolute w-96 shadow-md z-20">
        <header class="bg-gray-700 text-white p-4 flex justify-between text-sm">
            <h3 class="font-semibold">Cart</h3>
            <p>Total: ${{ price }}</p>
        </header>
        <div v-if="cart.length" class="max-h-96 overflow-auto">
            <div v-for="(product, index) in cart" class="bg-white even:bg-gray-50 p-4 flex items-center gap-4">
                <img :src="product.photo" class="w-12 aspect-square object-contain">
                <div class="flex-1">
                    <h3 class="text-sm font-semibold">
                        {{ product.title }}
                        <template v-if="product.quantity > 1">({{ product.quantity }})</template>
                    </h3>
                    <p class="text-xs text-gray-400">${{ product.price }}</p>
                </div>
                <button @click="cart.splice(index, 1)" class="bg-red-400 text-white text-xs px-2 py-1 rounded font-semibold">Remove</button>
            </div>
        </div>
        <p v-else class="bg-white p-4 text-sm">The cart is empty</p>
        <footer class="bg-white p-4 grid grid-cols-2 gap-4 text-white text-xs font-semibold">
            <button @click="$emit('close')" class="bg-gray-400 py-2 rounded-md">Close</button>
            <button class="bg-blue-400 py-2 rounded-md">Checkout</button>
        </footer>
    </div>
</template>