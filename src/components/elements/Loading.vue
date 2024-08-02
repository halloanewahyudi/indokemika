<script setup>
import 'https://cdn.lordicon.com/lordicon.js'
import gsap from 'gsap';
import { onMounted } from 'vue';
import IconLoadingVue from '../icons/IconLoading.vue';

onMounted(() => {
    gsap.fromTo('.bidang', {
        opacity: 1,
        background: '#e1f3fd'
    }, {
        duration: 2,
        delay: 2,
        opacity: 0,
        background: '#f0faff',
        ease: 'ease-in-out'
    })
})


</script>
<template>
    <div class="bidang  w-full min-h-screen flex flex-col justify-center items-center bg-secondary-200">
        <div class="max-w-[300px] text-center flex flex-col items-center gap-4">
            <!-- <lord-icon src="https://cdn.lordicon.com/rdnltlpc.json" trigger="loop"
                colors="primary:#e1f3fd,secondary:#bce8fb" style="width:100px;height:100px">
            </lord-icon> -->
            <img src="../../assets/logo-loading.png" class="w-20 h-auto animate-bounce">
           <!--  <IconLoadingVue  class="scale-[3] text-primary-500 text-2xl " /> -->
        </div>
    </div>
</template>