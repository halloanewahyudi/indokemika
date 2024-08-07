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
    <section class=" pt-16  ">
        <div class="max-w-screen-lg mx-auto p-6 apl-products lg:p-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                <div class="p-6 max-w-[500px] ">
                    <div>
                        <h3 class="text-primary-600"> Products & Application </h3>
                        <p>Indokemika's products portfolio is characterized by a board range of chemicals catering to
                            the
                            requerements of various industry</p>
                    </div>
                    <anim-scroll>
                        <img src="../../../assets/slider-home2.jpg" alt=""
                            class=" object-cover object-center w-full  lg:w-[560px] h-[330px] rounded-xl">
                    </anim-scroll>
                </div>
                <div>

                    <div class="">
                        <ul class="flex flex-col divide-y divide-white">
                            <li class="py-2.5  font-semibold flex justify-between items-center"
                                v-for=" product in products" :key="product"> {{ product.title }}
                                <div
                                    class="w-7 h-7 rounded-full flex justify-center items-center border-2 border-primary-600 border-dashed">
                                    <IconArrowRightRounded
                                        class="w-6 h-6 text-primary-50 bg-primary-600 rounded-full" />
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<style scoped>
.apl-products {
    background-image: url('../../../assets/background-hijau.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>