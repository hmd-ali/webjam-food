<template>
    <div class="fixed z-50 top-0 left-0 w-full p-4 flex items-center justify-between">
        <div class="text-2xl font-bold text-green-400 w-full hoverable cursor-pointer">
            Cake<span class="text-pink-700 font-thin">UwU</span>
        </div>
        <div id="button"  class="w-full flex justify-end items-center">
            <Cart />
            <font-awesome-icon
              :icon="['fas','bars']"
              @click="handleToggle"
              class="hoverable text-2xl text-pink-700 cursor-pointer m-2"
            />
        </div>
    </div>
</template>

<script>

import { inject, onMounted } from 'vue'
import Cart from './Cart.vue'

export default {
    components:{
        Cart,
    },
    setup(){
        const store = inject('store')

        const open = () => {
            store.methods.navMenu.open()
            console.log('open');
        }
        const close = () => {
            store.methods.navMenu.close()
            console.log('close');
        }
        const handleToggle = () => {
            store.state.navMenuToggled ? close() : open()
        }
        onMounted(() => {
            const button = document.getElementById('button')
            button.addEventListener('mouseover', () => {
                document.getElementById('custom_cursor').classList.add('cursor-hover')
            })
            button.addEventListener('mouseleave',() => {
                document.getElementById('custom_cursor').classList.remove('cursor-hover')
            })
        })
        return{
            store,

            open,
            close,
            handleToggle,
        }
    }
}
</script>



