<template>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
    >
        <div
          v-show="store.state.error"
          class="fixed w-60 p-2 pr-4 bg-red-600 bottom-5 left-5 flex items-center rounded-full z-50"
        >
            <div class="relative w-full text-white pl-2 pr-2">
                Item already in cart
            </div>
            <font-awesome-icon @click="close" class="cursor-pointer hoverable text-white hover:text-gray-400 hover:transform hover:scale-90" icon="times"/>
        </div>
    </transition>
</template>

<script setup>
    import { inject } from 'vue'
    import { gsap } from 'gsap'
    
    const store = inject('store')

    const close = () => {
        store.methods.error.close()
    }

    const beforeEnter = (el) => {
        gsap.set(el,{
            y: '200%'
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
            y: '200%',
            duration: 1,
            ease: 'Power2.out',
            onComplete: done
        })
    }
</script>