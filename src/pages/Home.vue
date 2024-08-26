<script setup>
import SlideshowVue from "../components/home/Slideshow.vue";
import WhoWeAreVue from "../components/home/WhoWeAre.vue";
import Counter from '../components/home/Counter.vue'
import Product from '../components/home/Product.vue'
import Network from "../components/home/Network.vue";
import Sertification from '../components/home/Cretificate.vue'
import Partner from "../components/home/Partner.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import SectionTitle from "../components/elements/SectionTitle.vue";
import { usePosts } from "../store/posts";

const post =  usePosts();

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.aksen', {
        scale: 1,
    }, {
        scale: 2,
        scrollTrigger: {
            trigger: '.counter',
            scrub: 1
        }
    })
})

</script>

<template>
    <main class="home-page">
        <section id="slideshow" class="slideshow relative p-0 mb-20">
            <SlideshowVue />
        </section>
        <section id="who-we-are" class="mb-20">
            <WhoWeAreVue />
        </section>
        <section id="Statistic" class=" counter mb-20 ">
            <div class="container">
                <div
                    class="px-6 py-16 bg-primary-600 text-white relative rounded-xl overflow-hidden flex flex-col justify-center items-center">
                    <Counter class="relative z-10 mx-auto" />
                    <img src="/aksen.png" alt="" class="aksen absolute top-1/2 left-1/2 -translate-x-1/2 ">
                </div>
            </div>
        </section>
        <section id="products" class="mb-10">
            <Product />
        </section>
        <section id="map" class="py-16 ">
            <SectionTitle bg_line="bg-primary-600" class="" title="Office Network" sub_title=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, architecto." />
            <Network class="mx-auto max-w-screen-lg -mt-10 -mb-10  relative" />
           
        </section>
        <section id="sertification" class="py-16 bg-neutral-100 ">
            <SectionTitle title="Our Sertification" sub_title="Our products comply to world class standards and mandatory certifications." />
            <Sertification />
        </section>
        <section id="partner" class="py-16 bg-neutral-100">
            <div class="container">
                <SectionTitle title="Our Partner" sub_title="Indokemika Group is trusted and have long partnerships with a number of leading international companies." />
                <Partner />
            </div>
        </section>
    </main>
</template>

<style lang="postcss" scoped>
#map{
    background-image: url('./bg-peta.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>