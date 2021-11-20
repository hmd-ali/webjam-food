<template>
  <div class="relative w-full bg-black overflow-x-hidden">
    <Header />
    <CartContainer />
    <MobileNav />
    <Hero />
    <Content />
    <Footer />
    <Notification />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import MobileNav from './components/MobileNav.vue'
import Hero from './components/Hero.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import CartContainer from './components/CartContainer.vue'
import Notification from './components/Notification.vue'
import { inject, watchEffect } from 'vue'

export default {
  components:{
    Header,
    MobileNav,
    Hero,
    Content,
    CartContainer,
    Footer,
    Notification,
  },
  setup(){
    const store = inject('store')

    watchEffect(() => {
      store.state.navMenuToggled ? document.body.classList.add('no-scroll')  : document.body.classList.remove('no-scroll')

    })

    return{
      store
    }
  
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Seaweed+Script&display=swap');
*{
  margin: 0;
  padding: 0;
}
body.no-scroll{
  @apply overflow-hidden
}
body::-webkit-scrollbar, .custom-scroll::-webkit-scrollbar {
  @apply w-2
}
body::-webkit-scrollbar-track, .custom-scroll::-webkit-scrollbar-track {
  @apply shadow-inner rounded-lg bg-none
}
body::-webkit-scrollbar-thumb, .custom-scroll::-webkit-scrollbar-thumb {
  @apply rounded-lg bg-green-400

}

</style>





