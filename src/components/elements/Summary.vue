<script setup>
import ReadMore from '../elements/ReadMore.vue'
const props = defineProps({
    title: {
        type: String,
        default: 'Sebuah Judul'
    },
    subTitle: {
        type: String,
        default: 'Sebuah sub title'
    },
    summary: {
        type: String,
        default: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nulla porro, eius quis corrupti facere!'
    },
    link: String
})
</script>
<template>
    <div class="flex flex-col gap-4 ">
        <div>
            <span class=" tracking-wide uppercase">{{ props.subTitle }}</span>
            <h2 class="text-primary-500">{{ props.title }}</h2>
        </div>
        <p>

            {{ props.summary }}
        </p>
        <ReadMore :link="props.link" />
    </div>
</template>