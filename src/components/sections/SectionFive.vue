<script setup>
import Summary from '../elements/Summary.vue'
import Card from '../elements/Card.vue'
import { Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import AnimScroll from '../elements/AnimScroll.vue'

import { onMounted, ref, nextTick } from 'vue';

import IconArrowLeftVue from '../icons/IconArrowLeft.vue';
import IconArrowRightVue from '../icons/IconArrowRight.vue';


const posts = [
    {
        title: 'Lorem ipsum dolor sit amet',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deleniti placeat eveniet veritatis.',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/gkuc4tmhoiy.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deleniti placeat eveniet veritatis.',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/cuqp2jzz_ly.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deleniti placeat eveniet veritatis.',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/pwckf7l4-no.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deleniti placeat eveniet veritatis.',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/ww5854gam1c.jpg'
    }
]
const splideRef = ref(null);

const goPrev = () => {
      if (splideRef.value) {
        splideRef.value.go('<');
      }
    };

    const goNext = () => {
      if (splideRef.value) {
        splideRef.value.go('>');
      }
    };

  /*   nextTick(() => {
      if (splideRef.value) {
        splideRef.value.mount();
      }
    }); */


</script>
<template>
    <section class="section py-20 bg-primary-50 lg:pt-60">
        <div class="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div class=" lg:col-span-5 flex flex-col justify-center items-center p-6 lg:pl-36">
                <anim-scroll>
                    <div class="max-w-[500px] w-full p-6 shrink-0 ">
                        <Summary title="Sebuah Berita" subtitle="Berita Terkini" summary="" readmore_text="Telusuri semua berita" link="#" class="summary" />
                    </div>
                </anim-scroll>
            </div>
            <div class=" lg:col-span-7">
                <Splide ref="splideRef" :options="{
                    rewind: true,
                    type  : 'loop',
                    perPage: 3,
                    fixedWidth: '430px',
                    pagination: false,
                    arrows:false,

                }">
                    <SplideSlide v-for="item in posts" :key="item" class="px-3">
                        <div class="bg-white">
                            <div class="w-full h-[260px] overflow-hidden">
                                <img :src="item.image" alt="" srcset="" class="w-full object-fill">
                            </div>
                            <div class="p-4 lg:p-6">
                                <h5>{{ item.title }}</h5>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </SplideSlide>
     
                </Splide>
                <div class="w-full flex justify-between gap-4 lg:pr-5 py-5 items-center">
                    <button @click="goPrev" class="flex gap-3 items-center"> <IconArrowLeftVue />  Prev</button>
                    <button @click="goNext" class="flex gap-3 items-center">Next <IconArrowRightVue /> </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.splide__track {
    padding-bottom: 40px;
}
.splide:not( .is-overflow ) .splide__list {
  justify-content: center;
}
</style>