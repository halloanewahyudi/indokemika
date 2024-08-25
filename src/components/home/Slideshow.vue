<template>
    <div class="relative">
        <Splide ref="splideRef" :options="{
            type: 'fade',
            autoplay: true,
            rewind: true,
            autoScroll: {
                speed: 4,
            },
            arrows: false,
            pagination: false
        }" aria-label="My Favorite Images">
        <SplideSlide v-for="item in 3" :key="item"  class="min-h-screen overflow-hidden relative">
            <img :src="`/slideshow/sl-${item}.jpg`" alt="" class=" slide w-full h-screen object-cover">
        </SplideSlide>
        <ul class="custom-pagination ">
                <li v-for="(item, index) in 3" :key="item">
                    <button :class="{ active: activeIndex === index }" @click="goToSlide(index)">
                    </button>
                </li>
            </ul>
            <div
                class="text-cover bg-primary-900 bg-opacity-60 backdrop:blur-lg lg:bg-transparent absolute  top-2/4 left-0 mx-6 lg:top-1/2 lg:left-20  rounded-2xl p-6 lg:p-10 text-secondary-50 z-20">
                <h1 class="text text-4xl lg:text-5xl">To Create Values </h1>
                <p class="text text-xl">We bring ingredients and materials that made up useful products</p>
            </div>
            <div class="absolute z-10 w-full h-full bg-gradient-to-tr from-primary-950 to-black opacity-50"></div>
     </Splide>
     <DividerVue class="absolute -bottom-2 left-0 text-white" />
    </div>
</template>

<script setup>
import { Splide,SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css'
import gsap from "gsap";
import { onMounted, ref , nextTick} from "vue";
import DividerVue from "../Divider.vue";

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

const splideRef = ref(null);
const activeIndex = ref(0);

const goToSlide = (index) => {
    if (splideRef.value) {
        splideRef.value.splide.go(index);  // Mengakses instance Splide untuk navigasi
    }
};

onMounted(async () => {
    await nextTick(); // Pastikan komponen sudah ter-mount

    // Dapatkan instance Splide setelah komponen ter-mount
    if (splideRef.value) {
        const splideInstance = splideRef.value.splide;
        splideInstance.on('moved', (newIndex) => {
            activeIndex.value = newIndex;
        });
    }
});

</script>

<style scoped>
.splide {
    @apply relative;
}

.splide__slide.is-active img {
    transform: scale(1.2);
    transition: all 7s ease-in;
}

.custom-pagination {
    @apply absolute flex items-center gap-6 left-1/2 -translate-x-1/2 bottom-10  z-40 h-5 min-w-max mx-auto
}

.custom-pagination::before {
    content: '';
    
}

.custom-pagination button {
    @apply w-2 h-2 rounded-full bg-secondary-200 opacity-40;
}

.custom-pagination .active {
    @apply w-5 h-2  duration-300 opacity-100;
}
</style>