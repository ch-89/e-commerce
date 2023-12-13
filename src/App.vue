<script setup>
import { computed, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Product from './components/Product.vue';
import { useProductStore } from './stores/product';

const store = useProductStore()
const filter = ref({})

const products = computed(() => {
  let products = store.products

  if(filter.value.favorites) {
    products = products.filter(product => product.favorited)
  }

  if(filter.value.popular) {
    products = products.toSorted((a, b) => b.rating - a.rating)
  }

  return products
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen text-gray-700">
    <Navbar :filter="filter" />
    <main class="max-w-5xl mx-auto p-6 grid grid-cols-4 gap-6">
      <Product v-for="product in products" :key="product.id" :product="product" />
    </main>
  </div>
</template>