<script setup>
import Slideshow from '../../elements/SlideshowTwo.vue'
import gsap from 'gsap'
import { onMounted } from 'vue';
import ReadMore from '../../elements/ReadMore.vue'
import IconInstagramVue from '../../icons/IconInstagram.vue';
import IconYoutubeVue from '../../icons/IconYoutube.vue';
import IconMiailVue from '../../icons/IconMiail.vue';
import SlideVideo from '../../elements/SlideVideo.vue'
const textAnim = () => {
    const items = gsap.utils.toArray('.text-cover .text')
    gsap.from(items, {
        opacity: 0,
        duration: 1,
        y: 100,
        scale: 1.2,
        stagger: {
            each: 0.2,
            //  from: 'center',
            yoyo: true,
            //  repeat: -1
        }
    });
}
onMounted(() => {
    textAnim()
})
</script>
<template>
    <section class=" relative ">

        <div class="  relative">
            <div
                class="text-cover absolute lg:top-1/2 left-20  lg:-translate-y-1/2 rounded-2xl p-6 lg:p-10 text-secondary-50 z-10">
                <h1 class="text text-4xl lg:text-5xl">To Create Values </h1>
                <p class="text text-xl">We bring ingredients and materials that made up useful products</p>
            </div>
            <Slideshow class="lg:px-6 xl:px-0" />
        </div>
        <div
            class="absolute rounded-2xl p-4 xl:bg-transparent xl:p-0 top-1/2 -translate-y-1/2 -right-2 xl:right-6  hidden lg:flex flex-col gap-4 justify-center items-center text-2xl text-primary-500">
            <a href="#" class="hover:text-primary-600 duration-300">
                <IconYoutubeVue />
            </a>
            <a href="#" class="hover:text-primary-600 duration-300">
                <IconInstagramVue />
            </a>
            <a href="#" class="hover:text-primary-600 duration-300">
                <IconMiailVue />
            </a>
        </div>
   
    </section>
</template>
