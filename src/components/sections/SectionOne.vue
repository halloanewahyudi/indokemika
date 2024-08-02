<script setup>
import Slideshow from '../elements/Slideshow.vue'
import gsap from 'gsap'
import { onMounted } from 'vue';
import ReadMore from '../elements/ReadMore.vue'


const textAnim = () => {
    const items = gsap.utils.toArray('.text-cover .text')
    gsap.from(items, {
        opacity: 0,
        duration: 1,
        y: 100,
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
    <div class="grid grid-cols-1 md:grid-col-6 lg:grid-cols-12 min-h-screen items-center py-16 lg:py-0">
        <div class="md:col-span-2 lg:col-span-4">
            <div class="text-cover flex flex-col gap-5 p-6 lg:pl-28 max-w-max w-full lg:w-[640px] relative z-10 lg:-right-28 lg:left-28 ">
                <div>
                    <span class="text text-xl text-primary-500 uppercase ls"> Lorem ipsum</span>
                    <h1 class="text text-4xl lg:text-8xl">To Create Values </h1>
                </div>
                <p class="text text-xl">We bring ingredients and materials that made up useful products</p>
                <ReadMore link="#" class="text" />
            </div>
        </div>
        <div class="md:col-span-4 lg:col-span-8">
            <Slideshow />
        </div>
    </div>
</template>
