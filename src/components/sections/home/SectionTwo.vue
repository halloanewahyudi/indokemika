<script setup>
import Summary from '../../elements/Summary.vue'
import Card from '../../elements/Card.vue'
import AnimScroll from '../../elements/AnimScroll.vue'
</script>
<template>
    <section class="relative mb-20">
        <div class="rounded-2xl absolute top-24 -left-12 w-[400px] h-[480px] object-fill bg-secondary-200"> </div>
        <div class="max-w-screen-lg mx-auto px-6 section ">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <div class="lg:col-span-5 flex flex-col justify-cemter  lg:pt-32">
                <anim-scroll >
                    <div class="rounded-xl overflow-hidden max-w-[400px]  border">
                        <img class="object-cover h-[380px]"
                            src="https://images.pexels.com/photos/3735780/pexels-photo-3735780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="">
                    </div>
                </anim-scroll>
            </div>
            <div class="lg:col-span-7">
                <anim-scroll>
                    <Summary class="max-w-[500px]" subtitle="who we are"  title="Indokemika <br> is here to enhance quality of lives " summary="Indokemika is here to enhance quality of lives.  We bring ingredients and materials that made up useful products in detergents, plastics, electronics, motorcycles, cars, phones, building, food, drugs, clean water supply, waste water cleaning process;  practically in things that we touch everyday." link="#" readmore_position="justify-end"/>
                </anim-scroll>
            </div>
        </div>
    </div>
    </section>

</template>