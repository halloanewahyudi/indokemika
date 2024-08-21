<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { onMounted, ref } from 'vue';
import '@splidejs/vue-splide/css'
const milestone = [
    {
        year: '1987',
        description: 'Jakarta & Surabaya Office'
    },
    {
        year: '1995',
        description: 'Semarang Office'
    },
    {
        year: '1996',
        description: 'Bandung Office'
    },
    {
        year: '2005',
        description: 'Bali Extraction Plant'
    },
    {
        year: '2006',
        description: 'Pasuruan Sulphonation Plant'
    },
    {
        year: '2006',
        description: 'Pasuruan Sulphonation Plant'
    },
    {
        year: '2007',
        description: 'Medan Office'
    },
    {
        year: '2009',
        description: 'Cirebon & Solo Office'
    },
    {
        year: '2011',
        description: 'Makassar Office'
    },
    {
        year: '2014',
        description: 'Merak Sulphonation Plant'
    },
    {
        year: '2017',
        description: 'AEO Certification'
    },

] 
</script>
<template>
    <div class="content">
        <p>
            Indokemika was founded in 1988 as a distributor for Indonesia's leading group of chemical producers.
            Initially we were present only in the two main industry centers in Indonesia: Jakarta and Surabaya. Over the
            years we extended our product portfolio by forging partnerships with leading suppliers of chemicals from
            around the world.
        </p>

        <div class="p-6 rounded-xl bg-primary-100 mb-5">
            <Splide :options="{
                perPage: 5,
                arrows: false,
                pagination: false,
                focus:0
            }" >
                <SplideSlide v-for="item in milestone" :key="item">
                    <div class="text-center flex flex-col justify-center items-center gap-1 max-w-[300px] w-full">
                        <div
                            class="p-3 rounded-full flex justify-center items-center text-2xl bg-secondary-200 w-20 h-20">
                            {{ item.year }}
                        </div>
                        <div class="text-sm"> {{ item.description }}</div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
        <p>
            Even during the economic crisis in the late 90ies our business continued to strive resulting in a healthy
            financial performance.

            And we look confidently into the future, as we will further strengthen our position as a leading supplier of
            integrative chemical solutions to the Indonesian market place.
        </p>

    </div>
</template>
<style lang="postcss" scoped>
.splide__list{
    @apply relative ; 
    &::before {
     content: '';
     @apply w-full h-1 bg-secondary-200 absolute top-1/2 left-0 ;
    }
}
.splide__slide.is-active{
   
}
</style>