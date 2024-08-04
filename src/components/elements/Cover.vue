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
    <div class="cover rounded-xl p-6  relative overflow-hidden flex flex-col justify-end bg-cover border border-primary-500" 
    :class="mn-h-[`${props.height}px`]" 
    :style="{backgroundImage:`url(${props.image})`, height:`${props.height}px`}">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary-500 to-secondary-600 opacity-80"></div>
        <div class="text-white relative">
            <h5 class="text-2xl font-semibold mb-5">{{ props.title }}</h5>
            <p>{{ props.descripiton }}</p>
            <div v-if="props.readmore_text">
                <a :href="readmore_link"> {{ readmore_text }}</a>
            </div>
        </div>
    </div>
</template>