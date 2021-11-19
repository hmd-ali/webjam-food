<template>
    <div class="relative">
        <font-awesome-icon @click="handleCart" class="text-green-400 mr-4 text-sm cursor-pointer" icon="shopping-cart"></font-awesome-icon>
        <div class="absolute -top-1 right-2 w-3 h-3 rounded-full bg-red-600 flex items-center justify-center text-white text-xs select-none">
            {{ cartCount }}
        </div>
    </div>
</template>

<script setup>
    import { inject, computed } from 'vue'

    const store = inject('store')

    const cartCount = computed(() => {
        return store.state.cart.length
    })

    const open = () => {
        store.methods.cartContainer.open()
    }
    const close = () => {
        store.methods.cartContainer.close()
    }
    const handleCart = () => {
        store.state.cartContainerToggled ? close() : open()
    }
</script>