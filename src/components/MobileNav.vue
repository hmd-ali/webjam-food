<template>
  <transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div v-show="store.state.navMenuToggled" class="fixed top-0 left-0 w-screen h-screen z-40">
      <div  class="relative from-green-400 via-purple-600 to-pink-600 bg-gradient-to-tr w-full h-full flex flex-col items-center justify-center menu-bg">
        <a @click="close" class="m-4 text-center py-1 px-2 rounded-xl group hover:bg-green-500 focus:scale-90" href="#home"><span class="transform group-hover:scale-90 inline-block text-white text-2xl uppercase">home</span></a>
        <a @click="close" class="m-4 text-center py-1 px-2 rounded-xl group hover:bg-green-500 focus:scale-90" href="#reviews"><span class="transform group-hover:scale-90 inline-block text-white text-2xl uppercase">reviews</span></a>
        <a @click="close" class="m-4 text-center py-1 px-2 rounded-xl group hover:bg-green-500 focus:scale-90" href="#team"><span class="transform group-hover:scale-90 inline-block text-white text-2xl uppercase">the team</span></a>
        <a @click="close" class="m-4 text-center py-1 px-2 rounded-xl group hover:bg-green-500 focus:scale-90" href="#menu"><span class="transform group-hover:scale-90 inline-block text-white text-2xl uppercase">menu</span></a>
      </div>
    </div>
  </transition>
</template>

<script setup>

  import { inject } from 'vue'
  import { gsap } from 'gsap'

  const store = inject('store')

  const close = () => {
    store.methods.navMenu.close()
  }

  const beforeEnter = (el) => {
    gsap.set(el,{
      x: '100%',
    })
  }

  const enter = (el,done) => {
    gsap.to(el,{
      x: 0,
      duration: 1,
      ease: 'Power2.in',
      onComplete: done
    })
  }

  const leave = (el,done) => {
    gsap.to(el,{
      x: '-100%',
      duration: 1,
      ease: 'Power2.out',
      onComplete: done
    })
  }

</script>
