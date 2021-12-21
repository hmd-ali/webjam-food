<template>
    <!-- Content container -->
    <div class="relative w-full">
        <!-- Content Home -->
        <div id="trigger" class="relative w-full h-screen  bg-black flex flex-col items-center justify-center">
            <div id="animation" class="relative text-white font-sans text-4xl tracking-[1rem] uppercase">delicious <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 w-16 h-1 bg-pink-700"></span></div>
            <div id="animation-2" class="text-white text-3xl font-custom mt-8 text-opacity-50">Premium culinary specials.</div>
            <button id="button-animation" class=" bg-pink-700 text-white text-opacity-50 hover:text-opacity-100 group uppercase text-l font-semibold mt-10 px-4 py-2 rounded-lg flex items-center justify-center"><a href="#menu" class="block group-hover:scale-95">see menu</a></button>
        </div>
        <div id="trigger-2" class="relative w-full h-screen bg-white">
            <img id="image_animation" class="w-full h-full object-cover md:hidden" src="../assets/images/background.jpg">
            <img id="image_animation" class="w-full h-full object-cover hidden md:block" src="../assets/images/background-desktop.jpg">
        </div>
        <!-- Reviews  -->
        <div id="reviews" class="relative w-full h-screen bg-black flex flex-col items-center justify-center">
            <div class="tr3-anim relative text-white font-sans text-4xl tracking-[1rem] uppercase">reviews<span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 w-16 h-1 bg-pink-700"></span>
            </div>
            <div class="tr3-anim text-white text-3xl font-custom mt-8 text-opacity-50">
                Premium experience
            </div>
            <div class="tr3-anim relative mt-8">
                <font-awesome-icon
                  class="text-pink-700 text-3xl"
                  icon="quote-right"></font-awesome-icon
                >
            </div>
            <div class="tr3-anim text-white text-2xl font-sans p-10 pt-0 text-center md:max-w-4xl">
                Thank you so very, very much for the Molten Dark Chocolate cake.  It was absolutely adorable.  You do amazing work. We will definitely remember you for future orders
            </div>
        </div>
        <div class="relative w-full h-screen bg-black">
            <img class="w-full h-full object-cover md:hidden" src="../assets/images/background1.jpg" alt="">
            <img class="w-full h-full object-cover hidden md:block" src="../assets/images/background1-desktop.jpg" alt="">
        </div>
        <!-- The team  -->
        <div id="team" class="relative w-full flex flex-col items-center justify-center bg-black min-h-screen mt-8">
            <div class=" relative text-3xl text-white font-sans uppercase tracking-[1rem]">the team<span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 w-16 h-1 bg-pink-700"></span></div>
            <div class="text-white font-custom mt-8 text-3xl text-opacity-50 capitalize">experience and commitment</div>
            <div class="relative w-full flex flex-col items-center mt-8">
                <div>
                    <img class="w-40 h-40 object-cover rounded-full" src="../assets/images/ceo_avatar.jpg" alt="">
                </div>
                <div class="text-white text-2xl mt-4 capitalize">
                    Marie-Antoine Carême
                </div>
                <div class="text-white text-2xl text-opacity-50 font-custom mt-4 capitalize">
                    chief executive officer
                </div>
                <!-- <div class="text-white text-lg mt-4 text-center px-4 max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, voluptate. Et quos iste odio ipsum?
                </div> -->
            </div>
            <div class="relative flex flex-col w-full items-center mt-8">
                <div>
                    <img src="../assets/images/head_chef.webp" class="w-40 h-40 object-cover rounded-full bg-white" alt="">
                </div>
                <div class="text-white mt-4 text-2xl capitalize">
                    Jennifer Mary Paterson
                </div>
                <div class="text-white text-2xl text-opacity-50 font-custom mt-4 capitalize">
                    head chef
                </div>
                <!-- <div class="text-white text-lg mt-4 text-center px-4 max-w-2xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore debitis quod ratione itaque, harum est eius a repellendus. Est.
                </div> -->
            </div>
            <div class="relative flex flex-col w-full items-center mt-8">
                <div>
                    <img src="../assets/images/souschef_avatar.jpg" class="w-40 h-40 object-cover rounded-full bg-white" alt="">
                </div>
                <div class="text-white mt-4 text-2xl capitalize">
                    Anthony Bourdain
                </div>
                <div class="text-white text-2xl text-opacity-50 font-custom mt-4 capitalize">
                    shous-chef
                </div>
                <!-- <div class="text-white text-lg mt-4 text-center px-4 max-w-2xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore debitis quod ratione itaque, harum est eius a repellendus. Est.
                </div> -->
            </div>
        </div>
        <!-- Menu  -->
        <div id="menu" class="relative w-full bg-white flex flex-col items-center mt-8 py-8">
            <div class=" relative text-3xl text-black font-sans uppercase tracking-[1rem]">menu<span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 w-16 h-1 bg-pink-700"></span></div>
            <div class="relative w-full flex flex-wrap items-center justify-center">
                <!-- Product  -->
               <div
                  v-for="product in store.state.products"
                  :key="product.id"
                  class="product-animation relative m-16 mb-0 flex flex-wrap justify-center md:w-60"
                >
                    <div class="relative flex flex-col items-center">
                        <!-- Product Image  -->
                        <div class="w-40 h-40 relative transition-all duration-300 ">
                            <img class="w-full h-full object-cover object-bottom rounded-lg" :src="getImageUrl(product.imageUrl)" alt="">
                        </div>
                        <!-- Product info  -->
                        <div class="text-black font-sans w-full flex justify-between items-center p-2">
                            <h1 class="capitalize text-pink-500">{{ product.name }}</h1>
                            <p class="text-green-400 ml-2">${{ product.price / 100 }}</p>
                        </div>
                        <!-- Add button  -->
                        <button
                          @click="addToCart(product.id)"
                          title="Add to cart"
                          class="text-white capitalize bg-green-400 py-2 px-2 rounded-lg transform hover:bg-green-500 hover:text-white active:scale-90"
                        >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin( ScrollTrigger)
    import { onMounted, inject } from 'vue'

    const store = inject('store')

    const getImageUrl = (url) => {
        return new URL(`../assets/products/${url}`, import.meta.url).href
    }

    const addToCart = (id) => {
        store.methods.cart.add(id)
    }

    onMounted(() => {
        
        gsap.from('#animation',{
            opacity: 0,
            x: -200,
            scrollTrigger:{
                trigger: '#trigger',
                // pin: true,
                end: 'top top',
                start: 'top center',
                scrub: true
            },

            // duration: 1
        })
        gsap.from('#animation-2',{
            opacity: 0,
            x: 200,
            scrollTrigger:{
                trigger: '#trigger',
                start: 'top center',
                end: 'top top',
                scrub: true
            }
        })
        gsap.from('#button-animation', {
            opacity: 0,
            y: 200,
            scrollTrigger:{
                trigger: '#trigger',
                start: 'top center',
                end: 'top top',
                scrub: true
            }
        })
        gsap.from('#image_animation',{
            // y: 200,
            scale: .5,
            scrollTrigger:{
                trigger: '#trigger-2',
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
            }
        })
        gsap.from('.tr3-anim',{
            opacity: 0,
            stagger: .2,
            scrollTrigger:{
                trigger: '#reviews',
                start: 'top center',
                end: 'top top',
                scrub: true
            }
        })
        gsap.from('#team > *',{
            opacity: 0,
            scale: 0,
            stagger: .2,
            scrollTrigger:{
                trigger: '#team',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
            }
        })
        gsap.from('.product-animation', {
            opacity: 0,
            stagger: .2,
            scrollTrigger: {
                trigger: '#menu',
                start: 'top 80%',
                end: 'bottom bottom',
                scrub: false
            }
        })
        
    })

</script>