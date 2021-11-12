<template>
    <!-- Content container -->
    <div class="relative w-full p-2">
        <!-- Content Home -->
        <div id="trigger" class="relative w-full h-screen  bg-black flex flex-col items-center justify-center">
            <div id="animation" class="relative text-white font-sans text-4xl tracking-[1rem] uppercase">delicious <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 w-16 h-1 bg-pink-700"></span></div>
            <div id="animation-2" class="text-white text-3xl font-custom mt-8 text-opacity-50">Premium culinary specials.</div>
            <button id="button-animation" class="hoverable bg-pink-700 text-white text-opacity-50 hover:text-opacity-100 group uppercase text-l font-semibold mt-10 px-4 py-2 rounded-lg flex items-center justify-center"><a href="#menu" class="block group-hover:scale-95">see menu</a></button>
        </div>
        <div id="trigger-2" class="relative w-full h-screen bg-white">
            <img id="image_animation" class="w-full h-full object-cover" src="../assets/images/background.jpg">
        </div>
        <!-- Reviews  -->
        <div id="trigger-3" class="relative w-full h-screen bg-black flex flex-col items-center justify-center">
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
            <div class="tr3-anim text-white text-2xl font-custom p-10 pt-0 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A at fugiat molestias quis. Sequi modi, suscipit accusantium iure voluptate voluptatum corrupti officia expedita commodi distinctio!
            </div>
        </div>
        <div class="relative w-full h-screen bg-black">
            <img class="w-full h-full object-cover" src="../assets/images/background1.jpg" alt="">
        </div>
        <!-- The team  -->
        <div id="test-1" class="relative w-full flex flex-col items-center justify-center bg-black min-h-screen mt-8">
            <div class=" relative text-3xl text-white font-sans uppercase tracking-[1rem]">the team<span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 w-16 h-1 bg-pink-700"></span></div>
            <div class="text-white font-custom mt-8 text-3xl text-opacity-50 capitalize">experience and commitment</div>
            <div class="relative w-full flex flex-col items-center mt-8">
                <div>
                    <img class="w-40 h-40 object-cover rounded-full" src="../assets/images/cake-avatar.jpg" alt="">
                </div>
                <div class="text-white text-2xl mt-4 capitalize">
                    cake
                </div>
                <div class="text-white text-2xl text-opacity-50 font-custom mt-4 capitalize">
                    chief executive officer
                </div>
                <div class="text-white text-lg mt-4 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, voluptate. Et quos iste odio ipsum?
                </div>
            </div>
            <div class="relative flex flex-col w-full items-center mt-8">
                <div>
                    <img src="../assets/images/pepe.png" class="w-40 h-40 object-cover rounded-full bg-white" alt="">
                </div>
                <div class="text-white mt-4 text-2xl capitalize">
                    Pepe the frog
                </div>
                <div class="text-white text-2xl text-opacity-50 font-custom mt-4 capitalize">
                    head chef
                </div>
                <div class="text-white text-lg mt-4 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore debitis quod ratione itaque, harum est eius a repellendus. Est.
                </div>
            </div>
            <div class="relative flex flex-col w-full items-center mt-8">
                <div>
                    <img src="../assets/images/doge.jpg" class="w-40 h-40 object-cover rounded-full bg-white" alt="">
                </div>
                <div class="text-white mt-4 text-2xl capitalize">
                    doge
                </div>
                <div class="text-white text-2xl text-opacity-50 font-custom mt-4 capitalize">
                    sous chef
                </div>
                <div class="text-white text-lg mt-4 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore debitis quod ratione itaque, harum est eius a repellendus. Est.
                </div>
            </div>
        </div>
        <!-- Menu  -->
        <div id="menu" class="relative w-full bg-white flex flex-col items-center mt-8 py-8">
            <div class=" relative text-3xl text-black font-sans uppercase tracking-[1rem]">menu<span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 w-16 h-1 bg-pink-700"></span></div>
            <div class="relative w-full flex flex-wrap items-center justify-center">
                <!-- Product  -->
                <div v-for="product in store.state.products" :key="product.id" class="relative m-16 mb-0 flex flex-wrap justify-center w-max cursor-pointer group transition-all duration-300">
                    <div class="relative flex flex-col items-center">
                        <div class="w-40 h-40 relative transition-all duration-300 hoverable group-hover:filter group-hover:brightness-50">
                            <img class="w-full h-full object-cover object-bottom" :src="getImageUrl(product.imageUrl)" alt="">
                        </div>
                        <div class="text-black font-sans w-full flex justify-between items-center p-2">
                            <h1 class="capitalize text-pink-500">{{ product.name }}</h1>
                            <p class="text-green-400">${{ product.price }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product  -->
                <!-- <div class="relative m-16 mb-0 flex flex-wrap justify-center w-max cursor-pointer group transition-all duration-300">
                    <div class="relative flex flex-col items-center">
                        <div class="w-40 h-40 relative transition-all duration-300 hoverable group-hover:filter group-hover:brightness-50">
                            <img class="w-full h-full object-cover object-bottom" src="../assets/products/muffin.jpg" alt="">
                        </div>
                        <div class="text-black font-sans w-full flex justify-between items-center p-2">
                            <h1 class="capitalize text-pink-500">muffin</h1>
                            <p class="text-green-400"> $ 4.99</p>
                        </div>
                    </div>
                </div> -->
                <!-- Product  -->
                <!-- <div class="relative mb-0 m-16 flex flex-wrap justify-center w-max cursor-pointer group transition-all duration-300">
                    <div class="relative flex flex-col items-center">
                        <div class="w-40 h-40 relative transition-all duration-300 hoverable group-hover:filter group-hover:brightness-50">
                            <img class="w-full h-full object-cover object-bottom" src="../assets/products/marshmallow-cake.jpg" alt="">
                        </div>
                        <div class="text-black font-sans w-full flex justify-between items-center p-2">
                            <h1 class="capitalize text-pink-500">marshmallow</h1>
                            <p class="text-green-400"> $ 6.99</p>
                        </div>
                    </div>
                </div> -->
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
                trigger: '#trigger-3',
                start: 'top center',
                end: 'top top',
                scrub: true
            }
        })
        gsap.from('#test-1 > *',{
            opacity: 0,
            scale: 0,
            stagger: .2,
            scrollTrigger:{
                trigger: '#test-1',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
            }
        })
        
    })

</script>