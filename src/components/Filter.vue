<script setup>
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';
import { computed, ref } from 'vue';

const store = useProductStore()
const { add } = useCartStore()
const key = ref("")

const products = computed(() =>
    store.products.filter(product =>
        product.title.toLowerCase().includes(key.value.toLowerCase())
    )
)
</script>

<template>
    <div>
        <input v-model="key" placeholder="Search" class="bg-gray-50 border px-4 py-2 rounded-md text-sm outline-none">
        <div v-show="key" class="absolute mt-2 w-96 shadow-md">
            <header class="bg-gray-700 text-white p-4 flex items-center justify-between">
                <h3 class="text-sm font-semibold">Result</h3>
                <button @click="key = ''">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </header>
            <div v-if="products.length" class="max-h-96 overflow-auto">
                <div v-for="product in products" class="bg-white even:bg-gray-50 p-4 flex items-center gap-4">
                    <img :src="product.photo" class="w-12 aspect-square object-contain">
                    <div class="flex-1">
                        <h3 class="text-sm font-semibold">{{ product.title }}</h3>
                        <p class="text-xs text-gray-400">${{ product.price }}</p>
                    </div>
                    <button @click="add(product)" class="bg-blue-400 text-white px-4 py-2 rounded-md text-xs font-semibold">Add</button>
                </div>
            </div>
            <p v-else class="bg-white p-4 text-sm">No products found</p>
        </div>
    </div>
</template>