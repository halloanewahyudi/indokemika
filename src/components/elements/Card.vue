<script setup>
const props = defineProps({
    title: String,
    description: String,
    image: String
})
</script>
<template>
    <div class="card rounded-xl overflow-hidden group">
        <div class="image  overflow-hidden">
            <img :src="props.image" alt="" class="group-hover:scale-110 duration-300">
        </div>
        <div class="p-4 bg-white">
            <h4>{{ props.title }}</h4>
            <div class="">{{ props.description }}</div>
        </div>
    </div>
</template>