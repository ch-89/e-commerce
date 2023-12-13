<script setup>
import { useCartStore } from '@/stores/cart';

defineProps(["product"])

const { cart, add } = useCartStore()
</script>

<template>
    <div class="bg-white shadow p-4 grid relative text-sm">
        <button @click="product.favorited = !product.favorited" :class="{ 'text-red-400': product.favorited }" class="absolute right-4 top-4 text-gray-300">
            <i class="fa-solid fa-heart"></i>
        </button>
        <img :src="product.photo" class="aspect-square object-contain">
        <div class="flex justify-between">
            <h3 class="font-semibold">{{ product.title }}</h3>
            <p class="text-blue-400">${{ product.price }}</p>
        </div>
        <div>
            <i class="fa-solid fa-star cursor-pointer" :class="rating <= product.rating ? 'text-yellow-400' : 'text-gray-300'" @click="product.rating = rating" v-for="rating in 5"></i>
        </div>
        <button @click="add(product)" class="bg-blue-400 py-2 text-white text-xs font-semibold rounded-md mt-2">Add</button>
    </div>
</template>