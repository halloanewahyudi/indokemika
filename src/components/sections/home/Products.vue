<script lang="ts" setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { onMounted, ref } from 'vue';
import IconArrowLeftVue from '../../icons/IconArrowLeft.vue';
import IconArrowRightVue from '../../icons/IconArrowRight.vue';


const splide = ref(null)

const goPrev = () => {
    splide.value.go('<');
}

const goNext = () => {
    splide.value.go('>');
}

const products = [
    {
        name: 'Coating and Ink',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/06/coating2.jpg'
    },
    {
        name: ' Industrial Chemical ',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/indokemika-produk5.jpg'
    },
    {
        name: '  Pharmaceutical Ingredients ',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/indokemika-produk4.jpg'
    },
    {
        name: ' Food Ingredients ',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/indokemika-produk2.jpg'
    },
    {
        name: ' Oleo & Performance Chemicals  ',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/indokemika-produk1.jpg'
    }
]
</script>

<template>
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
            <div class="">
                <div>
                    <h2 class="text-transparent bg-gradient-to-r from-neutral-900 to-red-700 bg-clip-text">
                        Products & Application
                    </h2>
                </div>
                <div class="">
                    <p>Indokemika's products portfolio is characterized by a board range of chemicals catering to the
                        requerements of various industry</p>
                </div>
                <div class="flex items-center justify-center w-full gap-4 my-10  text-primary-950">
                    <button @click="goPrev" class="items-center flex gap-4 italic">
                        <IconArrowLeftVue /> Prev
                    </button>
                    <button @click="goNext" class="items-center flex gap-4 italic"> Next
                        <IconArrowRightVue />
                    </button>
                </div>
            </div>
            <div class="lg:col-span-2">
                <Splide ref="splide" :options="{
                    type: 'loop',
                    perPage: 2,
                    gap: '30px',
                    autoplay: true,
                    arrows: false,
                    pagination:false,
                    speed: 1300,
                }" class=" items-center">
                    <SplideSlide v-for="(item, index) in products" :key="index" class="">
                        <div class="rounded-xl overflow-hidden relative text-center">
                            <img :src="item.image" alt="" srcset="" class="w-full h-[300px] object-cover">
                            <div class="p-4 bg-secondary-200 h-full">
                                <span class="font-medium ">{{ item.name }}</span>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.splide__slide {
    @apply scale-90 opacity-60;
}

.splide__slide.is-active {
    @apply scale-100 opacity-100 transition-all ease-in-out duration-300;
}
</style>
