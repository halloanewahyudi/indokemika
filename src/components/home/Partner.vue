<template>
    <div class="">
        <Splide ref="splideRef" :options="{
            perPage: 7,
            gap: 30,
            arrows: false,
            pagination: false,
            focus: 1,
            breakpoints: {
                640: {
                    perPage: 2,
                },
            }
        }">
            <SplideSlide v-for="(item,index) in 15" :key="index">
                <img :src="`/logo-partner/logo-${item}.png`">
            </SplideSlide>
        </Splide>
        <div class="flex items-center justify-center  w-full gap-7 p-6 text-primary-950">
            <button @click="toPrev"
                class=" w-10 h-10 shrink-0 flex justify-center items-center rounded-full bg-primary-600 text-white hover:bg-secondary-200 hover:text-primary-600 duration-300">
                <IconArrowLeftVue class="" />
            </button>
            <button @click="toNext"
                class=" w-10 h-10 shrink-0 flex justify-center items-center rounded-full bg-primary-600 text-white hover:bg-secondary-200 hover:text-primary-600 duration-300">
                <IconArrowRightVue />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css'
import IconArrowLeftVue from "../icons/IconArrowLeft.vue";
import IconArrowRightVue from "../icons/IconArrowRight.vue";

const splideRef = ref(null)

const toPrev = () => {
    splideRef.value.go('<');
}

const toNext = () => {
    splideRef.value.go('>');
}

</script>

<style lang="postcss" scoped></style>