<script setup>
import Summary from '../elements/Summary.vue'
import Card from '../elements/Card.vue'
import AnimScroll from '../elements/AnimScroll.vue'
const Cards = [
    {
        title: 'Loremipsum',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, est?',
        image: 'https://images.pexels.com/photos/7150650/pexels-photo-7150650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Loremipsum lagi',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, est?',
        image: 'https://images.pexels.com/photos/1010269/pexels-photo-1010269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]
</script>
<template>
    <section class="mt-20">
        <div class="max-w-screen-lg mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="flex justify-center items-center">
                    <anim-scroll delay="1">
                    <Summary class="max-w-[460px]" />
                    </anim-scroll>
                </div>
                <div class="" v-for="item in Cards" :key="item">
                    <anim-scroll delay="1">
                    <Card :title="item.title" />
                    </anim-scroll>
                </div>
            </div>
        </div>
    </section>


</template>