<template>
    <div id="custom_cursor" class="w-3 h-3 bg-green-700 fixed left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 pointer-events-none z-[99] sm:block hidden">
        
    </div>
</template>

<script>

import { onMounted } from 'vue'
import gsap from 'gsap'

export default {
    setup() {
        onMounted(() => {
            document.addEventListener('mousemove', (e) => {
                gsap.to('#custom_cursor',{
                    x: e.clientX,
                    y: e.clientY,
                    ease: 'Power2.in',
                    delay: .2
                })
            })
            const hoverlableLinks = document.querySelectorAll('.hoverable')
            hoverlableLinks.forEach(link => {
                link.addEventListener('mouseover',() => {
                    gsap.to('#custom_cursor',{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        background: 'transparent',
                        border: '1px solid rgb(4, 120, 87)'
                    })
                })
                link.addEventListener('mouseleave',() => {
                    gsap.to('#custom_cursor',{
                        border: 'none',
                        width: '.75rem',
                        height: '.75rem',
                        background: 'rgb(4, 120, 87)',
                        borderRadius: '0'
                    })
                })
            })

        })
        return{
            
        }
    }
}
</script>

s


