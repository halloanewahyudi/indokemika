<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const slides = [
    {
        nama: 'Slides One',
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        nama: 'Slide Dua',
        image: 'https://plus.unsplash.com/premium_photo-1663047450953-2251c9d5f2b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        nama: 'Slide 3',
        image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

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

<template>
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
        <SplideSlide v-for="(item, index) in slides" :key="index" class="min-h-screen overflow-hidden">
            <div :style="{ backgroundImage: `url(${item.image})` }" class="min-h-screen w-full block bg-no-repeat bg-cover slide-content"></div>
        <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-primary-950 to-primary-50 opacity-20"></div>
            </SplideSlide>

        <ul class="custom-pagination">
            <li v-for="(slide, index) in slides" :key="index">
                <button :class="{ active: activeIndex === index }" @click="goToSlide(index)">
                </button>
            </li>
        </ul>
    </Splide>


</template>

<style scoped>
.splide {
    @apply relative;
}

.splide__slide.is-active .slide-content {
    transform: scale(1.5);
    transition: transform 10s;
}

.custom-pagination {
    @apply absolute flex gap-6 left-3 bottom-3 items-center z-10 min-w-max 
}
.custom-pagination::before{
    content: '';
   @apply w-full h-1 border-b border-white inline-block absolute top-3;
}
.custom-pagination button {
    @apply w-2 h-2 rounded-full bg-white;
}

.custom-pagination .active {
    @apply w-24 duration-300 ;
}
</style>
