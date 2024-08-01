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
  const items = gsap.utils.toArray('.sc-item')
  
  items.forEach(element => {
     gsap.from(element, {
        duration: 5, 
        delay:props.delay,
        y:100,
        scrollTrigger:{
            trigger:element,
            scrub:1
        }
    })
   });
})
</script>
<template>
    <div class="sc-item">
        <slot />
    </div>
</template>