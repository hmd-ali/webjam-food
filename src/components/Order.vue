<template>
    <div v-if="store.state.orderModalToggled" class="fixed z-[70] top-0 left-0 w-full h-screen bg-white flex flex-col items-center   overflow-y-scroll">
        <div class="close">
            <font-awesome-icon @click="close" class="icon" icon="times"/>
        </div>
        <div class="relative w-full py-8 flex flex-col items-center">
            <div class="input_container">
                <label for="fname">First Name</label>
                <input type="text" name="fname">
            </div>
            <div class="input_container">
                <label for="lname">Last Name</label>
                <input type="text" name="lname">
            </div>
            <div class="input_container">
                <label for="country">Country</label>
                <input type="text" name="country">
            </div>
            <div class="input_container">
                <label for="street">Street</label>
                <input type="text" name="street">
            </div>
            <div class="input_container">
                <label for="city">City</label>
                <input type="text" name="city">
            </div>
            <div class="input_container">
                <label for="postCode">Postal/Zip code</label>
                <input type="text" name="postCode">
            </div>
            <div class="input_container">
                <label for="phone">Phone Number</label>
                <input type="text" name="phone">
            </div>
        </div>
        <div class="orderContainer">
            <h2>your order</h2>
            <div v-for="(item,index) in store.state.cart" :key="index" class="items">
                <p>{{ item.quantity }}x</p>
                <p class="ml-2">{{ item.name }}</p>
                <img :src="getImageUrl(item.imageUrl)" alt="IMAGE">
            </div>

            <button @click="display">place order</button>
        </div>
    </div>
</template>

<script setup>
    import { inject } from 'vue'

    const store = inject('store')

    const close = () => {
        store.methods.orderModal.close()
    }

    const getImageUrl = (url) => {
        return new URL(`../assets/products/${url}`, import.meta.url).href
    }
    const display = () => {
        store.methods.successful.open()
        close()
        store.methods.cartContainer.close()
        store.methods.cart.clear()
    }
</script>

<style scoped>
    .close{
        @apply w-full p-4 flex items-center justify-end
    }
    .close .icon{
        @apply text-xl text-black text-opacity-80 hover:text-opacity-100
    }
    .input_container {
        @apply w-full relative flex flex-col items-center my-1 first:mt-0 last:mb-0 px-4
    }
    .input_container input {
        @apply bg-white  px-1 py-2 border border-black rounded-lg text-black w-60
    }
    .input_container label {
        @apply text-black
    }
    .orderContainer{
        @apply relative flex flex-col text-black w-full items-center px-2 py-6
    }
    .orderContainer h2{
        @apply text-2xl mb-8 capitalize
    }
    .orderContainer .items {
        @apply relative my-2 first:mt-0 last:mb-0 shadow-lg flex w-full items-center justify-between rounded-lg px-2 max-w-xl
    }
    .orderContainer .items p {
        @apply capitalize
    }
    .orderContainer .items img{
        @apply w-16 h-16 rounded-md
    }
    .orderContainer button{
        @apply bg-green-500 px-8 mt-8 py-4 font-bold uppercase rounded-xl text-white
    }
</style>