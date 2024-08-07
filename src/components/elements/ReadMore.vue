<script setup>
import IconArrowRightVue from "../icons/IconArrowRight.vue"
const props = defineProps({
    name: {
        type: String,
        default: 'Selengkapnya'
    },
    link: String
})
</script>
<template>
    <div class="flex items-center group">
        <a :href="props.link" class="text-primary-600 italic flex gap-5 items-center z-10">
            {{ props.name }}
            <IconArrowRightVue class="text-primary-600" />
        </a>
        <div class="group relative flex items-center justify-center right-12 p-3  rounded-full  border-primary-600 border-dashed border-2">
            <div class="w-14 h-14 bg-secondary-200 rounded-full group-hover:scale-125 duration-300"> </div>
        </div>
    </div>
</template>