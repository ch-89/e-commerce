import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
    const products = ref([
        { id: 1, title: "Nintendo Switch", price: 80, photo: "/images/switch.jpg", rating: 0 },
        { id: 2, title: "iPad", price: 50, photo: "/images/ipad.jpg", rating: 0 },
        { id: 3, title: "Samsung TV", price: 120, photo: "/images/tv.jpg", rating: 0 },
        { id: 4, title: "Mixer", price: 30, photo: "/images/mixer.jpg", rating: 0 },
    ])

    return { products }
})