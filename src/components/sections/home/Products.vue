<script lang="ts" setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { onMounted, ref } from 'vue';
import IconArrowLeftVue from '../../icons/IconArrowLeft.vue';
import IconArrowRightVue from '../../icons/IconArrowRight.vue';
import phamachy from '../../../assets/indokemika-produk-pharmacy.jpg';
import food from '../../../assets/indokemika-produk-food-ingridient.jpg' ;

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
        image: phamachy
    },
    {
        name: ' Food Ingredients ',
        image: food
    },
    {
        name: ' Oleo & Performance Chemicals  ',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/indokemika-produk1.jpg'
    }
]
</script>

<template>
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-center">
            <div class="">
                <div>
                    <h2 class="text-primary-600">
                        Products & Application
                    </h2>
                </div>
                <div class="">
                    <p>Indokemika's products portfolio is characterized by a board range of chemicals catering to the
                        requerements of various industry</p>
                </div>

            </div>
            <div class="lg:col-span-2">
                <Splide ref="splide" :options="{
                    type: 'loop',
                    perPage: 2,
                    gap: '30px',
                    autoplay: true,
                    arrows: false,
                    pagination: false,
                    speed: 1300,
                }" class=" items-center">
                    <SplideSlide v-for="(item, index) in products" :key="index" class="">
                        <div class="rounded-xl overflow-hidden relative text-center bg-black">
                            <img :src="item.image" alt="" srcset="" class="w-full h-[300px] object-cover">
                            <div class="p-4 bg-primary-200 h-full">
                                <span class="font-semibold text-[#275317]">{{ item.name }}</span>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
                <div class="flex items-center  w-full gap-4 p-6 text-primary-950">
                    <button  @click="goPrev"
                        class="group relative flex items-center justify-center p-2  rounded-full  border-primary-600 border-dashed border-2">
                        <div
                            class="w-8 h-8 bg-secondary-200 rounded-full group-hover:scale-125 duration-300 flex items-center justify-center">
                            <IconArrowLeftVue />
                        </div>
                    </button>
                    <button  @click="goNext"
                        class="group relative flex items-center justify-center  p-2  rounded-full  border-primary-600 border-dashed border-2">
                        <div
                            class="w-8 h-8 bg-secondary-200 rounded-full group-hover:scale-125 duration-300 flex items-center justify-center">
                            <IconArrowRightVue />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.splide__slide {
    @apply scale-90  ;
}
.splide__slide img{
    @apply opacity-40
}

.splide__slide.is-active {
    @apply scale-100  ease-in duration-300;
}
.splide__slide.is-active img{
    @apply opacity-100
  }
</style>
