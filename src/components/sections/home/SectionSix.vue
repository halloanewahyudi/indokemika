<script setup>
import AnimScroll from '../../elements/AnimScroll.vue'
</script>
<template>
    <section class="secsix min-h-[70vh] flex flex-col justify-center items-center relative">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
        <div class="py-16 max-w-screen-lg mx-auto px-6 lg:px-0 flex flex-col justify-center items-center">
            <anim-scroll>
                <div class="text-center text-primary-50">
                    <span class="uppercase ls text-white"> vision </span>
                    <h2 class="font-normal"> Global Company that provides creative solutions and added value to stakeholders</h2>
                </div>
            </anim-scroll>
        </div>
    </section>
</template>
<style scoped>
.secsix{
  background-image: url('https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/bg-section.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>