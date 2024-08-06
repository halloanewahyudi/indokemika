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
        <a :href="props.link" class="text-primary-500 italic flex gap-3 items-center z-10">
            {{ props.name }}
            <IconArrowRightVue class="text-primary-50" />
        </a>
        <div
            class="group relative flex items-center justify-center right-7 w-12 h-12  rounded-full  border-primary-500 border-dashed border-2">
            <div class="w-8 h-8 bg-red-600 rounded-full group-hover:scale-150 duration-300"> </div>
        </div>
    </div>
</template>