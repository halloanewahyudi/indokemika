<script setup>
import AnimScroll from '../../elements/AnimScroll.vue'
import { useMediaControls } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import IconPlay from '../../icons/IconPlay.vue'
import IconClose from '../../icons/IconClose.vue'

const video = ref()
const bukaVideo = ref(false)
const { playing, currentTime, duration, volume } = useMediaControls(video, {
  src: 'https://videos.pexels.com/video-files/3735785/3735785-hd_1920_1080_25fps.mp4',
})

const popupVideo = ()=>{
    bukaVideo.value = true
    setTimeout(() => {
        playing.value = true
    }, 1000);
  
}
const closeVideo = () => {
    bukaVideo.value = false
    setTimeout(() => {
        playing.value = false
    }, 1000);
}
onMounted(() => {
  volume.value = 0.5
  currentTime.value = 60
})

</script>
<template>
    <section class="pt-32 pb-20">
        <div class="max-w-screen-lg mx-auto ">
            <div class="text-center mb-6">
                <span class="text-xl">
                Video Company Profile
                </span>
                <h3>Explore The Company</h3>
            </div>
            <div class="rounded-xl flex justify-center items-center p-6 lg:p-10  min-h-[380px] relative overflow-hidden"
                style="background-image: url('https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/bg-section.jpeg');">
                <div class="absolute bg-black top-0 left-0 w-full h-full opacity-60"></div>
                <anim-scroll>
                    <div class="relative text-center text-white max-w-[600px]">
                        <button @click="popupVideo" class="group w-20 h-20 mx-auto rounded-full  border-2 border-dashed border-secondary-200 flex justify-center items-center animate-pulse ">
                          <!--   <IconPlay class="w-10 h-10 " /> -->
                            <img src="../../../assets/play.svg" alt="" srcset="" class="w-16 h-16 " >
                        </button>
                <!-- 
                        <h4 class="font-normal leading-snug">Global Company that provides creative solutions and added value to stakeholders</h4> -->
                    </div>
                </anim-scroll>
            </div>
        </div>
        <div v-if="bukaVideo">
      <div class="popup-video fixed top-0 left-0 w-full min-h-screen p-6  bg-white flex flex-col justify-center items-center ">
           <div class="relative p-6 lg:p-10">
            <button class="absolute top-5 right-5" @click="closeVideo"><IconClose class="w-5 h-5" /></button>
            <video ref="video" class="max-w-[800px] rounded-2xl border border-secondary-50 shadow-2xl"/>
           </div>
      </div>
    </div>
    </section>

</template>
<style scoped>
</style>