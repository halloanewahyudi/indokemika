<script setup>
import Summary from '../../elements/Summary.vue'
import Card from '../../elements/Card.vue'
import AnimScroll from '../../elements/AnimScroll.vue'
</script>
<template>
    <section class=" relative mb-20">
 <div class="rounded-2xl absolute top-24 lg:-left-16 w-[500px] h-[380px] lg:h-[480px] overflow-hidden">
    <img src="../../../assets/who-we-are2.png" alt=""
    class="  ">
 </div>
        <div class="max-w-screen-lg mx-auto px-6 section ">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                <div class="lg:col-span-5 flex flex-col justify-cemter  lg:pt-32">
                    <anim-scroll>
                        <div class="rounded-xl overflow-hidden max-w-[320px] ">
                            <img class="object-cover object-left w-full h-[300px]" src="../../../assets/image-section2.jpg"
                                alt="">
                        </div>
                    </anim-scroll>
                </div>
                <div class="lg:col-span-7 py-16">
                    <anim-scroll>
                        <Summary class="max-w-[500px]" subtitle="Who We Are"
                            title="A Leading Supplier of Chemicals to Various Industries "
                            summary="For over a decade, Indokemika has been a leading supplier of chemicals to various industries in Indonesia. With a comprehensive product portfolio and suppoirted by leading chemical producers from around the world, we are able to positon ourselves among the biggest chemicals manufacturing and distribution company. "
                            link="#" readmore_position="justify-end" />
                    </anim-scroll>
                </div>
            </div>
        </div>
    </section>

</template>
<style scoped>

</style>