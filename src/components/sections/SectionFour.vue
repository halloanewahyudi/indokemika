<script setup>
import AnimScroll from '../elements/AnimScroll.vue'
</script>
<template>
    <section class="py-20">
        <div class="max-w-screen-lg mx-auto ">
            <div class="rounded-xl flex justify-center items-center p-6 lg:p-10  min-h-[380px] relative overflow-hidden"
                style="background-image: url('https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/bg-section.jpeg');">
                <div class="absolute bg-black top-0 left-0 w-full h-full opacity-60"></div>
                <anim-scroll>
                    <div class="relative text-center text-white max-w-[500px]">
                        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                    </div>
                </anim-scroll>
            </div>
        </div>
    </section>
</template>