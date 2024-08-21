<script setup>
import Cover from '../../elements/Cover.vue'

import AnimScroll from '../../elements/AnimScroll.vue'

import { onMounted, ref, nextTick } from 'vue';

import IconArrowLeftVue from '../../icons/IconArrowLeft.vue';
import IconArrowRightVue from '../../icons/IconArrowRight.vue';


const posts = [
    {
        title: 'Competitive Advantage 1',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/gkuc4tmhoiy.jpg'
    },
    {
        title: 'Competitive Advantage 2',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/cuqp2jzz_ly.jpg'
    },
    {
        title: 'Competitive Advantage 3',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/pwckf7l4-no.jpg'
    },
    {
        title: 'Competitive Advantage 4',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/ww5854gam1c.jpg'
    }
]

</script>
<template>
    <section class="">
        <div class="container">
            <div class="max-w-[768px] mx-auto pb-16 text-center">
                <h4 class="text-primary-600">Credibilities and Excellence</h4>
                <p>We have built credibility and long-term excellence by listening to our clients, and giving the solution to their products since 1987.</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10 items-center">
                <div v-for="item in posts" :key="item" class="text-center flex flex-col gap-3 ">
                    <div class="rounded-2xl overflow-hidden  shadow-2xl">
                        <img :src="item.image" alt="" srcset="" class="w-full h-[240px] object-fill rounded-2xl hover:scale-105 duration-300">
                    </div>
                    <h5 class="text-lg font-medium" v-html="item.title"></h5>
                    <p v-html="item.description"></p>
                   
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>