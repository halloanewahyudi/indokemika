<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import slideOne from '../../assets/slider-home1.jpg';
import slidetwo from '../../assets/slider-home2.jpg';
import slidethree from '../../assets/slider-home3.jpg';
const slides = [
    {
        nama: 'Slides One',
        image: slideOne
    },
    {
        nama: 'Slide Dua',
        image: slidetwo
    },
    {
        nama: 'Slide 3',
        image: slidethree
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
        <SplideSlide v-for="(item, index) in slides" :key="index" class="min-h-[80vh] rounded-xl overflow-hidden">
            <div :style="{ backgroundImage: `url(${item.image})` }" class="slide min-h-[80vh] w-full block bg-no-repeat bg-center bg-cover slide-content"></div>
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
    transform: scale(1.2);
    transition: all 7s ease-in;
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
