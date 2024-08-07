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
    <section class="py-16 min-h-scr een bg-neutral-50">
        <div class="max-w-screen-lg mx-auto  px-6">
            <div class="grid grid-cols-1 lg:grid-cols-3  items-center">
                <div>
                    <h2 class="text-transparent bg-gradient-to-r from-neutral-900 to-red-700 bg-clip-text">
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
                    <img src="../../../assets/biji-plastik2.jpg"
                        alt=""
                        class=" object-cover object-center w-full max-w-[560px] lg:w-[560px] h-[380px] rounded-xl">
                </anim-scroll>
                <anim-scroll :delay="1">
                    <div class="list-products p-6 lg:p-10 rounded-xl bg-secondary-50 lg:top-20 relative border border-secondary-500 shadow-2xl">
                        <h5 class="font-semibold" >List of Product & Application</h5>
                        <hr class="border-secondary-200 my-5">
                        <ul class="flex flex-col divide-y divide-secondary-200">
                            <li class="py-2.5  font-semibold flex justify-between items-center" v-for=" product in products"
                                :key="product"> {{ product.title }}
                                <IconArrowRightRounded class="w-6 h-6 text-[#95D2B3]" />
                            </li>
                        </ul>
                    </div>
                </anim-scroll>
            </div>
        </div>
    </section>
</template>
<style scoped>
.list-products{
    background-image: url('../../../assets/background-hijau.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>