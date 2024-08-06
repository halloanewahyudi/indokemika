<script setup>
import IconArrowRightRounded from "../../icons/IconArrowRightRounded.vue"
import AnimScroll from '../../elements/AnimScroll.vue'
const products = [
    {
        title: ' Coating and Ink',
        description: ''
    },
    {
        title: ' Cosmetic & Personal Care',
        description: ''
    },
    {
        title: 'Food Ingredients',
        description: ''
    },
    {
        title: 'Industrial Chemical',
        description: ''
    },
    {
        title: 'Oleo & Performance Chemicals',
        description: ''
    },
    {
        title: 'Pharmaceutical Ingredients',
        description: ''
    },
    {
        title: 'Plastic Chemicals',
        description: ''
    },
    {
        title: 'Rubber Chemicals',
        description: ''
    },
    {
        title: 'Special Project',
        description: ''
    }
]
</script>
<template>
    <section class="py-16 min-h-scr een bg-secondary-50">
        <div class="max-w-screen-lg mx-auto  px-6">
            <div class="grid grid-cols-1 lg:grid-cols-3  items-center">
                <div>
                    <h2>
                        Products & Application
                    </h2>
                </div>
                <div class="col-span-2">
                    <p>Indokemika's products portfolio is characterized by a board range of chemicals catering to the
                        requerements of various industry</p>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <anim-scroll>
                    <img src="https://img.freepik.com/free-photo/elevated-view-girl-s-hand-with-sprinkles_23-2147824140.jpg?t=st=1722732220~exp=1722735820~hmac=962cf1f8c7d4312b8da72066bac5bb1210bb669cb2ee93325269432a6fade390&w=740"
                        alt=""
                        class=" object-cover object-center w-full max-w-[560px] lg:w-[560px] h-[380px] rounded-xl">
                </anim-scroll>
                <anim-scroll :delay="1">
                    <div class="p-6 lg:p-10 rounded-xl bg-white lg:top-32 relative border shadow-2xl">
                        <ul class="flex flex-col divide-y">
                            <li class="py-2.5  font-semibold flex justify-between items-center" v-for=" product in products"
                                :key="product"> {{ product.title }}
                                <IconArrowRightRounded class="w-6 h-6 text-primary-600" />
                            </li>
                        </ul>
                    </div>
                </anim-scroll>
            </div>
        </div>
    </section>
</template>