<script setup>
import IconMenu from '../icons/IconMenu.vue'
import Hamburger from './Hamburger.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.navbar', {
        background: 'transparent'
    }, {
        duration: 1,
        background: '#fff',
        scrollTrigger: {
            trigger: '.navbar',
            start: 'top top',
            scrub: 1,
        }

    })

   gsap.fromTo('.buka-menu', {
    opacity:0
   }, {duration: 1, opacity:0.7})
})
const buka = ref(false)
</script>
<template>
    <div class="navbar fixed top-0 left-0 w-full z-50">
        <div class="container">
            <nav class="flex justify-between items-center gap-2 py-2">
                <div class="logo">
                    <img src="../../assets/logo.png" alt="" srcset="" class="h-14">
                </div>
                <div>
                    <hamburger @click="buka = !buka" />
                </div>
            </nav>
        </div>
    </div>

        <transition name="slide" ><!--slide dari kanan -->
            <div v-if="buka" class="menu-container">
            <div  :class="{'buka-menu': buka }" class="menu fixed top-0 w-full h-screen py-16 px-6 lg:px-10 lg:w-1/2 bg-primary-100  right-0 z-40">
                <div class="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
                    <div class="">
                        <ul class="menu-primary text-primary-600 flex flex-col gap-5 lg:text-2xl font-semibold">
                            <li><a href="#"> Home </a></li>
                            <li><a href="#"> About Us </a></li>
                            <li><a href="#"> News & Event </a></li>
                            <li><a href="#"> Contact Us </a></li>
                        </ul>
                    </div>
                    <div class="pt-5 lg:pt-0">
                        <h5 class="text-2xl font-semibold  pb-3">Products</h5>
                        <ul class="menu-secondary flex flex-col gap-2">
                            <li><a href="#"> Coating and Ink</a></li>
                            <li><a href="#"> Cosmetic & Personal Care</a></li>
                            <li><a href="#"> Food Ingredients</a></li>
                            <li><a href="#">Industrial Chemical</a></li>
                            <li><a href="#"> Oleo & Performance Chemicals</a></li>
                            <li><a href="#">Pharmaceutical Ingredients </a></li>
                            <li><a href="#">Plastic Chemicals </a></li>
                            <li><a href="#">Rubber Chemicals</a></li>
                            <li><a href="#"> Special Project</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</transition>
</template>
<style scoped>

.menu {
  @apply translate-x-full transition-all duration-300 ease-linear
}

.menu.buka-menu {
  @apply translate-x-0 transition-all duration-300 ease-linear
}

/* Tambahkan transisi fade untuk kontainer */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.menu-primary a {
    @apply flex items-center gap-2
}

.menu-primary a::before {
    content: '';
    @apply w-0 h-1 bg-primary-500
}

.menu-primary li:hover a::before {
    @apply w-12 duration-300 block ease-in;
}

.menu-secondary a {
    @apply hover:text-primary-600 hover:font-medium duration-200;
}


</style>