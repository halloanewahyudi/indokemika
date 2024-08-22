<template>
    <div class="">
        <div class="max-w-[768px] mx-auto pb-2 text-center text-white">
            <h4 class="text-primary-50">Our Partner</h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem!</p>
        </div>

            <Splide :options="{
                perPage: 8,
                gap:30,
                arrows: true,
                pagination: false,
                focus:1,
            }">
                <SplideSlide v-for="item in 15" :key="item">
                    <img :src="`/logo-partner/logo-${item}.png`">
                </SplideSlide>
            </Splide>

    </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css'
</script>

<style lang="postcss" scoped></style>