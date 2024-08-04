<script setup>
const props = defineProps({
    image:String,
    title:{
        type:String,
        default:'Lorem dan ipsum'
    },
    descripiton:{
        type:String,
        default:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, minima.'
    },
    image:String,
    readmore_text:{
        type:String,
        dafault:'',
    },
    readmore_link:{
        type:String,
        dafault:'',
    },
    height:{
        type:Number,
        default:300
    }
    
})
</script>
<template>
    <div class="cover rounded-xl  relative overflow-hidden" :style="{minHeight:`${props.height}px`}">
        <div class=" flex flex-col justify-end  p-6  border border-primary-500  bg-gradient-to-tr from-primary-500 to-secondary-600" :style="{minHeight:`${props.height}px`}" >
        <div :class="min-h-[`${props.height}px`]"  class="absolute top-0 left-0 w-full h-full  opacity-30 hover:scale-110 duration-300 bg-cover" :style="{backgroundImage:`url(${props.image})`, minHeight:`${props.height}px`}"></div>
        <div class="text-white relative">
            <h5 class="text-2xl font-semibold mb-5">{{ props.title }}</h5>
            <p>{{ props.descripiton }}</p>
            <div v-if="props.readmore_text">
                <a :href="readmore_link"> {{ readmore_text }}</a>
            </div>
        </div>
    </div>
    </div>
</template>