<script lang="ts" setup>
 const props = defineProps({
    title:String,
    sub_title:String,
    line:{
        type:Boolean,
        default:true,
    },
    bg_line:{
        type:String,
        default:'bg-primary-500'
    }
 })
</script>

<template>
    <div class="text-center flex flex-col gap-4 mb-10 max-w-xl mx-auto">
        <h3 class="font-semibold"> {{ props.title }} </h3>
        <span v-if="props.sub_title" >{{ props.sub_title }}</span>
        <div v-if="line" class="w-32 h-1.5 mx-auto" :class="props.bg_line"></div>
    </div>
</template>

<style lang="postcss" scoped>
    
</style>
