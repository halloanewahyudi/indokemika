<script setup>
import { useMediaControls } from "@vueuse/core";
import { onMounted, ref } from "vue";

const video = ref()
const bukaVideo = ref(false)
const { playing, currentTime, duration, volume } = useMediaControls(video, {
  src: 'https://beta2024.indokemika-group.com/wp-content/uploads/revslider/indokemika1/240531-indokemika.mp4',
})

onMounted(()=>{
    playing.value = true
})
</script>
<template>
    <div class="min-h-[80vh] rounded-xl overflow-hidden">
        <video  ref="video" autoplay="true" class="rounded-2xl w-full border border-secondary-50 shadow-2xl"/>
    </div>
</template>