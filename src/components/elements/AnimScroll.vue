<script setup>
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { onMounted } from "vue";

const props = defineProps({
    delay:{
        type:Number,
        default:0
    },
    tg:{
        type:String,
        default:'.sc-ite'
    }
})

onMounted(()=>{
gsap.registerPlugin(ScrollTrigger);

   ///=================
   gsap.utils.toArray('.sc-item').forEach(box => {
      gsap.fromTo(box, 
        { y: 100 , duration:2},
        { 
          y: 0,
          scrollTrigger: {
            trigger: box,
            start: 'top 80%', // Memulai animasi saat box muncul 80% dari bawah viewport
            end: 'top 20%', // Mengakhiri animasi saat box mencapai 20% dari atas viewport
            scrub: true, // Animasi mengikuti scroll
          }
        }
      );
    });
   //==============
})
</script>
<template>
    <div class="sc-item">
        <slot />
    </div>
</template>