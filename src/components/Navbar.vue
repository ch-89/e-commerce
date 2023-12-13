<script setup>
import { ref } from "vue";
import Cart from "./Cart.vue"
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import Filter from "./Filter.vue";

defineProps(["filter"])

const show = ref(false)
const { quantity } = storeToRefs(useCartStore())
</script>

<template>
    <nav class="bg-white shadow sticky top-0 z-10">
        <div class="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
            <div class="bg-blue-400 text-white w-10 aspect-square grid place-items-center rounded-full">
                <i class="fa-solid fa-shopping-cart"></i>
            </div>
            <Filter/>
            <button @click="filter.popular = !filter.popular" class="ml-auto text-xl">
                <i :class="filter.popular ? 'fa-solid text-yellow-400' : 'fa-regular'" class="fa-star"></i>
            </button>
            <button @click="filter.favorites = !filter.favorites" class="text-xl">
                <i :class="filter.favorites ? 'fa-solid text-red-400' : 'fa-regular'" class="fa-heart"></i>
            </button>
            <div class="relative">
                <button @click="show = !show">
                    <i class="fa-solid fa-shopping-cart text-xl"></i>
                    <div v-if="quantity" class="bg-red-400 text-white w-5 aspect-square text-xs rounded-full grid place-items-center absolute -top-2.5 -right-2.5">{{ quantity }}</div>
                </button>
                <Cart v-show="show" @close="show = false" />
            </div>
        </div>
    </nav>
</template>