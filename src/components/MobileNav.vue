<template>
  <transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      v-show="store.state.navMenuToggled"
      class="fixed top-0 z-40 left-0 w-full h-screen"
    >
      <div class="fixed w-full h-full flex flex-col">
        <div class="menu-animation w-full h-1/5 bg-green-300"></div>
        <div class="menu-animation w-full h-1/5 bg-green-300"></div>
        <div class="menu-animation w-full h-1/5 bg-green-300"></div>
        <div class="menu-animation w-full h-1/5 bg-green-300"></div>
        <div class="menu-animation w-full h-1/5 bg-green-300"></div>
      </div>
      <div
        id="nav-menu"
        class="
          relative
          w-full
          h-full
          flex flex-col
          items-center
          justify-center
          opacity-0
        "
      >
        <a
          class="
            text-green-500 text-3xl
            font-bold
            relative
            hover:text-pink-700
            group
            hoverable
            m-2
            transition-all
            duration-300
          "
          href="#home"
          >Home
          <span
            class="
              absolute
              bottom-[-7px]
              left-0
              h-1
              bg-green-300
              w-0
              group-hover:w-full group-hover:bg-pink-700
              transition-all
              duration-300
            "
          ></span
        ></a>
        <a
          class="
            text-green-500 text-3xl
            font-bold
            relative
            hover:text-pink-700
            group
            hoverable
            m-2
            transition-all
            duration-300
          "
          href="#"
          >About Us
          <span
            class="
              absolute
              bottom-[-7px]
              left-0
              h-1
              bg-green-300
              w-0
              group-hover:w-full group-hover:bg-pink-700
              transition-all
              duration-300
            "
          ></span
        ></a>
        <a
          @click="close"
          class="
            text-green-500 text-3xl
            font-bold
            relative
            hover:text-pink-700
            group
            hoverable
            m-2
            transition-all
            duration-300
          "
          href="#menu"
          >Menu
          <span
            class="
              absolute
              bottom-[-7px]
              left-0
              h-1
              bg-green-300
              w-0
              group-hover:w-full group-hover:bg-pink-700
              transition-all
              duration-300
            "
          ></span
        ></a>
      </div>
    </div>
  </transition>
</template>

<script>
import { inject } from "vue";
import gsap from "gsap";

export default {
  setup() {
    const store = inject("store");


    const close = () => {
      store.methods.navMenu.close()

    }


    const beforeEnter = (el) => {
      gsap.set(".menu-animation", {
        x: "100%",
      });
    };
    const enter = (el, done) => {
      gsap.to(".menu-animation", {
        x: 0,
        duration: 0.5,
        ease: "Power2.in",
        stagger: 0.2,
        onComplete: done,
      });
      gsap.to("#nav-menu", {
        opacity: 1,
        duration: 1,
        delay: 1,
      });
    };
    const leave = (el, done) => {
      gsap.to("#nav-menu", {
        opacity: 0,
        // stagger: .1
      });
      gsap.to(".menu-animation", {
        x: "-100%",
        duration: 0.5,
        stagger: 0.2,
        onComplete: done,
      });
    };

    return {
      store,

      beforeEnter,
      enter,
      leave,
      close
    };
  },
};
</script>