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
    },
    {
        title: 'Loremipsum lagi',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, est?',
        image: 'https://images.pexels.com/photos/1010269/pexels-photo-1010269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]
</script>
<template>
    <section class="my-20">
        <div class="max-w-screen-lg mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
                <div class="flex justify-center items-center">
                    <anim-scroll>
                    <Summary class="max-w-[460px]" />
                    </anim-scroll>
                </div>
                <div class="sec-3-item " v-for="item in Cards" :key="item">
                    <anim-scroll >
                    <Card :title="item.title" :image="item.image" :description="item.description" class="shadow-2xl"/>
                    </anim-scroll>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.sec-3-item:nth-child(3){
    @apply -top-20 relative ;
}
</style>