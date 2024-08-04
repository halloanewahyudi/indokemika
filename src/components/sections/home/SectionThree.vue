<script setup>
import Summary from '../../elements/Summary.vue'
import Card from '../../elements/Card.vue'
import AnimScroll from '../../elements/AnimScroll.vue'
const Cards = [
    {
        title: 'Experiance & Expertise',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, est?',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/06/expert.jpg'
    },
    {
        title: 'Assured Excellence in Product',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, est?',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/06/excellence1.jpg'
    },
    {
        title: 'Long Term Consitency Supplies',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, est?',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/06/long-term.jpg'
    },
    {
        title: 'Legal & Regulatory Compliance',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deleniti placeat eveniet veritatis.',
        image: 'https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/6sl88x150xs.jpg'
    }
]
</script>
<template>
    <section class="my-20">
        <div class="max-w-screen-lg mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
                <div class="flex justify-center items-center">
                    <anim-scroll>
                        <Summary subtitle="Credibility" title="We have built credibility"
                            summary="with long-term excellence and listening to our clients, and providing solutions for their products since 1987."
                            class="max-w-[460px]" />
                    </anim-scroll>
                </div>
                <div class="sec-3-item " v-for="item in Cards" :key="item">
                    <anim-scroll>
                        <Card :title="item.title" :image="item.image" :description="item.description"
                            class="shadow-2xl" />
                    </anim-scroll>
                </div>
                <anim-scroll>
                    <div>
                        <Summary 
                        subtitle="meets the needs of the present "
                          title="In the spirit of collaboration"
                            summary="Indokemika takes part in industry efforts in sustainable development that meets the needs of the present without compromising the ability of future generations to meet their own needs."
                            :show_readmore="false" />
                    </div>
                </anim-scroll>
            </div>
        </div>
    </section>
</template>
<style scoped>
.sec-3-item:nth-child(3),
.sec-3-item:nth-child(5) {
    @apply -top-20 relative;
}
</style>