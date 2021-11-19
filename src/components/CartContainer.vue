<template>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
    >
        <div v-show="store.state.cartContainerToggled" class="fixed z-40 lg:max-w-xl lg:right-0 lg:left-auto top-0 left-0 w-full h-screen flex flex-col bg-gray-50 text-gray-800 pt-20 p-2">

            <!-- Continue shopping button -->
            <div class="relative  pl-4 p-4 mb-2 flex items-center group cursor-pointer rounded bg-green-400 text-white" @click="close">
                <font-awesome-icon icon="arrow-left" class="mr-2 text-sm"/>
                <div class="relative capitalize group-hover:scale-90 group-active:scale-90 group-hover:transform transition-all duration-300">
                    continue shopping
                </div>
            </div>
            
            <!-- headers -->
            <div v-if="store.state.cart.length !== 0" class="relative flex items-center mt-16">
                <div class="relative w-[50%] capitalize pl-4 font-bold">
                    name
                </div>
                <div class="relative w-[20%] capitalize text-center font-bold">
                    price
                </div>
                <div class="relative w-[30%] capitalize text-center font-bold">
                    qty
                </div>
            </div>
            <!-- if there's items in the cart show this div  -->
            <div v-if="store.state.cart.length !== 0" class="relative w-full max-w-full h-full overflow-y-auto p-1 custom-scroll">
                <!-- cart item  -->
                <div v-for="item in store.state.cart" :key="item.id" class="relative w-full flex flex-col items-center my-8 select-none border-b-2">
                    <div class="relative w-full flex items-center">
                        <div class="relative w-[50%] max-w-[50%] flex items-center min-w-min">
                            <!-- cart image  -->
                            <img class="w-12 h-12 min-w-[3rem] min-h-[3rem] object-cover m-1 rounded-lg" :src="getImageUrl(item.imageUrl)" :alt="`${item.name} image`">
                            <div class="relative w-full h-full flex flex-col">
                                <!-- cart item name -->
                                <div class="relative capitalize break-normal text-sm m-2">
                                    {{ item.name }}
                                </div>
                            </div>
                            <!-- remove item button  -->
                            <div @click="remove(item.id)" class="absolute -top-3 -left-1 rounded-full bg-red-500 w-3 h-3 flex items-center justify-center cursor-pointer" title="Remove Item">
                                <font-awesome-icon class="text-xs text-white" icon="times"/>
                            </div>
                        </div>
                        <!-- item total price -->
                        <div class="relative w-[20%] flex items-center justify-center">
                            $ {{ item.quantity * item.price / 100 }}
                        </div>
                        <div class="relative w-[30%] flex items-center justify-center">
                            <!-- decrease item by 1 -->
                            <div @click="removeItem(item.id)" :class="item.quantity === 1 ? 'text-opacity-40 cursor-not-allowed' : 'hover:bg-pink-700 hover:text-white' " class="relative text-gray-800  rounded-full flex items-center justify-center p-1" :title="`Remove 1 ${item.name}`">
                                <font-awesome-icon  class="text-xs" icon="minus"/>
                            </div>
                            <!-- item quantity -->
                            <div class="relative m-4">
                                {{ item.quantity }}
                            </div>
                            <!-- increase item by 1 -->
                            <div @click="addItem(item.id)" class="relative text-gray-800 hover:bg-pink-700 hover:text-white rounded-full flex items-center justify-center p-1" :title="`Add 1 ${item.name}`">
                                <font-awesome-icon class="text-xs" icon="plus"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- if cart is empty  -->
            <div v-else class="w-full h-full flex flex-col items-center justify-center">
                <div class="text-gray-800 text-xl">
                    Your cart is empty :(
                </div>
                <div class="text-gray-800 text-opacity-50">
                    Added items will be displayed here
                </div>
            </div>
            <!-- end if cart is empty  -->

            <!-- checkout  -->
            <div class="relative w-full flex flex-col items-center justify-center">
                <!-- total price  -->
                <div class="relative w-full text-center text-pink-700 font-bold">
                    $ {{ total }}
                </div>
                <!-- checkout button  -->
                <div :class="store.state.cart.length === 0 ? 'bg-opacity-50 cursor-not-allowed' : 'bg-opacity-100 hover:bg-pink-800' " class="p-4 bg-pink-700 rounded text-white w-full text-center text-lg capitalize cursor-pointer transition-all duration-300">
                    proceed to checkout
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
    import { computed, inject } from 'vue'
    import { gsap } from 'gsap'

    const store = inject('store')


    const close = () => {
        store.methods.cartContainer.close()
    }
    const remove = (id) => {
        store.methods.cart.remove(id)
    }
    const addItem = (id) => {
        store.methods.cart.addItem(id)
    }
    const removeItem = (id) => {
        store.methods.cart.removeItem(id)
    }
    const total = computed(() => {
        let count = 0
        store.state.cart.forEach((item) => {
            count += item.price * item.quantity
        })
        return count/100
    })

    const beforeEnter = (el) => {
        gsap.set(el,{
            y: '-100%'
        })
    }
    const enter = (el,done) => {
        gsap.to(el,{
            y: 0,
            duration: 1,
            ease: 'Power2.in',
            onComplete: done
        })
    }
    const leave = (el,done) => {
        gsap.to(el,{
            y: '-100%',
            duration: 1,
            ease: 'Power2.out',
            onComplete: done
        })
    }
    const getImageUrl = (url) => {
        return new URL(`../assets/products/${url}`, import.meta.url).href
    }

</script>