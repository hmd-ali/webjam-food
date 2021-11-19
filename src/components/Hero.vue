<template>
    <div class="w-full relative flex flex-col items-center justify-center min-h-screen">
        <div class="w-screen h-screen absolute top-0 left-0 z-0">
            <img class="w-full object-cover h-full md:object-center" src="../assets/images/bg1.jpg" alt="">
        </div>
        <div class="z-10 relative w-full h-screen flex flex-col items-center justify-center bg-white bg-opacity-10">
            <div id="hero_title" class="text-5xl text-pink-700 font-bold opacity-0 mt-24">
                Modern &
                <br>Comtemporary
                <br>Cake Design
            </div>
            <div id="arrow" class="text-white text-4xl opacity-0">
                <font-awesome-icon class="text-pink-700 text-5xl mt-10 animate-bounce" icon="angle-down" />
            </div>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>

import gsap from 'gsap'
import { inject, onMounted } from 'vue'

export default {
    setup() {
        const store = inject('store')
        
        // animations
        const titleAnimation = () => {
            gsap.to('#hero_title', {
                opacity: 1,
                duration: 1,
                ease: 'Power2.in',
                delay: 3
            })
            gsap.to('#arrow', {
                opacity: 1,
                duration: 1,
                ease: 'Power2.in',
                delay: 3
            })
        }

        const init = () => {
            titleAnimation()
        }

        onMounted(() => {
            init()
        })

        return{
            store,
            titleAnimation,
            init,
        }
    }
}
</script>