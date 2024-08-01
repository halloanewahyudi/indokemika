<script setup>
import IconMenu from '../icons/IconMenu.vue'
import Hamburger from './Hamburger.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
onMounted(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.navbar', {
        background:'transparent'
    }, {
        duration: 1, 
        background:'#fff',
        scrollTrigger:{
            trigger:'.navbar',
            start:'top top',
            scrub:1,
        }

    })
})
</script>
<template>
    <div class="navbar fixed top-0 left-0 w-full z-50">
        <div class="container">
            <nav class="flex justify-between items-center gap-2 py-2">
                <div class="logo">
                    <img src="../../assets/logo.png" alt="" srcset="" class="h-14">
                </div>
                <div>
                   <hamburger />
                </div>
            </nav>
        </div>
    </div>
</template>