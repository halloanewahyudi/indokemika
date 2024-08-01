<script setup>
const props = defineProps({
    title: String,
    description: String,
    image: String
})
</script>
<template>
    <div class="card rounded-xl overflow-hidden group">
        <div class="image overflow-hidden relative">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary-50 to-primary-900 opacity-20"></div>
            <img :src="props.image" alt="" class="group-hover:scale-110 duration-300">
        </div>
        <div class="p-4 lg:p-8 bg-white">
            <h5 class="uppercase">{{ props.title }}</h5>
            <div class="">{{ props.description }}</div>
        </div>
    </div>
</template>